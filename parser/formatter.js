"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format = (key, value, pretty, debug) => {
    if (pretty) {
        return `  ${key.replace(/_/g, "-")}: ${value.replace(/_/g, "-")};\n`;
    }
    else {
        return `${key.replace(/_/g, "-")}:${value.replace(/_/g, "-")};`;
    }
};
exports.formatProperties = (properties, pretty, debug, history = []) => {
    let newValues = "";
    let newKey = "";
    for (const i of history) {
        newKey += `${i} `;
    }
    for (const [key, value] of Object.entries(properties)) {
        newValues += format(key, value, pretty, debug);
    }
    if (pretty) {
        return `${newKey}{\n${newValues}}\n\n`;
    }
    else {
        return `${newKey}{${newValues}}`;
    }
};
//# sourceMappingURL=formatter.js.map