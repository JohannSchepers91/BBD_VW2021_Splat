export class Color {
    red = 1;
    yellow = 2;
    blue = 4;

    orange = 3;
    purple = 5;
    green = 6;

    grey = 0;

    mix(color1, color2) {
        return color1 | color2;
    }
}