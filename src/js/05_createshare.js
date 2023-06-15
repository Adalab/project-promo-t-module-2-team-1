'use strict';

const btn = document.querySelector('.js_boton');
const tCreada = document.querySelector('.js_Tcreada');


function clickColorDesplegable() {
  if (btn.classList.contains('fset__crearG')) {
    btn.classList.remove('fset__crearG');
  } else {
    btn.classList.add('fset__crearG');
    btn.classList.contains('fset__crearG');

    tCreada.classList.remove('collapsed');
}};

btn.addEventListener('click', clickColorDesplegable);



function clickedcolour() {
  btn.classList.add('fset__crearG');
}


btn.addEventListener('click', clickedcolour);

const link = document.querySelector('.js_link');
let msg = document.querySelector('.js_msg');
const nameMsg = document.querySelector('.js_name_msg');
const jobMsg = document.querySelector('.js_job_msg');
const imageMsg = document.querySelector('.js_image_msg');
const emailMsg = document.querySelector('.js_email_msg');
const linkedinMsg = document.querySelector('.js_linkedin_msg');
const githubMsg = document.querySelector('.js_github_msg');
const msgGeneral = document.querySelector('.js_msgGeneral');



const cardLS = JSON.parse(localStorage.getItem('dataLocalStorage'));

function handleClickCreate(ev) {
  ev.preventDefault();
  // if(cardLS.name === '' || cardLS.job === '' || cardLS.photo === '' || cardLS.email === '' || cardLS.linkedin === '' || cardLS.github === '') {
  //   msgGeneral.innerHTML = 'error';
  // }
  // else if(cardLS.name !== '' && cardLS.job !== '' && cardLS.photo !== '' && cardLS.email !== '' && cardLS.linkedin !== '' && cardLS.github !== ''){
  
  fetch('https://dev.adalab.es/api/card',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((cardLS) => {
      console.log(cardLS.cardURL);
      if(cardLS.success === true){
        link.innerHTML = `<a class=" link js_link target="_blank" href="https://dev.adalab.es/api/card${cardLS.cardURL}">https://dev.adalab.es/api/card${cardLS.cardURL}</a>`;
      }else {
        msg = cardLS.error;
      }
    });
}

// };


// console.log(handleClickCreate);


btn.addEventListener('click', handleClickCreate);

const fillInputs= document.querySelector('.js_fillinputs');
function changeInput() {
  if(data.name === '') {
    nameMsg.innerHTML = 'campo obligatorio';
  } if (data.job === '') {
    jobMsg.innerHTML = 'campo obligatorio';
  } if (data.photo === '') {
    imageMsg.innerHTML = 'campo obligatorio';
  } if (data.email === '') {
    emailMsg.innerHTML = 'campo obligatorio';
  } if (data.linkedin === '') {
    linkedinMsg.innerHTML = 'campo obligatorio';
  } if (data.github === '') {
    githubMsg.innerHTML = 'campo obligatorio';
  }
  
};


fillInputs.addEventListener('blur', changeInput);

