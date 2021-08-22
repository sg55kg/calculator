 //(function() {
    let calculator = {
        init: function() {
            this.cacheDom();
            this.bindEvents();
        },


        cacheDom: function() {

            this.numberBtn = document.querySelectorAll('.num');
            this.decimalBtn = document.getElementById('decimal');
            this.operatorBtn = document.querySelectorAll('.operand');
            this.percentageBtn = document.getElementById('percentBtn');
            this.clearBtn = document.getElementById('clear');
            this.deleteBtn = document.getElementById('del');
            this.equalsBtn = document.querySelector('.equals');
            this.currentResult = document.getElementById('current-result');
            this.previousResult = document.getElementById('previous-result');
            this.currentResultText = document.querySelector('.display-current');
            this.previousResultText = document.querySelector('.display-prev');

        },


        bindEvents: function() {

            this.numberBtn.forEach(button => {
                button.addEventListener('click', () => {
                    this.addNumbersToDisplay(button.innerText);
                })
            });         

            this.operatorBtn.forEach(button => {
                button.addEventListener('click', () => {
                    this.addOperatorToDisplay(button.innerText);
                })
            }); 

            this.equalsBtn.addEventListener('click', () => {
                this.operate(parseFloat(this.beforeOperator), parseFloat(this.afterOperator), this.currentOperator);
            });

            this.decimalBtn.addEventListener('click', () => {
                this.addNumbersToDisplay(this.decimalBtn.innerText);
            });

            this.percentageBtn.addEventListener('click', this.convertPercentage.bind(this));

            this.clearBtn.addEventListener('click', this.clear.bind(this));

            this.deleteBtn.addEventListener('click', this.del.bind(this));

        },


        result: null,


        afterOperator: '',


        beforeOperator: '',


        currentOperator: '',


        operate: function(val1, val2, operator) {
            if(val1 == '' || operator == '') return;

            switch(operator) {
                case '+':
                    this.result = sum(val1, val2);
                    this.currentResultText.innerText = `${this.result}`;
                    this.currentOperator = '';
                    break;
                case '-':
                    this.result = subtract(val1, val2);
                    this.currentResultText.innerText = `${this.result}`;
                    this.currentOperator = '';
                    break;
                case 'x':
                    this.result = multiply(val1, val2);
                    this.currentResultText.innerText = `${this.result}`;
                    this.currentOperator = '';
                    break;
                case '÷':
                    this.result = divide(val1, val2);
                    this.currentResultText.innerText = `${this.result}`;
                    this.currentOperator = '';
                    break;
            }
        },


        addNumbersToDisplay: function(value) {
            if(this.afterOperator.includes('.') && value == '.') return;

            if(this.result != null) {
                this.previousResultText.innerText = `${this.result}`;
                this.result = null;
                this.currentResultText.innerText = `${value}`;
                return;
            }
            
            this.currentResultText.innerText += `${value}`;
            this.afterOperator += value; //test, works
            console.log(this.afterOperator);
            
        },


        addOperatorToDisplay: function(value) {
            if(this.currentOperator != '') return;

            this.currentOperator = value;
            this.beforeOperator = this.afterOperator;
            this.afterOperator = '';
            this.currentResultText.innerText += `${value}`;
            console.log(this.currentOperator + " op added");
        },


        convertPercentage: function() {
            let num = this.afterOperator;
            if(num != '') {
                num = num / 100;
                this.currentResultText.innerText = `${num}`;
                this.afterOperator = num;
                console.log(this.afterOperator);
            } else {
                return;
            }
        },


        clear: function() {
            this.currentResultText.innerText = '';
            this.previousResultText.innerText = '';
            this.afterOperator = '';
            this.currentOperator = '';
        },


        del: function() {
            let tempVar = this.currentResultText.innerText.toString();            
            if(tempVar == '' || this.afterOperator == '') return;


            this.afterOperator = this.afterOperator.toString().slice(0, -1);
            this.currentResultText.innerText = `${this.afterOperator}`;
            console.log(this.afterOperator);
            
        }
    }
    calculator.init();
    
 //})();


//global basic math functions
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return calculator.currentResultText.innerText = 'Error';
    } else {
        return a / b;
    }
}