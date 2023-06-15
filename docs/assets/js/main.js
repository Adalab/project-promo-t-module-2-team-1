"use strict";const designBox=document.querySelector(".js-design-box"),designContainer=document.querySelector(".js-design-container"),fillBox=document.querySelector(".js-fill-box"),fillContainer=document.querySelector(".js-fill-container"),shareBox=document.querySelector(".js-share-box"),shareContainer=document.querySelector(".js-share-container"),rotateDesign=document.querySelector(".js-arrow-design"),rotatefill=document.querySelector(".js-arrow-fill"),rotateShare=document.querySelector(".js-arrow-share");function rotateArrow(){designContainer.classList.contains("collapsed")?rotateDesign.classList.remove("rotate"):rotateDesign.classList.add("rotate"),fillContainer.classList.contains("collapsed")?rotatefill.classList.remove("rotate"):rotatefill.classList.add("rotate"),shareContainer.classList.contains("collapsed")?rotateShare.classList.remove("rotate"):rotateShare.classList.add("rotate")}function handlerClick1(){designContainer.classList.remove("collapsed"),fillContainer.classList.add("collapsed"),shareContainer.classList.add("collapsed"),rotateArrow()}function handlerClick2(){fillContainer.classList.remove("collapsed"),designContainer.classList.add("collapsed"),shareContainer.classList.add("collapsed"),rotateArrow()}function handlerClick3(){shareContainer.classList.remove("collapsed"),designContainer.classList.add("collapsed"),fillContainer.classList.add("collapsed"),rotateArrow()}designBox.addEventListener("click",handlerClick1),fillBox.addEventListener("click",handlerClick2),shareBox.addEventListener("click",handlerClick3);const previewName=document.querySelector(".js_previewName"),previewJob=document.querySelector(".js_previewJob"),previewImage=document.querySelector(".js_previewImage"),defaultImage=document.querySelector(".js__profile-image"),previewEmail=document.querySelector(".js_previewEmail"),previewPhone=document.querySelector(".js_previewPhone"),previewLinkedin=document.querySelector(".js_previewLinkedin"),previewGithub=document.querySelector(".js_previewGithub"),emailInput=document.querySelector(".js_email"),emailMessage=document.querySelector(".js_emailMessage"),fillInput=document.querySelector(".js_allInputs"),data={palette:"",name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""};function renderPreview(){previewName.innerHTML=data.name||"Nombre Apellido",previewJob.innerHTML=data.job||"Front-end developer",previewImage.href=""+data.photo,defaultImage.href=""+data.photo,previewEmail.href="mailto:"+data.email,previewPhone.href="tel:"+data.phone,previewLinkedin.href="https://es.linkedin.com/in/"+data.linkedin,previewGithub.href="https://github.com/"+data.github}function handleInputs(e){const t=e.target.id,a=e.target.value;console.log(a),"name"===t?data.name=a:"job"===t?data.job=a:"photo"===t?data.photo=previewImage:"email"===t?data.email=a:"phone"===t?data.phone=a:"linkedin"===t?data.linkedin=a:"github"===t?data.github=a:t.includes("option")&&(data.palette=a),renderPreview(),localStorage.setItem("dataLocalStorage",JSON.stringify(data))}const fr=new FileReader,fileField=document.querySelector(".js_imageBtn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js_previewImage");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}function handleEmail(e){const t=emailInput.value;e.preventDefault(),t.includes("@")&&t.includes(".")?emailMessage.innerHTML="Este email es correcto":emailMessage.innerHTML="Este email no es correcto."}fillInput.addEventListener("keyup",handleInputs),fileField.addEventListener("change",getImage),emailInput.addEventListener("blur",handleEmail);const radio1=document.querySelector(".js_radio1"),radio2=document.querySelector(".js_radio2"),radio3=document.querySelector(".js_radio3"),previewCard=document.querySelector(".js_preview");function handleClickRadio1(e){previewCard.classList.remove("pallete_style2"),previewCard.classList.remove("pallete_style3"),previewCard.classList.add("pallete_style1"),data.palette="1"}function handleClickRadio2(e){previewCard.classList.remove("pallete_style1"),previewCard.classList.remove("pallete_style3"),previewCard.classList.add("pallete_style2"),data.palette="2"}function handleClickRadio3(e){previewCard.classList.remove("pallete_style1"),previewCard.classList.remove("pallete_style2"),previewCard.classList.add("pallete_style3"),data.palette="3"}radio1.addEventListener("click",handleClickRadio1),radio2.addEventListener("click",handleClickRadio2),radio3.addEventListener("click",handleClickRadio3);const buttonTrash=document.querySelector(".js_buttontrash");function handleTrash(){data.palette="",data.name="",data.job="",data.photo="",data.profile="",data.email="",data.phone="",data.linkedin="",data.github="",profileImage.style.backgroundImage="",profilePreview.style.backgroundImage="",renderPreview()}console.log(),buttonTrash.addEventListener("click",handleTrash);const btn=document.querySelector(".js_boton"),tCreada=document.querySelector(".js_Tcreada");function clickColorDesplegable(){btn.classList.contains("fset__crearG")?btn.classList.remove("fset__crearG"):(btn.classList.add("fset__crearG"),btn.classList.contains("fset__crearG"),tCreada.classList.remove("collapsed"))}function clickedcolour(){btn.classList.add("fset__crearG")}btn.addEventListener("click",clickColorDesplegable),btn.addEventListener("click",clickedcolour);const link=document.querySelector(".js_link");let msg=document.querySelector(".js_msg");const nameMsg=document.querySelector(".js_name_msg"),jobMsg=document.querySelector(".js_job_msg"),imageMsg=document.querySelector(".js_image_msg"),emailMsg=document.querySelector(".js_email_msg"),linkedinMsg=document.querySelector(".js_linkedin_msg"),githubMsg=document.querySelector(".js_github_msg"),msgGeneral=document.querySelector(".js_msgGeneral"),cardLS=JSON.parse(localStorage.getItem("dataLocalStorage"));function handleClickCreate(e){e.preventDefault(),fetch("https://dev.adalab.es/api/card",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{console.log(e.cardURL),!0===e.success?link.innerHTML=`<a class=" link js_link target="_blank" href="https://dev.adalab.es/api/card${e.cardURL}">https://dev.adalab.es/api/card${e.cardURL}</a>`:msg=e.error})}btn.addEventListener("click",handleClickCreate);const fillInputs=document.querySelector(".js_fillinputs");function changeInput(){""===data.name&&(nameMsg.innerHTML="campo obligatorio"),""===data.job&&(jobMsg.innerHTML="campo obligatorio"),""===data.photo&&(imageMsg.innerHTML="campo obligatorio"),""===data.email&&(emailMsg.innerHTML="campo obligatorio"),""===data.linkedin&&(linkedinMsg.innerHTML="campo obligatorio"),""===data.github&&(githubMsg.innerHTML="campo obligatorio")}fillInputs.addEventListener("blur",changeInput);