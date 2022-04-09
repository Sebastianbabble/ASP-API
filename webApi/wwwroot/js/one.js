class StudentInfo{constructor(){this.form=document.querySelector("#form-container"),this.firstName=document.querySelector("#fname"),this.lastName=document.querySelector("#lname"),this.classes=document.querySelector("#classes"),this.gpa=document.querySelector("#gpa"),this.submit=document.getElementById("submit"),this.photo=document.getElementById("fileUpload").files[0],this.URI="/studentInfo",this.formData=new FormData}createNewUser(){this.formData.append("FirstName",this.firstName.value),this.formData.append("LastName",this.lastName.value),this.formData.append("Classes",this.classes.value),this.formData.append("GPA",this.gpa.value),this.formData.append("Photo",this.photo),fetch("/studentInfo",{method:"POST",body:this.formData}).then(()=>{this.firstName.value="",this.lastName.value="",this.classes.value="",this.gpa.value=""}).catch(e=>console.error("Unable to add item.",e));for(var e of this.formData.entries())console.log(e[0]+" ,  "+e[1])}displayUsers(e){let h=document.getElementById("table-container");console.log("hey"),e.forEach(e=>{let t=h.insertRow(-1),o=(t.id=e.id,t.insertCell(0)),l=t.insertCell(1),s=t.insertCell(2),c=t.insertCell(3),m=t.insertCell(4),a=t.insertCell(5),n=(console.log(e.photoUrl),document.createElement("img"));n.src="Files/"+e.photoUrl,n.src=n.src.substring(22),n.height="40",n.width="40",n.className="profilePhoto",o.appendChild(n);var d=document.createTextNode(e.firstName),d=(l.appendChild(d),document.createTextNode(e.lastName)),d=(s.appendChild(d),document.createTextNode(e.classes)),d=(c.appendChild(d),document.createTextNode(e.gpa));m.appendChild(d);let r=document.createElement("button"),i=document.createElement("button");r.id=e.id,i.id=e.id,i.className="edit",i.textContent="Delete",r.className="delete",r.textContent="Edit",r.onclick=()=>{sidebarEditUser(r.id)},i.onclick=()=>{this.deleteUser(i.id)},a.appendChild(r),a.appendChild(i)})}getAllUsers(){fetch(""+this.URI).then(e=>e.json()).then(e=>this.displayUsers(e)).catch(e=>console.error("Unable to get items.",e))}displayUserValues(e){console.log(e),document.getElementsByName("ffname")[0].placeholder=e.firstName,document.getElementsByName("llname")[0].placeholder=e.lastName,document.getElementsByName("cclasses")[0].placeholder=e.classes,document.getElementsByName("ggpa")[0].placeholder=e.gpa}updateUser(e){var t={FirstName:document.getElementsByName("ffname")[0].value,LastName:document.getElementsByName("llname")[0].value,Classes:document.getElementsByName("cclasses")[0].value,GPA:document.getElementsByName("ggpa")[0].value,Id:parseInt(e)};fetch(this.URI+"/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).catch(e=>console.error("Unable to update student.",e))}getSingleUser(e){fetch(this.URI+"/"+e).then(e=>e.json()).then(e=>this.displayUserValues(e)).catch(e=>console.error("Could not get user.",e))}handleImageUpload(e){this.photo=document.getElementById("fileUpload").files[0];let t;var o=new FileReader;console.log("next"),o.onload=function(){t=o.result.replace("data:","").replace(/^.+,/,""),console.log(t)},o.readAsDataURL(this.photo)}postImage(){fetch(""+this.URI,{method:"POST",body:this.formData}).then(e=>e.json()).then(e=>{console.log(e.path)}).catch(e=>{console.error(e)})}deleteUser(e){fetch(this.URI+"/"+e,{method:"DELETE"}).then(()=>{document.getElementById(e).remove()}).catch(e=>console.error("Unable to delete",e)),console.log(`User ${e} been deleted `)}}const handleClick=()=>{const e=new StudentInfo;return""==e.firstName.value||""==e.lastName.value||""==e.classes.value||""==e.gpa.value?(alert("You forgot some input values. Try again"),!1):(e.createNewUser(),sidebarClose(),!0)},sidebarCreateUser=()=>{const t=new StudentInfo;let e=document.getElementById("right-col"),o=document.getElementById("right-right-col");document.querySelector("#fileUpload").addEventListener("change",e=>{t.handleImageUpload(e)}),"100%"!=e.style.width?(e.style.border="4px solid white",e.style.width="100%",o.style.width="0%"):(e.style.border="0",sidebarClose())},sidebarEditUser=e=>{const t=new StudentInfo;let o=document.getElementById("right-right-col"),l=document.getElementById("right-col");document.getElementById(e);let s=document.getElementById("submitUpdate");console.log("inside"),s.addEventListener("click",function(){t.updateUser(e)}),t.getSingleUser(e),"100%"!=o.style.width?(o.style.width="100%",o.style.border="4px solid white",l.style.width="0%"):(o.style.border="0",otherSidebarClose())},sidebarClose=()=>{let e=document.getElementById("right-col");e.style.width="0%"},otherSidebarClose=()=>{let e=document.getElementById("right-right-col");e.style.width="0%"},handleSearch=(window.addEventListener("DOMContentLoaded",e=>{const t=new StudentInfo;t.getAllUsers()}),()=>{var e=document.getElementById("search"),o=e.value.toLowerCase(),l=document.getElementsByTagName("tr");console.log(l);for(let t=1;t<l.length;t++){let e=l[t].getElementsByTagName("td");e=e[1].innerHTML.toLowerCase(),console.log("Yo "+e),e&&(0==o.length||o.length<3&&0==e.indexOf(o)||3<=e.length&&-1<e.indexOf(o)?l[t].style.display="":l[t].style.display="none")}console.log(o),console.log(e)}),sortTable=e=>{for(var t,o,l,s,a,n=0,d=document.getElementById("table-container"),r=!0,i="asc";r;){for(r=!1,t=d.rows,o=1;o<t.length-1;o++)if(a=!1,l=t[o].getElementsByTagName("TD")[e],s=t[o+1].getElementsByTagName("TD")[e],"asc"==i){if(l.innerHTML.toLowerCase()>s.innerHTML.toLowerCase()){a=!0;break}}else if("desc"==i&&l.innerHTML.toLowerCase()<s.innerHTML.toLowerCase()){a=!0;break}a?(t[o].parentNode.insertBefore(t[o+1],t[o]),r=!0,n++):0==n&&"asc"==i&&(i="desc",r=!0)}},handleVideoUpload=e=>{document.getElementById("video-upload").files[0];console.log("UP Up pu PU load")},handleVideoPage=()=>{document.querySelector("#video-upload").addEventListener("change",()=>{videoUpload()})},videoUpload=()=>{console.log("handle video upload")};