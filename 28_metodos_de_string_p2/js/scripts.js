// Métodos toLowerCase e toUpperCase

const frase = "Esta é a frase que vamos manipular";

const fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

// Método trim

const nome = "                  Pedro         ";

console.log(nome);

const nomeTrim = nome.trim();

console.log(nomeTrim);

// Método split

console.log(frase.split(" "));

const tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// Método lastIndexOf

const fraseDois = "Eu quero a última palavra teste desta frase teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));