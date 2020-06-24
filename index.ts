#!/usr/bin/env node

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
import * as fs from "fs"
import {Command} from "commander"
import {parseJsonss as parser} from "./parser/parser"

type Callback = ()=> {}

interface Styles {
    [index: string]: {} | Callback,
    jsonss?: Callback | {},
}

let pretty = false, // Pretty printing
    debug = false, // Debig mode
    lint: boolean, // Lint
    styles: Styles | Callback // Input file

// Set up flags
const program = new Command()

program
    .option("-nol --nolint", "Don't check for for CSS errors")
    .option("-d --debug", "display output log")
    .option("-p --pretty", "pretty print")

program.parse(process.argv)

if (program.debug) {
    console.log("Will display full output log 😀")
    debug = true
}

if (program.pretty) {
    console.log("Will pretty print CSS 🙏")
    pretty = true
}

if (program.lint) {
    console.log("Will not check for CSS errors 🧐")
    lint = false
} else {
    console.log("Will check for CSS errors 😊")
    lint = true
}

const args = {
    in: process.argv[2], // Input file
    out: process.argv[3], // Output file
}

if (args.in) { // Check for input file
    try {
        styles = require(`../../${args.in}`) as Styles | Callback
    } catch {
        try {
            styles = require(`../${args.in}`) as Styles | Callback
        } catch {
            styles = require(`./${args.in}`) as Styles | Callback
        }
    }
} else {
    throw Error("Missing parameter for input file 👀")
}

/**
 * Writes jsonss object to file
 * @returns {number} 1 if success, throw an error otherwise
 */
const write = (): number | void => {
    let output = "",
        data: {[key: string]: string | {}}

    if (
        !args.out && !(args.out.includes(".css") || args.out.includes(".scss"))
    ) { // Make sure file is valid
        throw Error("Missing parameter for output file 👀")
    }

    if ((styles as Styles).jsonss) {
        if (typeof((styles as Styles).jsonss) === "object") {
            data = (styles as Styles).jsonss as {}
        } else if (typeof((styles as Styles).jsonss) === "function") {
            data = ((styles as Styles).jsonss as Callback)() as {}
        }
    } else if (styles) {
        if (typeof(styles) === "object") {
            data = styles as {}
        } else if (typeof(styles) === "function") {
            data = styles() as {}
        }
    }

    output += parser(data, pretty, debug, lint) // Parse JSON object

    if (pretty) {
        output = output.substr(0, output.length - 1)
    }

    // Write output to output file
    fs.writeFile(
        `./${args.out}`,
        output,
        "utf-8",
        (err: unknown) => {
            if (err) {
                throw err
            } else {
                console.log("Done! 😃")
            }
        })

    return 1 // Return 1 on sucess
}

try {
    const success = write()
    
    if (success !== 1) {
        console.log("An error occured 😰")
    }

} catch (err) {
    console.log(err)
}
