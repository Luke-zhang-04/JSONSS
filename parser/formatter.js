"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatComma = (input, pretty) => {
    let output = {};
    for (let [key, value] of Object.entries(input)) {
        if (typeof (value) === "string") {
            if (pretty) {
                output[`-*TAB*-${key}`] = `${value};-*NEWLINE*-`;
            }
            else {
                output.key = `${value};`;
            }
        }
    }
    return (pretty ?
        JSON.stringify(output)
            .replace(/,/g, "")
            .replace(/-\*NEWLINE\*-/g, "\n")
            .replace(/:/g, ": ")
            .replace(/-\*TAB\*-/g, "\t")
        : JSON.stringify(output)
            .replace(/,/g, ""));
};
//# sourceMappingURL=formatter.js.map