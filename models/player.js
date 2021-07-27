import { Color } from "./color.js";

export class Player {
    x = 0;
    y = 0;

    //start facing north
    dir = 0;

    //start as orange
    color = Color.orange;

    constructor(x, y, dir, color) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.color = color;
    }

    tryWalk() {

        switch(this.dir) {
            //North
            case 0: return new Player(this.x, this.y-1, this.dir, this.color);

            //East
            case 1: return new Player(this.x+1, this.y, this.dir, this.color);

            //South
            case 2: return new Player(this.x, this.y+1, this.dir, this.color);

            //West
            case 3: return new Player(this.x-1, this.y, this.dir, this.color);

            default: return new Player(this.x, this.y, this.dir, this.color);
        }
    }

    turn(val) {

        //90deg anti-clockwise
        if (val === "left") {
            this.dir++;

        //90deg clockwise
        } else {
            this.dir++;
        }

        //Ensure that -1 gets wrapped to 3
        this.dir = this.dir % 4;
    }
}