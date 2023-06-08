'use strict';

const btn = document.querySelector('.js_boton');
const tCreada = document.querySelector('.js_Tcreada');


function clickColorDesplegable() {
  if (btn.classList.contains('fset__crearG')) {
    btn.classList.remove('fset__crearG');
  } else {
    btn.classList.add('fset__crearG');
    btn.classList.contains('fset__crearG');

   // tCreada.classList.remove('collapsed');
    //tCreada.innerHTML = `<p class="tarjeta js_msg">La tarjeta ha sido creada:</p>
    //    <p class="link js_link"><a href=""></a></p>
    //    <button class="bnttwitter"><i class="fa-brands fa-twitter fa-xl" style="color: #ffffff;"></i> Compartir en twitter</button>`;
  }

}

btn.addEventListener('click', clickColorDesplegable);

//btn.addEventListener("click",clickedcolour);

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
  const data = {
    pallete:'',
    name: '',
    job:'',
    image: '',
    profile: '',
    email: '',
    phone: '',
    linkedin: '',
    github:'',
  };
  if(data.name === '') {
    nameMsg.innerHTML = 'campo obligatorio';
  } else if (data.job === '') {
    jobMsg.innerHTML = 'campo obligatorio';
  } else if (data.image === '') {
    imageMsg.innerHTML = 'campo obligatorio';
  }else if (data.phone === '') {
    telMsg.innerHTML = 'campo obligatorio';
  }else if (data.email === '') {
    emailMsg.innerHTML = 'campo obligatorio';
  }else {
    fetch('https://dev.adalab.es/api/card/',{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          link.innerHTML = data.cardURL;
          link.href = data.cardURL;
        }
        else {
          msg.innerHTML = data.error;
        }
      });
  }}



console.log(handleClickCreate);



btn.addEventListener('click', handleClickCreate);
