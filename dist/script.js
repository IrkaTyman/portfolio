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

// Работа бокового меню
const drawer = document.querySelector('.drawer_container');
const openDrawer = () => {
  drawer.classList.add('movein')
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
