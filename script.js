// Assignment Code
var generateBtn = document.querySelector("#generate");

// Returns a random password
function generatePassword() {
  // logic goes here

  //Homework hints:
  //Use prompts such as prompt("How many characters would you like in your password?");
  //var passwordLength = ("How many characters would you like in your password?"); will store the answer to the prompt.
  //var useSpecials = confirm("Do you want to use special characters?"); will output a boolean.
  //alert("Good job!"); Returns a message box with an OK button to acknowledge.
  //math.random() *x; Returns a number between 0 and n, but not including n
  //math.floor(math.random() * n); Rounds down to the next integer (n-1). 
  //math.floor(math.random() * n) + 1; returns 1 to n as opposed to 0 to (n-1)

  // Return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
