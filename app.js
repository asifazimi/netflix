// select items
const items = document.querySelectorAll(".part");

items.forEach(function (item) {
  const quastion = item.querySelector(".quastion");
  quastion.addEventListener("click", (e) => {
    let answer = e.currentTarget.nextElementSibling;
    const plus = e.currentTarget.children[1].children[0];
    const circle = e.currentTarget.children[1].children[1];
    answer.classList.toggle("show-answer");
    plus.classList.toggle("remove-plus");
    circle.classList.toggle("show-circle");
  });
});
