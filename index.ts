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

import { Command } from "commander";
import * as fs from "fs";
import { parseJsonss as parser } from "./parser/parser";

let pretty = false // pretty printing
let debug = false  // debig mode

// set up flags
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

if (!program.lint) {
    console.log("Will check for CSS errors 😊")
} else {
    console.log("Will not check for CSS errors 🧐")
}

const args = {
    in: process.argv[2], // input file
    out: process.argv[3], // output file
    path: process.argv[1], // path of file
}

/**
 * @returns {number} 1 if success (like c++), throw an error otherwise
 */
const write = (): number | void => {
    let output = ""
    let styles // input file

    if (args.in) { // check for input file
        try {
            styles = require("../../" + args.in)
        } catch {
            try {
                styles = require("../" + args.in)
            } catch {
                styles = require ("./" + args.in)
            }
        }
    } else {
        throw "Missing parameter for input file 👀"
    }

    if (
        !args.out && !(args.out.includes(".css") || args.out.includes(".scss"))
    ) { // make sure file is valid
        throw "Missing parameter for output file 👀"
    }

    const data = styles.jsonss() // get data from input file

    output += parser(data, pretty, debug) // parse JSON object

    if (pretty) {
        output = output.substr(0, output.length - 1)
    }

    // write output to output file
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
    return 1 // return 1 on sucess
}

try {
    const success = write()
    if (success !== 1) {
        console.log("An error occured 😰")
    }

} catch(err) {
    console.log(err)
}
