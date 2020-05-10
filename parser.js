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
function parseJsonss(styles) {
    var output = "";
    for (var _i = 0, _a = Object.entries(styles); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var val = JSON.stringify(value).replace("_", "-").replace(",", ";").replace(/"/g, "");
        output += key.replace("_", "-") + " " + val;
    }
    return output;
}
module.exports = {
    parser: parseJsonss
};
