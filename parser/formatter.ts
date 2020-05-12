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

const format = (
    key: string,
    value: string,
    pretty: boolean,
    debug: boolean
): string => {
    let output = ""

    if (pretty) {
        return `  ${key.replace(/_/g, "-")}: ${value.replace(/_/g, "-")};\n`
    } else {
        return `${key.replace(/_/g, "-")}:${value.replace(/_/g, "-")};`
    }
}

export const formatProperties = (
    properties: {[key: string]: string},
    pretty: boolean,
    debug: boolean,
    history: string[] = []
): string => {
    console.log(properties, history)
    let newValues = ""
    let newKey = ""
    
    for (const i of history) {
        newKey += `${i} `
    }

    for (const [key, value] of Object.entries(properties)) {
        newValues += format(key, value, pretty, debug)
    }

    if (pretty) {
        return `${newKey}{\n${newValues}}\n\n`
    } else {
        return `${newKey}{$newValues}`
    }
}