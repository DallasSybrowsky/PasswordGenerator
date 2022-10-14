# Homework 3 JavaScript: Password Generator

## Background

This week's Challenge required me to modify the starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. Below, in the Method section, I will outline the way my script works to generate the password based on the selected criteria. 

To view this code in action please click the following link: https://dallassybrowsky.github.io/PasswordGenerator/

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Method

I used the supplied HTML and CSS framework, and built a JavaScript file that performs the following in order to generate a random password:

1. Prompts the user to select a password length between 8 and 128 characters
    a. There is logic in the code that verifies if the user input is within the set bounds, accepts it if it is within the accpetable character range, and re-prompts if the input is outside of the allowed character range.
2. The user's input on character length for the password is stored in memory and further prompts follow.
3. The user is asked if they would like to use lower case characters in their password.
    a. If they click OK, the lower case characters are copied from an array of lower case characters to a new array titled pwChoices for use later in the script.
    b. If the user clicks Cancel, the lower case characters are not added and the pwChoices array remains empty.
4. The user is asked if they would like to use upper case characters in their password.
    a. If they click OK, the upper case characters are copied from an array of upper case characters and added to the pwChoices array for use later in the script.
    b. If the user clicks Cancel, the upper case characters are not added to the pwChoices array.
5. The user is asked if they would like to use numbers in their password.
    a. If they click OK, the numbers are copied from an array of numbers and added to the pwChoices array for use later in the script.
    b. If the user clicks Cancel, the numbers are not added to the pwChoices array.
6. The user is asked if they would like to use special characters in their password.
    a. If they click OK, the special characters are copied from an array of special character and added to the contents of the pwChoices array.
    b. If the user clicks Cancel, the special characters are not added to the pwChoices array.
7. The function validates that at least one criteria (lower case, upper case, numbers, special characters) has been selected. If not an alert pops up and the 
    function loops back to the beginning.
8. The function then starts into a for loop.
    a. The function then generates random numbers and utilizes the generated random number to choose a character based on its index in the array.
    b. The function repeats until the password length is equal in length to the chosen character length of the password in item 1.
    c .The randomly generated characters are added to an empty array called pwArray.
9. The characters in the pwArray are then joined together into a string that is then input into a variable called noCommas.
10. The noCommas variable is then used as the output for the provided writePassword function which outputs the generated password to the HTML.

## Support

If you want to support or have questions on the page, you can contact me at dallas.sybrowsky@gmail.com.

## License

Please see the repo for the License information at: https://github.com/DallasSybrowsky/PasswordGenerator

The live page can be accessed at: https://dallassybrowsky.github.io/PasswordGenerator/
