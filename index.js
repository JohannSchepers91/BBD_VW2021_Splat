import { Engine } from "./engine/engine.js";
import { EASY_LEVEL } from "./levels/easylevel.js";
import { Direction } from "./models/direction.js";
import { Change } from "./models/engineChange.js";

document.getElementById("start").onclick = function() {  
    start();
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {

    let commands = EASY_LEVEL.solution;
    let engine = new Engine(EASY_LEVEL.map, EASY_LEVEL.player, commands);
    let res = engine.start();
    let changes = engine.changes;

    let currentChange = changes[0];
    renderMap(currentChange);

    for (let i = 0; i < changes.length; i++) {

        if (Change.equals(currentChange, changes[i])) {
            continue;
        }

        currentChange = changes[i];
        renderMap(changes[i]);

        await sleep(200);
    }

    if (!res) {
        alert("Fail");
    }
}

function renderMap(change) {

    let player = change.player;
    let map = change.map;

    document.getElementById("text").value = "";

    for (let y = 0; y < 18; y++) {
        let line = "";
    
        for (let x = 0; x < 18; x++) {
    
            let tile = map[y][x];
    
            if (player.x === x && player.y === y) {

                if (player.dir === Direction.North) {
                    line += "n ";
                } else if (player.dir === Direction.East) {
                    line += "e ";
                } else if (player.dir === Direction.South) {
                    line += "s ";
                } else if (player.dir === Direction.West) {
                    line += "w ";
                } else {
                    line += "x ";
                }
    
            } else if (tile === "Wall") {
                line += "# ";
    
            } else if (tile === "Empty") {
                line += "- ";

            } else if (tile.startsWith("Splat")) {
                line += "S ";

            } else if (tile.startsWith("Gate")) {
                line += "G ";

            } else if (tile.startsWith("Goal")) {
                line += "L ";

            } else if (tile.startsWith("Junction")) {
                line += "+ ";
            }
        }
    
        document.getElementById("text").value += line + "\n";
    }
}