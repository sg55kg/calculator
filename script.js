// (function() {
    let calculator = {
        init: function() {
            this.cacheDom();
        },

        cacheDom: function() {
            let numberBtn = document.querySelectorAll('.num');
            let decimalBtn = document.getElementById('decimal');
            let operandBtn = document.querySelectorAll('.operand');
            let clearBtn = document.getElementById('clear');
            let deleteBtn = document.getElementById('del');
            let equalsBtn = document.querySelector('.equals');
            let currentResult = document.getElementById('current-result');
            let previousResult = document.getElementById('previous-result');
            let currentResultText = document.querySelector('.display-current');
            let previousResultText = document.querySelector('.display-previous');
            currentResultText.innerText = '30'; //currentResult displays w/out formatting, this keeps padding etc

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
            }

        },

        clear: function() {
            // this.currentResultText.innerText = ''; //this variable remains undefined if called from here.
            // this.previousResultText.innerText = '';
            console.log('clear');
        },
    }
    calculator.init();
    
// })();

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