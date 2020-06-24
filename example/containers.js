containers = (themeColours) => {
    const containers = {}

    for (const [key, value] of Object.entries(themeColours)) {
        containers[`.container-${key}`] = {
            border_radius: "5px",
            background_color: value,
            a: {
                color: themeColours.blue,
                text_decoration: "none"
            },
            "a:hover": {
                color: themeColours.white,
                text_decoration: "underline"
            },
            ".my-werid-nested-class": {
                color: value,
                ".my-other-nested-class": {
                    color: value,
                    "font-size": "3px"
                }
            },
            "a, p": {
                font_family: "monospace",
                font_size: 2, // Automatically changes to rem
            }
        }
    }

    return containers
}

module.exports = containers
