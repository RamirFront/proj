const $burger = document.querySelector('.menu')
const $nav = document.querySelector('.header__nav')

$burger.addEventListener('click', () => {
  $nav.classList.toggle('active')
})