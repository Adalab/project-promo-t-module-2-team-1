'use strict';

const inputName = document.querySelector('.js_name');
const inputJob = document.querySelector('.js_job');
const inputImage = document.querySelector('.js_image');
const inputEmail = document.querySelector('.js_email');
const inputPhone = document.querySelector('.js_phone');
const inputLinkedin = document.querySelector('.js_linkedin');
const inputGithub = document.querySelector('.js_github');

const previewName = document.querySelector('.js_previewName');
const previewJob = document.querySelector('.js_previewJob');
const previewImage = document.querySelector('.js_previewImage');
const previewEmail = document.querySelector('.js_previewEmail');
const previewPhone = document.querySelector('.js_previewPhone');
const previewLinkedin = document.querySelector('.js_previewLinkedin');
const previewGithub = document.querySelector('.js_previewGithub');

const data = {
    pallete:'' ,
    name: '',
    job:'' ,
    image: '',
    email: '',
    phone: '',
    linkedin: '',
    github:'' ,
};

const fillInputs = document.querySelector('.js_allInputs');

function handleInputs(event){ console.log(event.target);}

