import { Direction } from "../models/direction.js";
import { Change } from "../models/engineChange.js";
import { Engine } from "./engine.js";

export class Render {

    mapElement;
    changes = [];
    stop = false;

    constructor(mapElement, changes) {
        this.mapElement = mapElement;
        this.changes = changes;
    }

    renderFirst() {
        this.stop = false;
        this.renderMap(this.changes[0]);
    }

    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async startRender() {
        this.stop = false;

        let currentChange = this.changes[0];
        this.renderMap(currentChange);

        for (let i = 0; i < this.changes.length; i++) {

            if (this.stop) {
                return false;
            }

            if (Change.equals(currentChange, this.changes[i])) {
                continue;
            }

            currentChange = this.changes[i];
            this.renderMap(this.changes[i]);

            await Render.sleep(100);
        }

        return true;
    }

    stopRender() {
        this.stop = true;
    }


    renderMap(change) {

        let player = change.player;
        let map = change.map;
    
        this.mapElement.innerHTML = "";
    
        for (let y = 0; y < 18; y++) {
            let line = "";        
        
            for (let x = 0; x < 18; x++) {
        
                if (this.stop) {
                    return;
                }

                let tile = map[y][x];
                let char = "";
                let color = -1;
        
                if (player.x === x && player.y === y) {
    
                    if (player.dir === Direction.North) {
                        char = "^ ";
    
                    } else if (player.dir === Direction.East) {
                        char = "> ";
    
                    } else if (player.dir === Direction.South) {
                        char = "v ";
    
                    } else if (player.dir === Direction.West) {
                        char = "< ";
    
                    } else {
                        char = "x ";
                    }
    
                    color = player.color;
        
                } else if (tile === "Wall") {
                    char = "# ";
        
                } else if (tile === "Empty") {
                    char = ". ";
                
                } else if (tile === "Wall_Pipe") {
                    char = "= ";

                } else if (tile.startsWith("Splat")) {
                    char = "S ";
                    color = Engine.getTileColor(tile);
    
                } else if (tile.startsWith("Gate")) {
                    char = "G ";
                    color = Engine.getTileColor(tile);
    
                } else if (tile.startsWith("Goal")) {
                    char = "F ";
                    color = Engine.getTileColor(tile);
    
                } else if (tile.startsWith("Junction")) {
                    char = "+ ";

                } else if (tile.startsWith("Mixer_A")) {
                    char = "M ";

                } else if (tile.startsWith("Mixer_B")) {
                    char = "S ";
                    color = Engine.getTileColor(tile);

                } else if (tile.startsWith("Bank_A")) {
                    char = "B ";

                } else if (tile.startsWith("Bank_B")) {
                    let index = Engine.getTileIndex(tile);
                    color = Engine.getTileColor(tile);
                    char = `${index} `;
                }
    
                //Last character
                if (x == 17) {
                    line += `<tt class="color-${color}">${char}</tt>`;
    
                } else {
                    line += `<tt class="color-${color}">${char} &nbsp </tt>`;
                }
    
                
            }
        
            this.mapElement.innerHTML += line + "</br>";
        }
    }
}