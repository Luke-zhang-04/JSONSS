/**
 * JSONSS; JavaScript Object Cascading Style Sheets
 * Functions; define functions for formatter
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

/**
 * Format a property
 * @param {string} key - key of property
 * @param {string} value - value of property
 * @param {boolean} pretty - pretty print or not
 * @param {boolean} debug - show debug logs or not
 * @returns {string} formatted property
 */
export const format = (
    key: string,
    value: string,
    pretty: boolean,
    debug: boolean,
): string => {

    if (debug) {
        console.log("\t\t\t🔎 formatting", key, value)
    }

    if (pretty) {
        return `  ${key.replace(/_/gu, "-")}: ${value.replace(/_/gu, "-")};\n`
    } 
    
    return `${key.replace(/_/gu, "-")}:${value.replace(/_/gu, "-")};`
    
}

/**
 * Gets "branches", all nestings/variables to distribute
 * @param {Array.<string>} branches - branches
 * @param {Array.<string>} variables - new variables to distribute
 * @returns {Array.<string>} variables to destribute
 */
export const getBranches = (
    branches: string[],
    variables: string[],
): string[] => {
    const newBranches = []

    for (const branch of branches) {
        for (const variable of variables) {
            newBranches.push(`${branch} ${variable} `)
        }
    }

    return newBranches
}

/**
 * Returns true if there is a comma
 * @param {Array.<string>} arr - array of strings to check
 * @returns {boolean} if there is a comma
 */
export const checkComma = (arr: string[]): boolean => {
    for (const item of arr) {
        if (item.includes(",")) {
            return true
        }
    }
    
    return false
}

/**
 * Formats keys with commas
 * @param {Array.<string>} keys - keys which need formatting
 * @returns {string} new, formatted key
 */
export const formatKey = (keys: string[]): string => {
    let newKey = "",
        branches: string[] = [""]

    for (const item of keys) {
        if (item.includes(",")) {
            branches = getBranches(branches, item.split(","))
        } else {
            for (let index = 0; index < branches.length; index++) {
                if (index === 0) {
                    branches[index] += `${item} `
                } else {
                    branches[index] += ` ${item} `
                }
            }
        }
    }

    newKey = branches.join(",").replace(/ {2}/gu, " ")
        .replace(/ {2}/gu, " ")
        .replace(/ ,/gu, ",")
    
    return newKey
}

export const auditIndents = (key: string): string => {
    let newKey = key

    if (newKey.includes("\n ")) {
        newKey = newKey.replace(/\n /gu, "\n")
        newKey = newKey.slice(1)
    }

    return newKey.replace(/ {2}/gu, " ")
}
