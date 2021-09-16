function primeiraFuncao() {
    console.log("Olá, Mundo das Funções!");
}

primeiraFuncao();

function dizerNome(nome) {
    console.log("O nome é: " + nome);
}

dizerNome("Pedro");
dizerNome("Mateus");
dizerNome("Lucas");

const nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function adicao(a, b) {
    const soma = a + b;

    return soma;
}

const adicaoUm = adicao(2, 5);

console.log(adicaoUm);

const adicaoDois = adicao(5, 5);

console.log(adicaoDois);

console.log(adicao(4, 5));