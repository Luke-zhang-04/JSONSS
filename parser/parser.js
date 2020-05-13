"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("./formatter");
exports.parseJsonss = (styles, pretty, debug, history = []) => {
    let output = "";
    for (const [key, value] of Object.entries(styles)) {
        if (debug) {
            console.log("🤓 preparing to parse", key, value);
        }
        const properties = {};
        const objects = {};
        history.push(key);
        for (const [key2, value2] of Object.entries(value)) {
            if (typeof (value2) === "string") {
                properties[key2] = value2;
            }
            else if (typeof (value2) === "object") {
                objects[key2] = value2;
            }
            else {
                throw `Cannot have typeof ${typeof (value2)} as value in JSONSS`;
            }
        }
        if (debug && Object.keys(properties).length > 0) {
            console.log("\t🤓 parsing properties", properties);
        }
        if (Object.keys(properties).length > 0) {
            output += formatter_1.formatProperties(properties, pretty, debug, history);
        }
        if (debug && Object.keys(objects).length > 0) {
            console.log("\t😩 parsing nested classes", Object.keys(objects));
        }
        if (Object.keys(objects).length > 0) {
            output += exports.parseJsonss(objects, pretty, debug, history);
        }
        if (history.length > 0) {
            history.pop();
        }
    }
    return output;
};
//# sourceMappingURL=parser.js.map