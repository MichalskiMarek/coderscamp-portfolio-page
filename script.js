const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".menu__container");
console.log(document);

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("menu__container--active");
};

hamburger.addEventListener("click", handleClick);
