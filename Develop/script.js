// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var specChar = (" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");
var options = [lowerCase, upperCase, numbers, specChar];
var password = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  window.alert ("How many characters for your password?"); 
    if (< 8) {
      window.alert ("Must be between 8-128 characters");
    }
    else if (> 128) {
      window.alert ("Must be between 8-128 characters");
    }
    else {
      window.alert ("Would you like to include uppercase letters?");
    }
    else {
      window.alert ("Would you like to include special characters?")
    }
