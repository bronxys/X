import { Point, PointIsh } from "./point.js";
type LineConstructorOptions = 
/** Construct a Line using two {@link Point} objects */
[Point, Point]
/** Construct a Line using 4 {@link number}s */
 | [number, number, number, number];
/**
 * Create a line object represnting a set of two points in 2D space.
 *
 * Line objects can be constructed by passing in either 4 numbers (startX, startY, endX, endY) - or
 * two {@link Point} objects representing `start` and `end` respectively
 */
export declare class Line {
    start: Point | PointIsh;
    end: Point | PointIsh;
    constructor(...args: LineConstructorOptions);
    /** Get the line length */
    getLength(): number;
    is_invalid(): boolean;
}
export {};
/** @ignore */
