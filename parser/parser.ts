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
import { formatProperties } from "./formatter";

/**
 * Turns JSONSS into CSS
 * @param {{[key: string]: string | {}}} styles - JSONSS of styles
 * @param {bool} pretty - pretty print or not
 * @param {bool} debug - show debug logs or not
 * @param {arr} history - history of names
 */
export const parseJsonss = (
    styles: {[key: string]: string | number | {}},
    pretty: boolean,
    debug: boolean,
    lint: boolean,
    history: string[] = [],
): string => {
    let output = "" // final output

    for (const i of ["HEADER", "DOCSTRING"]) {
        if (Object.keys(styles).includes(i) && history.length == 0) {
            output += `/*\n${styles[i]}\n*/\n\n`
            delete styles[i] 
        }
    }

    for (const [key, value] of Object.entries(styles)) { // iterate through styles
        if (debug) {
            console.log("🤓 preparing to parse", key, value)
        }

        // split properties and nested styles
        const properties: {[key: string]: string} = {}
        const objects: {[key: string]: {}} = {}

        history.push(key) // add current key to history
        
        // split properties and nested styles
        for (const [key2, value2] of Object.entries(value)) {
            if (typeof(value2) === "string") {
                properties[key2] = value2
            } else if (typeof(value2) === "object") {
                objects[key2] = value2
            } else if (typeof(value2) === "number") {
                properties[key2] = value2.toString() + "rem"
            } else {
                throw `Cannot have typeof ${typeof(value2)} as value in JSONSS`
            }
        }
        
        if (debug && Object.keys(properties).length > 0) {
            console.log("\t🤓 parsing properties", properties)
        }
        
        // format properties
        if (Object.keys(properties).length > 0) {
            output += formatProperties(properties, pretty, debug, history)
        }
        
        if (debug && Object.keys(objects).length > 0) {
            console.log("\t😩 parsing nested classes", Object.keys(objects))
        }

        // recurse for nested styles
        if (Object.keys(objects).length > 0) {
            output += parseJsonss(objects, pretty, debug, lint, history)
        }

        //remote latest history
        if (history.length > 0) {
            history.pop()
        }
    }
    return output
}
