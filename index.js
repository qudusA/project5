const subMenu = document.querySelector('.sub-menu');
const arrow = document.querySelectorAll('.arrow');
// console.log(arrow)
// const menu = document.querySelector('.menu');
// const span = document.querySelector('span');

for(let i = 0; i < arrow.length; i++){
    // console.log(arrow[i])
    arrow[i].addEventListener('click', (e)=>{
        // console.log(e.target)
        let ew = e.target
        // console.log(ew)
        e.target.parentElement.parentElement.classList.toggle('show')
    });
}

let sideBar = document.querySelector('.sidebar')
// console.log(sideBar)
let menu = document.querySelector('.bx-menu')
// console.log(menu)
menu.addEventListener('click', ()=>{
    // console.log(menu)
    if(sideBar.classList.contains('close')){
        sideBar.classList.remove('close')
    }else{
        sideBar.classList.add('close')
    }
    // sideBar.classList.toggle('close')
})
// dropDown.addEventListener('click', ()=>{
//     // console.log('hi')
//     subMenu.classList.toggle('show')
//     if(subMenu.classList.contains('show')){
//         subMenu.style.display = 'none'
//     }else{
//         subMenu.style.display = 'block'

//     }
// })

// menu.addEventListener('click', ()=>{
//     if(true){

//     }
// } )