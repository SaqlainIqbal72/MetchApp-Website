// let hame=document.getElementById('hame');

// let links=document.getElementsByClassName('links')
// console.log(links)
// function hameBurger(){
    
// }

let hame=document.getElementById ('hame');
console.log(hame)
let ul=document.getElementById('UL');
hame.addEventListener("click",()=>{
    ul.style.left='0px';
})

let close =document.getElementById('close');

close.addEventListener("click",()=>{
    ul.style.left='-395px'
})

