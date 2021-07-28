import { Color } from "../models/color.js";
import { Command } from "../models/command.js";
import { Change } from "../models/engineChange.js";
import { Player } from "../models/player.js";

export class Engine {

    map = [];
    player;
    commands;
    changes = [];
    emergencyStop = false;
    reachedEnd = false;

    constructor(map, player, commands) {

        this.commands = commands;
        this.player = new Player(player.x, player.y, player.dir, player.color);

        for (let y = 0; y < map.length; y++) {

            let row = [];

            for (let x = 0; x < map[0].length; x++) {
                row.push(map[y][x]);
            }

            this.map.push(row);
        }
    }

    //Start the map change calculation
    start() {
        this.changes.push(new Change(this.map, this.player));

        this.applyCommandsToMap(this.commands);

        if (this.emergencyStop) {
            return 1;
        }

        if (!this.reachedEnd) {
            return 2;
        }

        return 0;
    }

    //Finds the color of applicable tiles
    getTileColor(tile) {
        return parseInt(tile.substring(tile.indexOf(" ") + 1));
    }

    //Finds the index of applicable tiles
    getTileIndex(tile) {
        return parseInt(tile.substring(tile.lastIndexOf(" ") + 1));
    }

    //This function is intended to be called recursively to apply the codeblock logic to the map
    applyCommandsToMap(commands) {

        for (let i = 0; i < commands.length; i++) {

            if (this.emergencyStop) {
                return;
            }

            let command = commands[i];

            switch(command.type) {
                case Command.walk: this.applyWalk(); break;
                case Command.turn: this.applyTurn(command); break;
                case Command.if_do_else: this.applyIfDoElse(command); break;
                case Command.repeat_until: this.applyRepeatUntil(command); break;
                case Command.deposit: this.applyDeposit(command); break;
            }
        }
    }

    pushChanges() {

        console.log(this.changes.length);

        if (this.changes.length > 1000) {
            this.emergencyStop = true;
            return;
        }

        let change = new Change(this.map, this.player);

        let repeatCount = 0;
        let repeatIndex = -1;

        //Check if the exact same change state has occurred 30 times before
        //This is indicates an infinite loop
        for (let i = 0; i < 100; i++) {

            let index = this.changes.findIndex((val, index) => {

                if (index <= repeatIndex) {
                    return false;
                }

                return Change.equals(val, change);
            });

            if (index === -1) {
                break;
            }

            repeatIndex = index + 1;
            repeatCount++;
        }

        if (repeatCount >= 100) {
            this.emergencyStop = true;
            return;
        }

        this.changes.push(change);
    }

    applyWalk() {

        let newPos = this.player.tryWalk();
        let tile = String(this.map[newPos.y][newPos.x]);

        if (tile.startsWith("Empty") || tile.startsWith("Junction")) {
            //Update player position
            this.player = new Player(newPos.x, newPos.y, this.player.dir, this.player.color);
            this.pushChanges();

            return;
        }

        //Cannot walk through walls
        if (tile.startsWith("Wall")) {
            this.pushChanges();

            return;
        }

        //If the player is same color, allow travel
        if (tile.startsWith("Gate")) {

            let color = this.getTileColor(tile);

            //Access denied
            if (color !== this.player.color) {
                this.pushChanges();

                return;
            }

            //Update player position
            this.player = new Player(newPos.x, newPos.y, this.player.dir, this.player.color);
            this.pushChanges();

            return;
        }

        //Change the color if walked over a splat
        if (tile.startsWith("Splat")) {

            let color = this.getTileColor(tile);
            this.player.color = color;

            //Update player position
            this.player = new Player(newPos.x, newPos.y, this.player.dir, this.player.color);
            this.pushChanges();

            return;
        }

        //Reached end
        if (tile.startsWith("Goal")) {

            this.reachedEnd = true;

            //Update player position
            this.player = new Player(newPos.x, newPos.y, this.player.dir, this.player.color);
            this.pushChanges();
        }

        //Mix color if walked over mixer
        if (tile.startsWith("Mixer_A")) {
            let mixerIndex = this.getTileColor(tile);
            let mixer = this.findMixerB(mixerIndex);

            let mixedColor = Color.mix(player.color, mixer.color);
            let newTile = `Mixer_B ${mixedColor} ${mixerIndex}`;

            this.map[mixer.y][mixer.x] = newTile;

            //Update player position
            this.player = new Player(newPos.x, newPos.y, this.player.dir, this.player.color);
            this.pushChanges();

            return;
        }
    }

    findMixerB(mixerIndex) {

        for(let y = 0; y < this.map.length; y++) {

            for (let x = 0; x < this.map[0].length; x++) {

                let tile = String(this.map[y][x]);

                if (tile.startsWith("Mixer_B")) {
                    let color = getTileColor(tile);
                    let index = getTileIndex(tile);

                    if (index === mixerIndex) {
                        return {x: x, y: y, color: color};
                    }
                }
            }
        }

        return null;
    }

    applyTurn(command) {
        this.player.turn(command.param1);
        this.pushChanges();
    }

    applyIfDoElse(command) {

        if (this.evaluateCondition(command.param1)) {
            this.applyCommandsToMap(command.params2);

        } else {

            if (!command.params3) {
                return;
            }

            this.applyCommandsToMap(command.params3);
        }

    }

    applyRepeatUntil(command) {

        do {
            if (this.emergencyStop || this.reachedEnd) {
                return;
            }

            this.applyCommandsToMap(command.params2);

        } while (!this.evaluateCondition(command.param1));
    }

    applyDeposit(command) {

        //TODO
    }

    evaluateCondition(command) {

        switch(command.type) {
            case Command.not: return this.evaluateNot(command);
            case Command.and: return this.evaluateAnd(command);
            case Command.or: return this.evaluateOr(command);
            case Command.is_color: return this.evaluateColor(command);
            case Command.is_tile_ahead: return this.evaluateAhead(command);
            case Command.is_tile_current: return this.evaluateCurrent(command);
            case Command.reached_end: return this.evaluateReachedEnd();
        }
    }

    evaluateNot(command) {
        return !this.evaluateCondition(command.param1);
    }

    evaluateAnd(command) {
        return this.evaluateCondition(command.param1) && this.evaluateCondition(command.params2[0]);
    }

    evaluateOr(command) {
        return this.evaluateCondition(command.param1) || this.evaluateCondition(command.params2[0]);
    }

    evaluateColor(command) {
        return (this.player.color === command.param1);
    }

    evaluateTileType(param, tile) {

        if (tile.startsWith(param)) {
            return true;
        }

        if (param === "Splat" && (tile.startsWith("Splat") || tile.startsWith("Mixer_B") || tile.startsWith("Bank_B"))) {
            return true;
        }

        return false;
    }

    evaluateAhead(command) {

        let ahead = this.player.tryWalk();
        let tile = String(this.map[ahead.y][ahead.x]);
        let param = command.param1;

        return this.evaluateTileType(param, tile);
    }

    evaluateCurrent(command) {
        let tile = String(this.map[this.player.y][this.player.x]);
        let param = command.param1;

        return this.evaluateTileType(param, tile);
    }

    evaluateReachedEnd() {
        let tile = String(this.map[this.player.x][this.player.y]);

        return tile.startsWith("Goal");
    }
}