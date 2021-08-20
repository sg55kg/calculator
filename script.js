// (function() {
    let calculator = {
        init: function() {
            this.cacheDom();
            this.clear();
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
        },

        clear: function() {
            // this.currentResultText.innerText = ''; //this variable remains undefined if called from here.
            // this.previousResultText.innerText = '';
            console.log('clear');
        },
    }
    calculator.init();
    
// })();