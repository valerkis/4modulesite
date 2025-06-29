document.addEventListener("DOMContentLoaded", function () {

//переход к другим разделам
const openpage = document.getElementById('spacebtn');

openpage.addEventListener('click', () => {
  window.location.href = 'space.html';
});

const openpage2 = document.getElementById('playerbtn');

openpage2.addEventListener('click', () => {
  window.location.href = 'player.html';
});

// const openpage3 = document.querySelector('.order');

// openpage3.addEventListener('click', () => {
//   window.location.href = '404.html';
// });

//добавление в корзину
  const baskets = document.querySelectorAll('.basket');

  baskets.forEach(basket => {
    basket.addEventListener('click', () => {
      basket.style.backgroundImage = 'url("./img/basketadded.svg")';
    });
  });

//стиль кнопок при наведении
const button = document.querySelector('#spacebtn');
const space = button.querySelector('#space');
const btntxt = button.querySelector('#spacebtntxt');

button.addEventListener('mouseenter', () => {
  space.style.backgroundImage = 'url("./img/space_dark.svg")';
  btntxt.style.color = '#212121';
});

button.addEventListener('mouseleave', () => {
  space.style.backgroundImage = 'url("./img/space_light.svg")';
  btntxt.style.color = '#ffffff';
});

const button2 = document.querySelector('#playerbtn');
const player = button2.querySelector('#playeric');
const btntxt2 = button2.querySelector('#playerbtntxt');

button2.addEventListener('mouseenter', () => {
  player.style.backgroundImage = 'url("./img/player_dark.svg")';
  btntxt2.style.color = '#212121';
});

button2.addEventListener('mouseleave', () => {
  player.style.backgroundImage = 'url("./img/player_light.svg")';
  btntxt2.style.color = '#ffffff';
});


//форма
const orderBtn = document.querySelector('.order');
const popup = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close');

orderBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

})