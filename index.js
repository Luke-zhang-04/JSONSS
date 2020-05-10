#!/usr/bin/env node

/*
 *  JSO-CSS; JavaScript Object Cascading Style Sheets
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

const program = require("commander")
const fs = require('fs')
const parser = require("./parser").parser

program
    .option("-nol --nolint", "Don't check for for CSS errors")
    .option("-d --debug", "display output log")

program.parse(process.argv)

if (program.debug) console.log("Will display full output log 😀")
if (!program.lint) console.log("Will check for CSS errors 😊")
else console.log("Will not check for CSS errors 🧐")

const args = {
    in: process.argv[2],
    out: process.argv[3],
    path: process.argv[1]
}

function write() {
    const output = ""

    if (!!args.in) {
        // var styles = require(`./${args.path}/${args.in}`)
        var styles = require("./" + args.in)
    } else {
        throw "Missing parameter for input file 👀"
    }

    if (!args.out && !(args.out.includes(".css") || args.out.includes(".scss"))) {
        throw "Missing parameter for output file 👀"
    }

    const data = styles.jsonss()

    parser(data)

    fs.writeFile("./" + args.out, output, (err) => {
        if (err) throw err;
        console.log("Done! 😃");
    })
}

try {
    write()
} catch(err) {
    console.log(err)
}