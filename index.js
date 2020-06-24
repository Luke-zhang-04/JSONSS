#!/usr/bin/env node
"use strict";
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
const fs = __importStar(require("fs"));
const commander_1 = require("commander");
const parser_1 = require("./parser/parser");
let pretty = false, // Pretty printing
debug = false, // Debig mode
lint, // Lint
styles; // Input file
// Set up flags
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
if (program.lint) {
    console.log("Will not check for CSS errors 🧐");
    lint = false;
}
else {
    console.log("Will check for CSS errors 😊");
    lint = true;
}
const args = {
    in: process.argv[2],
    out: process.argv[3],
};
if (args.in) { // Check for input file
    try {
        styles = require(`../../${args.in}`);
    }
    catch {
        try {
            styles = require(`../${args.in}`);
        }
        catch {
            styles = require(`./${args.in}`);
        }
    }
}
else {
    throw Error("Missing parameter for input file 👀");
}
/**
 * Writes jsonss object to file
 * @returns {number} 1 if success, throw an error otherwise
 */
const write = () => {
    let output = "", data;
    if (!args.out && !(args.out.includes(".css") || args.out.includes(".scss"))) { // Make sure file is valid
        throw Error("Missing parameter for output file 👀");
    }
    if (styles.jsonss) {
        if (typeof (styles.jsonss) === "object") {
            data = styles.jsonss;
        }
        else if (typeof (styles.jsonss) === "function") {
            data = styles.jsonss();
        }
    }
    else if (styles) {
        if (typeof (styles) === "object") {
            data = styles;
        }
        else if (typeof (styles) === "function") {
            data = styles();
        }
    }
    output += parser_1.parseJsonss(data, pretty, debug, lint); // Parse JSON object
    if (pretty) {
        output = output.substr(0, output.length - 1);
    }
    // Write output to output file
    fs.writeFile(`./${args.out}`, output, "utf-8", (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log("Done! 😃");
        }
    });
    return 1; // Return 1 on sucess
};
try {
    const success = write();
    if (success !== 1) {
        console.log("An error occured 😰");
    }
}
catch (err) {
    console.log(err);
    console.log("An error occured 😰");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILHVDQUF3QjtBQUN4Qix5Q0FBaUM7QUFDakMsNENBQXFEO0FBU3JELElBQUksTUFBTSxHQUFHLEtBQUssRUFBRSxrQkFBa0I7QUFDbEMsS0FBSyxHQUFHLEtBQUssRUFBRSxhQUFhO0FBQzVCLElBQWEsRUFBRSxPQUFPO0FBQ3RCLE1BQXlCLENBQUEsQ0FBQyxhQUFhO0FBRTNDLGVBQWU7QUFDZixNQUFNLE9BQU8sR0FBRyxJQUFJLG1CQUFPLEVBQUUsQ0FBQTtBQUU3QixPQUFPO0tBQ0YsTUFBTSxDQUFDLGVBQWUsRUFBRSxnQ0FBZ0MsQ0FBQztLQUN6RCxNQUFNLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDO0tBQzFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFFMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFM0IsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0lBQzlDLEtBQUssR0FBRyxJQUFJLENBQUE7Q0FDZjtBQUVELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQTtDQUNoQjtBQUVELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtJQUMvQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0NBQ2Y7S0FBTTtJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUMzQyxJQUFJLEdB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