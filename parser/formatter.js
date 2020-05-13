"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
exports.formatProperties = (properties, pretty, debug, history = []) => {
    if (debug) {
        console.log("\t\t🔎 preparing to format", Object.entries(properties), "pretty =", pretty);
    }
    let newValues = "";
    let newKey = "";
    if (functions_1.checkComma(history)) {
        newKey = functions_1.formatKey(history);
        if (pretty) {
            newKey += " ";
        }
    }
    else {
        for (const i of history) {
            newKey += `${i} `;
        }
    }
    for (const [key, value] of Object.entries(properties)) {
        newValues += functions_1.format(key, value, pretty, debug);
    }
    if (pretty) {
        return `${functions_1.auditIndents(newKey.replace(/,/g, ",\n"))}{\n${newValues.replace(/_/g, "-")}}\n\n`;
    }
    else {
        return `${newKey}{${newValues.replace(/_/g, "-")}}`;
    }
};
//# sourceMappingURL=formatter.js.map