var characterLenght = 8;
var choiceArr = [];

var specialCharArr = ["!","@","#","$","%","^","&","*","(",")","_","+"]
var lowerCaseArr= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q", "r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "R","S","T","U","V","W","X","Y","Z"]
var numberArr = ["1", "2","3","4","5","6","7","8","9","0",]


// Assignment Code
var generateBtn = document.querySelector("#generate");

  

// Write password to the #password input
function writePassword() {
    getprompts ();{
        if (correctPrompts)
        var newPassword = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = newPassword;
    }
  

}

function generatePassword() {
    var password ="";
    for (var i=0; i < characterLenght; i++) {
        var randomLetter = Math.floor(Math.random()) * choiceArr.lenght;
        password = password + choiceArr[randomLetter];
    }
    return password;

}

function getPrompts(){
    choiceArr = [];
    characterLenght = prompt("How many characters will your passsword be? (8-128 characters)")
    if (isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128) {
        alert("character lenght must be 8-128 characters");
        return false;
    }
    if (confirm("Do you want to include lower case letter in your password?")) {
        choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("Do you want to include upper case letter in your password?")) {
        choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("Do you want to include special characters in your password?")) {
        choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Do you want to include NUMBERS in your password?")) {
        choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//pseudocode
////1-prompt the user about password criteria
    //a.password lenght between 9 and 128 characters
    //b. lowercase, uppercase, special characters, and numbers
  //2- validation of input
//3- generate password


//4. display password