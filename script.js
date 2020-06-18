const buttons = document.querySelectorAll('.displayable');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clearAll = document.querySelector('.clearAll');
let textDisplay = document.querySelector('#textDisplay');

function addToDisplay() {
    textDisplay.value += this.textContent;
}

function calculate() {
    let answer = eval(textDisplay.value);
    textDisplay.value = answer;
}

function clear() {
    textDisplay.value = '';
}

equals.addEventListener('click', calculate);
clearAll.addEventListener('click', clear);

buttons.forEach(button => {
    button.addEventListener('click', addToDisplay);
})

// //ATTEMPT 1

// // let calcText = '';
// // let firstNumber;
// // let nextNumber;

// //Add the text content of this to calcText, which either 
// //assigns just that if its empty, or it will add a new 
// //number with the previous
// function number() {
//     calcText += this.textContent;
//     textDisplay.textContent = calcText;
// }

// //Adds operator in question to the calcText variable
// function operatorFunc() {
//     calcText + this.textContent;
// }

// //Depending what operator is used, it is assigned accordingly
// //to a variavle
// function calculate() {
//     const add = calcText.includes('+');
//     const subtract = calcText.includes('-');
//     const times = calcText.includes('x');
//     const divide = calcText.includes('÷');

//     //If the display matches any of the variables above,
//     //Split the string and calculate the result, then
//     //Display that result
//     if (add) {
//         const [previous, next] = calcText.split('+');
//         let answer = parseFloat(previous) + parseFloat(next);
//         textDisplay.textContent = answer;
//     } else if (subtract) {
//         const [previous, next] = calcText.split('-');
//         let answer = previous - next;
//         textDisplay.textContent = answer;
//     } else if (times) {
//         const [previous, next] = calcText.split('x');
//         let answer = previous * next;
//         textDisplay.textContent = answer;
//     } else if (divide) {
//         const [previous, next] = calcText.split('÷');
//         let answer = previous / next;
//         textDisplay.textContent = answer;
//     }
// }

// //For every number button, listen for a click and run
// //the number function
// buttons.forEach(button => {
//     button.addEventListener('click', number);
// }
// );

// //For every operator button, listen for a click and 
// //run the operatorFunc function
// operators.forEach(operator => {
//     operator.addEventListener('click', operatorFunc);
// }
// );

// //When the equals sign is clicked, run the calculate function
// equals.addEventListener('click', calculate);

// //When the clearAll button is clicked, clear all variables 
// //back to empty
// clearAll.addEventListener('click', function () {
//     calcText = '';
//     textDisplay.textContent = '';
//     storeNumber = '';
// })








