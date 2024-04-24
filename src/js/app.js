// peer-checked:translate-y-0

const ul = document.querySelector('#nav-ul');
const label = document.querySelector('#nav-label');
const input = document.querySelector('#menu');

label.addEventListener('click', function(){
    // console.log(ul.classList);
    if(input.checked){
        ul.classList.add('translate-y-0');
        ul.classList.remove('-translate-y-[120%]');
    }else{
        ul.classList.remove('translate-y-0');
        ul.classList.add('-translate-y-[120%]');
    }
})