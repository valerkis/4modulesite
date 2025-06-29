document.addEventListener("DOMContentLoaded", function () {

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

const button2 = document.querySelector('#shopbtn');
const shop = button2.querySelector('#shop');
const btn2txt = button2.querySelector('#shopbtntxt');

button2.addEventListener('mouseenter', () => {
  shop.style.backgroundImage = 'url("./img/shop_dark.svg")';
  btn2txt.style.color = '#212121';
});

button2.addEventListener('mouseleave', () => {
  shop.style.backgroundImage = 'url("./img/shop_light.svg")';
  btn2txt.style.color = '#ffffff';
});

// переход к плеерам 1.0 и 2.0
const openpage = document.getElementById('v1');

openpage.addEventListener('click', () => {
  window.location.href = 'v1.html';
});

const openpage2 = document.getElementById('v2');

openpage2.addEventListener('click', () => {
  window.location.href = 'v2.html';
});

//переход к другим разделам
const openpage3 = document.getElementById('shopbtn');

openpage3.addEventListener('click', () => {
  window.location.href = 'shop.html';
});

const openpage4 = document.getElementById('spacebtn');

openpage4.addEventListener('click', () => {
  window.location.href = 'space.html';
});

})