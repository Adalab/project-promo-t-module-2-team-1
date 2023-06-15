'use strict';

const btn = document.querySelector('.js_boton');
const tCreada = document.querySelector('.js_Tcreada');


function clickColorDesplegable() {
  if (btn.classList.contains('fset__crearG')) {
    btn.classList.remove('fset__crearG')

  }else {
    btn.classList.add('fset__crearG');
    btn.classList.contains('fset__crearG');
    tCreada.classList.remove('collapsed');
}}

btn.addEventListener('click', clickColorDesplegable);



function clickedcolour() {
  btn.classList.add('fset__crearG');
}


btn.addEventListener('click', clickedcolour);

const link = document.querySelector('.js_link');
const msg = document.querySelector('.js_msg');
const nameMsg = document.querySelector('.js_name_msg');
const jobMsg = document.querySelector('.js_job_msg');
const imageMsg = document.querySelector('.js_image_msg');
const telMsg = document.querySelector('.js_tel_msg');
const emailMsg = document.querySelector('.js_email_msg');

function handleClickCreate(ev) {
  ev.preventDefault();
fetch('https://dev.adalab.es/api/card/',{
method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        
        if (data.success) {
          
          link.innerHTML = data.cardURL;
          link.href = data.cardURL;
        }
        else {
          msg.innerHTML = data.error;
        }
      )
    }
  

 

console.log(handleClickCreate);

btn.addEventListener('click', handleClickCreate);


const fillInputs= document.querySelector('.js_fillinputs');
function changeInput() {

  if(data.name === '') {
    nameMsg.innerHTML = 'campo obligatorio';
  } if (data.job === '') {
    jobMsg.innerHTML = 'campo obligatorio';
  } if (data.photo === '') {
    imageMsg.innerHTML = 'campo obligatorio';
  } if (data.phone === '') {
    telMsg.innerHTML = 'campo obligatorio';
  } if (data.email === '') {
    emailMsg.innerHTML = 'campo obligatorio';
  }
    
}





