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
const tCreadA = document.querySelector('.js_tcreada');

function rotateArrow()  {
  if (designContainer.classList.contains('collapsed')) {
    rotateDesign.classList.remove('rotate');
  }
  else {
    rotateDesign.classList.add('rotate');
  }
  if (fillContainer.classList.contains('collapsed')) {
    rotatefill.classList.remove('rotate');
  }else {
    rotatefill.classList.add('rotate');
  }
  if (shareContainer.classList.contains('collapsed')) {
    rotateShare.classList.remove('rotate');
  } else {
    rotateShare.classList.add('rotate');
  }
}


function handlerClick1() {
  designContainer.classList.remove('collapsed');
  fillContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  rotateArrow();



}


designBox.addEventListener('click', handlerClick1);



function handlerClick2(){
  fillContainer.classList.remove('collapsed');
  designContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  rotateArrow();

}

fillBox.addEventListener('click', handlerClick2);

function handlerClick3(){
  shareContainer.classList.remove('collapsed');
  designContainer.classList.add('collapsed');
  fillContainer.classList.add('collapsed');
  rotateArrow();


  tCreadA.classList.toggle('collapsed');

}

shareBox.addEventListener('click', handlerClick3);

