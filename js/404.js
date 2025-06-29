document.addEventListener("DOMContentLoaded", function () {

const button = document.querySelector('#homebtn');
const home = button.querySelector('#home');
const btntxt = button.querySelector('#homebtntxt');

button.addEventListener('mouseenter', () => {
  home.style.backgroundImage = 'url("./img/home_dark.svg")';
  btntxt.style.color = '#212121';
});

button.addEventListener('mouseleave', () => {
  home.style.backgroundImage = 'url("./img/home_light.svg")';
  btntxt.style.color = '#ffffff';
});

//переход на главную
const openpage = document.getElementById('homebtn');

openpage.addEventListener('click', () => {
  window.location.href = 'index.html';
});

})