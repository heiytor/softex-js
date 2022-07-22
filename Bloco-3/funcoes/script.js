function helloWorld () {
    console.log('Hello World!');
}

function sum(num1, num2) {
    if (isNaN(num1) || (isNaN(num2))) {
        return 'O input não é um número';
    } else {
        return num1 + num2;
    }
}

const squareRoot = n => n ** 0.5;

helloWorld()
console.log(sum(5, 10))
console.log(squareRoot(16))
