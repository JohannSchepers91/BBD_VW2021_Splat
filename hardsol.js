import { Color } from "./models/color.js";
import { Command } from "./models/Command.js";
import { Turn } from "./models/turn.js"

let commands = [
    new Command(Command.repeat_until, new Command(Command.is_tile_current, "Bank"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_current, "Junction"),[
            new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.right)],[new Command(Command.turn, Turn.left)])
        ]),
        new Command(Command.if_do_else, new Command(Command.and, new Command(Command.is_tile_ahead, "Splat"),[new Command(Command.is_color, Color.red)]),[new Command(Command.turn, Turn.left)])
    ]),
    new Command(Command.deposit, 3),
    new Command(Command.turn, Turn.back),
    new Command(Command.walk),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_tile_current, "Bank"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Splat"),[new Command(Command.turn, Turn.right)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.left)])
    ]),
    new Command(Command.deposit, 1),
    new Command(Command.walk),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Wall"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.and, new Command(Command.is_tile_current, "Junction"),[new Command(Command.is_tile_ahead, "Wall")]),[new Command(Command.turn, Turn.right)],[
            new Command(Command.if_do_else, new Command(Command.and, new Command(Command.is_tile_current, "Junction"),[new Command(Command.is_tile_ahead, "Empty")]),[new Command(Command.turn, Turn.left)])
        ]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Splat"),[
            new Command(Command.turn, Turn.back),
            new Command(Command.walk),
            new Command(Command.turn, Turn.left)
        ]),
    ]),
    new Command(Command.turn, Turn.left),
    new Command(Command.repeat_until, new Command(Command.is_color, Color.yellow),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.back)])
    ]),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Gate"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.back)])
    ]),
    new Command(Command.turn, Turn.left),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Splat"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_current,"Junction"),[new Command(Command.turn, Turn.right)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.back)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.repeat_until, new Command(Command.is_tile_current, "Bank"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_current, "Junction"),[
            new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.right)],[new Command(Command.turn, Turn.left)])
        ]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Splat"),[new Command(Command.turn, Turn.left)])
    ]),
    new Command(Command.deposit, 0),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.and, new Command(Command.is_tile_current, "Junction"),[new Command(Command.is_tile_ahead, "Empty")]),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"), [new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.walk),
    new Command(Command.turn, Turn.left),
    new Command(Command.repeat_until, new Command(Command.and, new Command(Command.is_tile_current,"Junction"),[new Command(Command.is_color, Color.red)]),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.and, new Command(Command.is_tile_current,"Junction"),[new Command(Command.is_tile_ahead,"Wall")]),[new Command(Command.turn, Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Wall"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Splat"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_current,"Junction"),[new Command(Command.turn, Turn.right)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.back)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.walk),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.and, new Command(Command.is_tile_current,"Junction"), [new Command(Command.is_tile_ahead,"Empty")]),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.back)])
    ]),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_color, Color.grey),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_current,"Junction"),[new Command(Command.turn, Turn.right)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.left)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Wall"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.and, new Command(Command.is_tile_current,"Junction"),[new Command(Command.is_tile_ahead,"Wall")]),[new Command(Command.turn, Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.walk),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_color, Color.orange),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.and, new Command(Command.is_tile_current, "Junction"),[new Command(Command.is_tile_ahead,"Wall")]),[new Command(Command.turn,Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.and, new Command(Command.is_tile_current, "Junction"),[new Command(Command.is_tile_ahead,"Gate")]),[new Command(Command.turn,Turn.right)])
    ]),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead,"Gate"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_current,"Junction"),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.turn, Turn.left),
    new Command(Command.repeat_until, new Command(Command.and, new Command(Command.is_tile_current,"Junction"),[new Command(Command.is_color, Color.yellow)]),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn,Turn.right)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn,Turn.back)])
    ]),
    new Command(Command.turn, Turn.left),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Wall"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.or, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.is_tile_current,"Junction")]),[new Command(Command.turn,Turn.left)])
    ]),
    new Command(Command.turn,Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.and, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.is_tile_current,"Junction")]),[new Command(Command.turn,Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead, "Splat"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_current,"Junction"),[new Command(Command.turn, Turn.right)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.back)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.repeat_until, new Command(Command.is_tile_current, "Bank"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_current, "Junction"),[
            new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Wall"),[new Command(Command.turn, Turn.right)],[new Command(Command.turn, Turn.left)])
        ]),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead, "Splat"),[new Command(Command.turn, Turn.left)])
    ]),
    new Command(Command.deposit, 2),
    new Command(Command.turn, Turn.right),
    new Command(Command.repeat_until, new Command(Command.and, new Command(Command.is_tile_current, "Junction"),[new Command(Command.is_tile_ahead,"Empty")]),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.walk),
    new Command(Command.turn, Turn.left),
    new Command(Command.repeat_until, new Command(Command.is_tile_ahead,"Wall"),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.right)])
    ]),
    new Command(Command.turn, Turn.back),
    new Command(Command.repeat_until, new Command(Command.reached_end),[
        new Command(Command.walk),
        new Command(Command.if_do_else, new Command(Command.is_tile_ahead,"Wall"),[new Command(Command.turn, Turn.left)]),
        new Command(Command.if_do_else, new Command(Command.is_tile_current,"Junction"),[new Command(Command.turn, Turn.right)])
    ])
];