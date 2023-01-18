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
    let passwordLength = prompt("At least 10 characters but no more than 64");
    let includeCapitalLetter = confirm("Do you want to include capital letters in your password?");
    let includeSpecialChars = confirm("Do you want to include special characters in your password? ($@%&*, etc)");
    let includenumericCharacters = confirm("Do you want to Include numeric characters in your password?");
    let includelowerCasedCharacters = confirm("Do you want to Include lower cased characters in your password?");
    return {
        length: passwordLength,
        hasUpperCase: includeCapitalLetter,
        hasSpecialChars: includeSpecialChars,
        hasnumericCharacters: includenumericCharacters,
        haslowerCasedCharacters: includelowerCasedCharacters
      }
  };
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomIndex];
    return randomElement;
  }
  
  // Function to generate password with user input
  function generatePassword() {
    let userOptions = getPasswordOptions();
        let password = '';
  /**
   * userOptions is an object, if you console.log(userOptions)
   * you can see that it has the length parameter and it is set
   * to the initial word as user inputs. There are a number of ways
   * to fix this. However below will make the program run with the expected
   * behaviour.
   * 
   * Enjoy, if you want to hit me up for any follow up just let me know.
   */
        
        for (i = 0; i < userOptions.length.length; i++) {
            let charType;
            if(userOptions.hasUpperCase) {charType = getRandom(upperCasedCharacters) }
            if(userOptions.hasLowerCase) { charType = getRandom(lowerCasedCharacters) }
            if(userOptions.hasNumeric) { charType = getRandom(numericCharacters) }
            if(userOptions.hasSpecialChars) { charType = getRandom(specialCharacters) }
            password += charType;
        }
        
        return password;
    };
  
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
