// Evento de mouseover no elemento

const title = document.querySelector("#title");

title.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

// Evento de mouseout no elemento

title.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
});

// Afetar outro elemento com o evento mouseover

const subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function() {
    const legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");
});

subtitle.addEventListener("mouseout", function() {
    const legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");
});