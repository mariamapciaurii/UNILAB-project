"use strict";

console.log("AVOE");

const menuToggleButton = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");

const body = document.getElementsByTagName("body")[0];

menuToggleButton.addEventListener("click", () => {
  mobileOverlay.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  body.classList.toggle("overflowHidden");
});

mobileOverlay.addEventListener("click", () => {
  mobileOverlay.classList.remove("active");
  mobileMenu.classList.remove("active");
  body.classList.remove("overflowHidden");
});
