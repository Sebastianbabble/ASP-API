class StudentInfo{constructor(){this.form=document.querySelector("#form-container"),this.firstName=document.querySelector("#fname"),this.lastName=document.querySelector("#lname"),this.classes=document.querySelector("#classes"),this.gpa=document.querySelector("#gpa"),this.submit=document.getElementById("submit"),this.photo=document.getElementById("fileUpload").files[0],this.URI="/studentInfo",this.formData=new FormData}createNewUser(){this.formData.append("FirstName",this.firstName.value),this.formData.append("LastName",this.lastName.value),this.formData.append("Classes",this.classes.value),this.formData.append("GPA",this.gpa.value),this.formData.append("Photo",this.photo),fetch("/studentInfo",{method:"POST",body:this.formData}).then(()=>{this.firstName.value="",this.lastName.value="",this.classes.value="",this.gpa.value=""}).catch(e=>console.error("Unable to add item.",e));for(var e of this.formData.entries())console.log(e[0]+" ,  "+e[1])}displayUsers(e){let i=document.getElementById("table-container");e.forEach(e=>{let t=i.insertRow(-1),a=t.insertCell(0),s=t.insertCell(1),l=t.insertCell(2),o=t.insertCell(3),n=t.insertCell(4);console.log(e);var d=document.createTextNode(e.firstName),d=(a.appendChild(d),document.createTextNode(e.lastName)),d=(s.appendChild(d),document.createTextNode(e.classes)),d=(l.appendChild(d),document.createTextNode(e.gpa));o.appendChild(d);let r=document.createElement("button");r.id=e.id,r.className="edit",r.textContent="Edit",r.onclick=()=>{sidebarEditUser(r.id)},n.appendChild(r)})}getAllUsers(){fetch(""+this.URI).then(e=>e.json()).then(e=>this.displayUsers(e)).catch(e=>console.error("Unable to get items.",e))}displayUserValues(e){console.log(e),document.getElementsByName("ffname")[0].placeholder=e.firstName,document.getElementsByName("llname")[0].placeholder=e.lastName,document.getElementsByName("cclasses")[0].placeholder=e.classes,document.getElementsByName("ggpa")[0].placeholder=e.gpa}updateUser(e){var t={FirstName:document.getElementsByName("ffname")[0].value,LastName:document.getElementsByName("llname")[0].value,Classes:document.getElementsByName("cclasses")[0].value,GPA:document.getElementsByName("ggpa")[0].value,Id:parseInt(e)};fetch(this.URI+"/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).catch(e=>console.error("Unable to update student.",e))}getSingleUser(e){fetch(this.URI+"/"+e).then(e=>e.json()).then(e=>this.displayUserValues(e)).catch(e=>console.error("Could not get user.",e))}handleImageUpload(e){this.photo=document.getElementById("fileUpload").files[0];let t;var a=new FileReader;console.log("next"),a.onload=function(){t=a.result.replace("data:","").replace(/^.+,/,""),console.log(t)},a.readAsDataURL(this.photo)}postImage(){fetch(""+this.URI,{method:"POST",body:this.formData}).then(e=>e.json()).then(e=>{console.log(e.path)}).catch(e=>{console.error(e)})}}const handleClick=()=>{const e=new StudentInfo;return""==e.firstName.value||""==e.lastName.value||""==e.classes.value||""==e.gpa.value?(alert("You forgot some input values. Try again"),!1):(e.createNewUser(),sidebarClose(),!0)},sidebarCreateUser=()=>{const t=new StudentInfo;let e=document.getElementById("right-col"),a=document.getElementById("right-right-col");document.querySelector("#fileUpload").addEventListener("change",e=>{t.handleImageUpload(e)}),"100%"!=e.style.width?(e.style.width="100%",a.style.width="0%"):sidebarClose()},sidebarEditUser=e=>{const t=new StudentInfo;let a=document.getElementById("right-right-col"),s=document.getElementById("right-col");document.getElementById(e);let l=document.getElementById("submitUpdate");l.addEventListener("click",function(){t.updateUser(e)}),t.getSingleUser(e),"100%"!=a.style.width?(a.style.width="100%",s.style.width="0%"):otherSidebarClose()},sidebarClose=()=>{let e=document.getElementById("right-col");e.style.width="0%"},otherSidebarClose=()=>{let e=document.getElementById("right-right-col");e.style.width="0%"};window.addEventListener("DOMContentLoaded",e=>{const t=new StudentInfo;t.getAllUsers()});