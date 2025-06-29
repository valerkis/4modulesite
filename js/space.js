document.addEventListener("DOMContentLoaded", function () {

const button = document.querySelector('#shopbtn');
const shop = button.querySelector('#shop');
const btn2txt = button.querySelector('#shopbtntxt');

button.addEventListener('mouseenter', () => {
  shop.style.backgroundImage = 'url("./img/shop_dark.svg")';
  btn2txt.style.color = '#212121';
});

button.addEventListener('mouseleave', () => {
  shop.style.backgroundImage = 'url("./img/shop_light.svg")';
  btn2txt.style.color = '#ffffff';
});

const button2 = document.querySelector('#playerbtn2');
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

//переход к другим разделам
const openpage = document.getElementById('shopbtn');

openpage.addEventListener('click', () => {
  window.location.href = 'shop.html';
});

const openpage2 = document.getElementById('playerbtn2');

openpage2.addEventListener('click', () => {
  window.location.href = 'player.html';
});


//слайдер
const renders = document.querySelectorAll(".render");
  const fullscreens = document.querySelectorAll(".fullscreen");

  renders.forEach((render, index) => {
    const fullscreen = document.getElementById(`full${index + 1}`);

    render.addEventListener("click", () => {
      const isActive = fullscreen.classList.contains("active");

      fullscreens.forEach(fs => fs.classList.remove("active"));

      if (!isActive) {
        fullscreen.classList.add("active");
      }
    });
  });

// закрыть
  fullscreens.forEach(fs => {
    fs.addEventListener("click", () => {
      fs.classList.remove("active");
    });
  });

})