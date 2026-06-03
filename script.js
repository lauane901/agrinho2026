// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    const botaoConhecer = document.getElementById("btnConhecer");
    const secaoEquilibrioo = document.getElementById("equilibrio");
    const cards = document.querySelectorAll(".card");

    // Rolar suavemente até a seção de conteúdo ao clicar no botão
    botaoConhecer.addEventListener("click", () => {
        secaoEquilibrioo.scrollIntoView({ behavior: "smooth" });
    });

    // Efeito interativo de hover nos cards usando JS (além do CSS)
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.backgroundColor = "#e8f5e9";
            card.style.transition = "background