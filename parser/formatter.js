"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format = (key, value, pretty, debug, history = []) => {
    if (debug) {
        console.log("\t\t\t🔎 formatting", key, value);
    }
    if (pretty) {
        return `  ${key.replace(/_/g, "-")}: ${value.replace(/_/g, "-")};\n`;
    }
    else {
        return `${key.replace(/_/g, "-")}:${value.replace(/_/g, "-")};`;
    }
};
const getBranches = (branches, variables) => {
    let newBranches = [];
    for (const branch of branches) {
        for (const variable of variables) {
            newBranches.push(`${branch.replace(/ /g, "")} ${variable.replace(/ /g, "")}`);
        }
    }
    return newBranches;
};
const checkComma = (arr) => {
    for (const i of arr) {
        if (i.includes(",")) {
            return true;
        }
    }
    return false;
};
const formatKey = (keys) => {
    let newKey = "";
    let branches = [""];
    for (const i of keys) {
        if (i.includes(",")) {
            branches = getBranches(branches, i.split(","));
        }
        else {
            for (let index = 0; index < branches.length; index++) {
                branches[index] += `${i} `;
            }
        }
    }
    newKey = branches.join(",");
    return newKey;
};
exports.formatProperties = (properties, pretty, debug, history = []) => {
    if (debug) {
        console.log("\t\t🔎 preparing to format", Object.entries(properties), "pretty =", pretty);
    }
    let newValues = "";
    let newKey = "";
    if (checkComma(history)) {
        newKey = formatKey(history);
        if (pretty) {
            newKey += " ";
        }
    }
    else {
        for (const i of history) {
            newKey += `${i} `;
        }
    }
    for (const [key, value] of Object.entries(properties)) {
        newValues += format(key, value, pretty, debug, history);
    }
    if (pretty) {
        return `${newKey.replace(/,/g, ",\n")}{\n${newValues.replace(/_/g, "-")}}\n\n`;
    }
    else {
        return `${newKey}{${newValues.replace(/_/g, "-")}}`;
    }
};
//# sourceMappingURL=formatter.js.map