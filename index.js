const input = require('readline-sync');

function getValidInput(prompt, isValid) {

   // Prompt the user, using the prompt string that was passed
   let userInput = input.question(prompt);

   // Call the boolean function isValid to check the input
   while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
   }

   return userInput;
}

// A boolean function for validating input
let isEven = function(n) {
   return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven));

let isValidPassword = function(password) {

   // Passwords should have at least 8 characters
   if (password.length < 8) {
      return false;
   }

   return true;
};

console.log(getValidInput('Create a password:', isValidPassword));

let isInputA = function(inputA){
  if(inputA.indexOf(`a`) === 0 || inputA.indexOf(`A`) === 0){
    return true;
  } else {
    return false;
  }
};

console.log(getValidInput('Enter a word beinging with "a": ', isInputA));

let isInputVowel = function(inputV){
  let vowels = ['a','e','i','o','u','y'];
  //for(let i = 0; i < vowels.length; i++){
    if(vowels.includes(inputV[0])){
      return true;
    } else {
      return false;
    }
  //} 
};

console.log(getValidInput('Enter a word beinging with a vowel: ', isInputVowel));



let fileLogger = function(msg) {

   // Put the message in a file

}

function logError(msg, logger) {
   let errorMsg = 'ERROR: ' + msg;
   logger(errorMsg);
}

logError('Something broke!', fileLogger);