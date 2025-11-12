import { Context } from "./context.js";
/**
 * The Bitmap class is used for direct pixel manipulation(for example setting a pixel colour,
 * transparency etc). It also provides a factory method for creating new instances of
 * {@link Context}
 */
export declare class Bitmap {
    width: number;
    height: number;
    data: Uint8Array;
    private _context;
    /**
     * Creates an instance of Bitmap.
     * @param {number} w      Width
     * @param {number} h      Height
     * @memberof Bitmap
     */
    constructor(w: number, h: number);
    /** Calculate Index */
    calculateIndex(
    /** X position */
    x: number, 
    /** Y position */
    y: number): number;
    /** Set the RGBA(Red, Green, Blue, Alpha) values on an individual pixel level */
    setPixelRGBA(
    /** X axis position */
    x: number, 
    /** Y axis position */
    y: number, 
    /** A hex representation of the RGBA value of the pixel. See {@link NAMED_COLORS} for examples */
    rgba: number): void;
    /** Set the individual red, green, blue and alpha levels of an individual pixel */
    setPixelRGBA_i(
    /** X axis position */
    x: number, 
    /** Y axis position */
    y: number, 
    /** Red level */
    r: number, 
    /** Green level */
    g: number, 
    /** Blue level */
    b: number, 
    /** Alpha level */
    a: number): void;
    /** Get the RGBA value of an individual pixel as a hexadecimal number(See {@link NAMED_COLORS} for examples) */
    getPixelRGBA(
    /** X axis position */
    x: number, 
    /** Y axis position */
    y: number): number;
    getDebugPixelRGBA(
    /** X axis position */
    x: number, 
    /** Y axis position */
    y: number): number;
    /**
     * Get Pixel RGBA Separate
     *
     * @ignore
     */
    getPixelRGBA_separate(
    /** X axis position */
    x: number, 
    /** Y axis position */
    y: number): Uint8Array;
    /**
     * {@link Context} factory. Creates a new {@link Context} instance object for the current bitmap object
     */
    getContext(type: string): Context;
    _copySubBitmap(x: number, y: number, w: number, h: number): Bitmap;
    _pasteSubBitmap(src: Bitmap, x: number, y: number): void;
    _isValidCoords(x: any, y: any): boolean;
    validate_coords(x: any, y: any): void;
}
