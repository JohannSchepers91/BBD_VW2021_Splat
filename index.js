import { Engine } from "./engine/engine.js";
import { LEVEL_1 } from "./levels/levels.js";
import { Command } from "./models/Command.js";
import { Turn } from "./models/turn.js";

document.getElementById("start").onclick = function() {  
    start();
}; 

function start() {

    let commands = [
        new Command(Command.turn, Turn.right),
        new Command(Command.walk),
        new Command(Command.turn, Turn.right),
        new Command(Command.walk),

        new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Wall"), [
            new Command(Command.walk)
        ])
    ];
    
    let engine = new Engine(LEVEL_1.map, LEVEL_1.player, commands);
    
    engine.getMapChanges();
    
    let map = engine.map;
    let player = engine.player;
    
    for (let y = 0; y < 18; y++) {
        let line = "";
    
        for (let x = 0; x < 18; x++) {
    
            let tile = map[x][y];
            
    
            if (player.x === x && player.y === y) {
                line += "X ";
    
            } else if (tile === "Wall") {
                line += "# ";
    
            } else if (tile === "Empty") {
                line += "- ";

            } else if (tile === "Splat") {
                line += "S ";
            }
        }
    
        document.getElementById("text").value += line + "\n";
    }
}