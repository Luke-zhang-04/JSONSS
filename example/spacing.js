const spacing = (spacers) => {
    spacersPropertes = {}

    for (const type of ["margin", "padding"]) {
        for (const direction of ["left", "right", "top", "bottom"]) {
            for (const [index, value] of spacers.entries()) {
                spacersPropertes[`${type[0]}${direction[0]}-${index+1}`] = {[`${type}-${direction}`]: value}
            }
        }
    }

    return spacersPropertes
}

module.exports = spacing
