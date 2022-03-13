class StudentInfo {
    constructor() {
        this.form = document.querySelector('#form-container');
        this.firstName = document.querySelector('#fname');
        this.lastName = document.querySelector('#lname');
        this.classes = document.querySelector('#classes');
        this.gpa = document.querySelector('#gpa');
        this.submit = document.getElementById("submit");
        this.photo = document.getElementById("fileUpload").files[0];
        this.URI = "/studentInfo";
        this.formData = new FormData();

    }

    //1. POST API call to create new user
    createNewUser() {
        this.formData.append("FirstName", this.firstName.value);
        this.formData.append("LastName", this.lastName.value);
        this.formData.append("Classes", this.classes.value);
        this.formData.append("GPA", this.gpa.value);
        this.formData.append("Photo", this.photo);

         fetch("/studentInfo", {
            method: 'POST',
             body: this.formData
        })
             .then(() => {
                 this.firstName.value = '';
                 this.lastName.value = '';
                 this.classes.value = '';
                 this.gpa.value = '';
             })
             .catch(error => console.error('Unable to add item.', error));

        for (var pair of this.formData.entries()) {
            console.log(`${pair[0]} ,  ${pair[1]}`);
        }
    }

    //2. Displays user in a table
    displayUsers(data) {
        let tBody = document.getElementById('table-container');
        
        console.log("hey");
     
        data.forEach(item => {
           
            let tr = tBody.insertRow(-1);
            let Photo = tr.insertCell(0)
            let First = tr.insertCell(1);
            let Last = tr.insertCell(2);
            let Class = tr.insertCell(3);
            let G = tr.insertCell(4);
            let B = tr.insertCell(5);

            console.log(item);
            let p = document.createElement('img');
            p.innerHtml = "<div>UOOO</div>";
            p.src = "/Users";
            p.src = p.src.substring(22);
            console.log(p.src);
            Photo.appendChild(p);

            let f = document.createTextNode(item.firstName);
            First.appendChild(f);

            let l = document.createTextNode(item.lastName);
            Last.appendChild(l);

            let c = document.createTextNode(item.classes);
            Class.appendChild(c);

            let g = document.createTextNode(item.gpa);
            G.appendChild(g);

            let b = document.createElement("button");
            let d = document.createElement("button");
            b.id = item.id;
            d.id = item.id;
            d.className = "edit";
            d.textContent = "Delete";
            b.className = "delete";
            b.textContent = "Edit";
            b.onclick = () => { sidebarEditUser(b.id) };
            d.onclick = () => { deleteUser(d.id) };

            B.appendChild(b);
            B.appendChild(d);
            

        })

    }

   
    //3.GET API call to get all users//
    getAllUsers() {
        let uri = "/studentInfo"
        fetch(`${this.URI}`)
         .then(response => response.json())
         .then(data => this.displayUsers(data))
         .catch(error => console.error('Unable to get items.', error));

    }

    //4.Display single user 
    displayUserValues(data) {
        console.log(data);
        document.getElementsByName("ffname")[0].placeholder = data.firstName;
        document.getElementsByName("llname")[0].placeholder = data.lastName;
        document.getElementsByName("cclasses")[0].placeholder = data.classes;
        document.getElementsByName("ggpa")[0].placeholder = data.gpa;


    }
    //5. Update user base on ID//
    updateUser(id) {

        //Get users updated info
        const userNew = {
            FirstName: document.getElementsByName("ffname")[0].value,
            LastName: document.getElementsByName("llname")[0].value,
            Classes: document.getElementsByName("cclasses")[0].value,
            GPA: document.getElementsByName("ggpa")[0].value,
            Id: parseInt(id)
        };

        //Call API to Update
        fetch(`${this.URI}/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userNew)
        })
            .catch(error => console.error('Unable to update student.', error));

    }

    //6. Get a single user
    getSingleUser(id) {
        fetch(`${this.URI}/${id}`)
            .then(response => response.json())
            .then(data => this.displayUserValues(data))
            .catch(error => console.error("Could not get user.",error))
    }
        
    //7. Handle Image Upload

    handleImageUpload(event) {
        //const files = event.target.files;
        this.photo = document.getElementById("fileUpload").files[0];
        let base64String = "";
        var reader = new FileReader();
        console.log("next");

        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");

          
            console.log(base64String);
        }
        reader.readAsDataURL(this.photo);
      
    }

    //8./
    postImage() {
        fetch(`${this.URI}`, {
            method: 'POST',
            body: this.formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.path)
            })
            .catch(error => {
                console.error(error)
            })
    }
    }


   


    




  

   



