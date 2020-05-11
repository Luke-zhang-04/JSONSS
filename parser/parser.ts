/*
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

const parseJsonss = (styles: Object, pretty: boolean, debug: boolean): string => {
    let output = ""
    for (const [key, value] of Object.entries(styles)) {
        if (debug) {console.log("🔎 parsing", key, "=", value)}

        let val: string

        if (pretty) {
            if (debug) {console.log("…formatting", value, "pretty print =", true)}

            val = formatComma (
                JSON.stringify(value)
                    .replace(/_/g, "-")
                    .replace(/"/g, "")
                    .replace(/{/g, "")
                    .replace(/}/g, "")
            )

            output += `${key.replace(/_/g, "-")} {\n  ${val}\n}\n\n`

        } else {
            if (debug) {console.log("…formatting", value, "pretty print = ", false)}

            val = formatComma (
                JSON.stringify(value)
                    .replace(/_/g, "-")
                    .replace(/"/g, "")
            )

            output += `${key.replace("_", "-")} ${val}`

        }
        if (debug) {console.log("✔ formatted", `${key.replace(/_/g, "-")} {${val.replace(/\n/g, "")}}`)}
    }
    return pretty ? output.slice(0, -1) : output + "\n"
}

module.exports = {
    parser: parseJsonss
}