const title = document.querySelector("#title");

title.setAttribute("class", "testando_atributo");

console.log(title);

const btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

const subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "titulo_2");

// Remover atributo

const lista = document.querySelector("#lista");

lista.removeAttribute("id");