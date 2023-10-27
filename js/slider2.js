let slider = document.querySelector('.slider2 .list');
let items = document.querySelectorAll('.slider2 .list .item');
let next = document.getElementById('next2');
let prev = document.getElementById('prev2');
let dots = document.querySelectorAll('.slider2 .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 10000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider2 .dots li.active2');
    last_active_dot.classList.remove('active2');
    dots[active].classList.add('active2');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 10000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
