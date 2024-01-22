class Calculator{
    constructor(){
        this.currentResult = 0;
    }

    add(number) {
        this.currentResult += number;
    }

    subtract(number) {
        this.currentResult -= number;
    }

    multiply(number) {
        this.currentResult *= number;
    }

    divide(number) {
        if (number === 0) {
            console.error("number divide by zero");
            return;
        }
        this.currentResult /= number;
    }

    getResult() {
        return this.currentResult;
    }

    clear() {
        this.currentResult = 0;
    }
}


