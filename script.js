document.addEventListener("DOMContentLoaded", function() {
  const elements = [
    document.querySelector(".hamburger"),
    document.querySelector(".menu__container")
  ];

  const handleClick = () => {
    elements[0].classList.toggle("hamburger--active");
    elements[1].classList.toggle("menu__container--active");
  };

  elements.forEach(element => {
    element.addEventListener("click", handleClick);
  });
});
