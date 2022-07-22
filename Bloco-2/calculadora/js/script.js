// Obtendo o input do usuário
const num1 = prompt('Digite um número');
const operator = prompt('Digite o operador');
const num2 = prompt('Digite outro número');

// Salvando o HTML na memoria e mudando o body inicial
const tittleNum1 = document.getElementById('num-1');
const tittleNum2 = document.getElementById('num-2');
const tittleOperator = document.getElementById('operator');
const text = document.getElementById('text');

tittleNum1.innerHTML = num1;
tittleNum2.innerHTML = num2;
tittleOperator.innerHTML = operator;

// Efetua a operação e coloca no body
if (operator === '*') {
    if (isNaN(num1) || isNaN(num2)) {
        text.innerHTML = 'Digite números válidos.';
    } else {
    let result = Number(num1) * Number(num2);
    text.innerHTML = `O resultado da multiplação entre os números "${num1}" e "${num2}" é "${result}"`;
    }
} else if (operator === '/' || operator === '÷') {
    if (isNaN(num1) || isNaN(num2)) {
        text.innerHTML = 'Digite números válidos.';
    } else {
    let result = Number(num1) / Number(num2);
    let module = Number(num1) % Number(num2);
    text.innerHTML = `O resultado da divisão entre os números "${num1}" e "${num2}" é "${result}"`;
    if (module !== 0) {
        text.innerHTML += `<br>O módulo da divisão é "${module}</br>"`
    } else {
        text.innerHTML += `<br>Não restou módulo</br>`
    }
    }
} else if (operator === '+') {
    if (isNaN(num1) || isNaN(num2)) {
        text.innerHTML = 'Digite números válidos.';
    } else {
    let result = Number(num1) + Number(num2);
    text.innerHTML = `O resultado da soma entre os números "${num1}" e "${num2}" é "${result}"`;
    }
} else if (operator === '-') {
    if (isNaN(num1) || isNaN(num2)) {
        text.innerHTML = 'Digite números válidos.';
    } else {
    let result = Number(num1) - Number(num2);
    text.innerHTML = `O resultado da subtração entre os números "${num1}" e "${num2}" é "${result}"`;
    }
} else if (operator === '%') {
    if (isNaN(num1) || isNaN(num2)) {
        text.innerHTML = 'Digite números válidos.';
    } else {
    let result = Number(num1) % Number(num2);
    text.innerHTML = `O módulo dos números "${num1}" e "${num2}" é "${result}"`;
    }
} else if (operator === '**') {
    if (isNaN(num1) || isNaN(num2)) {
        text.innerHTML = 'Digite números válidos.';
    } else {
    let result = Number(num1) ** Number(num2);
    text.innerHTML = `O resultado da potenciação de "${num1}" elevado por "${num2}" é "${result}"`;
    }
} else {
    text.innerHTML = 'Digite um operador válido! (+, -, /, *, %, **)'
};
