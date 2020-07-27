const navSlide =()=> {
const burger = document. querySelector('.burger');
const nav = document.querySelector(.'nav links');

const navLink = document.querySelector(".nav-links li");

burger.addEventListener("click", () =>) {
    nav.classList. toggle("nav-active");

    //burger animation
    burger.classList.toggle("toggle");

    navLink.forEach(link, index) => {
        link.style.animation ='navLinkFade 0.5s' ease fowards $
    }
