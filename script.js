let firstOperand = ''
let secondOperand = ''
let operator = ''

const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const currentOperationScreen = document.querySelector('.current-operation')

numberButtons.forEach((button) => {
  button.addEventListener('click', currentOperationScreen.textContent += button.textContent)
})

function add(currentTotal=0, addition) {
  return currentTotal + addition
}

function subtract(currentTotal=0, subtraction) {
  return currentTotal - subtraction
}

function multiply(currentTotal=0, multiplication) {
  return currentTotal * multiplication
}

function divide(currentTotal=0, division) {
  return currentTotal / division
}

function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case '+':
      add(firstOperand, secondOperand)
      break
    case '-':
      subtract(firstOperand, secondOperand)
      break
    case 'x':
      multiply(firstOperand, secondOperand)
      break
    case '÷':
      divide(firstOperand, secondOperand)
      break
  }
}