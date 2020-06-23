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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILHlDQUFvQztBQUNwQyx1Q0FBeUI7QUFDekIsNENBQXdEO0FBRXhELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQSxDQUFDLGtCQUFrQjtBQUNyQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUEsQ0FBRSxhQUFhO0FBQ2hDLElBQUksSUFBYSxDQUFBLENBQUMsT0FBTztBQUV6QixlQUFlO0FBQ2YsTUFBTSxPQUFPLEdBQUcsSUFBSSxtQkFBTyxFQUFFLENBQUE7QUFDN0IsT0FBTztLQUNGLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZ0NBQWdDLENBQUM7S0FDekQsTUFBTSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztLQUMxQyxNQUFNLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0FBRTFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRTNCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtJQUM5QyxLQUFLLEdBQUcsSUFBSSxDQUFBO0NBQ2Y7QUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3ZDLE1BQU0sR0FBRyxJQUFJLENBQUE7Q0FDaEI7QUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUMzQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0NBQ2Q7S0FBTTtJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtJQUMvQyxJQUFJ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