
//1. Handles the submit btn on Create new user
const handleClick = () => {
    const user = new StudentInfo();

    //Check to see user values are empty/

    if (user.firstName.value == "" ||
        user.lastName.value == "" ||
        user.classes.value == "" ||
        user.gpa.value == "") {
        alert("You forgot some input values. Try again");
        return false;

    }
    else {
        user.createNewUser();
        //user.postImage();
        sidebarClose();

        //user.getAllUsers();
        return true;
    }
     
}
//const handleUpdate = () => {
//    const user = new StudentInfo();
//    if (user.firstName.value == "" ||
//        user.lastName.value == "" ||
//        user.classes.value == "" ||
//        user.gpa.value == "") {
//        alert("You forgot some input values. Try again");
//        return false;

//    }
//    else {
//        user.updateUser();
//        user.createNewUser();
//        //user.postImage();
//        sidebarClose();

//        //user.getAllUsers();
//        return true;
//    }

//}

//2. Create user sidebar
const sidebarCreateUser = () => {
    const user = new StudentInfo();

    let sidebar = document.getElementById("right-col");
    let otherSidebar = document.getElementById("right-right-col");

    document.querySelector("#fileUpload").addEventListener("change", event => {
        user.handleImageUpload(event);
    })

    if (sidebar.style.width != "100%") {
        sidebar.style.border = "4px solid white";
        sidebar.style.width = "100%";
        otherSidebar.style.width = "0%";
    }
    else {
        sidebar.style.border = "0";
        sidebarClose();
    }


}

//3. Update user sidebar
const sidebarEditUser = (id) => {
    const user = new StudentInfo();

    //Get sidebar elements
    let sidebar = document.getElementById("right-right-col");
    let otherSidebar = document.getElementById("right-col");
    let ID = document.getElementById(id);
    let btn = document.getElementById("submitUpdate");
    console.log("inside");
    //Add listner to submit btn to update user
    btn.addEventListener('click', function () { user.updateUser(id) });

    //Get the user to be updated and display in placeholder
    user.getSingleUser(id);

    if (sidebar.style.width != "100%") {
        sidebar.style.width = "100%";
        sidebar.style.border = "4px solid white";
        otherSidebar.style.width = "0%";
    }
    else {
        sidebar.style.border = "0";
        otherSidebarClose();

    }


}

//4.Close Create Sidebar
const sidebarClose = () => {
    let sidebar = document.getElementById("right-col");
    sidebar.style.width = "0%";
    
}
//5.Close Update Sidebar
const otherSidebarClose = () => {
    let sidebar = document.getElementById("right-right-col");
    sidebar.style.width = "0%";
}
