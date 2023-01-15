let texts = ['./images/1.jpg', './images/2.jpg', './images/3.jpg'];
let img = document.querySelector('#slider');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let i = 0;

img.src = texts[0];

left.addEventListener('click', () => {
if ( i <= 2 && i > 0) {
    i--;
    sliders(i);
    makeTimer();
}
});

right.addEventListener('click', () =>{
if (i < 2 && i >= 0) {
    i++;
    sliders(i);
    makeTimer();
}
});

function sliders(i) {
img.src = texts[i];
}

let timer = 0;
function makeTimer () {
clearInterval(timer);
timer = setInterval(() => {
    i++;
    if (i > 2) {
        i = 0;
    }
    sliders(i);
} , 2000);
}
makeTimer();