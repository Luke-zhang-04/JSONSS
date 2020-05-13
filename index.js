#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs = __importStar(require("fs"));
const parser_1 = require("./parser/parser");
let pretty = false;
let debug = false;
let lint;
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
const write = () => {
    let output = "";
    let styles;
    if (args.in) {
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
    if (!args.out && !(args.out.includes(".css") || args.out.includes(".scss"))) {
        throw "Missing parameter for output file 👀";
    }
    const data = styles.jsonss();
    output += parser_1.parseJsonss(data, pretty, debug, lint);
    if (pretty) {
        output = output.substr(0, output.length - 1);
    }
    fs.writeFile(`./${args.out}`, output, "utf-8", (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log("Done! 😃");
        }
    });
    return 1;
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