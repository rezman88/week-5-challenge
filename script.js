// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
let casePswd1 = 0;
while (casePswd1 <10 && casePswd1>64){
casePswd1 = prompt("Please select a password between 10 and 64 characters");
if (casePswd1 <10 && casePswd1>64){
  alert("please confirm one of the options")
}
}

let casePswd2 = false;
let casePswd3 = false;
let casePswd4 = false;
let casePswd5 = false;

let CasePswdAll = [casePswd2, casePswd3, casePswd4, casePswd5,];
//if (casePswd2 == false){confirm("Please select  if you would like lowercase");}
//if (casePswd3 == false){confirm("Please select  if you would like uppercase");}
//if (casePswd4 == false){confirm("Please select  if you would like numbers");}
//if (casePswd5 == false){confirm("Please select  if you would like special characters");}

while (!casePswd2 && !casePswd3 && !casePswd4 && !casePswd5){
casePswd2 = confirm("Please select if you would like lowercase");
casePswd3 = confirm("Please select if you would like uppercase");
casePswd4 = confirm("Please select if you would like numbers");
casePswd5 = confirm("Please select if you would like special characters");

if (!casePswd2 && !casePswd3 && !casePswd4 && !casePswd5){
  alert("please confirm one of the options")
}
}
return CasePswdAll;

}



//if (CasePswdAll = null){
//  var falseCase = console.log()
//}
//console.log(CasePswdAll);
//console.log(CasePswdAll.length);
//while (casePswd2 === null) {confirm("Please select if you would like lowercase")};

// for (let i=0; i<CasePswdAll.length; i++)
// {
//   if (CasePswdAll[i] == false)
//  {
//   confirm("confirm lower case");
//   }
// else if (i[1] == false) {
//   confirm("confirm upper case");
// }
// else if (i[2] == false){
// confirm("confirm numbers");
// }
// else if (i[3] == false){
//   confirm("special characters");
// }
//}
;

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
return getPasswordOptions()
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);