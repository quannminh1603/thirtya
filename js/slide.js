var container = document.querySelector('.container_slide');
var slide = document.querySelector('.slides');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var slides = document.querySelectorAll('.item');
var slide_Width = slides[0].clientWidth;
var index = 1;
var firstclone = slides[0].cloneNode(true);
var lastclone = slides[slides.length - 1].cloneNode(true);
firstclone.id = 'firstclone';
lastclone.id = 'lastclone';
slide.append(firstclone);
slide.prepend(lastclone);
const interval = 5000;
var slide_in;
slide.style.transform = `translateX(-${index*slide_Width}px)`;

const start = ()=>{
   slide_in = setInterval(() => {
        moveNextBtn();
    }, interval);
}
const moveNextBtn = ()=>{
    if (index >= slides.length - 1 ) return;
    index++;
    slide.style.transform = `translateX(-${index*slide_Width}px)`;
    slide.style.transition =`0.5s`;
}
const movePrevBtn = ()=>{
    if (index <= 0 ) return;
    index--;
    slide.style.transform = `translateX(-${index*slide_Width}px)`;
    slide.style.transition =`0.5s`;
}
// next
next.addEventListener("click",moveNextBtn);
// prev
prev.addEventListener("click",movePrevBtn);
slide.addEventListener("transitionend",()=>{
    slides = document.querySelectorAll('.item');
    if (slides[index].id == firstclone.id) {
        index =  1;  // để = 1
        slide.style.transform = `translateX(-${index*slide_Width}px)`;
        slide.style.transition =`none`;
    }
    if (slides[index].id == lastclone.id) {
        index = slides.length - 2;
         slide.style.transform = `translateX(-${index*slide_Width}px)`;
         slide.style.transition =`none`;
     }
});
container.addEventListener("mousemove",()=>{
    clearInterval(slide_in);
});
container.addEventListener("mouseleave",start);
start();


const menu_mb = document.querySelector('.js-modal');
const modal = document.querySelector('.modal-js');
const close = document.querySelector('.close_btn');

function showMenuMB() {
  modal.classList.add('open_menu');
}

function removeMenu() {
  modal.classList.remove('open_menu');
}

menu_mb.addEventListener('click', showMenuMB);
close.addEventListener('click', removeMenu)