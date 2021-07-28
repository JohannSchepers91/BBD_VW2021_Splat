import { Color } from "../models/color.js";
import { Direction } from "../models/direction.js";
import { Player } from "../models/player.js";

export const LEVEL = {

map : [
    ["Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall", "Wall"],
    ["Wall", "Empty", "Empty", "Empty", "Empty", "Wall", "Mixer_A 0", "Wall", "Mixer_B 0 0", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Wall", "Splat 2", "Wall"],
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

player : new Player(2, 1, Direction.North, Color.green)

};