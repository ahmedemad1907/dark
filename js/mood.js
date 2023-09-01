let home = document.querySelector('.home');
let content = document.querySelector('div');
let nave = document.querySelector('nav');
let btn =document.querySelector('button');
let an = document.querySelector('a')


function darkMood() {
btn.style.backgroundColor='transparent';
content.style.backgroundImage='  url(./pics/istockphoto-1363597434-612x612.jpg)';


nave.style.backgroundColor='black';

an.style.color='slategray';


}

btn.addEventListener('click',darkMood)



