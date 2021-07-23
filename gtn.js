let randomNumber = Math.ceil(1 + (100 - 1) * Math.random());
console.log(randomNumber);
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let submit = document.querySelector('.btn');
let textField = document.querySelector('.textField');
let count = 1;
// let reset = '';

function checkGuess() {
    let userGuess = Number(textField.value);
    if (count === 1) {
        guesses.textContent = 'Previous Guesses : ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        container1.style.backgroundColor = 'rgb(0, 150, 0,0.5)';
        container1.style.color = 'white';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if (count === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }
    else {
        lastResult.textContent = 'Wrong!';
        container1.style.backgroundColor = 'rgba(255,0,0,0.5)';
        container1.style.color = 'white';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        }
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    count++;
    textField.value = '';
    textField.focus();
}

submit.addEventListener('click', checkGuess);

function setGameOver() {
    submit.disabled = true;
    textField.disabled = true;
    // reset = document.createElement('button');
    // reset.textContent = 'RESTART';
    // document.body.append(reset);
    reset.innerHTML = '<button class="btn">RESTART</button>';
    reset.addEventListener('click', resetGame);
}

function resetGame() {
    count = 1;

    const resetPara = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetPara.length; i++) {
        resetPara[i].textContent = '';
    }

    submit.disabled = false;
    textField.disabled = false;
    textField.value = '';
    textField.focus();

    container1.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    container1.style.color = 'black';
    reset.innerHTML = '';

    let randomNumber = Math.ceil(1 + (100 - 1) * Math.random());
}