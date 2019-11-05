document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".menu__container");
  const body = document.body;
  const elements = [hamburger, nav];

  const handleClick = () => {
    body.style.overflow = body.style.overflow === "" ? "hidden" : "";
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("menu__container--active");
  };

  elements.forEach(element => {
    element.addEventListener("click", handleClick);
  });
});
