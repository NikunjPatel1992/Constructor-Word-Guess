var Letter = require("./Letter");

var Word = function (currentRandomPickWord) {
    this.letters = currentRandomPickWord.split("").join("") 
    //makes the word into individual letter and puts them into the array. Use join to gives spaces in between the letter
    this.board = [];
}
Word.prototype.InitialializeBoard = function (char) {
    var letter = new Letter();

    for( var i = 0; i < this.letters.length; i++)
    {
        this.board.push(letter.getCurrentChar(char));
    }
}
Word.prototype.putCorrectLetterOnBoard = function (UserGuessChar) {
    var letter = new Letter();    
    var foundCharIndex = letter.getUserGuessLetterCorrectIndex(UserGuessChar, this.letters);
    if (foundCharIndex > -1) {
        this.board[foundCharIndex] = letter.getCurrentChar(UserGuessChar);
        // console.log(this.board)
    }
}

module.exports = Word;