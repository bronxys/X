import { OPAQUE_BLACK } from "./named_colors.js";
import { Context } from "./context.js";
import { fromBytesBigEndian, getBytesBigEndian } from "./uint32.js";
/**
 * The Bitmap class is used for direct pixel manipulation(for example setting a pixel colour,
 * transparency etc). It also provides a factory method for creating new instances of
 * {@link Context}
 */
export class Bitmap {
    /**
     * Creates an instance of Bitmap.
     * @param {number} w      Width
     * @param {number} h      Height
     * @memberof Bitmap
     */
    constructor(w, h) {
        this.width = Math.floor(w);
        this.height = Math.floor(h);
        this.data = new Uint8Array(w * h * 4);
        const fillval = OPAQUE_BLACK;
        for (let j = 0; j < h; j++) {
            for (let i = 0; i < w; i++) {
                this.setPixelRGBA(i, j, fillval);
            }
        }
        this._context = new Context(this);
    }
    /** Calculate Index */
    calculateIndex(
    /** X position */
    x, 
    /** Y position */
    y) {
        x = Math.floor(x);
        y = Math.floor(y);
        if (x < 0 || y < 0 || x >= this.width || y >= this.height)
            return 0;
        return (this.width * y + x) * 4;
    }
    /** Set the RGBA(Red, Green, Blue, Alpha) values on an individual pixel level */
    setPixelRGBA(
    /** X axis position */
    x, 
    /** Y axis position */
    y, 
    /** A hex representation of the RGBA value of the pixel. See {@link NAMED_COLORS} for examples */
    rgba) {
        this.validate_coords(x, y);
        const i = this.calculateIndex(x, y);
        const bytes = getBytesBigEndian(rgba);
        this.data[i + 0] = bytes[0];
        this.data[i + 1] = bytes[1];
        this.data[i + 2] = bytes[2];
        this.data[i + 3] = bytes[3];
    }
    /** Set the individual red, green, blue and alpha levels of an individual pixel */
    setPixelRGBA_i(
    /** X axis position */
    x, 
    /** Y axis position */
    y, 
    /** Red level */
    r, 
    /** Green level */
    g, 
    /** Blue level */
    b, 
    /** Alpha level */
    a) {
        const i = this.calculateIndex(x, y);
        this.data[i + 0] = r;
        this.data[i + 1] = g;
        this.data[i + 2] = b;
        this.data[i + 3] = a;
    }
    /** Get the RGBA value of an individual pixel as a hexadecimal number(See {@link NAMED_COLORS} for examples) */
    getPixelRGBA(
    /** X axis position */
    x, 
    /** Y axis position */
    y) {
        this.validate_coords(x, y);
        const i = this.calculateIndex(x, y);
        return fromBytesBigEndian(this.data[i + 0], this.data[i + 1], this.data[i + 2], this.data[i + 3]);
    }
    getDebugPixelRGBA(
    /** X axis position */
    x, 
    /** Y axis position */
    y) {
        const i = this.calculateIndex(x, y);
        const width = this.width;
        const height = this.height;
        const data = this.data;
        console.dir({ i, width, height, data });
        return fromBytesBigEndian(this.data[i + 0], this.data[i + 1], this.data[i + 2], this.data[i + 3]);
    }
    /**
     * Get Pixel RGBA Separate
     *
     * @ignore
     */
    getPixelRGBA_separate(
    /** X axis position */
    x, 
    /** Y axis position */
    y) {
        const i = this.calculateIndex(x, y);
        return this.data.slice(i, i + 4);
    }
    /**
     * {@link Context} factory. Creates a new {@link Context} instance object for the current bitmap object
     */
    getContext(type) {
        if (type === "2d") {
            return this._context;
        }
        return null;
    }
    _copySubBitmap(x, y, w, h) {
        const dst = new Bitmap(w, h);
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                const indexA = this.calculateIndex(x + i, y + j);
                const indexB = dst.calculateIndex(i, j);
                for (let k = 0; k < 4; k++) {
                    dst.data[indexB + k] = this.data[indexA + k];
                }
            }
        }
        return dst;
    }
    _pasteSubBitmap(src, x, y) {
        for (let i = 0; i < src.width; i++) {
            for (let j = 0; j < src.height; j++) {
                const indexA = this.calculateIndex(x + i, y + j);
                const indexB = src.calculateIndex(i, j);
                for (let k = 0; k < 4; k++) {
                    this.data[indexA + k] = src.data[indexB + k];
                }
            }
        }
    }
    _isValidCoords(x, y) {
        if (x < 0)
            return false;
        if (y < 0)
            return false;
        if (x >= this.width)
            return false;
        if (y >= this.height)
            return false;
        return true;
    }
    validate_coords(x, y) {
        if (x < 0)
            throw new Error(`Invalid Index: x ${x} <0`);
        if (y < 0)
            throw new Error(`Invalid Index: y ${y} <0`);
        if (x >= this.width)
            throw new Error(`Invalid Index: x ${x} >= width ${this.width}`);
        if (y >= this.height)
            throw new Error(`Invalid Index: y ${y} >= height ${this.height}`);
    }
}
//# sourceMappingURL=bitmap.js.map