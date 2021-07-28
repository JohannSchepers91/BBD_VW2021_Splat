import { Player } from "./player.js";

export class Change {
    map = null;
    player = null;

    constructor(map, player) {
        this.map = map;

        this.player = player;
    }

    static equals(c1, c2) {

        if (c1.map.length !== c2.map.length) {
            return false;
        }

        for(let y = 0; y < c1.map.length; y++) {

            for (let x = 0; x < c1.map[0].length; x++) {

                if (c1.map[y][x] !== c2.map[y][x]) {
                    return false;
                }
            }
        }

        return Player.equals(c1.player, c2.player);
    }
}