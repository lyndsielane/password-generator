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
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specChar = " `~!@#$%^&*()_+-={}|[]\\:\";'<>?,./";

  var lengthOfPassword = window.prompt("How many characters would you like for your password (must be between 8-128)?");
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      window.alert("Password must be between 8-128 characters.");
      return;
    } 
  var requireUpperCase = window.confirm("Would you like to include uppercase letters?");
  var requireNumber = window.confirm("Would you like to include numbers?");
  var requireSpecChar = window.confirm("Would you like to include special characters?");

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

  return password;
}
