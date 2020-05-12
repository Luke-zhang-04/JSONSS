"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
exports.formatComma = (input, pretty, debug, prev = "", history = []) => {
    let output = {};
    for (const [key, value] of Object.entries(input)) {
        if (typeof (value) === "string") {
            if (pretty) {
                output[`-*TAB*-${key}`] = `${value};-*NEWLINE*-`;
            }
            else {
                output[key] = `${value};`;
            }
        }
        else if (typeof (value) === "object") {
            history.push(key);
            console.log("INPUT", input);
            let newKey = "";
            for (const i of history) {
                newKey += `${i} `;
            }
            console.log(newKey, input);
            output.key = parser_1.parseJsonss({ [newKey]: value }, pretty, debug);
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