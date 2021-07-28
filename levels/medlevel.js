import { Player } from "../models/player.js";
import { Direction } from "../models/direction.js";
import { Color } from "../models/color.js";
import { Command } from "../models/command.js";
import { Turn } from "../models/turn.js";

export const MEDIUM_LEVEL = {

map : [
    ["Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall"],
    ["Wall", "Empty", "Empty", "Empty", "Empty", "Wall", "Mixer_A 0", "Wall_Pipe", "Mixer_B 0 0", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall", "Splat 2", "Wall"],
    ["Wall", "Empty", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Empty", "Wall"],
    ["Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Gate 2", "Empty", "Wall"],
    ["Wall", "Empty", "Empty", "Empty", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Bank_A 1", "Wall"],
    ["Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall", "Empty", "Wall"],
    ["Wall", "Empty", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Gate 5", "Wall"],
    ["Wall", "Empty", "Empty", "Wall", "Empty", "Gate 4", "Empty", "Gate 1", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall", "Empty", "Wall"],
    ["Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall"],
    ["Wall", "Empty", "Empty", "Empty", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall"],
    ["Wall", "Wall", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall"],
    ["Wall", "Splat 1", "Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall"],
    ["Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Wall", "Gate 5", "Wall", "Bank_B 0 1", "Wall"],
    ["Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall"],
    ["Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Wall", "Splat 4", "Empty", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Empty", "Empty", "Wall"],
    ["Wall", "Empty", "Wall", "Wall", "Wall", "Gate 6", "Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Empty", "Empty", "Wall", "Wall", "Empty", "Wall"],
    ["Wall", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall", "Goal 2", "Empty", "Empty", "Empty", "Empty", "Wall"],
    ["Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall"],
],

player : new Player(2, 1, Direction.North, Color.green),

solution : [
    new Command(Command.repeat_until, new Command(Command.is_tile_current, "Junction"), [
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"), [
            new Command(Command.turn,Turn.right)
        ])
    ]),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.right)])
    ]),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.left)])

    ]),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Splat"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.right)])
    ]),

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.left)])
    ]),

    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.right)])
    ]),

    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.left)])
    ]),

    new Command(Command.turn, Turn.right),
    new Command(Command.walk),// BLUE GATE

    new Command(Command.walk),
    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Mixer"),[
        new Command(Command.walk)
    ]), // MIXER A

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk)
    ]),
    
    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Splat"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.right)])
    ]),
    // Red Colour splat

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Mixer"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.left)],[
            new Command(Command.turn,Turn.right)])
    ]),
    // Mixer A -- (mix purple)

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),[
        new Command(Command.walk)
    ]),

    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),[
        new Command(Command.walk)
    ]),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk)
    ]),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Mixer"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.right)])
    ]),
    // Mixer B -- (use Purple)

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk)
    ]),

    new Command(Command.walk),
    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk)
    ]),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_color,Color.purple),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.right)])
    ]),
    // Purple Gate

    new Command(Command.repeat_until,new Command(Command.is_color,Color.purple),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_current, "Splat"),[new Command(Command.turn,Turn.left)])
    ]),
    // Yellow Splat

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Bank"),[
        new Command(Command.walk)
    ]), // Bank A -- (store yellow)

    new Command(Command.deposit, 1),

    new Command(Command.turn, Turn.back),
    new Command(Command.walk),
    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Mixer"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[
            new Command(Command.turn,Turn.right)])
    ]),
    // Mixer B -- (use Purple)

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk)
    ]),

    new Command(Command.walk),
    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk)
    ]),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_color,Color.purple),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])
    ]),
    // Purple Gate

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Bank"),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.left)])
    ]),
    // Bank B -- (change to Yellow)

    new Command(Command.turn, Turn.around),

    new Command(Command.repeat_until,new Command(Command.is_color,Color.yellow),[
        new Command(Command.walk),
        new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])
    ]),
    // YELLOW Goal
]

};