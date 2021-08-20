const burgerMenu = document.querySelector('.burger-menu');
const btnBurgerMenu = document.querySelector('.btn-burger-menu');
const burgerPathBtn = document.querySelectorAll('.menu-global');
const body = document.body
const aTop = document.querySelector('.a-top');

function burgerMenuHandler(){
  for(let i = 0; i < burgerPathBtn.length ; i++){
    burgerPathBtn[i].classList.toggle('click')
  }
  burgerMenu.classList.toggle('open')
  body.classList.toggle('burgerOpen-body')
  aTop.classList.toggle('burgerOpen-aTop')
}
btnBurgerMenu.addEventListener('click',burgerMenuHandler)

burgerMenu.addEventListener('click',burgerMenuHandler)
