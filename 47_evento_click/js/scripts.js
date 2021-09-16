// Inserindo o evento click no elemento

const btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function() {
    console.log("Clicou!");

    console.log(this);

    this.style.color = "red";
});

// Evento click afetando outros elementos

const title = document.querySelector("#title");

title.addEventListener("click", function() {
    const subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";
});

// Evento double click

const subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function() {
    console.log("Click duplo!")
});