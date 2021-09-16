// Criando um elemento

const elemento = document.createElement("h3");

elemento.classList = "testando_classe";

const texto = document.createTextNode("Este é o texto do h3");

elemento.appendChild(texto);

console.log(elemento);

// Selecionando o elemento que quero trocar

const title = document.querySelector("#title");

console.log(title);

// Selecionando o pai do elemento

const pai = title.parentNode;

// Trocando os elementos

pai.replaceChild(elemento, title);