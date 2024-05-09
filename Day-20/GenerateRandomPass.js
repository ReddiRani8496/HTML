let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let specialCharacters = '!@#$%^&*_-+=';

function generatePassword(){
    let lowercaseSelected = document.getElementById("lowercase");
    let upperCaseSelected = document.getElementById('uppercase');
    let numbersSelected = document.getElementById('number');
    let symbolsSelected = document.getElementById('specialCharacters');
    let length = document.getElementById('length').value;
    console.log(length);
    let characters ='';
    if(lowercaseSelected.checked)
        characters += lowerCase;
    if(upperCaseSelected.checked)
        characters += upperCase;
    if(numbersSelected.checked)
        characters += numbers;
    if(symbolsSelected.checked)
        characters += specialCharacters;

    let password="";
    for(let i = 0; i<length;i++) {
        let index = Math.floor(Math.random() * characters.length) 
            password += characters.charAt(index);
    }
    document.getElementById("Password").innerText = 'Password: '+password;
    console.log(password);
}