/**
 * Enum for path commands (used for encoding and decoding lines, curves etc. to and from a path)
 */
export var PATH_COMMAND;
(function (PATH_COMMAND) {
    PATH_COMMAND["MOVE"] = "m";
    PATH_COMMAND["LINE"] = "l";
    PATH_COMMAND["QUADRATIC_CURVE"] = "q";
    PATH_COMMAND["BEZIER_CURVE"] = "b";
})(PATH_COMMAND || (PATH_COMMAND = {}));
//# sourceMappingURL=types.js.map