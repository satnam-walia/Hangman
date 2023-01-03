// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const wordList = Array.of("python","java","swift","javascript");
let randomIndex = Math.floor(Math.random() * wordList.length);
let hiddenWord = generateHyphen(wordList[randomIndex]);
console.log("H A N G M A N");
console.log("The game will be available soon.");

let word = input(`Guess the word ${hiddenWord}:`);
let status = (word === wordList[randomIndex]) ? "You survived!" : "You lost!";
console.log(status);

function generateHyphen(word){
	let hint = word.slice(0,3);
	return hint.padEnd(word.length,"-");
}
