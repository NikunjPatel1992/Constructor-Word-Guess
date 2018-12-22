var Letter = function () {
    this.currentChar = ""; //(single character)
    this.IsCorrectLetterGuess = false;  //(true or false)
    this.countCorrectNumberOfLetterGuesses = 0;

}
Letter.prototype.getCurrentChar = function (userguessschar) {
    if (this.IsCorrectLetterGuess === true) {
        this.CurrentChar = userguessschar;
        console.log("true");
    }
    else {
        this.CurrentChar = "_";
    }
    return this.CurrentChar;
}
Letter.prototype.getUserGuessLetterCorrectIndex = function (userguessChar, currentLetterArray) {
    if(currentLetterArray.indexOf(userguessChar) > -1)
    {
        //indexOf return the position of the found letter if it exists otherwise -1
        // console.log("current letter of arryay :"+currentLetterArray);
        // console.log("userguessChar letter :"+userguessChar);
        this.IsCorrectLetterGuess = true;
        this.countCorrectNumberOfLetterGuesses++;
    }else {
        this.IsCorrectLetterGuess = false;

    }

    return currentLetterArray.indexOf(userguessChar)

}

module.exports = Letter;