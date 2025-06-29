document.addEventListener("DOMContentLoaded", function () {

//разделы в категориях
const spaceBlock = document.querySelector('#spacesec');
const spacePic = document.querySelector('#space_pic');
const playerBlock = document.querySelector('#player');
const playerPic = document.querySelector('#player_pic');
const shopBlock = document.querySelector('#merch');
const shopPic = document.querySelector('#shop_pic');

spaceBlock.addEventListener('mouseenter', () => {
  spacePic.style.backgroundImage = 'url("./img/space_colorpic.svg")';
}); 

spaceBlock.addEventListener('mouseleave', () => {
  spacePic.style.backgroundImage = 'url("./img/space_pic.svg")'; 
});

playerBlock.addEventListener('mouseenter', () => {
  playerPic.style.backgroundImage = 'url("./img/player_colorpic.svg")';
}); 

playerBlock.addEventListener('mouseleave', () => {
  playerPic.style.backgroundImage = 'url("./img/player_pic.svg")'; 
});

shopBlock.addEventListener('mouseenter', () => {
shopPic.style.backgroundImage = 'url("./img/shop_colorpic.svg")';
}); 

shopBlock.addEventListener('mouseleave', () => {
  shopPic.style.backgroundImage = 'url("./img/shop_pic.svg")'; 
});

// путь к разделам
const openspace = document.getElementById('spacesec');
const openplayer = document.getElementById('player');
const openshop = document.getElementById('merch');

openspace.addEventListener('click', () => {
  window.location.href = 'space.html';
});

openplayer.addEventListener('click', () => {
  window.location.href = 'player.html';
});

openshop.addEventListener('click', () => {
  window.location.href = 'shop.html';
});

})