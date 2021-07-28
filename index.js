import { Engine } from "./engine/engine.js";
import { EASY_LEVEL } from "./levels/easylevel.js";
import { Direction } from "./models/direction.js";
import { Change } from "./models/engineChange.js";

document.getElementById("start").onclick = function() {  
    start();
};

renderMap(EASY_LEVEL);

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

        await sleep(100);
    }

    switch (res) {
        case 0: alert("Reached goal!"); break;
        case 1: alert("Stuck in infinite loop"); break;
        case 2: alert("Did not reach the end"); break;
    }
}

function renderMap(change) {

    let player = change.player;
    let map = change.map;

    document.getElementById("map").innerHTML = "";

    for (let y = 0; y < 18; y++) {
        let line = "";        
    
        for (let x = 0; x < 18; x++) {
    
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
            }

            //Last character
            if (x == 17) {
                line += `<tt class="color-${color}">${char}</tt>`;

            } else {
                line += `<tt class="color-${color}">${char} &nbsp </tt>`;
            }

            
        }
    
        document.getElementById("map").innerHTML += line + "</br>";
    }
}