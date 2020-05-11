<div align="center" style="align: center">
    <img alt="JSONSS logo" src="https://user-images.githubusercontent.com/55749227/81603101-c1de3280-939b-11ea-9a53-1d9db97c18bd.png" width="50%"/>
</div>

***

<p align="center">
    <a href="https://www.javascript.com/"><img alt="Forthebadge made with TS and JS" src="https://img.shields.io/badge/Made%20with-TS%20and%20JS-257ACC?style=for-the-badge&logo=typescript"/></a>
    <a href="https://www.javascript.com/"><img alt="Forthebadge uses JS" src="https://img.shields.io/badge/Uses-JS-EED948?style=for-the-badge&logo=javascript"/></a>
</p>

<p align="center">
    <a href="https://github.com/Luke-zhang-04/JSONSS/blob/master/LICENSE"><img alt="Github License" src="https://img.shields.io/github/license/luke-zhang-04/JSONSS?logo=gnu"/></a>
    <a href="https://www.npmjs.com/package/jsonss"><img alt="NPM version" src="https://img.shields.io/npm/v/jsonss?logo=npm"/></a>
    <a href="https://www.npmjs.com/package/jsonss"><img alt="Github Releases" src="https://img.shields.io/github/v/release/luke-zhang-04/JSONSS"/></a>
    <a href="https://www.npmjs.com/package/jsonss"><img alt="NPM downloads" src="https://img.shields.io/npm/dt/jsonss?logo=npm"/></a>
    <a href=""><img alt="Github workflow status" src="https://img.shields.io/github/workflow/status/luke-zhang-04/jsonss/Node.js CI?logo=node.js"/></a>
    <a href="https://github.com/Luke-zhang-04/JSONSS/actions?query=workflow%3Atsint"><img alt="workflow status" src="https://img.shields.io/github/workflow/status/Luke-zhang-04/jsonss/tslint?label=TSLint&logo=typescript"/></a>
    <br/>
    <a href="https://app.codacy.com/manual/luke.zhang2004/JSONSS?utm_source=github.com&utm_medium=referral&utm_content=Luke-zhang-04/JSONSS&utm_campaign=Badge_Grade_Dashboard"><img alt="Codacy Badge" src="https://api.codacy.com/project/badge/Grade/8c61ac16af44418f821b06f0f8995c7a"/></a>
    <a href="https://codeclimate.com/github/Luke-zhang-04/JSONSS"><img alt="maintainability" src="https://img.shields.io/codeclimate/maintainability-percentage/Luke-zhang-04/JSONSS?logo=code-climate"/></a>
</p>    

JavaScript Object Notated Style Sheets. Created so developers don't need to learn SCSS, and can rely on JS, JSON, and CSS instead

## Usage ##
JSONSS allows you to use JavaScript loops, functions, and variables, and JSON to create CSS. Just write JavaScript code, and we do the converting and formatting for you.

### Installation ###
#### NPM ####
In terminal, type
```bash
#npm install --global jsonss
npm i -g jsonss
```
Or, if you just want to install as a dev dependency, type
```bash
#npm install jsonss --save-dev
npm i jsonss --save-dev
```
#### GitHub ####
Download the latest release <a href="https://github.com/Luke-zhang-04/JSONSS/releases">here</a> or clone through command line
```bash
git clone --depth=1 https://github.com/Luke-zhang-04/JSONSS.git
```

### Invocation ###
If installed globally, you can invoke JSONSS with
```bash
JSONSS
```

If installed as a dev-dependency, you can invoke JSONSS with
```bash
node node_modules/jsonss/
```

If installed via GitHub, you can invoke JSONSS with
```bash
node JSONSS
```

### Parameters ###
The invocation structure looks like
```bash
<invocation> <input file> <output file>
```

Flags incude
```txt
-nol --nolint, Don't check for for CSS errors
-d --debug, display output log
-p --pretty, pretty print
```

E.g
```bash
node node_modules/jsonss example.js styles.css -d --pretty
```

## License notice ##
Even though this program is <a href="https://github.com/Luke-zhang-04/JSONSS/blob/master/LICENSE">licensed</a> under the <a href="https://www.gnu.org/licenses/#GPL">GNU General Public License</a>, any output from this program is NOT under the terms of the license. Only the source code of this tool is licensed under GPL. As long as your production build is not dependent on this tool, the terms of this license do not apply.<br/>
To quote <a href="https://www.gnu.org/licenses/gpl-faq.en.html#WhatCaseIsOutputGPL">GNU.org</a>,
>   The output of a program is not, in general, covered by the copyright on the code of the program. So the license of the code of the program does not apply to the output, whether you pipe it into a file, make a screenshot, screencast, or video.<br/><br/>
>   The exception would be when the program displays a full screen of text and/or art that comes from the program. Then the copyright on that text and/or art covers the output. Programs that output audio, such as video games, would also fit into this exception.<br/><br/>
>   If the art/music is under the GPL, then the GPL applies when you copy it no matter how you copy it. However, fair use may still apply.<br/><br/>
>   Keep in mind that some programs, particularly video games, can have artwork/audio that is licensed separately from the underlying GPLed game. In such cases, the license on the artwork/audio would dictate the terms under which video/streaming may occur.