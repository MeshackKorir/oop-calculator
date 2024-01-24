class Calculator {
  constructor() {
      this.previousOperandElement = document.querySelector('.previous-operand');
      this.currentOperandElement = document.querySelector('.current-operand');
      this.clear();
      this.theEventListeners();
  }

  clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operator = undefined;
  }

  appendNumber(number) {
      this.currentOperand = this.currentOperand.toString() + number.toString();
      this.updateDisplay();
  }

  chooseOperator(operator) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
          this.compute(); 
      }

      this.operator = operator;
      this.previousOperand = this.currentOperand + ' ' + this.operator;
      this.currentOperand = '';
      this.updateDisplay();
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
      this.updateDisplay();
  }

  updateDisplay() {
      this.currentOperandElement.innerText = this.currentOperand;
      this.previousOperandElement.innerText = this.previousOperand;
  }

  theEventListeners() {
      const numberButtons = document.querySelectorAll('[data-number]');
      const operatorButtons = document.querySelectorAll('[data-operator]');
      const equalButton = document.querySelector('[data-equal]');
      const resetButton = document.querySelector('[data-reset]');

      numberButtons.forEach(button => {
          button.addEventListener('click', () => {
              this.appendNumber(button.innerText);
          });
      });

      operatorButtons.forEach(button => {
          button.addEventListener('click', () => {
              this.chooseOperator(button.innerText);
          });
      });

      equalButton.addEventListener('click', () => {
          this.compute();
      });

      resetButton.addEventListener('click', () => {
          this.clear();
          this.updateDisplay();
      });
  }
}

const calculator = new Calculator();
