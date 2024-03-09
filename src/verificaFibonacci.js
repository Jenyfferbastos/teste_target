function verificaFibonacci(num) {
    let a = 0;
    let b = 1;

    while (b < num) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    if (b === num) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

// Número a ser verificado
const numero = 13;
verificaFibonacci(numero);