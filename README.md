<div align="center" style="align: center">
    <img alt="JSONSS logo" src="https://user-images.githubusercontent.com/55749227/81603101-c1de3280-939b-11ea-9a53-1d9db97c18bd.png" width="50%"/>
</div>

***

<p align="center">
    <a href="https://www.javascript.com/"><img alt="Forthebadge made with TS" src="https://img.shields.io/badge/Made%20with-TS-257ACC?style=for-the-badge&logo=typescript&logoColor=257ACC"/></a>
    <a href="https://www.javascript.com/"><img alt="Forthebadge uses JS" src="https://img.shields.io/badge/Uses-JS-EED948?style=for-the-badge&logo=javascript"/></a>
</p>

<p align="center">
    <a href="https://github.com/Luke-zhang-04/JSONSS/blob/master/LICENSE"><img alt="Github License" src="https://img.shields.io/github/license/luke-zhang-04/JSONSS?logo=gnu"/></a>
    <a href="https://www.npmjs.com/package/jsonss"><img alt="NPM version" src="https://img.shields.io/npm/v/jsonss?logo=npm"/></a>
    <a href="https://github.com/Luke-zhang-04/JSONSS/releases"><img alt="Github Releases" src="https://img.shields.io/github/v/release/luke-zhang-04/JSONSS"/></a>
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
# npm install jsonss --save-dev
npm i jsonss --save-dev

# If you prefer Yarn
yarn add jsonss -D
```
If for whatever reason you want to use Github Packages, you can use
```bash
# npm install @luke-zhang-04/jsonss --save-dev
npm i @luke-zhang-04/jsonss --save-dev
```
#### GitHub ####
Download the latest release <a href="https://github.com/Luke-zhang-04/JSONSS/releases">here</a> or clone through command line
```bash
git clone --depth=1 https://github.com/Luke-zhang-04/JSONSS.git
```

#### Curl ###
If you for some reason want to install with Curl (or Wget or something), the command is as follows
```bash
curl -L https://github.com/Luke-zhang-04/JSONSS/archive/<VERSION_NAME>.tar.gz | tar zx # Download file
mv JSONSS-<VERSION_NAME> JSONSS/ # Rename folder to just JSONSS
```

E.g
```bash
curl -L https://github.com/Luke-zhang-04/JSONSS/archive/v1.3.0.tar.gz | tar zx
mv JSONSS-1.3.0 JSONSS
```

I would strongly recommend using a package manager such as NPM or Yarn, however.

### Invocation ###
You can invoke JSONSS with
```bash
npx jsonss [file1] [file2] <options>
```

### Help ###
Thanks to Commander, you can get help with the command:
```bash
# npx jsonss --help
npx jsonss -h
```

```txt
Usage: jsonss [options]

Options:
  -nol --nolint  Don't check for for CSS errors
  -d --debug     display output log
  -p --pretty    pretty print
  -h, --help     display help for command
```

E.g
```bash
npx jsonss example/example.js example/styles.css -d -pretty
```

## License notice ##
Even though this program is <a href="https://github.com/Luke-zhang-04/JSONSS/blob/master/LICENSE">licensed</a> under the <a href="https://www.gnu.org/licenses/#GPL">GNU General Public License</a>, any output from this program is NOT under the terms of the license. Only the source code of this tool is licensed under GPL. As long as your production build is not dependent on this tool, the terms of this license do not apply.<br/>
To quote <a href="https://www.gnu.org/licenses/gpl-faq.en.html#WhatCaseIsOutputGPL">GNU.org</a>,
>   The output of a program is not, in general, covered by the copyright on the code of the program. So the license of the code of the program does not apply to the output, whether you pipe it into a file, make a screenshot, screencast, or video.<br/><br/>
>   The exception would be when the program displays a full screen of text and/or art that comes from the program. Then the copyright on that text and/or art covers the output. Programs that output audio, such as video games, would also fit into this exception.<br/><br/>
>   If the art/music is under the GPL, then the GPL applies when you copy it no matter how you copy it. However, fair use may still apply.<br/><br/>
>   Keep in mind that some programs, particularly video games, can have artwork/audio that is licensed separately from the underlying GPLed game. In such cases, the license on the artwork/audio would dictate the terms under which video/streaming may occur.
