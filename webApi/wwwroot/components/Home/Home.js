window.addEventListener('DOMContentLoaded', (event) => {
    const user = new StudentInfo();
    user.getAllUsers();
 
});

const handleSearch = () => {
    var search = document.getElementById("search");
    var lowerSearch = search.value.toLowerCase();
    var rows = document.getElementsByTagName("tr");
    console.log(rows);
    for (let i = 1; i < rows.length; i++) {
        let firstName = rows[i].getElementsByTagName("td");
        firstName = firstName[1].innerHTML.toLowerCase();
        console.log(`Yo ${firstName}`);
        if (firstName) {
            if (lowerSearch.length == 0 || (lowerSearch.length < 3 && firstName.indexOf(lowerSearch) == 0) || (firstName.length >= 3 && firstName.indexOf(lowerSearch) > -1) ) {
                rows[i].style.display = "";
            }
            else {
                rows[i].style.display = "none";
            }


        }
    }
    console.log(lowerSearch);
    console.log(search);
};

