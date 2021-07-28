import { Color } from "../models/color.js";
import { Direction } from "../models/direction.js";
import { Player } from "../models/player.js";

export const LEVEL_1 = {

map : [
    ["Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall"],
    ["Wall", "Empty", "Empty", "Empty", "Splat 1", "Gate 1", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Gate 2", "Splat 2", "Empty", "Empty", "Empty", "Wall"],
    ["Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Empty", "Wall"],
    ["Wall", "Mixer_A 1", "Wall", "Mixer_B 1 1", "Empty", "Gate 3", "Empty", "Wall", "Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Mixer_B 2 0", "Wall_Pipe", "Mixer_A 0", "Wall"],
    ["Wall", "Bank_B 0 0", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Bank_B 0 1", "Wall"],
    ["Wall", "Splat 1", "Wall", "Gate 0", "Wall", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Splat 2", "Wall"],
    ["Wall", "Empty", "Gate 5", "Empty", "Empty", "Empty", "Empty", "Wall", "Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Gate 3", "Empty", "Wall"],
    ["Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall"],
    ["Wall", "Empty", "Splat 1", "Empty", "Empty", "Wall", "Empty", "Wall", "Wall", "Empty", "Empty", "Empty", "Wall", "Empty", "Gate 5", "Bank_B 0 2", "Goal 6", "Wall"],
    ["Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall"],
    ["Wall", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall"],
    ["Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall"],
    ["Wall", "Splat 4", "Wall", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall", "Empty", "Wall"],
    ["Wall", "Bank_B 0 3", "Wall", "Empty", "Bank_A", "Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Splat 0", "Wall"],
    ["Wall", "Mixer_A 2", "Wall", "Mixer_B 4 2", "Empty", "Empty", "Empty", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall"],
    ["Wall", "Empty", "Wall", "Wall", "Wall", "Wall", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Empty", "Wall", "Wall", "Empty", "Wall"],
    ["Wall", "Empty", "Empty", "Empty", "Splat 4", "Gate 4", "Empty", "Empty", "Wall", "Empty", "Empty", "Empty", "Wall", "Empty", "Empty", "Empty", "Empty", "Wall"],
    ["Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall"],
],

player : new Player(1, 8, Direction.East, Color.green)

};