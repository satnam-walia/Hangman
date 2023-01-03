const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"]
const word = words[Math.floor(Math.random() * words.length)]
let nAttempts = 8
let guessed = ""
const mask = (w) => [...w].reduce((acc, ch) => acc + (guessed.includes(ch) ? ch : '-'), "");

console.log("H A N G M A N")
while(nAttempts!==0) {
	const ch = input(`\n${mask(word)}\nInput a letter: `)
	if (word.includes(ch)) {
		if(guessed.includes(ch)) {
			nAttempts--;
			console.log("No improvements.");
		}
		guessed += ch
	} else {
		nAttempts--;
		console.log("That letter doesn't appear in the word.")
	}

	if(!mask(word).includes("-")) {
		nAttempts = 0;
		console.log("You guessed the word!");
		console.log("You survived!");
		break;
	}else if(mask(word).includes("-") && nAttempts == 0) {
		console.log("You lost!");
	}
}





