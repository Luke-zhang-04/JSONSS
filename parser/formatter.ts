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

export const formatComma = (input: any, pretty: boolean): string => {
    let output: {[key: string]: string | {}} = {}

    for (const [key, value] of Object.entries(input)) {
        if (typeof(value) === "string") {
            if (pretty) {
                output[`-*TAB*-${key}`] = `${value};-*NEWLINE*-`
            } else {
                output.key = `${value};`
            }
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
