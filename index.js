#!/usr/bin/env node
"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs = __importStar(require("fs"));
const parser_1 = require("./parser/parser");
let pretty = false; // pretty printing
let debug = false; // debig mode
let lint; // lint
// set up flags
const program = new commander_1.Command();
program
    .option("-nol --nolint", "Don't check for for CSS errors")
    .option("-d --debug", "display output log")
    .option("-p --pretty", "pretty print");
program.parse(process.argv);
if (program.debug) {
    console.log("Will display full output log 😀");
    debug = true;
}
if (program.pretty) {
    console.log("Will pretty print CSS 🙏");
    pretty = true;
}
if (!program.lint) {
    console.log("Will check for CSS errors 😊");
    lint = true;
}
else {
    console.log("Will not check for CSS errors 🧐");
    lint = false;
}
const args = {
    in: process.argv[2],
    out: process.argv[3],
    path: process.argv[1],
};
/**
 * @returns {number} 1 if success (like c++), throw an error otherwise
 */
const write = () => {
    let output = "";
    let styles; // input file
    if (args.in) { // check for input file
        try {
            styles = require("../../" + args.in);
        }
        catch {
            try {
                styles = require("../" + args.in);
            }
            catch {
                styles = require("./" + args.in);
            }
        }
    }
    else {
        throw "Missing parameter for input file 👀";
    }
    if (!args.out && !(args.out.includes(".css") || args.out.includes(".scss"))) { // make sure file is valid
        throw "Missing parameter for output file 👀";
    }
    const data = styles.jsonss(); // get data from input file
    output += parser_1.parseJsonss(data, pretty, debug, lint); // parse JSON object
    if (pretty) {
        output = output.substr(0, output.length - 1);
    }
    // write output to output file
    fs.writeFile(`./${args.out}`, output, "utf-8", (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log("Done! 😃");
        }
    });
    return 1; // return 1 on sucess
};
try {
    const success = write();
    if (success !== 1) {
        console.log("An error occured 😰");
    }
}
catch (err) {
    console.log(err);
}
//# sourceMappingURL=index.js.map