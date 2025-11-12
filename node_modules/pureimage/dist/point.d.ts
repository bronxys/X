export type PointIsh = {
    x?: number;
    y?: number;
};
export type PointIshQuad = [PointIsh, PointIsh, PointIsh, PointIsh];
export type PointIshTri = [PointIsh, PointIsh, PointIsh];
/**
 * Represents a set of co-ordinates on a 2D plane
 */
export declare class Point {
    /** X position */
    x: number;
    /** Y position */
    y: number;
    /**
     * Creates an instance of Point.
     */
    constructor(
    /** X position */
    x: number, 
    /** Y position */
    y: number);
    clone(): Point;
    distance(pt: Point): number;
    add(pt: Point): Point;
    subtract(pt: Point): Point;
    magnitude(): number;
    dotProduct(v: Point): number;
    divide(scalar: number): Point;
    floor(): Point;
    round(): Point;
    unit(): Point;
    rotate(theta: number): Point;
    scale(scalar: number): Point;
    equals(pt: Point): boolean;
}
export declare const toRad: (deg: number) => number;
export declare const toDeg: (rad: number) => number;
export declare function calc_min_bounds(pts: Point[]): Bounds;
export declare class Bounds {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    constructor(x1: number, y1: number, x2: number, y2: number);
    contains(pt: Point): boolean;
    intersect(bds: Bounds): Bounds;
}
