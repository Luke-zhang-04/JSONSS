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

export const parseJsonss = (
    styles: {},
    pretty: boolean,
    debug: boolean,
    history: string[] = []
): string => {
    let output = ""

    for (const [key, value] of Object.entries(styles)) {
        const properties: {[key: string]: string} = {}
        const objects: {[key: string]: {}} = {}

        history.push(key)
        
        for (const [key2, value2] of Object.entries(value)) {
            if (typeof(value2) === "string") {
                properties[key2] = value2
            } else if (typeof(value2) === "object") {
                objects[key2] = value2
            } else {
                throw `Cannot have typeof ${typeof(value2)} as value in JSONSS`
            }
        }

        if (Object.keys(properties).length > 0) {
            output += formatProperties(properties, pretty, debug, history)
        }
        
        if (Object.keys(objects).length > 0) {
            output += parseJsonss(objects, pretty, debug, history)
        }

        if (history.length > 0) {
            history.pop()
        }
    }
    return output
}
