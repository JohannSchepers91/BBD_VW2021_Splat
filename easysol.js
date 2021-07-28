import { Engine } from "./engine/engine.js";
import { LEVEL_1 } from "./levels/easylevel.js";
import { Color } from "./models/color.js";
import { Command } from "./models/Command.js";
import { Turn } from "./models/turn.js"

let commands = [
    new Command(Command.repeat_until, new Command(Command.is_color,Color.red),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.or, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.is_tile_ahead("Gate"))]), [new Command(Command.turn,Turn.right)])        
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.repeat_until, new Command(Command.is_color,Color.blue), [
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.or, new Command(Command.is_tile_current,"Junction"),[new Command(Command.is_tile_ahead, "Wall")]),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.repeat_until, new Command(Command.is_color, Color.yellow), [
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_current, "Junction"),[new Command(Command.turn, Turn.right)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"), [new Command(Command.turn, Turn.left)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.repeat_until, new Command(Command.is_tile_current, "Junction"),[
        new Command(Command.walk)
    ]),
    new Command(Command.repeat_until, new Command(Command.reached_end), [
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.or, new Command(Command.is_tile_current, "Junction"), [new Command(Command.is_tile_ahead, "Wall")]),[new Command(Command.turn, Turn.right)])
    ])
];