import { Converter } from "../blockly/converter.js";
import { Engine } from "../engine/engine.js";
import { Render } from "../engine/render.js";
import {  LEVEL_2 } from "../levels/level2.js"

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
    
    render = new Render(document.getElementById("map"), [ LEVEL_2]);
    render.renderFirst();
}


async function start() {

    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    let commands = Converter.convert(code);

    if (commands === null || commands === undefined) {
        alert("Cannot start an empty solution");
    }
    
    render.stopRender();
    let engine = new Engine( LEVEL_2.map, LEVEL_2.player, commands);
    let res = engine.start();
    let changes = engine.changes;

    render = new Render(document.getElementById("map"), changes, res);
    await render.startRender();
}