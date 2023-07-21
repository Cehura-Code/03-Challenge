/**
 * to click add event listener to generate password button
 * A series of prompts of password criteria
 * -Get length
 *  -validate length
 * -Include lowercase
 * -Include uppercase
 * -Include special characters
 * -Include numeric
 * Validate character use (at least one of each)
 * -Generate a password that meets criteria
 * -Show the password
 */


var generateBtn = document.querySelector("#generate");

//var definitions
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
var all = upperCase + lowerCase + numbers + specialCharacters;
var password = "";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var userAnswer = prompt("What is the desired character length in your password?");
  if (userAnswer > 20) {
    alert("Try again");
  }
  else if (userAnswer < 7) {
    alert("Password length must be 8 or more characters");
  }
  else if (userAnswer > 20) {
    alert("Password length must be less than 20 characters");
    return;
  }

  else {
    var lowerCase = confirm("Please click 'OK' if you'd like to include lowercase characters in your password.");
    var upperCase = confirm("Please click 'OK' if you'd like to include uppercase characters in your password");
    var numbers = confirm("Please click 'OK' if you'd like to include numbers in your password");
    var specialCharacters = confirm("Please click 'OK' if you'd like to include special characters in your password.");
  }

  all = lowerCase && upperCase && numbers && specialCharacters
  if (all) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  if (upperCase[true]) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
  }
  if (lowerCase[true]) {
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  if (numbers[true]) {
    password += numbers[Math.floor(Math.random() * numbers / length)];
  }
  if (specialCharacters[true]) {
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  if (!confirm(upperCase) && !confirm(lowerCase) && !confirm(numbers) && !confirm(specialCharacters)) {
    alert("You must pick alternate criteria");
    return;
  }
  console.log(password);

  generateBtn.addEventListener("click", writePassword); {
    generatePassword();

  }


}

//array for options

var passwordCriteria = {
  length: 8,
  lowercase: true,
  uppercase: true,
  numeric: true,
  specialCharacters: true
};

var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphaLower = alphabet.toLowerCase(alphabet.split(''));//convert string into an array
var alphaUpper = alphabet.toUpperCase(alphabet.toUpperCase().split('')); //turning uppercase letters into an array





//Functions
//Prompt for length

//Validate Length
//prompt for characters
//Validate characters
//Generate password
//show password








//Special functions like event listeners
generateBtn.addEventListener("click", password);


//Business logic/start app




{
  const textarea = document.createElement('textarea');
  const password = passwordText.innerText;

  // Edge Case when Password is Empty


  // Copy Functionality
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('innterText');
  textarea.remove();
};




// Assignment code here






// Write password 

