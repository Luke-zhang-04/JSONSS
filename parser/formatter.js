"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatComma = (input, pretty) => {
    let output = {};
    for (let [key, value] of Object.entries(input)) {
        if (typeof (value) === "string") {
            output[`-*TAB*-${key}`] = `${value};-*NEWLINE*-`;
        }
    }
    return (JSON.stringify(output)
        .replace(/,/g, "")
        .replace(/-\*NEWLINE\*-/g, "\n")
        .replace(/:/g, ": ")
        .replace(/-\*TAB\*-/g, "\t"));
};
//# sourceMappingURL=formatter.js.map