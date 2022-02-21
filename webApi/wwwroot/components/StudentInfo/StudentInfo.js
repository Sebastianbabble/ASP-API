class StudentInfo {
    constructor() {
        this.form = document.querySelector('#form-container');
        this.firstName = document.querySelector('#fname');
        this.lastName = document.querySelector('#lname');
        this.classes = document.querySelector('#classes');
        this.gpa = document.querySelector('#gpa');
        this.submit = document.getElementById("submit");
        this.URI = "/studentInfo";

        
    }

    //1. POST API call to create new user//
        createNewUser() {

            const userNew = {
                FirstName: this.firstName.value,
                LastName: this.lastName.value,
                Classes: this.classes.value,
                GPA: this.gpa.value,
            };
         fetch("/studentInfo", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userNew)
        })
             .then(() => {
                 this.firstName.value = '';
                 this.lastName.value = '';
                 this.classes.value = '';
                 this.gpa.value = '';
             })
             .catch(error => console.error('Unable to add item.', error));
        }

    //2. Displays user in a table
    displayUsers(data) {
        let tBody = document.getElementById('table-container');
        
           
     
        data.forEach(item => {

            let tr = tBody.insertRow(-1);
            let First = tr.insertCell(0);
            let Last = tr.insertCell(1);
            let Class = tr.insertCell(2);
            let G = tr.insertCell(3);
            let B = tr.insertCell(4);

            console.log(item);

            let f = document.createTextNode(item.firstName);
            First.appendChild(f);

            let l = document.createTextNode(item.lastName);
            Last.appendChild(l);

            let c = document.createTextNode(item.classes);
            Class.appendChild(c);

            let g = document.createTextNode(item.gpa);
            G.appendChild(g);

            let b = document.createElement("button");
            b.id = item.id;
            b.className = "edit";
            b.textContent = "Edit";
            b.onclick = () => { sidebarEditUser(b.id) };
            B.appendChild(b);
            

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
    //5. Update user base on ID
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
        console.log("inside single user");
        fetch(`${this.URI}/${id}`)
            .then(response => response.json())
            .then(data => this.displayUserValues(data))
            .catch(error => console.error("Could not get user.",error))
    }

   


    }




  

   



