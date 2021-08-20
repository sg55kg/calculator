(function() {
    let calculator = {
        init: function() {
            this.cacheDom();
        },

        cacheDom: function() {
            const numberBtn = document.querySelectorAll('.num');
            const decimalBtn = document.getElementById('decimal');
            const operandBtn = document.querySelectorAll('.operand');
            const currentResult = document.getElementById('current-result');
            const previousResult = document.getElementById('previous-result');
            
            currentResult.innerText = 'testing'; //this replaces the formatting for original p element test, so will need to add 
            //numbers that appear in results to a class
        },

        operate: function(val1, val2, operator) {

        },
    }
    calculator.init();
})();