"use strict";
/**
 * JSONSS; JavaScript Object Cascading Style Sheets
 * Functions; define functions for formatter
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditIndents = exports.formatKey = exports.checkComma = exports.getBranches = exports.format = void 0;
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
/**
 * Format a property
 * @param {string} key - key of property
 * @param {string} value - value of property
 * @param {boolean} pretty - pretty print or not
 * @param {boolean} debug - show debug logs or not
 * @returns {string} formatted property
 */
exports.format = (key, value, pretty, debug) => {
    if (debug) {
        console.log("\t\t\t🔎 formatting", key, value);
    }
    if (pretty) {
        return `  ${key.replace(/_/gu, "-")}: ${value.replace(/_/gu, "-")};\n`;
    }
    return `${key.replace(/_/gu, "-")}:${value.replace(/_/gu, "-")};`;
};
/**
 * Gets "branches", all nestings/variables to distribute
 * @param {Array.<string>} branches - branches
 * @param {Array.<string>} variables - new variables to distribute
 * @returns {Array.<string>} variables to destribute
 */
exports.getBranches = (branches, variables) => {
    const newBranches = [];
    for (const branch of branches) {
        for (const variable of variables) {
            newBranches.push(`${branch} ${variable} `);
        }
    }
    return newBranches;
};
/**
 * Returns true if there is a comma
 * @param {Array.<string>} arr - array of strings to check
 * @returns {boolean} if there is a comma
 */
exports.checkComma = (arr) => {
    for (const item of arr) {
        if (item.includes(",")) {
            return true;
        }
    }
    return false;
};
/**
 * Formats keys with commas
 * @param {Array.<string>} keys - keys which need formatting
 * @returns {string} new, formatted key
 */
exports.formatKey = (keys) => {
    let newKey = "", branches = [""];
    for (const item of keys) {
        if (item.includes(",")) {
            branches = exports.getBranches(branches, item.split(","));
        }
        else {
            for (let index = 0; index < branches.length; index++) {
                if (index === 0) {
                    branches[index] += `${item} `;
                }
                else {
                    branches[index] += ` ${item} `;
                }
            }
        }
    }
    newKey = branches.join(",").replace(/ {2}/gu, " ")
        .replace(/ {2}/gu, " ")
        .replace(/ ,/gu, ",");
    return newKey;
};
exports.auditIndents = (key) => {
    let newKey = key;
    if (newKey.includes("\n ")) {
        newKey = newKey.replace(/\n /gu, "\n");
        newKey = newKey.slice(1);
    }
    return newKey.replace(/ {2}/gu, " ");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7OztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFFSDs7Ozs7OztHQU9HO0FBQ1UsUUFBQSxNQUFNLEdBQUcsQ0FDbEIsR0FBVyxFQUNYLEtBQWEsRUFDYixNQUFlLEVBQ2YsS0FBYyxFQUNSLEVBQUU7SUFFUixJQUFJLEtBQUssRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ2pEO0lBRUQsSUFBSSxNQUFNLEVBQUU7UUFDUixPQUFPLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQTtLQUN6RTtJQUVELE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFBO0FBRXJFLENBQUMsQ0FBQTtBQUVEOzs7OztHQUtHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FDdkIsUUFBa0IsRUFDbEIsU0FBbUIsRUFDWCxFQUFFO0lBQ1YsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBRXRCLEtBQUssTUFBTSxNQUFNLElBQUksUUFBUSxFQUFFO1FBQzNCLEtBQUssTUFBTSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQTtTQUM3QztLQUNKO0lBRUQsT0FBTyxXQUFXLENBQUE7QUFDdEIsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNVLFFBQUEsVUFBVSxHQUFHLENBQUMsR0FBYSxFQUFXLEVBQUU7SUFDakQsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7S0FDSjtJQUVELE9BQU8sS0FBSyxDQUFBO0FBQ2hCLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDVSxRQUFBLFNBQVMsR0FBRyxDQUFDLElBQWMsRUFBVSxFQUFFO0lBQ2hELElBQUksTUFBTSxHQUFHLEVBQUUsRUFDWCxRQUFRLEdBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUU3QixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRTtRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsUUFBUSxHQUFHLG1CQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUNwRDthQUFNO1lBQ0gsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2xELElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtvQkFDYixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQTtpQkFDaEM7cUJBQU07b0JBQ0gsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUE7aUJBQ2pDO2FBQ0o7U0FDSjtLQUNKO0lBRUQsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7U0FDN0MsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7U0FDdEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUV6QixPQUFPLE1BQU0sQ0FBQTtBQUNqQixDQUFDLENBQUE7QUFFWSxRQUFBLFlBQVksR0FBRyxDQUFDLEdBQVcsRUFBVSxFQUFFO0lBQ2hELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUVoQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzNCO0lBRUQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUN4QyxDQUFDLENBQUEifQ==