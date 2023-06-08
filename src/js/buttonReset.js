'use strict';

//traer boton reset
//traer inputs preview

const buttonTrash = document.querySelector('.js_buttontrash');





//ELIMINAR DATO Y AÑADIR DATOS INCIALES
function handleTrash() {
    data.palette= '';
    data.name= '';
    data.job= '';
    data.photo= '';
    data.profile= '';
    data.email= '';
    data.phone= '';
    data.linkedin= '';
    data.github= '';
    profileImage.style.backgroundImage = '';
    profilePreview.style.backgroundImage = '';
    
    
renderPreview();
}
console.log()

buttonTrash.addEventListener('click', handleTrash);