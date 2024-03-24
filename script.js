const statuteButtons = document.querySelectorAll(".about-inner button");
const statuteTexts = document.querySelectorAll(".about-inner dd");

statuteButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    statuteTexts[index].classList.toggle("active");
  });
});
