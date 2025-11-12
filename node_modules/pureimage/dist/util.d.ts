/**
 * Clamping is the process of limiting a position to an area
 *
 * @see https://en.wikipedia.org/wiki/Clamping_(graphics)
 */
export declare function clamp(
/** The value to apply the clamp restriction to */
value: number, 
/** Lower limit */
min: number, 
/** Upper limit */
max: number): number;
/**
 * Linear Interpolation
 *
 * In mathematics, linear interpolation is a method of curve fitting using linear polynomials to construct new data
 * points within the range of a discrete set of known data points.
 *
 * @ignore
 *
 * @see https://en.wikipedia.org/wiki/Linear_interpolation
 */
export declare const lerp: (a: number, b: number, t: number) => number;
export declare function colorStringToUint32(str: string): number;
export declare const hasOwnProperty: (v: PropertyKey) => boolean;
export declare function typedArrConcat(arrays: Uint8Array[], type?: Uint8ArrayConstructor): Uint8Array;
