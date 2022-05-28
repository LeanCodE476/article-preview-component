const btn = document.getElementById("btn")
const imageFilter = document.getElementById("image");
const state = document.getElementById("state");
const state2 = document.getElementById("state2")
const main = document.getElementById("main");


btn.addEventListener('click', () => {
    state.classList.toggle("display")
    btn.classList.toggle("background");


})
