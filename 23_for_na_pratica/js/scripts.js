const lista = ["Laranja", "Maçã", "Pêra", "Jaca", "Limão"];

const listaUl = document.createElement("ul");

const body = document.getElementsByTagName("body");

// console.log(body[0]);

body[0].appendChild(listaUl);

const listaNoBody = document.getElementsByTagName("ul");

console.log(listaNoBody[0]);

for(let i = 0; i < lista.length; i++) {
    const liFor = document.createElement("li");

    const textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);
    
    listaNoBody[0].appendChild(liFor);
}