import { Engine } from "../engine/engine.js";
import { Render } from "../engine/render.js";
import { HARD_LEVEL } from "../levels/hardlevel.js"

//Vars
var render;

//Reset
reset();

//Link buttons
document.getElementById("start").onclick = function() {  
    start();
};

document.getElementById("reset").onclick = function() {  
    reset();
};

function reset() {

    if (!!render) {
        render.stopRender();
    }
    
    render = new Render(document.getElementById("map"), [HARD_LEVEL]);
    render.renderFirst();
}

async function start() {
    
    render.stopRender();
    let commands = HARD_LEVEL.solution;
    let engine = new Engine(HARD_LEVEL.map, HARD_LEVEL.player, commands);
    let res = engine.start();
    let changes = engine.changes;

    render = new Render(document.getElementById("map"), changes, res);
    await render.startRender();
}

