import { Point } from "./point.js";
export declare class CanvasGradient {
    stops: {
        color: number;
        t: number;
    }[];
    constructor();
    addColorStop(t: number, colorstring: number): void;
    protected _lerpStops(t: number): number;
}
export declare class LinearGradient extends CanvasGradient {
    start: Point;
    end: Point;
    constructor(x0: number, y0: number, x1: number, y1: number);
    colorAt(x: number, y: number): number;
}
export declare class RadialGradient extends CanvasGradient {
    start: Point;
    constructor(x0: number, y0: number, _x1?: undefined, _y1?: undefined);
    colorAt(x: number, y: number): number;
}
export declare class ConicalGradient extends CanvasGradient {
    private angle;
    private start;
    constructor(angle: number, x0: number, y0: number);
    colorAt(x: number, y: number): number;
}
export type ColorGradient = RadialGradient | LinearGradient | ConicalGradient;
