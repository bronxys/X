import { Point } from "./point.js";
export type Matrix = [number, number, number, number, number, number];
export declare class Transform {
    private matrix;
    private stack;
    private context;
    constructor(context?: Transform);
    getMatrix(): Matrix;
    setMatrix(m: Matrix): void;
    cloneMatrix(m: Matrix): Matrix;
    cloneTransform(): Transform;
    identity(): void;
    isIdentity(): boolean;
    fromDomMatrix(dom: any): Matrix;
    asDomMatrix(): {
        is2D: boolean;
        isIdentity: boolean;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
    };
    multiply(matrix: Matrix): void;
    invert(): void;
    save(): void;
    restore(): void;
    setTransform(): void;
    translate(x: number, y: number): void;
    rotate(rad: number): void;
    scale(sx: number, sy: number): void;
    transformPoint(pt: Point): Point;
}
