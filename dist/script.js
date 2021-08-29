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
const closeBurgerMenu = document.querySelector('.burger-menu-close')
const menuMobile = document.querySelector('.menu-mob');
const body = document.body

closeBurgerMenu.addEventListener('click', e => {
    menuMobile.classList.add('fideout')
    menuMobile.classList.remove('fidein')
    body.classList.remove('open-menu-img')
    setTimeout(()=>{
      body.classList.remove('open-menu')
    },600)
})

burgerMenu.addEventListener('click',() => {
    body.classList.add('open-menu')
    menuMobile.classList.add('fidein')
    menuMobile.classList.remove('fideout')
  })

// Работа бокового меню
  const drawer = document.querySelector('.drawer');
  const openDrawer = () => {
    drawer.classList.toggle('movein')
    setTimeout(() => {
      body.classList.remove('open-menu')
      menuMobile.classList.remove('fideout','fidein')
    },1000)

  }
  const closeDrawer = () => {
    drawer.classList.remove('movein')
    clearForm()
  }

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

// Отправка данных формы
const form = document.querySelector('#form')
const btnSub = form.querySelector('button')
form.addEventListener('submit', sendForm)

async function sendForm(e){
  e.preventDefault();
  drawer.classList.add('form_sending')
  let formData = new FormData(form)
  let response = await fetch('sendmail.php', {
    method: 'POST',
    body: formData
  })
  if(response.ok){
    let result = await response.json();
    alert(result.message);
    form.reset()
    drawer.classList.remove('form_sending')
  }
}

form.addEventListener('change',() => formValidate(form))
function formValidate(form){
  let error = 0;
  let formReq = document.querySelectorAll('.req');

  for(let i = 0; i < formReq.length; i++){
    const input = formReq[i];
    input.classList.remove('error')

    if(input.classList.contains("email")){
      if(emailValid(input)){
        input.classList.add('error')
        error++
      }
    } else if(input.value === ''){
        input.classList.add('error')
        error++
      }
    }
  console.log(error)
  error == 0 ? btnSub.disabled=false:btnSub.disabled=true
  }
function clearForm(){
  for(let i =0; i < form.length; i++){
    let input = form[i]
    input.classList.remove('error')
    input.value = ''
  }
}
function emailValid(input){
  return !/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(input.value)
}
