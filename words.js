var words = [
    "html",
    "javascript",
    "react",
    "webanimation",
    "webengineering",
    "animation",
    "bootstrap",
    "tiktok"
]

function Letters() {
    return words[Math.floor(Math.random()*words.length)]
}

export {Letters}