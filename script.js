var lowerCase="qwertyuiopasdfghjklzxcvbnm";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";
var specialChars = "!@#$%^&*()_-+=";
var length = 0
var password =""

var possibilities ="";
document.querySelector("#generate").addEventListener("click", generate);

function generate(){
    length = parseInt(prompt("Enter how many characters you want."));
    if(length<8 || length>50){
        alert("Your password should be between 8 and 50 characters!");
        return;
    }

    var lowerCasePrompt = confirm("Do you want lowercase letters?");
    if (lowerCasePrompt) {
        possibilities += lowerCase
    }else{
        for (let index = 0; index < length; index++) {
            password += possibilities[Math.floor(Math.random() * possibilities.length)];
            console.log(password)
            document.querySelector("#password").value = password;

        }
        return password;
    }
    var upperCasePrompt = confirm("Do you want uppercase characters?");
    if(upperCasePrompt){
        possibilities += upperCase
    }
    else{
        for (let index = 0; index < length; index++) {
            password += possibilities[Math.floor(Math.random() * possibilities.length)];
            console.log(password)
            document.querySelector("#password").value = password;
        }
        return password;
    }

    var numbersPrompt = confirm("Do you want numbers?");
    if(numbersPrompt){
        possibilities += numbers
    }else{
        for (let index = 0; index < length; index++) {
            password += possibilities[Math.floor(Math.random() * possibilities.length)];
            console.log(password)
            document.querySelector("#password").value = password;

        }
        return password;
    }

    var specialCharsPrompt = confirm("Do you want special characters?");
    if(specialCharsPrompt){
        possibilities += specialChars
    }
    for (let index = 0; index < length; index++) {
        password += possibilities[Math.floor(Math.random() * possibilities.length)];
        console.log(password)
    }

    document.querySelector("#password").value = password;
}