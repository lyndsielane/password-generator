// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  //var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  //var numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  //var specChar = (" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specChar = " `~!@#$%^&*()_+-={}|[]\\:\";'<>?,./";

  var lengthOfPassword = 10; //TODO: prompt("How many");
  var requireUpperCase = true; //TODO: confirm("upper");
  var requireNumber = false; //TODO: confirm("number");
  var requireSpecChar = true; //TODO: confirm("special chars");

  var password = '';

  if (requireUpperCase) 
  {
    var randomIndex = Math.floor(Math.random() * letters.length);
    password += letters[randomIndex].toUpperCase();
  }

  if (requireNumber) {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    password += numbers[randomIndex].toUpperCase();
  }

  if (requireSpecChar) {
    var randomIndex = Math.floor(Math.random() * specChar.length);
    password += specChar[randomIndex];
  }

  var remainingChars = lengthOfPassword - password.length;

  for(var i = 1; i <= remainingChars; i++) 
  {
    var randomIndex = Math.floor(Math.random() * letters.length);
    var letter = letters[randomIndex];
    console.log(`index: ${randomIndex}; letter: ${letter}`);
    password += letter;
  }

  //TODO: now randomize the password before returning.

  //TODO: Possible improvement would be to allow any number of requirements and to a sanity check before returning to confirm that the requirements are met.

  return password;
}
