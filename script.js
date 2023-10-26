let firstOperand = ''
let secondOperand = ''
let operator = ''
let displayValue = '0'

const buttons = document.querySelectorAll('button')
const currentOperationScreen = document.querySelector('.current-operation')

function updateDisplay() {
  const display = document.querySelector('#display');
  display.textContent = displayValue;
}
updateDisplay()




function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case 'x':
      firstOperand * secondOperand
    case '÷':
      return firstOperand / secondOperand
  }
}