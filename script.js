 (function() {
    let calculator = {
        init: function() {
            this.cacheDom();
            this.bindEvents();
        },


        cacheDom: function() {

            this.numberBtn = document.querySelectorAll('.num');
            this.decimalBtn = document.getElementById('decimal');
            this.operatorBtn = document.querySelectorAll('.operand');
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
                    this.addNumbersToDisplay(button.innerText); //temporary just to make sure the buttons work
                })
            }); 

            this.equalsBtn.addEventListener('click', this.testFunc.bind(this));

            this.decimalBtn.addEventListener('click', () => {
                this.addNumbersToDisplay(this.decimalBtn.innerText);
            });

            this.clearBtn.addEventListener('click', this.clear.bind(this));

            this.deleteBtn.addEventListener('click', this.del.bind(this));

        },


        testFunc: function() {
            this.currentResultText.innerText = '100000000';
            this.previousResultText.innerText = '500';
            
        },


        operate: function(val1, val2, operator) {
            //make seperate functions for add, subtract, multiply, divide, that take 2 numbers and an operator
            //buttons need event listeners
            switch(operator) {
                case '+':
                    sum(val1, val2); //maybe result = sum(val1, val2), and then something like addNumbersToDisplay(result)?
                    break;
                case '-':
                    subtract(val1, val2);
                    break;
                case 'x':
                    multiply(val1, val2);
                    break;
                case '÷':
                    divide(val1, val2);
                    break;
                case '%': //might move to it's own % button function so it fires instantly like iphone calculator
                    divide(val1, 100);
                    break;
            }
        },


        addNumbersToDisplay: function(value) {
            if(this.currentResultText.innerText.includes('.') && value == '.') {
                return;
            }
            this.currentResultText.innerText += `${value}`;
        },

        addOperatorToDisplay: function(value) {
            //needs to just add the operator once. Might be an unnecessary function
        },


        clear: function() {
            this.currentResultText.innerText = '';
            this.previousResultText.innerText = '';
        },

        del: function() {
            let tempVar = this.currentResultText.innerText.toString();
            tempVar = tempVar.slice(0, -1);
            this.currentResultText.innerText = tempVar;
            //there might have been a simpler way to do this, but it works
        }
    }
    calculator.init();
    
 })();


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
        alert('Error');
    } else {
        return a / b;
    }
}