"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJsonss = void 0;
/**
 *  JSONSS; JavaScript Object Cascading Style Sheets
 *  Copyright (C) 2020 Luke Zhang
 *
 *  https://luke-zhang-04.github.io
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
const formatter_1 = require("./formatter");
/* eslint-disable max-lines-per-function, max-statements */
/**
 * Turns JSONSS into CSS
 * @param {Object.<string, string | number | Object>} styles - JSONSS of styles
 * @param {boolean} pretty - pretty print or not
 * @param {boolean} debug - show debug logs or not
 * @param {boolean} lint - if css should be linted
 * @param {Array.<string>} history - history of names
 * @returns {string} parsed CSS
 */
exports.parseJsonss = (styles, pretty, debug, lint, history = []) => {
    let output = ""; // Final output
    for (const index of ["HEADER", "DOCSTRING"]) {
        if (Object.keys(styles).includes(index) && history.length === 0) {
            output += `/*\n${styles[index]}\n*/\n\n`;
            Reflect.deleteProperty(styles, index);
        }
    }
    for (const [key, value] of Object.entries(styles)) { // Iterate through styles
        if (debug) {
            console.log("🤓 preparing to parse", key, value);
        }
        // Split properties and nested styles
        const properties = {}, objects = {};
        history.push(key); // Add current key to history
        // Split properties and nested styles
        for (const [key2, value2] of Object.entries(value)) {
            if (typeof (value2) === "string") {
                properties[key2] = value2;
            }
            else if (value2 instanceof Object) {
                objects[key2] = value2;
            }
            else if (value2 instanceof Number) {
                properties[key2] = `${value2.toString()}rem`;
            }
            else {
                throw Error(`Cannot have typeof ${typeof (value2)} as value in JSONSS`);
            }
        }
        if (debug && Object.keys(properties).length > 0) {
            console.log("\t🤓 parsing properties", properties);
        }
        // Format properties
        if (Object.keys(properties).length > 0) {
            output += formatter_1.formatProperties(properties, pretty, debug, history);
        }
        if (debug && Object.keys(objects).length > 0) {
            console.log("\t😩 parsing nested classes", Object.keys(objects));
        }
        // Recurse for nested styles
        if (Object.keys(objects).length > 0) {
            output += exports.parseJsonss(objects, pretty, debug, lint, history);
        }
        // Remote latest history
        if (history.length > 0) {
            history.pop();
        }
    }
    return output;
};
//# sourceMappingURL=parser.js.map