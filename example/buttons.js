const variables = require("./variables")

    const buttons = () => {
        const buttons = {}

        for (const [key, value] of Object.entries(variables.themeColours)) {
            buttons[`.btn_${key}`] = {
                color: "#000",
                background_color: value
            }
        }

        return buttons
    }

module.exports = buttons
