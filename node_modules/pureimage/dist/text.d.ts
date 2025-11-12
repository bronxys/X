import * as opentype from "opentype.js";
import type { Context } from "./context.js";
import { TextAlign, TextBaseline } from "./types.js";
/** The default font family to use for text */
export type Font = {
    /** The font family to set */
    family: string;
    /** An integer representing the font size to use */
    size?: number;
    binary?: string;
    weight?: number;
    style?: string;
    variant?: string;
    loaded?: boolean;
    font?: opentype.Font | null;
    load?: (cb: CallableFunction) => void;
    loadSync?: () => Font;
    loadPromise?: () => Promise<void>;
};
declare class RegisteredFont {
    binary: string;
    family: string;
    weight: number;
    style: string;
    variant: string;
    loaded: boolean;
    font: opentype.Font;
    constructor(binaryPath: string, family: string, weight?: number, style?: string, variant?: string);
    _load(cb: any): void;
    loadSync(): this;
    load(): Promise<void>;
    loadPromise(): Promise<void>;
}
/**
 * Register Font
 *
 * @returns Font instance
 */
export declare function registerFont(
/** Path to the font binary file(.eot, .ttf etc.) */
binaryPath: string, 
/** The name to give the font */
family: string, 
/** The font weight to use */
weight?: number, 
/** Font style */
style?: string, 
/** Font variant */
variant?: string): RegisteredFont;
/**@ignore */
export declare const debug_list_of_fonts: Record<string, RegisteredFont>;
/** Process Text Path */
export declare function processTextPath(
/** The {@link Context} to paint on */
ctx: Context, 
/** The text to write to the given Context */
text: string, 
/** X position */
x: number, 
/** Y position */
y: number, 
/** Indicates wether or not the font should be filled */
fill: boolean, hAlign: TextAlign, vAlign: TextBaseline): void;
type TextMetrics = {
    width: number;
    emHeightAscent: number;
    emHeightDescent: number;
};
/** Process Text Path */
export declare function measureText(
/** The {@link Context} to paint on */
ctx: Context, 
/** The name to give the font */
text: string): TextMetrics;
export {};
