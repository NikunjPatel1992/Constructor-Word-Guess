var Word = require("./word.js");
var inquirer = require("inquirer");
const chalk = require('chalk');

var listOfwords = ["rock", "john", "martin"];
var randWord = listOfwords[Math.floor(Math.random() * listOfwords.length)];
console.log(randWord)//  this random selected word will be store in word.js

var getWord = new Word(randWord);

// console.log(getWord);
getWord.InitialializeBoard("");
console.log(getWord.board);
for (var i = 0; i<getWord.board.length;i++){
    console.log(getWord.board[i]);
}

var numberofguesses = 10;

console.log(chalk.blue('Hello world!'));
console.log(chalk.red('Hello world!'));

playGame();
function playGame() {

    var guesslatter = [];

    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter between A-Z!",
                name: "userinput"
            }
        ])
        .then(function (answer) {
            console.log(answer.userinput);

            for (var i = 0; i < randWord.length; i++) {
                if (randWord[i] === answer.userinput) {
                    var getWord = new Word(randWord);
                    getWord.board[i] = answer.userinput;                              
                    getWord.putCorrectLetterOnBoard(answer.userinput);                    
                    console.log("this is output :"+getWord.board);                    
                } else {
                    console.log("In correct");
                }
            }
        });
}