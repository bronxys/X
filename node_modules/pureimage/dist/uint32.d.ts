/**
 *  Creates an uint32 from the given bytes in big endian order.
 *  @returns highByte concat secondHighByte concat thirdHighByte concat lowByte
 */
export declare const fromBytesBigEndian: (highByte: number, secondHighByte: number, thirdHighByte: number, lowByte: number) => number;
/**
 *  Returns the byte.
 *  e.g. when byteNo is 0, the high byte is returned, when byteNo = 3 the low byte is returned.
 *  @returns the 0-255 byte according byteNo
 */
export declare const getByteBigEndian: (uint32value: number, byteNo: 0 | 1 | 2 | 3) => number;
/**
 *  Returns the bytes as array.
 *  @returns the array [highByte, 2ndHighByte, 3rdHighByte, lowByte]
 */
export declare const getBytesBigEndian: (uint32value: number) => [number, number, number, number];
/**
 *  Converts a given uin32 to a hex string including leading zeros.
 */
export declare const toHex: (uint32value: number, optionalMinLength?: number) => string;
/**
 *  Converts a number to an uint32.
 *  @return an uint32 value
 */
export declare const toUint32: (number: number) => number;
/**
 *  Returns the part above the uint32 border.
 *  Depending to the javascript engine, that are the 54-32 = 22 high bits
 *  @return the high part of the number
 */
export declare const highPart: (number: number) => number;
/**
 *  Returns a bitwise OR operation on two or more values.
 *  @return the bitwise OR uint32 value
 */
export declare const or: (uint32val0: number, ...argv: number[]) => number;
/**
 *  Returns a bitwise AND operation on two or more values.
 *  @return the bitwise AND uint32 value
 */
export declare const and: (uint32val0: number, ...argv: number[]) => number;
/**
 *  Returns a bitwise XOR operation on two or more values.
 *  @return the bitwise XOR uint32 value
 */
export declare const xor: (uint32val0: number, ...argv: number[]) => number;
/**
 * Logical Not
 */
export declare const not: (uint32val: number) => number;
/**
 *  Returns the uint32 representation of a << operation.
 *  @returns the uint32 value of the shifted word
 */
export declare const shiftLeft: (uint32val: number, numBits: number) => number;
/**
 *  Returns the uint32 representation of a >>> operation.
 *  @returns the uint32 value of the shifted word
 */
export declare const shiftRight: (uint32val: number, numBits: number) => number;
export declare const rotateLeft: (uint32val: number, numBits: number) => number;
export declare const rotateRight: (uint32val: number, numBits: number) => number;
/**
 *  Bitwise choose bits from y or z, as a bitwise x ? y : z
 */
export declare const choose: (x: number, y: number, z: number) => number;
/**
 * Majority gate for three parameters. Takes bitwise the majority of x, y and z,
 * @see https://en.wikipedia.org/wiki/Majority_function
 */
export declare const majority: (x: number, y: number, z: number) => number;
/**
 *  Adds the given values modulus 2^32.
 *  @returns the sum of the given values modulus 2^32
 */
export declare const addMod32: (uint32val: number, ...argv: number[]) => number;
/**
 *  Returns the log base 2 of the given value. That is the number of the highest set bit.
 *  @return the logarithm base 2, an integer between 0 and 31
 */
export declare const log2: (uint32val: number) => number;
/**
 *  Returns the the low and the high uint32 of the multiplication.
 *  @returns undefined
 */
export declare const mult: (factor1: number, factor2: number, resultUint32Array2: Uint32Array & [number, number]) => void;
