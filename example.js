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

const white = "#fff"
const blue = "rgba(0, 0, 200, 1)"
const red = "red"
const green = "#0f0"
const themeColours = {
    white: white,
    blue: blue,
    red: red,
    green: green
}

function jumbotrons() {
    const jumbotrons = {}
    for (let [key, value] of Object.entries(themeColours)) {
        jumbotrons[`.jumbotron_${key}`] = {
            border_radius: "5px",
            background_color: value,
            a: {
                color: blue,
                text_decoration: "none"
            }
        }
    }
    return jumbotrons
}

function buttons() {
    const buttons = {}
    for (let [key, value] of Object.entries(themeColours)) {
        buttons[`.btn_${key}`] = {
            color: "#000",
            background_color: value
        }
    }
    return buttons
}

function jsonss() {
    return {
        body: {
            color: white,
            background_color: blue
        },
        ...buttons(),
        ...jumbotrons()
    }
}

exports.jsonss = jsonss;