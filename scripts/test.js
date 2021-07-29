import { Engine } from "../engine/engine.js";
import { Render } from "../engine/render.js";
import { TEST_LEVEL } from "../levels/testlevel.js"

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
    
    render = new Render(document.getElementById("map"), [TEST_LEVEL]);
    render.renderFirst();
}

async function start() {

    let commands = TEST_LEVEL.solution;
    let engine = new Engine(TEST_LEVEL.map, TEST_LEVEL.player, commands);
    let res = engine.start();
    let changes = engine.changes;

    render = new Render(document.getElementById("map"), changes, res);
    await render.startRender();
}

