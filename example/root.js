const variables = require("./variables"),

    root = () => {
        const rootProps = {":root": {}}

        for (const [key, value] of Object.entries(variables.themeColours)) {
            rootProps[":root"][`--${key}`] = value
        }

        return rootProps
    }

module.exports = root
