const toggle = document.getElementById('toggle');
// for the toggle button
const close = document.getElementById('close');
//for the close button
const open = document.getElementById('open');
//for the open button
const modal = document.getElementById('modal');
//for the modal

// for the toggle navigation
toggle.addEventListener("click", () => document.body.classList.toggle("show-nav"));

//for the show modal
open.addEventListener("click",() => modal.classList.add("show-modal"));


//for the close button to hide
close.addEventListener("click",() => modal.classList.remove("show-modal"));

window.addEventListener('click',(e) => e.target == modal ? modal.classList.remove("show-modal"): 
false
);




























9

