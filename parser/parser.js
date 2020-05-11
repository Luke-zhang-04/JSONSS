"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("./formatter");
function parseJsonss(styles, pretty, debug) {
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
            val = formatter_1.formatComma(JSON.stringify(value)
                .replace(/_/g, "-")
                .replace(/"/g, "")
                .replace(/{/g, "")
                .replace(/}/g, ""));
            output += `${key.replace(/_/g, "-")} {\n  ${val}\n}\n\n`;
        }
        else {
            if (debug) {
                console.log("…formatting", value, "pretty print = ", false);
            }
            val = formatter_1.formatComma(JSON.stringify(value)
                .replace(/_/g, "-")
                .replace(/"/g, ""));
            output += `${key.replace("_", "-")} ${val}`;
        }
        if (debug) {
            console.log("✔ formatted", `${key.replace(/_/g, "-")} {${val.replace(/\n/g, "")}}`);
        }
    }
    return pretty ? output.slice(0, -1) : output + "\n";
}
module.exports = {
    parser: parseJsonss
};
//# sourceMappingURL=parser.js.map