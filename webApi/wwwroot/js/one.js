class StudentInfo{constructor(){this.form=document.querySelector("#form-container"),this.firstName=document.querySelector("#fname"),this.lastName=document.querySelector("#lname"),this.classes=document.querySelector("#classes"),this.gpa=document.querySelector("#gpa"),this.submit=document.getElementById("submit"),this.photo=document.getElementById("fileUpload").files[0],this.URI="/studentInfo",this.formData=new FormData}createNewUser(){this.formData.append("FirstName",this.firstName.value),this.formData.append("LastName",this.lastName.value),this.formData.append("Classes",this.classes.value),this.formData.append("GPA",this.gpa.value),this.formData.append("Photo",this.photo),fetch("/studentInfo",{method:"POST",body:this.formData}).then(()=>{this.firstName.value="",this.lastName.value="",this.classes.value="",this.gpa.value=""}).catch(e=>console.error("Unable to add item.",e));for(var e of this.formData.entries())console.log(e[0]+" ,  "+e[1])}displayUsers(e){let h=document.getElementById("table-container");console.log("hey"),e.forEach(e=>{let t=h.insertRow(-1),s=t.insertCell(0),l=t.insertCell(1),o=t.insertCell(2),c=t.insertCell(3),m=t.insertCell(4),a=t.insertCell(5),n=(console.log(e.photoUrl),document.createElement("img"));n.src="Files/"+e.photoUrl,n.src=n.src.substring(22),n.height="40",n.width="40",n.className="profilePhoto",s.appendChild(n);var r=document.createTextNode(e.firstName),r=(l.appendChild(r),document.createTextNode(e.lastName)),r=(o.appendChild(r),document.createTextNode(e.classes)),r=(c.appendChild(r),document.createTextNode(e.gpa));m.appendChild(r);let d=document.createElement("button"),i=document.createElement("button");d.id=e.id,i.id=e.id,i.className="edit",i.textContent="Delete",d.className="delete",d.textContent="Edit",d.onclick=()=>{sidebarEditUser(d.id)},i.onclick=()=>{deleteUser(i.id)},a.appendChild(d),a.appendChild(i)})}getAllUsers(){fetch(""+this.URI).then(e=>e.json()).then(e=>this.displayUsers(e)).catch(e=>console.error("Unable to get items.",e))}displayUserValues(e){console.log(e),document.getElementsByName("ffname")[0].placeholder=e.firstName,document.getElementsByName("llname")[0].placeholder=e.lastName,document.getElementsByName("cclasses")[0].placeholder=e.classes,document.getElementsByName("ggpa")[0].placeholder=e.gpa}updateUser(e){var t={FirstName:document.getElementsByName("ffname")[0].value,LastName:document.getElementsByName("llname")[0].value,Classes:document.getElementsByName("cclasses")[0].value,GPA:document.getElementsByName("ggpa")[0].value,Id:parseInt(e)};fetch(this.URI+"/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).catch(e=>console.error("Unable to update student.",e))}getSingleUser(e){fetch(this.URI+"/"+e).then(e=>e.json()).then(e=>this.displayUserValues(e)).catch(e=>console.error("Could not get user.",e))}handleImageUpload(e){this.photo=document.getElementById("fileUpload").files[0];let t;var s=new FileReader;console.log("next"),s.onload=function(){t=s.result.replace("data:","").replace(/^.+,/,""),console.log(t)},s.readAsDataURL(this.photo)}postImage(){fetch(""+this.URI,{method:"POST",body:this.formData}).then(e=>e.json()).then(e=>{console.log(e.path)}).catch(e=>{console.error(e)})}}const handleClick=()=>{const e=new StudentInfo;return""==e.firstName.value||""==e.lastName.value||""==e.classes.value||""==e.gpa.value?(alert("You forgot some input values. Try again"),!1):(e.createNewUser(),sidebarClose(),!0)},sidebarCreateUser=()=>{const t=new StudentInfo;let e=document.getElementById("right-col"),s=document.getElementById("right-right-col");document.querySelector("#fileUpload").addEventListener("change",e=>{t.handleImageUpload(e)}),"100%"!=e.style.width?(e.style.border="4px solid white",e.style.width="100%",s.style.width="0%"):(e.style.border="0",sidebarClose())},sidebarEditUser=e=>{const t=new StudentInfo;let s=document.getElementById("right-right-col"),l=document.getElementById("right-col");document.getElementById(e);let o=document.getElementById("submitUpdate");console.log("inside"),o.addEventListener("click",function(){t.updateUser(e)}),t.getSingleUser(e),"100%"!=s.style.width?(s.style.width="100%",s.style.border="4px solid white",l.style.width="0%"):(s.style.border="0",otherSidebarClose())},sidebarClose=()=>{let e=document.getElementById("right-col");e.style.width="0%"},otherSidebarClose=()=>{let e=document.getElementById("right-right-col");e.style.width="0%"},handleSearch=(window.addEventListener("DOMContentLoaded",e=>{const t=new StudentInfo;t.getAllUsers()}),()=>{var e=document.getElementById("search"),s=e.value.toLowerCase(),l=document.getElementsByTagName("tr");console.log(l);for(let t=1;t<l.length;t++){let e=l[t].getElementsByTagName("td");e=e[1].innerHTML.toLowerCase(),console.log("Yo "+e),e&&(0==s.length||s.length<3&&0==e.indexOf(s)||3<=e.length&&-1<e.indexOf(s)?l[t].style.display="":l[t].style.display="none")}console.log(s),console.log(e)}),deleteUser=e=>{new StudentInfo},sortTable=e=>{for(var t,s,l,o,a,n=0,r=document.getElementById("table-container"),d=!0,i="asc";d;){for(d=!1,t=r.rows,s=1;s<t.length-1;s++)if(a=!1,l=t[s].getElementsByTagName("TD")[e],o=t[s+1].getElementsByTagName("TD")[e],"asc"==i){if(l.innerHTML.toLowerCase()>o.innerHTML.toLowerCase()){a=!0;break}}else if("desc"==i&&l.innerHTML.toLowerCase()<o.innerHTML.toLowerCase()){a=!0;break}a?(t[s].parentNode.insertBefore(t[s+1],t[s]),d=!0,n++):0==n&&"asc"==i&&(i="desc",d=!0)}};