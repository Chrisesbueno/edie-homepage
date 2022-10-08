const open = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-xmark');
const menu = document.querySelector('.containerModal');

open.addEventListener('click', function(){
    open.style.display = 'none'
    menu.style.width = '60%';
    menu.style.display = 'flex';
})

close.addEventListener('click', function(){
    menu.style.width = '0%';
    menu.style.display = 'none';
    open.style.display = 'block';  
})

console.log(open, close, menu)