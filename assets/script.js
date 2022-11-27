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
//setting conditions, making the console aware of the users options and criteria.
else {
  alert('Password must contain atleast 8 characters and no more than 128. \nPlease enter a valid number between 8 & 128.')
  return '';
}

var qrySmLttrs = confirm('Do you want to use lower case (a-z) letters in your password?')

var qryCapLttrs = confirm('Do you want to use upper case (A-Z) letters in your password?')

var qryNbrs = confirm('Do you want to use numbers (0-9) in your password?')

var qrySpChars = confirm ('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')

//putting this gathered info to work
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
//requires one selection so there is a password to generate.
if (
    !qrySmLttrs && !qryCapLttrs && !qryNbrs && !qrySpChars
  ) {
    return alert('Please select at least one criteria!');
    
  }
  
  for (var i = 0; i < pwLength; i++) {
    password +=avalChars[Math.floor(Math.random () * avalChars.length)];
  }
  return password;
  }
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
  
  generateBtn.addEventListener('click', writePassword);