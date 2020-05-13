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

import {
    format,
    checkComma,
    formatKey,
    auditIndents,
} from "./functions";

/**
 * formats properties with proper key
 * @param {{[key: string]: string}} properties - properties to format
 * @param {bool} pretty - pretty print or not
 * @param {bool} debug - show debug logs or not
 * @param {arr} history - history of names
 */
export const formatProperties = (
    properties: {[key: string]: string},
    pretty: boolean,
    debug: boolean,
    history: string[] = [],
): string => {

    if (debug) {
        console.log("\t\t🔎 preparing to format", Object.entries(properties), "pretty =", pretty)
    }

    let newValues = "" // new values
    let newKey = "" // new key with history
    
    if (checkComma(history)) {
        newKey = formatKey(history)
        if (pretty) {newKey += " "}
    } else {
        for (const i of history) { // add history to key
            newKey += `${i} `
        }   
    }
   
    for (const [key, value] of Object.entries(properties)) { // format property
        newValues += format(key, value, pretty, debug)
    }

    if (pretty) { // return result
        return `${auditIndents(newKey.replace(/,/g, ",\n").replace(/_/g, "-"))}{\n${newValues.replace(/_/g, "-")}}\n\n`
    } else {
        return `${newKey}{${newValues.replace(/_/g, "-")}}`
    }
}
