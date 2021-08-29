const BMIcon = document.querySelector('.burger-menu-icon')
const burgerMenu = document.querySelector('.burger-menu')

BMIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('BM-visible')
})
