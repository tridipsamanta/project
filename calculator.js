// Select the input field and all buttons
const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

// Initialize expression string
let expression = "";

// Loop through each button and add event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "AC") {
            expression = "";
            input.value = "";
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else if (value === "=") {
            try {
                input.value = eval(expression);
                expression = input.value;
            } catch (e) {
                input.value = "Error";
                expression = "";
            }
        } else if (value === "+/-") {
            if (expression) {
                if (expression.charAt(0) === "-") {
                    expression = expression.slice(1);
                } else {
                    expression = "-" + expression;
                }
                input.value = expression;
            }
        } else {
            expression += value;
            input.value = expression;
        }
    });
});
