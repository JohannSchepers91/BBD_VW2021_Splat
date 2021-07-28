import { Color } from "./models/color.js";
import { Command } from "./models/Command.js";
import { Turn } from "./models/turn.js"

let commands = [
    new Command(Command.repeat_until,new Command(Command.is_tile_current, "Junction"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.left)])]),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Splat"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.left)])]),

    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),

    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.left)])]),

    new Command(Command.turn, Turn.right),
    new Command(Command.walk),// BLUE GATE

    new Command(Command.walk),
    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Mixer"),
        new Command(Command.walk)), // MIXER A

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),
        new Command(Command.walk)),
    
    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Splat"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),
    // Red Colour splat

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Mixer"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.left)],[new Command(Command.turn,Turn.right)])]),
    // Mixer A -- (mix purple)

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),
        new Command(Command.walk)),

    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Junction"),
        new Command(Command.walk)),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),
        new Command(Command.walk)),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Mixer"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),
    // Mixer B -- (use Purple)

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),
        new Command(Command.walk)),

    new Command(Command.walk),
    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),
        new Command(Command.walk)),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_color,Color.purple),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),
    // Purple Gate

    new Command(Command.repeat_until,new Command(Command.is_color,Color.purple),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_current, "Splat"),[new Command(Command.turn,Turn.left)])]),
    // Yellow Splat

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Bank"),
        new Command(Command.walk)), // Bank A -- (store yellow)

    new Command(Command.turn, Turn.back),
    new Command(Command.walk),
    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Mixer"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),
    // Mixer B -- (use Purple)

    new Command(Command.turn, Turn.back),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),
        new Command(Command.walk)),

    new Command(Command.walk),
    new Command(Command.turn, Turn.right),

    new Command(Command.repeat_until,new Command(Command.is_tile_ahead,"Wall"),
        new Command(Command.walk)),

    new Command(Command.turn, Turn.left),

    new Command(Command.repeat_until,new Command(Command.is_color,Color.purple),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),
    // Purple Gate

    new Command(Command.repeat_until,new Command(Command.is_tile_current,"Bank"),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.left)])]),
    // Bank B -- (change to Yellow)

    new Command(Command.turn, Turn.around),

    new Command(Command.repeat_until,new Command(Command.is_color,Color.yellow),
        new Command(Command.walk),
    [new Command(Command.if_do_else,new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn,Turn.right)])]),
    // YELLOW Goal
];