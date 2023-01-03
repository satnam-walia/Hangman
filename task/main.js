const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"]
const word = words[Math.floor(Math.random() * words.length)]
let nAttempts = 8
let goodGuess = ""
let badGuess = ""
const mask = (w) => [...w].reduce((acc, ch) => acc + (goodGuess.includes(ch) ? ch : '-'), "");

console.log("H A N G M A N")
while(nAttempts!==0) {
	const ch = input(`\n${mask(word)}\nInput a letter: `)
	if(ch.length == 1) {
		if(ch.match(/[a-z]/g)) {

			if (badGuess.includes(ch) || goodGuess.includes(ch)) {
				console.log("You've already guessed this letter.");
				continue;
			}
			if (word.includes(ch)) {
				goodGuess += ch
			} else {
				nAttempts--;
				badGuess += ch
				console.log("That letter doesn't appear in the word.")
			}
			if (!mask(word).includes("-")) {
				nAttempts = 0;
				console.log(`You guessed the word ${mask(word)}!`);
				console.log("You survived!");
				break;
			} else if (mask(word).includes("-") && nAttempts == 0) {
				console.log("You lost!");
			}
		}else{
			console.log("Please, enter a lowercase letter from the English alphabet.");
		}
	}else{
		console.log("Please, input a single letter.")
	}
}





