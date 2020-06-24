const buttons = (themeColours) => {
    const buttons = {}

    for (const [key, value] of Object.entries(themeColours)) {
        buttons[`.btn_${key}`] = {
            color: "#000",
            background_color: value
        }
    }

    return buttons
}

module.exports = buttons
