const display = document.getElementById('display');
const btnNumber = document.getElementsByClassName('btn number');
const btnOperator = document.getElementsByClassName('btn operator');
const btnEquals = document.getElementsByClassName('btn equals');
const btnClear = document.getElementsByClassName('btn clear');
let ary = [];


Array.from(btnNumber).forEach(index => {
    index.addEventListener('click', () => {
        if (display.textContent !== '0') {
            display.textContent += index.textContent;
        } else {
            display.textContent = index.textContent;
        }
    })
});

Array.from(btnOperator).forEach(index => {
    index.addEventListener('click', () => {
        if (display.textContent !== '0' && !isNaN(Number(display.textContent.slice(-1)))) {
            display.textContent += index.textContent;
        }
    })
})

btnEquals[0].addEventListener('click', () => {
    ary = display.textContent.split(/([+\-×÷])/);
    let result = Number(ary[0]);
    for (let i = 1; i < ary.length; i += 2) {
        const op = ary[i];
        const num = Number(ary[i + 1]);

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

    display.textContent = result;
})

btnClear[0].addEventListener('click', () => {
    display.textContent = 0;
})