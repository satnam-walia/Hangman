// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const wordList = Array.of("python","java","swift","javascript");
let randomIndex = Math.floor(Math.random() * wordList.length);
console.log("H A N G M A N",randomIndex);
console.log("The game will be available soon.");

let word = input("Guess the word:");
let status = (word === wordList[randomIndex]) ? "You survived!" : "You lost!";
console.log(status);
