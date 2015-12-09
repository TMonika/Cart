var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];
function censor (string) {
	for (index in censoredWords) {
		string.replace(censoredWords[index], "REPLACED_CENSOREDWORDS");
	}
	for (index in customCensoredWords) {
		string.replace(customCensoredWords[index], "REPLACED_CUSTOMCENSOREDWORDS");
	}
	return string;
}

function addCensoredWords (word) {
	customCensoredWords.push(word);
}

function getCensoredWords () {
	return censoredWords.concat(customCensoredWords.push);
}

exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;
