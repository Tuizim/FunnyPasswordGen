const genBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passwordInput = document.getElementById('passwordInput');
genBtn.addEventListener('click',function(){
    let password= generatePassword();
    passwordInput.value=password;
    copyBtn.disabled=false;
});
copyBtn.addEventListener('click',function(){
    passwordInput.disabled=false;
    passwordInput.select();
    document.execCommand('copy');
    passwordInput.disabled=true;
    window.getSelection().removeAllRanges();
});

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function getRandomNumbers(min, max, count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
};

function generatePassword() {
    const character = getRandomElement(characters.characters);
    let adjective="";
    if (character.length<10){
        adjective = getRandomElement(adjectives.adjectives);
    }
    const specialCharacter = getRandomElement(specialCharacters);
    const randomNumbers = getRandomNumbers(0, 9, Math.floor(Math.random() * 2) + 3);
    return [character, adjective, specialCharacter, randomNumbers.join('')].join('');
};