  //Databank for password
function generatepasswords () {
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperletterCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerletterCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?', '>', '/', '{','<', '+', '=',':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var possibleCharacters= [];

// validation screen
// validating character length
numberOfCharacters = prompt ("Please choose lenght of password, at least 8 characters and no more than 128 characters")
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "Invalid lenght, Please enter between 8-128 characters"
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt ("Enter valid number, Please.");
}
else {
  alert ("Password will be" + numberOfCharacters + "in character length.");
}


// validating upper letter character 
hasUppercase = confirm ("Would you like Uppercase Characters.");
if (hasUppercase) {
  var turnToUppercase = alert ("Password will have Uppercase Characters.")
}
else {
  alert("Password will NOT have Uppercase Characters.")
}

// validating lower letter character 
hasLowercase = confirm ("Would you like Lowercase Characters.");
if (hasLowercase) {
   alert ("Password will have Lowercase Characters.")
}
else {
  alert("Password will NOT have Lowercase Characters.")
}

// validating numbers 
hasNumbers = confirm ("Would you like password with Numbers.");
if (hasNumbers) {
    alert ("Password will contain Numbers.")
}
else {
  alert("Password will NOT contain Numbers.")
}

// validating special letter character 
hasSpecial = confirm ("Would you like Special Characters.");
if (hasSpecial) {
   alert ("Password will have Special Characters.")
}
else {
  alert("Password will NOT have Special Characters.");
}

// Criteria
if (hasUppercase === false && hasLowercase === false && hasNumber === false && hasSpecial === false) {
  return "Please Select One of The Character Criteria."
}

// Selecting 
if (hasLowerletterCharacters) {
  possibleCharacters= possibleCharacters.concat (upperletterCharacters);
}
if(hasLowerletterCharacters){
  possibleCharacters= possibleCharacters.concat (lowerletterCharacters);
}
if (hasNumbers) {
  possibleCharacters= possibleCharacters.concat (numericCharacters);
}
if (hasSpecialcharacter) {
  possibleCharacters= possibleCharacters.concat (specialCharacters);
}

//password range setup
let finalPassword= ""
for (let i=0; i < numberCharacters; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.lenght)];
// generated password final & rng
finalPassword = finalPassword+possibleCharacters[rng];
}
return finalPassword;
};

// Refer to the #generate element
var generateBtn = document.querySelector("#generate");

// Display password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);