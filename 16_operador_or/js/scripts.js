const idade = 12;
const nome = "João";

if(nome === "João" || idade > 14) {
    console.log("Pode entrar na aula de esgrima");
} else {
    console.log("Não pode entrar");
}

if(nome === "Pedro" && (30 > 20 || 10 === 10)) {
    console.log("Testando!");
} else {
    console.log("Não entrou!");
}