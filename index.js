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

// this is a simple file logger: reach chapter 11.4.2.1 on it

// let fileLogger = function(msg) {

//    // Put the message in a file

// }





// function logError(msg, logger) {
//    let errorMsg = 'ERROR: ' + msg;
//    logger(errorMsg);
// }

// logError('Something broke!', fileLogger);

// this i a more complex logger: 

let fileLogger = function(msg) {

   // Put the message in a file

}

let consoleLogger = function(msg) {

   console.log(msg);

}

function logError(msg, loggers) {

   let errorMsg = 'ERROR: ' + msg;

   for (let i = 0; i < loggers.length; i++) {
      loggers[i](errorMsg);
   }

}

logError('Something broke!', [fileLogger, consoleLogger]);


let arr = ['L', 'C', '1', '0', '1'];
let newString = '';

for (i = 0; i < arr.length; i++){
   newString = newString + arr[i];
}

console.log(newString);
console.log(arr);

while (arr.length > 0){
   newString += arr[0];
   arr.shift();
}
console.log(newString);
console.log(arr);




function removeI(arr) {
    if (arr.indexOf('i')===-1){ // !arr.includes('i') works as the basecase
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));

//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
  while (checkIfNumber(integer) === false){
  if (integer === 1){
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}
}


function checkIfNumber(input){
  if(typeof(input) == "string" || input !== Math.floor(input) || input < 0){
    console.log(`Please enter a whole integer`);
    return true;
  } else {
    return false;
  }
}


console.log(factorial(3));
