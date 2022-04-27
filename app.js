let header = document.querySelector('h1');
let dec = document.querySelector('.dec');
let res = document.querySelector('.res');
let inc = document.querySelector('.inc');
let body = document.querySelector('body')

function decrease (){
    header.textContent--
}

dec.addEventListener('click',decrease)

function reset (){
    header.textContent
}

dec.addEventListener('click',reset)

function increase (){
    header.textContent

}


let Dex = () => {
    body.style.backgroundColor = 'yellow'
} 
dec.addEventListener('click', Dex)

let Rex = () => {
    body.style.backgroundColor = 'red'
} 
res.addEventListener('click', Rex)

let incx = () => {
    body.style.backgroundColor = 'green'
} 
inc.addEventListener('click', incx)





