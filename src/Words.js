var words = [
	"html",
	"javascript",
	"react",
	"webanimation",
	"webengineering",
	"animation",
	"bootstrap",
	"tiktok"
];

function getRandomWord() {
	return words[Math.floor(Math.random() * words.length)];
}

export { getRandomWord };
