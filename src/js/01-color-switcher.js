const body = document.querySelector("body");
const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");
    
let timerId = null;

buttonStop.disabled = true;
buttonStart.addEventListener("click", onStart);
buttonStop.addEventListener("click", onStop);

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onStart(evt) {
    buttonStop.disabled = false;
    buttonStart.disabled = true;
    body.style.backgroundColor = getRandomHexColor();
    
    timerId = setInterval(() => {
    body.style.backgroundColor =  getRandomHexColor();
}, 1000);
};

function onStop(){
clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
};

