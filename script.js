 (function() {
    let calculator = {
        init: function() {
            this.cacheDom();
            this.bindEvents();
        },

        cacheDom: function() {
            this.numberBtn = document.getElementsByClassName('num');
            this.decimalBtn = document.getElementById('decimal');
            this.operandBtn = document.querySelectorAll('.operand');
            this.clearBtn = document.getElementById('clear');
            this.deleteBtn = document.getElementById('del');
            this.equalsBtn = document.querySelector('.equals');
            this.currentResult = document.getElementById('current-result');
            this.previousResult = document.getElementById('previous-result');
            this.currentResultText = document.querySelector('.display-current');
            this.previousResultText = document.querySelector('.display-previous');
            //currentResultText.innerText = '30'; //currentResult displays w/out formatting, this keeps padding etc

        },

        bindEvents: function() {

            for(let i = 0; i < this.numberBtn.length; i++) {
                this.numberBtn[i].addEventListener('click', this.addNumbersToDisplay.bind(this));
                //getElementsByClassName returns an empty array apparently, so you have to loop through them
            }

            for(let i = 0; i < this.operandBtn.length; i++) {
                this.operandBtn[i].addEventListener('click', this.testFunc.bind(this));
            }

            this.equalsBtn.addEventListener('click', this.testFunc.bind(this));
            this.decimalBtn.addEventListener('click', this.testFunc.bind(this));

        },

        testFunc: function() {
            this.currentResultText.innerText = '100000000';
            
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

        addNumbersToDisplay: function() {
            this.numberBtn.forEach(button => {
                let numberBtnValue = button.value;
            }); //this doesn't work. Potentially could use for... in and/or item.id

            this.currentResultText.innerText = toString(numberBtnValue); //logs undefined object, needs to get the specific
            //number button, because I think it's reading all of them and returning an array or something.
        },

        clear: function() {
            // this.currentResultText.innerText = ''; //this variable remains undefined if called from here.
            // this.previousResultText.innerText = '';
            console.log('clear');
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