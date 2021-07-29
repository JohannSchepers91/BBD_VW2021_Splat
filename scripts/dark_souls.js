import { Converter } from "../blockly/converter.js";
import { Engine } from "../engine/engine.js";
import { Render } from "../engine/render.js";
import { LEVEL_4} from "../levels/level4.js"

//Vars
var render;

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        }

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
    
    render = new Render(document.getElementById("map"), [LEVEL_4]);
    render.renderFirst();
}


async function start() {

    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    let commands = Converter.convert(code);

    if (commands === null || commands === undefined) {
        alert("Cannot start an empty solution");
    }
    
    render.stopRender();
    let engine = new Engine(LEVEL_4.map, LEVEL_4.player, commands);
    let res = engine.start();
    let changes = engine.changes;

    render = new Render(document.getElementById("map"), changes, res);
    await render.startRender();
}

