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
 * format a property
 * @param {str} key - key of property
 * @param {str} value - value of property
 * @param {bool} pretty - pretty print or not
 * @param {bool} debug - show debug logs or not
 */
export const format = (
    key: string,
    value: string,
    pretty: boolean,
    debug: boolean,
): string => {

    if (debug){
        console.log("\t\t\t🔎 formatting", key, value)
    }

    if (pretty) {
        return `  ${key.replace(/_/g, "-")}: ${value.replace(/_/g, "-")};\n`
    } else {
        return `${key.replace(/_/g, "-")}:${value.replace(/_/g, "-")};`
    }
}

/**
 * 
 * @param {string[]} branches - branches
 * @param {string[]} variables - new variables to distribute
 */
export const getBranches = (branches: string[], variables: string[]): string[] => {
    const newBranches = []

    for (const branch of branches) {
        for (const variable of variables) {
            newBranches.push(`${branch} ${variable} `)
        }
    }

    return newBranches
}

/**
 * returns true if there is a comma
 * @param {string[]} arr 
 */
export const checkComma = (arr: string[]): boolean => {
    for (const i of arr) {
        if (i.includes(",")) {
            return true
        }
    }
    return false
}

/**
 * Foormatts keys with commas
 * @param {string[]} keys - keys which need formatting
 */
export const formatKey = (keys: string[]): string => {
    let newKey = ""
    let branches: string[] = [""]

    for (const i of keys) {
        if (i.includes(",")) {
            branches = getBranches(branches, i.split(","))
        } else {
            for (let index = 0; index < branches.length; index++) {
                if (index === 0) {
                    branches[index] += `${i} `
                } else {
                    branches[index] += ` ${i} `
                }
            }
        }
    }

    newKey = branches.join(",").replace(/ {2}/g, " ").replace(/ {2}/g, " ").replace(/ ,/g, ",")
    return newKey
}

export const auditIndents = (key: string): string => {
    let newKey = key
    if (newKey.includes("\n ")) {
        newKey = newKey.replace(/\n /g, "\n")
        newKey = newKey.slice(1)
    }

    return newKey.replace(/ {2}/g, " ")
}
