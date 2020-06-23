$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

var nodeArray = [
    document.querySelector("#intro"),
    document.querySelector("#about"),
    document.querySelector("#projects"),
    document.querySelector("#contact")
];

ScrollReveal().reveal(nodeArray);
ScrollReveal().reveal('.nodeList');
ScrollReveal().reveal('.card');