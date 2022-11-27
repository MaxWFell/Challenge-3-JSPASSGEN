// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword(){
  var smLttrs = 'abcdefghijklmnopqrstuvwxyz';
  var capLttrs = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  var nbrs = '1234567890';
  var spChars = '~!@#$%^&*()_+{}:?><;.,';
  var password = '';
  var avalChars = '';

// Determine the desired length of the password.
var pwLength = prompt('Please indicate a password length between 8 and 128.')

if (pwLength >= 8 && pwLength <= 128) {
  console.log(pwLength)
}

else {
  alert('Password must contain atleast 8 characters and no more than 128. \nPlease enter a valid number between 8 & 128.')
  return '';
}

var qrySmLttrs = confirm('Do you want to use lower case (a-z) letters in your password?')

var qryCapLttrs = confirm('Do you want to use upper case (A-Z) letters in your password?')

var qryNbrs = confirm('Do you want to use numbers (0-9) in your password?')

var qrySpChars = confirm ('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')


if (qrySmLttrs) {
  avalChars += smLttrs
}

if (qryCapLttrs) {
  avalChars += capLttrs
}

if (qryNbrs) {
  avalChars += nbrs
}

if (qrySpChars) {
  avalChars += spChars
}

