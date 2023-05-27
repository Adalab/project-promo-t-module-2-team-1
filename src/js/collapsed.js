'use strict';

const designBox = document.querySelector('.js-design-box');
const designContainer = document.querySelector('.js-design-container');
const fillBox = document.querySelector('.js-fill-box');
const fillContainer = document.querySelector('.js-fill-container');
const shareBox = document.querySelector('.js-share-box');
const shareContainer = document.querySelector('.js-share-container');
const shareButton = document.querySelector('.js-share-button');
const shareArticle = document.querySelector('.js-share-article');

function handlerClick1() {
  designContainer.classList.toggle('collapsed');
  fillContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  shareArticle.classList.add('collapsed');
}

designBox.addEventListener('click', handlerClick1);

function handlerClick2(){
  fillContainer.classList.toggle('collapsed');
  designContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  shareArticle.classList.add('collapsed');
}

fillBox.addEventListener('click', handlerClick2);

function handlerClick3(){
  shareContainer.classList.toggle('collapsed');
  designContainer.classList.add('collapsed');
  fillContainer.classList.add('collapsed');
  shareArticle.classList.add('collapsed');
}

shareBox.addEventListener('click', handlerClick3);


// parte de carolina
shareButton.addEventListener('click', () => {
  shareArticle.classList.remove('collapsed');
  shareButton.classList.remove('button-pushed');
});
