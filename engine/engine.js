import { Color } from "../models/color.js";
import { Command } from "../models/command.js";
import { Player } from "../models/player.js";

export class Engine {

    map;
    player;
    commands;
    changes = [];

    constructor(map, player, commands) {
        this.map = map;
        this.player = player;
        this.commands = commands;
    }

    //Start the map change calculation and return the result
    getMapChanges() {
        this.applyCommandsToMap(this.commands);
        return this.changes;
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

    applyWalk() {
        
        let newPos = this.player.tryWalk();
        let tile = String(this.map[newPos.y][newPos.x]);

        //Cannot walk through walls
        if (tile.startsWith("Wall")) {
            return;
        }

        //If the player is same color, allow travel
        if (tile.startsWith("Gate")) {

            let color = this.getTileColor(tile);

            //Access denied
            if (color !== this.player.color) {
                return;
            }
        }

        //Change the color if walked over a splat
        if (tile.startsWith("Splat")) {

            let color = this.getTileColor(tile);
            this.player.color = color;
        }

        //Mix color if walked over mixer
        if (tile.startsWith("Mixer_A")) {
            let mixerIndex = this.getTileColor(tile);
            let mixer = this.findMixerB(mixerIndex);

            if (mixer === null) {
                return;
            }

            let mixedColor = Color.mix(player.color, mixer.color);

            this.map[mixer.y][mixer.x] = `Mixer_B ${mixedColor} ${mixerIndex}`;
        }

        //Update player position
        this.player = new Player(newPos.x, newPos.y, this.player.dir, this.player.color);
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
        //turn "left" | "right" | "back"
        this.player.turn(command.param1);
    }

    applyIfDoElse(command) {

        if (this.evaluateCondition(command.param1)) {
            this.applyCommandsToMap(command.params2);

        } else {
            this.applyCommandsToMap(command.params3);
        }

    }

    applyRepeatUntil(command) {

        do {
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
        return (this.player.color === parseInt(command.param1));
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

        return this.evaluateTileType((param, tile));
    }

    evaluateReachedEnd() {
        let tile = String(this.map[this.player.x][this.player.y]);

        return tile.startsWith("Goal");
    }
}