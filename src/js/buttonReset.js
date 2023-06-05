'use strict';

//traer boton reset
//traer inputs preview

const buttonTrash = document.querySelector('.js_buttontrash');

buttonTrash.addEventListener('click', handleTrash);

//ELIMINAR DATO Y AÑADIR DATOS INCIALES
function handleTrash() {
    data.pallete= '';
    data.name= '';
    data.job= '';
    data.image= '';
    data.profile= '';
    data.email= '';
    data.phone= '';
    data.linkedin= '';
    data.github= '';
renderPreview();
}
console.log('holii')