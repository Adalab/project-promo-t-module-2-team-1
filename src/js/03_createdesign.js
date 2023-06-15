'use strict';

const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');

const previewCard = document.querySelector('.js_preview');

function handleClickRadio1(event) {
  previewCard.classList.remove('pallete_style2');
  previewCard.classList.remove('pallete_style3');
  previewCard.classList.add('pallete_style1');
  data.palette = "1";
}

function handleClickRadio2(event) {
  previewCard.classList.remove('pallete_style1');
  previewCard.classList.remove('pallete_style3');
  previewCard.classList.add('pallete_style2');
  data.palette = "2";
}

function handleClickRadio3(event) {
  previewCard.classList.remove('pallete_style1');
  previewCard.classList.remove('pallete_style2');
  previewCard.classList.add('pallete_style3');
  data.palette = "3";
}

radio1.addEventListener('click', handleClickRadio1);
radio2.addEventListener('click', handleClickRadio2);
radio3.addEventListener('click', handleClickRadio3);