'use strict';

const previewName = document.querySelector('.js_previewName');
const previewJob = document.querySelector('.js_previewJob');
const previewImage = document.querySelector('.js_previewImage');
const defaultImage = document.querySelector('.js__profile-image');
const previewEmail = document.querySelector('.js_previewEmail');
const previewPhone = document.querySelector('.js_previewPhone');
const previewLinkedin = document.querySelector('.js_previewLinkedin');
const previewGithub = document.querySelector('.js_previewGithub');

const fillInput = document.querySelector('.js_allInputs');

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

function renderPreview(){
  previewName.innerHTML=data.name || 'Nombre Apellido';
  previewJob.innerHTML=data.job || 'Front-end developer';
  previewImage.href=`${data.image}`;
  defaultImage.href=`${data.image}`;
  previewEmail.href=`mailto:${data.email}`;
  previewPhone.href=`tel:${data.phone}`;
  previewLinkedin.href=`http://${data.linkedin}`;
  previewGithub.href=`http://${data.github}`;
}

function handleInputs(event){
  const idInput = event.target.id;
  const valueInput = event.target.value;
  if( idInput==='name' ){
    data.name = valueInput;
  }else if (idInput === 'job'){
    data.job = valueInput;
  }else if (idInput === 'image'){
    data.image = previewImage;
  }else if (idInput === 'profile'){
    data.profile = valueInput;
  }else if (idInput === 'email'){
    data.email = valueInput;
  }else if (idInput === 'phone'){
    data.phone = valueInput;
  }else if (idInput === 'linkedin'){
    data.linkedin = valueInput;
  }else if (idInput === 'github'){
    data.github = valueInput;
  }
  renderPreview();
}
const fr = new FileReader();
const fileField = document.querySelector('.js_imageBtn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js_previewImage');

function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

fillInput.addEventListener('keyup', handleInputs);
fileField.addEventListener('change', getImage);

