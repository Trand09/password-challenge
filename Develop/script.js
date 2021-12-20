
// password characters
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z"]
var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z"]
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// variable declaration
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confimSpecialCharacters;

// Assignment code here
function generatePassword() {
  // prompt user for password length
  var confirmLength = window.prompt("How many character would you like you password? Choose betweeen 8 and 128")

  // validate that the correct password length
  if (confirmLength >= 8 || confirmLength <= 128) {
    // Repeat back how many characters the user will have
    alert("Password length must be between 8-128 characters! Try again");
      var confirmLength = (prompt("How many character would you like you password? Choose betweeen 8 and 128"));
    
      if (confirmLength >= 8 || confirmLength <= 128) {
        alert("Your password will have " + confirmLength + " characters")
      };
  }
    

  


  // ask what type of character type the user would like to include
  var confirmUpperCase = window.confirm("Click OK to confirm you would like to include Uppercase letters")
  
  var confirmLowerCase = window.confirm("Click OK to confirm you would like to include Lowercase letters")
  
  // ask what type of character type the user would like to include
  var confirmNumers = window.confirm("Click OK to confirm you would like to include numbers")
  
  // ask what type of character type the user would like to include
  var confirmSpecialCharacters = window.confirm("Click OK to confirm you would like to include special characters")

  if (confirmUpperCase === false && confirmLowerCase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
    alert ("You must choose at least one parameter");
    var confirmUpperCase = window.confirm("Click OK to confirm you would like to include Uppercase letters");
    var confirmLowerCase = window.confirm("Click OK to confirm you would like to include Lowercase letters");
    var confirmNumbers = window.confirm("Click OK to confirm you would like to include numbers");
    var confirmSpecialCharacters = window.confirm("Click OK to confirm you would like to include special characters");
  }

  var passwordCharacters = []

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  }
  
  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }

  if (confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  if (confirmSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }

  console.log(passwordCharacters);

  // empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }

  return randomPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// var characters =["abcdefgijklmnopqrstuvwzyx0123456789!#$%&'()*+,-.:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var lower = ["abcdefgijklmnopqrstuvwzyx"];
// var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var specailchar = ["!#$%&'()*+,-.:;<=>?@[]^_`{|}~"];
// var numbers = ["0123456789"]