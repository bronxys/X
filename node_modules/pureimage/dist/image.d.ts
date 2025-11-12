/// <reference types="node" />
import { Bitmap } from "./bitmap.js";
import type { Readable as ReadStream, Writable as WriteStream } from "stream";
export declare function make(w: number, h: number): Bitmap;
export type PNGOptions = {
    deflateLevel?: number;
    deflateStrategy?: number;
};
/** Encode the PNG image to output stream */
export declare function encodePNGToStream(
/** An instance of {@link Bitmap} to be encoded to PNG, `bitmap.data` must be a buffer of raw PNG data */
bitmap: Bitmap, 
/** The stream to write the PNG file to */
outstream: WriteStream, options?: PNGOptions): Promise<void>;
/**
 * Decode PNG From Stream
 *
 * Decode a PNG file from an incoming readable stream
 */
export declare function decodePNGFromStream(
/** A readable stream containing raw PNG data */
instream: ReadStream): Promise<Bitmap>;
/**
 * Encode JPEG To Stream
 *
 * Encode the JPEG image to output stream
 */
export declare function encodeJPEGToStream(
/** An instance of {@link Bitmap} to be encoded to JPEG, `img.data` must be a buffer of raw JPEG data */
img: Bitmap, 
/** The stream to write the raw JPEG buffer to */
outstream: WriteStream, 
/** between 0 and 100 setting the JPEG quality */
quality?: number): Promise<void>;
/**
 * Decode JPEG From Stream
 *
 * Decode a JPEG image from an incoming stream of data
 */
export declare function decodeJPEGFromStream(
/** A readable stream to decode JPEG data from */
data: ReadStream, opts?: any): Promise<Bitmap>;
