document.addEventListener("DOMContentLoaded", function () {

// кнопка на главной
const button = document.querySelector('.vertical');
const map = button.querySelector('#map');
const player = button.querySelector('#play');
const shop = button.querySelector('#shop');
const line = button.querySelector('#line');

button.addEventListener('mouseenter', () => {
  map.style.backgroundImage = 'url("./img/map_dark.svg")';
  player.style.backgroundImage = 'url("./img/player_dark.svg")';
  shop.style.backgroundImage = 'url("./img/shop_dark.svg")';
  line.style.backgroundColor = '#212121';
});

button.addEventListener('mouseleave', () => {
  map.style.backgroundImage = 'url("./img/map_light.svg")';
  player.style.backgroundImage = 'url("./img/player_light.svg")';
  shop.style.backgroundImage = 'url("./img/shop_light.svg")';
  line.style.backgroundColor = '#ffffff';
});

// путь к разделам
const openpage = document.getElementById('index');

openpage.addEventListener('click', () => {
  window.location.href = 'sections.html';
});

})