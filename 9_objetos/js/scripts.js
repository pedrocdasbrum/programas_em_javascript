const obj = {
    nome: "Pedro",
    idade: "20",
    profissão: "Programador",
    estaTrabalhando: true,
}

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissão);

console.log("O meu nome é: " + obj.nome);

obj.nome = "Mateus";

console.log(obj.nome);

console.log(obj);

obj.graduacao = true;

console.log(obj);