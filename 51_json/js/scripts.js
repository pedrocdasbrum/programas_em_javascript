const objs = [
    {
        nome: "Pedro",
        idade: 20,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: "Programador",
            empresa: "Empresa X",
        },
        hobbies: ["Programar", "Correr", "Ler"],
    },
    {
        nome: "João",
        idade: 25,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: ["Jogar", "Academia"],
    },
];

console.log(objs);

// Convertendo o objeto para JSON

const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);


// Convertendo JSON para objeto

const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
});