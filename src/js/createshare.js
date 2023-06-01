'use strict';

const btn = document.querySelector('.js_boton');
const tCreada = document.querySelector('.js_Tcreada');


function clickColorDesplegable() {
  if (btn.classList.contains('fset__crearG')) {
    btn.classList.remove('fset__crearG');
  } else {
    btn.classList.add('fset__crearG');
    btn.classList.contains('fset__crearG');

    tCreada.innerHTML = `<p class="tarjeta">La tarjeta ha sido creada:</p>
        <p class="link">aqui aparece un link</p>
        <button class="bnttwitter"><i class="fa-brands fa-twitter fa-xl" style="color: #ffffff;"></i> Compartir en twitter</button>`;
  }

}

btn.addEventListener('click', clickColorDesplegable);

//btn.addEventListener("click",clickedcolour);

function clickedcolour() {
  btn.classList.add('fset__crearG');

}

btn.addEventListener('click', clickedcolour);



