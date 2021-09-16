var teste = 5;

console.log(this);
console.log(this.teste);
console.log(teste);

const pessoa = {
    nome: "Pedro",
    idade: 20,
    falar: function() {
        console.log("Olá! Tudo bem?");
    },
    dizerNome: function() {
        console.log("O meu nome é: " + this.nome);
    },
    aniversario: function() {
        this.idade += 1; 
    },
    saudacao: function() {
        return "Sr. " + this.nome;
    },
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

const sdc = pessoa.saudacao();

console.log("Olá! " + sdc);