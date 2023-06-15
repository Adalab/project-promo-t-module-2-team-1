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
const msg = document.querySelector('.js_msg');
const nameMsg = document.querySelector('.js_name_msg');
const jobMsg = document.querySelector('.js_job_msg');
const imageMsg = document.querySelector('.js_image_msg');
const emailMsg = document.querySelector('.js_email_msg');
const linkedinMsg = document.querySelector('.js_linkedin_msg');
const githubMsg = document.querySelector('.js_github_msg')

const cardLS = JSON.parse(localStorage.getItem('dataLocalStorage'));
// function handleClickCreate(ev) {
//   ev.preventDefault();
//   if(cardLS.success) {
//     fetch('https://dev.adalab.es/api/card/',{
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(data),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       link.innerHTML = data.cardURL;
//       link.href = data.cardURL;
//     });
//   }
//   else {
//     msg = data.error;
//   }

// };


// console.log(handleClickCreate);

// if (newKittenDataObject.desc === "" || newKittenDataObject.image === "" || newKittenDataObject.name === "") {
//   labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
// }
// else if (newKittenDataObject.desc !== "" && newKittenDataObject.image !== "" && newKittenDataObject.name!== "") {
  
//   //  hacer peticion al servidor con la info obtenida de addNewKitten

// fetch(SERVER_URL, {
//   method: 'POST',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify(newKittenDataObject),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     if (data.success) {
//       labelMessageError.innerHTML = "Mola! Un nuevo gatito en adalab!";
//       kittenDataList.push(newKittenDataObject);
//       renderKittenList(kittenDataList);
//       localStorage.setItem('kittensList', JSON.stringify(kittenDataList));
//     } else {
//       alert('Error: ' + data.message);
//     }
//   });
  
// }
// }

// btn.addEventListener('click', handleClickCreate);

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

