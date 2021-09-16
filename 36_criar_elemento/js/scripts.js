// Inserindo o elemento no body

const novoParagrafo = document.createElement("p");

const texto = document.createTextNode("Este é o conteúdo do parágrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

const body = document.querySelector("body");

body.appendChild(novoParagrafo);

// Inserindo um container no body

const container = document.querySelector("#container");

console.log(container);

const el = document.createElement("span");

el.appendChild(document.createTextNode("Texto com span!"));

console.log(el);

container.appendChild(el);