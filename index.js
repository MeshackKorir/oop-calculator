class Calculator {
    constructor() {
      this.previousOperandElement = document.querySelector('.previous-operand');
      this.currentOperandElement = document.querySelector('.current-operand');
      this.clear();
      this.registerEventListeners();
    }
  
    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operator = undefined;
    }
  
    appendNumber(number) {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  
    chooseOperator(operator) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.compute();
      }
      this.operator = operator;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }
  
    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
  
      if (isNaN(prev) || isNaN(current)) return;
  
      switch (this.operator) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = prev / current;
          break;
        default:
          return;
      }
  
      this.currentOperand = computation;
      this.operator = undefined;
      this.previousOperand = '';
    }
  
    updateDisplay() {
      this.currentOperandElement.innerText = this.currentOperand;
      this.previousOperandElement.innerText = this.previousOperand;
    }
  
    registerEventListeners() {
      const numberButtons = document.querySelectorAll('[data-number]');
      const operatorButtons = document.querySelectorAll('[data-operator]');
      const equalButton = document.querySelector('[data-equal]');
      const resetButton = document.querySelector('[data-reset]');
  
      numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          this.appendNumber(button.innerText);
          this.updateDisplay();
        });
      });
  
      operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
          this.chooseOperator(button.innerText);
          this.updateDisplay();
        });
      });
  
      equalButton.addEventListener('click', () => {
        this.compute();
        this.updateDisplay();
      });
  
      resetButton.addEventListener('click', () => {
        this.clear();
        this.updateDisplay();
      });
    }
  }
  
  const calculator = new Calculator();
  