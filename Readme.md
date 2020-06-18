# Calculator

## Steps:

1. Grab all the number buttons using forEach and add event listeners to each.

2. Grab all the operator buttons using forEach and add event listeners to each.

3. Add an equals and clear all button and add event listeners.

4. When a number or operator button is clicked, get the inner text of that button and display it in the display at the top.

5. When the user presses equals, check what math operator was used, split the 2 numbers either side into separate variables and calculate the result based on which operator was used.

## Route 1:

1. I tried to make the calculations by using multiple if statements - So if the display result included any of the operators, split the 2 numbers either side of the operator into separate variables, then evaluate them with the operator in question.

#This is not right, as this will only count for 2 numbers and the code is way too much for something simple!

## Route 2 (The winning solution!):

1. Found the eval() function - Changed the text field to an input so the user can write their own calculations. I used eval() on the value of the input when the equals button is pressed, the displayed the result in the input value.

## Extras

- Used Tilt.js for the calculator and depth effect on buttons (http://gijsroge.github.io/tilt.js/)