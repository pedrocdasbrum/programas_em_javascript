// Criando o elemento

const el = document.createElement("div");

el.classList = "div_criada";

console.log(el);

const container = document.querySelector("#container");

// Inserindo elemento filho

container.appendChild(el);

// Inserindo elemento com o método insertBefore

const el2 = document.createElement("div");

el2.classList = "div_before";

const el3 = document.querySelector("#container .div_criada");

console.log(el3);

container.insertBefore(el2, el3);