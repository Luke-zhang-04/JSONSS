/*
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
const buttons = require("./buttons"),
    containers = require("./containers"),
    spacing = require("./spacing")

const white = "#fff",
    blue = "rgba(0, 0, 200, 1)",
    red = "red",
    green = "#0f0",
    none = "rgba(0, 0, 0, 0)",

    themeColours = {
        white,
        blue,
        red,
        green,
        none
    },

    spacers = [
        0.25,
        0.5,
        1,
        2,
        4,
    ]

    jsonss = {
        HEADER: // Comment at top of CSS file
            "  JSONSS; JavaScript Object Nodated Style Sheets\n  Copyright (C) 2020 Luke Zhang\n\n  https://luke-zhang-04.github.io\n\n  This program is free software: you can redistribute it and/or modify\n  it under the terms of the GNU General Public License as published by\n  the Free Software Foundation, either version 3 of the License, or\n  (at your option) any later version.\n\n  This program is distributed in the hope that it will be useful,\n  but WITHOUT ANY WARRANTY; without even the implied warranty of\n  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  GNU General Public License for more details.\n  You should have received a copy of the GNU General Public License\n  along with this program.  If not, see <https://www.gnu.org/licenses/>.",
        body: {
            color: white,
            background_color: blue
        },
        ...spacing(spacers),
        ...buttons(themeColours),
        ...containers(themeColours),
        ".class_1": {
            ".class2": {
                "a, p, li": {
                    ".class3": {
                        text_align: "center",
                    },
                },
            },
        },
        div: {
            article: {
                "a, p, li": {
                    section: {
                        position: "relative",
                    },
                },
            },
        },
        "b, strong": {
            font_weight: "bolder",
        }
    }

module.exports = jsonss
