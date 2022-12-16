const menuOpen = document.getElementById("menu");
const menuClose = document.getElementById("close");
const navBar = document.querySelector("nav");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("null");
const btn = document.getElementById("btn");
const gdeAfter = document.querySelector(".havecart");
const buttons = document.querySelectorAll("[data-carousel-button]");
const cart = document.querySelector(".havecart");
const card = document.querySelector(".cart");
const cartNumber = document.querySelector(".cart-number");
const nullNumber = document.getElementById("null");
const modal = document.querySelector(".modal");
const empty = document.querySelector(".empty");
const gear = document.querySelector(".gear");
const quantity = document.querySelector(".quantity");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

let count = 0;
menuOpen.addEventListener("click", () => {
  navBar.classList.add("open_menu");
});

menuClose.addEventListener("click", () => {
  navBar.classList.remove("open_menu");
});

plus.addEventListener("click", () => {
  number.innerText = count;
  count++;
});
minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else {
    return;
  }
  number.innerText = count;
});

btn.addEventListener("click", () => {
  if (nullNumber.innerText === "0") {
    return;
  }
  cartNumber.classList.add("show-number");
  cartNumber.innerText = number.innerText;
});

card.addEventListener("click", () => {
  modal.classList.toggle("show");
  if (cartNumber.innerText === "0" || cartNumber.innerText === "") {
    empty.classList.add("flex");
    return;
  }
  empty.classList.remove("flex");
  gear.classList.add("show");
  quantity.innerText = nullNumber.innerText;
});
