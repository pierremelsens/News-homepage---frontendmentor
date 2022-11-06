/*const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
});*/

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener("click", () => {
  if(burger.classList.contains("active")) {
    burger.classList.remove("active");
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
    burger.classList.add("active");
  }
})