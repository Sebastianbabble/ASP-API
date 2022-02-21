class StudentInfo{constructor(){this.form=document.querySelector("#form-container"),this.firstName=document.querySelector("#fname"),this.lastName=document.querySelector("#lname"),this.classes=document.querySelector("#classes"),this.gpa=document.querySelector("#gpa"),this.submit=document.getElementById("submit"),this.URI="/studentInfo"}createNewUser(){var e={FirstName:this.firstName.value,LastName:this.lastName.value,Classes:this.classes.value,GPA:this.gpa.value};fetch("/studentInfo",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(()=>{this.firstName.value="",this.lastName.value="",this.classes.value="",this.gpa.value=""}).catch(e=>console.error("Unable to add item.",e))}displayUsers(e){let r=document.getElementById("table-container");e.forEach(e=>{let t=r.insertRow(-1),s=t.insertCell(0),l=t.insertCell(1),a=t.insertCell(2),n=t.insertCell(3),o=t.insertCell(4);console.log(e);var d=document.createTextNode(e.firstName),d=(s.appendChild(d),document.createTextNode(e.lastName)),d=(l.appendChild(d),document.createTextNode(e.classes)),d=(a.appendChild(d),document.createTextNode(e.gpa));n.appendChild(d);let i=document.createElement("button");i.id=e.id,i.className="edit",i.textContent="Edit",i.onclick=()=>{sidebarEditUser(i.id)},o.appendChild(i)})}getAllUsers(){fetch(""+this.URI).then(e=>e.json()).then(e=>this.displayUsers(e)).catch(e=>console.error("Unable to get items.",e))}displayUserValues(e){console.log(e),document.getElementsByName("ffname")[0].placeholder=e.firstName,document.getElementsByName("llname")[0].placeholder=e.lastName,document.getElementsByName("cclasses")[0].placeholder=e.classes,document.getElementsByName("ggpa")[0].placeholder=e.gpa}updateUser(e){var t={FirstName:document.getElementsByName("ffname")[0].value,LastName:document.getElementsByName("llname")[0].value,Classes:document.getElementsByName("cclasses")[0].value,GPA:document.getElementsByName("ggpa")[0].value,Id:parseInt(e)};fetch(this.URI+"/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).catch(e=>console.error("Unable to update student.",e))}getSingleUser(e){console.log("inside single user"),fetch(this.URI+"/"+e).then(e=>e.json()).then(e=>this.displayUserValues(e)).catch(e=>console.error("Could not get user.",e))}}const handleClick=()=>{const e=new StudentInfo;return""==e.firstName.value||""==e.lastName.value||""==e.classes.value||""==e.gpa.value?(alert("You forgot some input values. Try again"),!1):(e.createNewUser(),sidebarClose(),!0)},sidebarCreateUser=()=>{new StudentInfo;let e=document.getElementById("right-col"),t=document.getElementById("right-right-col");"30%"!=e.style.width?(e.style.width="30%",t.style.width="0%"):sidebarClose()},sidebarEditUser=e=>{const t=new StudentInfo;let s=document.getElementById("right-right-col"),l=document.getElementById("right-col");document.getElementById(e);let a=document.getElementById("submitUpdate");a.addEventListener("click",function(){t.updateUser(e)}),t.getSingleUser(e),"30%"!=s.style.width?(s.style.width="30%",l.style.width="0%"):otherSidebarClose()},sidebarClose=()=>{let e=document.getElementById("right-col");e.style.width="0%"},otherSidebarClose=()=>{let e=document.getElementById("right-right-col");e.style.width="0%"};window.addEventListener("DOMContentLoaded",e=>{const t=new StudentInfo;t.getAllUsers()});