/**
 * JSONSS; JavaScript Object Cascading Style Sheets
 * Formatter; defines formatting functions to help parse JSONSS
 */

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

import { parseJsonss as parser } from "./parser"; 

/**
 * @param {object} input - JSON object with CSS properties
 * @param {boolean} pretty - pretty print or not
 * @param {boolean} debug - should console output logs
 * @returns {string} returns a string with newlines and tabs
 */
export const formatComma = (input: any, pretty: boolean, debug: boolean, history: string[] = []): string => {
    let output: {[key: string]: string | {}} = {}

    for (const [key, value] of Object.entries(input)) {
        if (typeof(value) === "string") {
            if (pretty) {
                output[`-*TAB*-${key}`] = `${value};-*NEWLINE*-`
            } else {
                output.key = `${value};`
            }
        } else if (typeof(value) === "object") {
            console.log("FOUND OBJECT", key, value)
        }
    }

    return (
        pretty ?
            JSON.stringify(output)
                .replace(/,/g, "")
                .replace(/-\*NEWLINE\*-/g, "\n")
                .replace(/:/g, ": ")
                .replace(/-\*TAB\*-/g, "\t")
            : JSON.stringify(output)
                .replace(/,/g, "")
    );
}
