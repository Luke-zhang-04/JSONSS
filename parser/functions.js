"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = (key, value, pretty, debug) => {
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
exports.getBranches = (branches, variables) => {
    const newBranches = [];
    for (const branch of branches) {
        for (const variable of variables) {
            newBranches.push(`${branch} ${variable} `);
        }
    }
    return newBranches;
};
exports.checkComma = (arr) => {
    for (const i of arr) {
        if (i.includes(",")) {
            return true;
        }
    }
    return false;
};
exports.formatKey = (keys) => {
    let newKey = "";
    let branches = [""];
    for (const i of keys) {
        if (i.includes(",")) {
            branches = exports.getBranches(branches, i.split(","));
        }
        else {
            for (let index = 0; index < branches.length; index++) {
                if (index === 0) {
                    branches[index] += `${i} `;
                }
                else {
                    branches[index] += ` ${i} `;
                }
            }
        }
    }
    newKey = branches.join(",").replace(/ {2}/g, " ").replace(/ {2}/g, " ").replace(/ ,/g, ",");
    return newKey;
};
exports.auditIndents = (key) => {
    let newKey = key;
    if (newKey.includes("\n ")) {
        newKey = newKey.replace(/\n /g, "\n");
        newKey = newKey.slice(1);
    }
    return newKey.replace(/ {2}/g, " ");
};
//# sourceMappingURL=functions.js.map