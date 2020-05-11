"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("./formatter");
exports.parseJsonss = (styles, pretty, debug, history = []) => {
    let output = "";
    for (const [key, value] of Object.entries(styles)) {
        if (debug) {
            console.log("🔎 parsing", key, "=", value);
        }
        let val;
        if (pretty) {
            if (debug) {
                console.log("…formatting", value, "pretty print =", true);
            }
            val = formatter_1.formatComma(value, pretty, debug)
                .replace(/_/g, "-")
                .replace(/"/g, "")
                .replace(/{/g, "")
                .replace(/}/g, "");
            output += `${key.replace(/_/g, "-")} {\n${val}}\n\n`;
        }
        else {
            if (debug) {
                console.log("…formatting", value, "pretty print = ", false);
            }
            val = formatter_1.formatComma(value, pretty, debug)
                .replace(/_/g, "-")
                .replace(/"/g, "");
            output += `${key.replace(/_/g, "-")} ${val}`;
        }
        if (debug) {
            console.log("✔ formatted", `${key.replace(/_/g, "-")} {${val.replace(/\n/g, "")}}`);
        }
    }
    return pretty ? output.slice(0, -1) : output + "\n";
};
//# sourceMappingURL=parser.js.map