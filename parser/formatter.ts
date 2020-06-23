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
    auditIndents,
    checkComma,
    format,
    formatKey
} from "./functions"

/**
 * Formats properties with proper key
 * @param {Object.<string, string>} properties - properties to format
 * @param {boolean} pretty - pretty print or not
 * @param {boolean} debug - show debug logs or not
 * @param {Array.<string>} history - history of names
 * @returns {string} formatted properties
 */
export const formatProperties = (
    properties: {[key: string]: string},
    pretty: boolean,
    debug: boolean,
    history: string[] = [],
): string => {

    if (debug) {
        console.log(
            "\t\t🔎 preparing to format",
            Object.entries(properties),
            "pretty =",
            pretty)
        
    }

    let newValues = "", // New values
        newKey = "" // New key with history
    
    if (checkComma(history)) {
        newKey = formatKey(history)
        if (pretty) {
            newKey += " "
        }
    } else {
        for (const item of history) { // Add history to key
            newKey += `${item} `
        }   
    }
   
    for (const [key, value] of Object.entries(properties)) { // Format property
        newValues += format(key, value, pretty, debug)
    }

    if (pretty) { // Return result
        return `${auditIndents(newKey.replace(/,/gu, ",\n").replace(/_/gu, "-"))}{\n${newValues.replace(/_/gu, "-")}}\n\n`
    } 
    
    return `${newKey}{${newValues.replace(/_/gu, "-")}}`
    
}
