
//5.Event listeners


// 1.Loads table on page load
window.addEventListener('DOMContentLoaded', (event) => {
    const user = new StudentInfo();
    user.getAllUsers();
 
});

//2.Handles the search by displaying appropriate rows based on search values 
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
            if (lowerSearch.length == 0 || (lowerSearch.length < 3 && firstName.indexOf(lowerSearch) == 0) || (firstName.length >= 3 && firstName.indexOf(lowerSearch) > -1)) {
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


//3. Function to sort the table brought to you by w3schools
const sortTable = (n) => {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table-container");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

//4.handle upload
const handleVideoUpload = (event) => {
    let file = document.getElementById("video-upload").files[0];
    console.log("UP Up pu PU load");
}







