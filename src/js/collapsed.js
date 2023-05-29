'use strict';

const designBox = document.querySelector('.js-design-box');
const designContainer = document.querySelector('.js-design-container');
const fillBox = document.querySelector('.js-fill-box');
const fillContainer = document.querySelector('.js-fill-container');
const shareBox = document.querySelector('.js-share-box');
const shareContainer = document.querySelector('.js-share-container');
const rotateDesign = document.querySelector('.js-arrow-design');
const rotatefill = document.querySelector('.js-arrow-fill');
const rotateShare = document.querySelector('.js-arrow-share');

function handlerClick1() {
  designContainer.classList.toggle('collapsed');
  fillContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  rotateDesign.classList.toggle('rotate');
}

designBox.addEventListener('click', handlerClick1);


function handlerClick2(){
  fillContainer.classList.toggle('collapsed');
  designContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  rotatefill.classList.toggle('rotate');
}

fillBox.addEventListener('click', handlerClick2);

function handlerClick3(){
  shareContainer.classList.toggle('collapsed');
  designContainer.classList.add('collapsed');
  fillContainer.classList.add('collapsed');
  rotateShare.classList.toggle('rotate');
}

shareBox.addEventListener('click', handlerClick3);





