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
import { formatComma } from "./formatter";

/**
 * @param {object} styles - JSON object with CSS properties
 * @param {boolean} pretty - pretty print or not
 * @param {boolean} debug - debug or not
 * @returns {string} parsed JSONSS string, ready to be written to CSS or SCSS file
 */
export const parseJsonss = (styles: {}, pretty: boolean, debug: boolean, history: string[] = []): string => {
    let output = ""
    for (const [key, value] of Object.entries(styles)) { // iterate through object
        if (debug) {console.log("🔎 parsing", key, "=", value)}

        let val: string

        if (pretty) { // pretty print
            if (debug) {
                console.log("…formatting", value, "pretty print =", true)
            }

            val = formatComma (value, pretty, debug) // format commas with new lines and semicolons
                .replace(/_/g, "-") // replace underscores with dashes
                .replace(/"/g, "") // remove quotes
                .replace(/{/g, "") // remove braces (handled with pretty)
                .replace(/}/g, "")

            output += `${key.replace(/_/g, "-")} {\n${val}}\n\n` //insert new

        } else { //don't pretty print
            if (debug) {
                console.log("…formatting", value, "pretty print = ", false)
            }

            val = formatComma (value, pretty, debug) //format commas with semicolons
                .replace(/_/g, "-") // replace underscores with dashes
                .replace(/"/g, "") //remove quotes

            output += `${key.replace(/_/g, "-")} ${val}` //insert new

        }
        if (debug) {
            console.log(
                "✔ formatted",
                `${key.replace(/_/g, "-")} {${val.replace(/\n/g, "")}}`,
            )
        }
    }
    return pretty ? output.slice(0, -1) : output + "\n" //if pretty strip extra newline at end
}
