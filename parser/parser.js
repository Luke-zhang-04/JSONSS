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
            else if (typeof (value2) === "object") {
                objects[key2] = value2;
            }
            else if (typeof (value2) === "number") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCwyQ0FBNEM7QUFFNUMsMkRBQTJEO0FBRTNEOzs7Ozs7OztHQVFHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FDdkIsTUFBNkMsRUFDN0MsTUFBZSxFQUNmLEtBQWMsRUFDZCxJQUFhLEVBQ2IsVUFBb0IsRUFBRSxFQUNoQixFQUFFO0lBQ1IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBLENBQUMsZUFBZTtJQUUvQixLQUFLLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUFFO1FBQ3pDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0QsTUFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7WUFDeEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDeEM7S0FDSjtJQUVELEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUseUJBQXlCO1FBQzFFLElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbkQ7UUFFRCxxQ0FBcUM7UUFDckMsTUFBTSxVQUFVLEdBQTRCLEVBQUUsRUFDMUMsT0FBTyxHQUF3QixFQUFFLENBQUE7UUFFckMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLDZCQUE2QjtRQUUvQyxxQ0FBcUM7UUFDckMsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxPQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFBO2FBQzVCO2lCQUFNLElBQUksT0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQTthQUN6QjtpQkFBTSxJQUFJLE9BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFBO2FBQy9DO2lCQUFNO2dCQUNILE1BQU0sS0FBSyxDQUFDLHNCQUFzQixPQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUE7YUFDekU7U0FDSjtRQUVELElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFVBQVUsQ0FBQyxDQUFBO1NBQ3JEO1FBRUQsb0JBQW9CO1FBQ3BCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDLE1BQU0sSUFBSSw0QkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtTQUNqRTtRQUVELElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUNuRTtRQUVELDRCQUE0QjtRQUM1QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksbUJBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDL0Q7UUFFRCx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUE7U0FDaEI7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFBO0FBQ2pCLENBQUMsQ0FBQSJ9