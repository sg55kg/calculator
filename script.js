 (function() {
    let calculator = {
        init: function() {
            this.cacheDom();
            this.bindEvents();
        },


        cacheDom: function() {
            this.numberBtn = document.querySelectorAll('.num');
            this.decimalBtn = document.getElementById('decimal');
            this.operandBtn = document.querySelectorAll('.operand');
            this.clearBtn = document.getElementById('clear');
            this.deleteBtn = document.getElementById('del');
            this.equalsBtn = document.querySelector('.equals');
            this.currentResult = document.getElementById('current-result');
            this.previousResult = document.getElementById('previous-result');
            this.currentResultText = document.querySelector('.display-current');
            this.previousResultText = document.querySelector('.display-prev');
            //currentResultText.innerText = '30'; //currentResult displays w/out formatting, this keeps padding etc

        },


        bindEvents: function() {

            this.numberBtn.forEach(button => {
                button.addEventListener('click', () => {
                    this.addNumbersToDisplay(button.innerText);
                })
            });         

            for(let i = 0; i < this.operandBtn.length; i++) {
                this.operandBtn[i].addEventListener('click', this.testFunc.bind(this));
            } //need to rework this with a foreach loop like the number buttons

            this.equalsBtn.addEventListener('click', this.testFunc.bind(this));
            this.decimalBtn.addEventListener('click', this.testFunc.bind(this));
            this.clearBtn.addEventListener('click', this.clear.bind(this));

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
                    sum(val1, val2);
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
                case '%':
                    divide(val1, 100);
                    break;
            }
        },


        addNumbersToDisplay: function(value) {
            this.currentResultText.innerText += `${value}`;
        },


        clear: function() {
            this.currentResultText.innerText = '';
            this.previousResultText.innerText = '';
        },
    }
    calculator.init();
    
 })();


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