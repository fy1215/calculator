const display = document.getElementById('display');
const btnNumber = document.querySelectorAll('.btn.number');
const btnOperator = document.querySelectorAll('.btn.operator');
const btnEqual = document.querySelector('.btn.equals');
const btnClearBtn = document.querySelector('.btn.clear');

function calculate(expression) {
    let tokens = expression.split(/([+\-×÷])/);
    let result = Number(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
        const op = tokens[i];
        const num = Number(tokens[i + 1]);
        if (op === '+') {
            result = result + num;
        } else if (op === '-') {
            result = result - num;
        } else if (op === '×') {
            result = result * num;
        } else if (op === '÷') {
            result = result / num;
        }
    }
    return result;
}

btnNumber.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.textContent !== '0') {
            display.textContent += btn.textContent;
        } else {
            display.textContent = btn.textContent;
        }
    })
});

btnOperator.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.textContent !== '0' && !isNaN(Number(display.textContent.slice(-1)))) {
            display.textContent += btn.textContent;
        }
    })
})

btnEqual.addEventListener('click', () => {
    let result = calculate(display.textContent);
    display.textContent = result;
})

btnClearBtn.addEventListener('click', () => {
    display.textContent = 0;
})
