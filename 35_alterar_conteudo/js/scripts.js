// Selecionando o elemento

const title = document.querySelector("#title");

// Alterando elemento com a propriedade innerHTML

title.innerHTML = "Testando o texto alterado";

// Alterando elemento com a propriedade textContent -> mais utilizado, recomendado e performado

const subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent";