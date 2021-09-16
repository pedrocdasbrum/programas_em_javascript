function exibir(num) {
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    const op = a + b;

    callback(op);
}

function multiplicacao(a, b, cb) {
    const op = a * b;

    cb(op);
}

soma(2, 2, exibir);

multiplicacao(2, 8, exibir);