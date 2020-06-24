"use strict";
/**
 * JSONSS; JavaScript Object Cascading Style Sheets
 * Formatter; defines formatting functions to help parse JSONSS
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatProperties = void 0;
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
const functions_1 = require("./functions");
/**
 * Formats properties with proper key
 * @param {Object.<string, string>} properties - properties to format
 * @param {boolean} pretty - pretty print or not
 * @param {boolean} debug - show debug logs or not
 * @param {Array.<string>} history - history of names
 * @returns {string} formatted properties
 */
exports.formatProperties = (properties, pretty, debug, history = []) => {
    if (debug) {
        console.log("\t\t🔎 preparing to format", Object.entries(properties), "pretty =", pretty);
    }
    let newValues = "", // New values
    newKey = ""; // New key with history
    if (functions_1.checkComma(history)) {
        newKey = functions_1.formatKey(history);
        if (pretty) {
            newKey += " ";
        }
    }
    else {
        for (const item of history) { // Add history to key
            newKey += `${item} `;
        }
    }
    for (const [key, value] of Object.entries(properties)) { // Format property
        newValues += functions_1.format(key, value, pretty, debug);
    }
    if (pretty) { // Return result
        return `${functions_1.auditIndents(newKey.replace(/,/gu, ",\n").replace(/_/gu, "-"))}{\n${newValues.replace(/_/gu, "-")}}\n\n`;
    }
    return `${newKey.replace(/_/gu, "-")}{${newValues.replace(/_/gu, "-")}}`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybWF0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7OztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFFSCwyQ0FLb0I7QUFFcEI7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsZ0JBQWdCLEdBQUcsQ0FDNUIsVUFBbUMsRUFDbkMsTUFBZSxFQUNmLEtBQWMsRUFDZCxVQUFvQixFQUFFLEVBQ2hCLEVBQUU7SUFFUixJQUFJLEtBQUssRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQ1AsNEJBQTRCLEVBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQzFCLFVBQVUsRUFDVixNQUFNLENBQUMsQ0FBQTtLQUVkO0lBRUQsSUFBSSxTQUFTLEdBQUcsRUFBRSxFQUFFLGFBQWE7SUFDN0IsTUFBTSxHQUFHLEVBQUUsQ0FBQSxDQUFDLHVCQUF1QjtJQUV2QyxJQUFJLHNCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDckIsTUFBTSxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLElBQUksR0FBRyxDQUFBO1NBQ2hCO0tBQ0o7U0FBTTtRQUNILEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFLEVBQUUscUJBQXFCO1lBQy9DLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFBO1NBQ3ZCO0tBQ0o7SUFFRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLGtCQUFrQjtRQUN2RSxTQUFTLElBQUksa0JBQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUNqRDtJQUVELElBQUksTUFBTSxFQUFFLEVBQUUsZ0JBQWdCO1FBQzFCLE9BQU8sR0FBRyx3QkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFBO0tBQ3JIO0lBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUE7QUFFNUUsQ0FBQyxDQUFBIn0=