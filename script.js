const buttons = document.querySelectorAll('.displayable');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clearAll = document.querySelector('.clearAll');
let textDisplay = document.querySelector('#textDisplay');
let calcText = '';
let firstNumber;
let nextNumber;

function number() {
    calcText += this.textContent;
    textDisplay.textContent = calcText;
}

function operatorFunc() {
    calcText + this.textContent;
}

function calculate() {
    const add = calcText.includes('+');
    const subtract = calcText.includes('-');
    const times = calcText.includes('x');
    const divide = calcText.includes('÷');

    if (add) {
        const [previous, next] = calcText.split('+');
        let answer = parseFloat(previous) + parseFloat(next);
        textDisplay.textContent = answer;
    } else if (subtract) {
        const [previous, next] = calcText.split('-');
        let answer = previous - next;
        textDisplay.textContent = answer;
    } else if (times) {
        const [previous, next] = calcText.split('x');
        let answer = previous * next;
        textDisplay.textContent = answer;
    } else if (divide) {
        const [previous, next] = calcText.split('÷');
        let answer = previous / next;
        textDisplay.textContent = answer;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', number);
}
);

operators.forEach(operator => {
    operator.addEventListener('click', operatorFunc);
}
);

equals.addEventListener('click', calculate);

clearAll.addEventListener('click', function () {
    calcText = '';
    textDisplay.textContent = '';
    storeNumber = '';
})








