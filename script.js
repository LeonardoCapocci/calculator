let firstOperand = ''
let secondOperand = ''
let operator = ''
let displayValue = '0'
let result = ''
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
      else if (button.classList.contains('equals')) {
        calculate()
        updateDisplay()
        displayValue = displayValue.toString()
      }
      else if (button.classList.contains('clear')) {
        firstOperand = ''
        secondOperand = ''
        operator = ''
        displayValue = '0'
        result = ''
        updateDisplay()
      }
      else if (button.classList.contains('delete')) {
        displayValue = displayValue.slice(0, -1)
        if (displayValue == '') displayValue = '0'
        updateDisplay()
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

function calculate() {
  if (firstOperand !== '' && secondOperand == '') {
    secondOperand = displayValue
  }
  result = operate(operator, firstOperand, secondOperand)
  firstOperand = result
  displayValue = firstOperand
  secondOperand = ''
  operator = ''
}

function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case '+':
      return Number(firstOperand) + Number(secondOperand);
    case '-':
      return Number(firstOperand)- Number(secondOperand);
    case 'x':
      return Number(firstOperand) * Number(secondOperand)
    case '÷':
      return Number(firstOperand) / Number(secondOperand)
  }
}