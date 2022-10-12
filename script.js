// Assignment Code
var generateBtn = document.querySelector("#generate");
// Numbers for use in password
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lower case letters for use in password
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Upper case letters for use in password
var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Special characters for use in password
var specials = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
// Variables to contain password parameters (var is used so they can be re-declared as needed)
// Stores password length in memory
var passwordLength;
// Stores boolean response to question on use of lower case characters
var useLower;
// Stores boolean response to question on use of upper case characters
var useUpper; 
// Stores boolean response to question on use of special characters
var useSpecial; 
// Stores boolean response to question on use of numbers
var useNumber; 
// New array with chosen characters for password
var pwChoices = [];
// Array for storing password before conversion to string
var pwArray = []; 
// Creates memory for password output
var password = "";
// Variable for use in while loop 
var validEntry = false;
// Returns a random password (Line below was class provided)
function generatePassword() {
  validEntry = false;
  // Sets password character length based on prompt
  while (validEntry === false) {
    var passwordLength = prompt("How many characters would you like in your password? Please enter an number between 8 and 128.");
    // Validates input is a number between 8 and 20 and re-prompts if response is outside allowed bounds
    if (passwordLength < 8 || passwordLength > 128) {
      validEntry = false;
    } else {
      validEntry = true;
      prompt = passwordLength;
    }
  }
  // Logs result of prompt (for debugging)
  console.log("Your password will be: " + passwordLength + " characters long.");
  // Asks about using upper case letters and stores response in local memory
  var useUpper = confirm("Would you like to use upper case characters? Click OK or Cancel.");
  // Logs result of confirm (for debugging)
  console.log("Using upper case letters: " + useUpper + ".");
  if (useUpper) { // Conditional statement for use of lower case and upper case
    // pwChoices = alphaLower.concat(alphaUpper);
    pwChoices.push(...alphaUpper);
    // Logs array for debugging
    console.log(pwChoices);
  } 

  var useLower = confirm("Would you like to use lower case characters? Click OK or Cancel.")
  console.log("Using lower case letters: " + useLower + ".");
  if (useLower) {
    pwChoices.push(...alphaLower);
  }
  console.log(pwChoices);
 
  // Asks about using numbers and stores response in local memory
  var useNumber = confirm("Would you like to use numbers?");
  // Logs result of confirm (for debugging)
  console.log("Using numbers: " + useNumber + ".");
  if (useNumber) {
    pwChoices.push(...numbers);
  }
  console.log(pwChoices);
 
  // Asks about using special characters and stores response in local memory
  var useSpecial = confirm("Would you like to use special characters?");
  // Logs result of confirm (for debugging)
  console.log("Using special characters: " + useSpecial + ".");
  if (useSpecial) {
    pwChoices.push(...specials);
  }
  console.log(pwChoices);
  
  // Code to generate the password
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = pwChoices[Math.floor(Math.random() * pwChoices.length)];
    pwArray[i] = randomChar;
  }
  // Function to remove commas and turn array into a string
  var noCommas = pwArray.join("");
  console.log(noCommas);
  // Return password
  return noCommas;
}

// Write password to the #password input (Class provided)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button (Class provided)
generateBtn.addEventListener("click", writePassword);