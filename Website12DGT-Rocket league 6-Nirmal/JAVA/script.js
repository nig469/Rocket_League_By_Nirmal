const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
// setTimeout(function () {
//   window.scrollBy(0, window.innerHeight - 70);
//   }, 200) 