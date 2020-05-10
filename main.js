//focus
let userInput = document.querySelector('input');
let searchBtn = document.querySelector('button');
let li = document.querySelectorAll('.menuStore li') ;
let nameProducts = document.querySelectorAll('.box1 p');
let row = document.querySelector('.row');

let test = Array.from(nameProducts);
let arr = [];
test.forEach((item, index) => {
    return arr.push(item.textContent);
})
console.log(arr)

// add event for <li>
li[1].addEventListener('click', () => {
    let content = arr
    .filter((item, index) => {
        return item.indexOf('Cake') !== -1;
    })
    console.log(content)
})
li[2].addEventListener('click', () => {
    let content = arr
    .filter(item => {
        return item.indexOf('Cupcake') !== -1
    })
    console.log(content)
})
li[3].addEventListener('click', () => {
    let content = arr
    .filter(item => {
        return item.indexOf('Sweet') !== -1
    })
    console.log(content)
})
li[4].addEventListener('click', () => {
    let content = arr
    .filter(item => {
        return item.indexOf('Dougnut') !== -1
    })
    console.log(content)
})
li[0].addEventListener('click', () => {
    let content = arr
    console.log(content)
})