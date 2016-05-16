var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];
function censor (string) {
	for (var index in censoredWords) {
		console.log("WORD:", censoredWords[index]);
		string = string.replace(censoredWords[index], "REPLACED_CENSOREDWORDS");
	}
	for (var index in customCensoredWords) {
		console.log("CUSTOM WORD:", customCensoredWords[index]);
		string = string.replace(customCensoredWords[index], "REPLACED_CUSTOMCENSOREDWORDS");
	}
	console.log("STRING", string);
	return string;
}

function addCensoredWords (word) {
	console.log("ADDITION WORD", word);
	customCensoredWords.push(word);
}

function getCensoredWords () {
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;
