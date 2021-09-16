const pessoa = {
    nome: "Pedro",
    idade: 20,
    falar: function() {
        console.log("Olá! Tudo bem?");
    },
    soma: function(a, b) {
        return a + b;
    },
};

console.log(pessoa.nome);

pessoa.falar();

const somar = pessoa.soma(2, 2);

console.log(somar);