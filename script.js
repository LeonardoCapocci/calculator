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

function clickButton() {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('operand')) {
        inputOperand(button.value)
        updateDisplay()
      }
      else if (button.classList.contains('operator')) {
        inputOperator(button.value)
      }
    })
  })
}
clickButton()

function inputOperand(operand) {
  if (firstOperand == '') {
    if (displayValue == '0') displayValue = operand
    else displayValue += operand
  }
  else if (displayValue == firstOperand) {
    displayValue = operand
  }    
  else {
    displayValue += operand
  }
}

function inputOperator(operatorInput) {
  operator = operatorInput
  firstOperand = displayValue
}

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