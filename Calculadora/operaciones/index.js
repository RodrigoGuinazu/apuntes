let colors = require('colors');

function sumar(a, b){
    if (isNaN(a)|| isNaN(b)){
        throw new Error('Ambos datos deben ser numericos'.red);
    }

    return (a + ' + ' + b + ' = ' +(a + b));
}

function restar(a, b){
    if (isNaN(a)|| isNaN(b)){
        throw new Error('Ambos datos deben ser numericos'.red);
    }

    return (a + ' - ' + b + ' = ' +(a - b));
}

function multiplicar(a, b){
    if (isNaN(a)|| isNaN(b)){
        throw new Error('Ambos datos deben ser numericos'.red);
    }

    return (a + ' * ' + b + ' = ' +(a * b));
}

function dividir(a, b){
    if (isNaN(a)|| isNaN(b)){
        throw new Error('Ambos datos deben ser numericos'.red);
    }else if (b===0){
        throw new Error('No se puede dividir por el numero 0'.red);
    }

    return (a + ' / ' + b + ' = ' +(a / b));
}

module.exports = {
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar,
    dividir: dividir,
}