// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log("H A N G M A N");
console.log("The game will be available soon.");

let word = input("Guess the word:");
let status = (word === "python") ? "You survived!" : "You lost!";
console.log(status);
