$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var nodeArray = [
  document.querySelector("#intro"),
  document.querySelector("#about"),
  document.querySelector("#projects"),
];

ScrollReveal().reveal(nodeArray);
ScrollReveal().reveal(".nodeList");
ScrollReveal().reveal(".card");
