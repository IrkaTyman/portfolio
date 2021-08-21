// Фильтрация работ
const worksBlock = document.querySelector('.works_block');
const typeBlock = document.querySelector('.works_view-type');

typeBlock ? typeBlock.addEventListener('click', e => {
  let targetClass = e.target.className.baseVal;
  if(targetClass == 'works_view-type-row') worksBlock.classList.remove('works_block-card')
  else if (targetClass == 'works_view-type-card') worksBlock.classList.add('works_block-card')
}) : null

// Работа бургер меню
const burgerMenu = document.querySelector('.burger-menu');
const navSite = document.querySelector('.nav-site');
const body = document.body

burgerMenu.addEventListener('click', e => {
  if(body.classList.contains('open-menu')){
    navSite.classList.add('fideout')
    navSite.classList.remove('fidein')
    setTimeout(()=>{
      body.classList.remove('open-menu')
      burgerMenu.src='img/menu.svg'},600)

  } else {
    body.classList.add('open-menu')
    navSite.classList.add('fidein')
    navSite.classList.remove('fideout')
    burgerMenu.src='img/closeMenu.svg'
  }
})

//Анимация птички
const eyeFollow = () => {

  body.addEventListener('mousemove', (e) => {
  let bird = document.querySelector(".bird-anim");
  let x = bird.offsetLeft + (bird.clientWidth / 2);
  let y = bird.offsetTop + (bird.clientHeight / 2);
  let rad = Math.atan2(e.pageX - x, e.pageY - y);
  let rot = (rad * (180 / Math.PI) * -1) + 270;
  if(rot < 297 && rot > 233 || rot < 169 || rot > 369){
    if(rot > 369){
      rot = 369
    } else if (rot < 169){
      rot = 169
    } else if(rot > 265){
      rot = 297
    } else {
      rot = 233;
    }
  }
  if(rot < 234){
    bird.style.cssText= `
      position: absolute;
      top:var(--padding1rem);
      left:46%;
      transform: rotate(${rot}deg) scaleY(-1)
    `
  } else {
    bird.style.cssText= `
      position: absolute;
      top:var(--padding1rem);
      left:46%;
      transform: rotate(${rot}deg)
    `
  }
  })};
eyeFollow()

// Работа бокового меню
const drawer = document.querySelector('.drawer_container');
const openDrawer = () => {
  drawer.classList.toggle('movein')
  setTimeout(() => {
    body.classList.remove('open-menu')
    burgerMenu.src='img/menu.svg'
    navSite.classList.remove('fideout','fidein')
  },1000)

}
const closeDrawer = () => {
  drawer.classList.remove('movein')
}

// Отправка данных формы
const formValidate = (form) => {
  let error = null;
  let formReq = document.querySelectorAll('.req');

  for(let i = 0; i < formReq.length; i++){
    const input = formReq[i];
    input.classList.remove('error')

    if(input.classList.contains("email")){
      if(emailValid(input)){
        input.classList.add('error')
        error++
      }
    } else {
      if(input.value.length < 2){
        input.classList.add('error')
        error++
      }
    }
  }
}
const emailValid = (input) => {
  return !/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(input.value)
}
async function sendForm(e){
  e.preventDefault();
  let error = formValidate(form)
}
const form = document.querySelector('#form')
form.addEventListener('submit', sendForm)
