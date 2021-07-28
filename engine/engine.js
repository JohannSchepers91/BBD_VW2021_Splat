import { Command } from "../models/command.js";

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
        let tile = String(this.map[newPos.x][newPos.y]);

        //Cannot walk through walls
        if (tile.startsWith("Wall")) {
            return;
        }

        //If the player is same color, allow travel
        if (tile.startsWith("Gate")) {

            let color = parseInt(tile.substring(5));

            //Access denied
            if (color !== this.player.color) {
                return;
            }
        }

        //Change the color if walked over a splat
        if (tile.startsWith("Splat")) {

            let color = parseInt(tile.substring(6));
            this.player.color = color;
        }

        //Mix color if walked over mixer
        if (tile.startsWith) {
            let tileColor = parseInt(tile)

        }

        this.player = newPos;
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
        let tile = String(this.map[ahead.x][ahead.y]);
        let param = command.param1;

        return this.evaluateTileType(param, tile);
    }

    evaluateCurrent(command) {
        let tile = String(this.map[this.player.x][this.player.y]);
        let param = command.param1;

        return this.evaluateTileType((param, tile));
    }

    evaluateReachedEnd() {
        let tile = String(this.map[this.player.x][this.player.y]);

        return tile.startsWith("Goal");
    }
}