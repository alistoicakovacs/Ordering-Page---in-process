// Dropdown Function for the Dropdown Menu - Supplier List

//Toggle between hiding and showing dropdown
function myFunction() {
    document.getElementById("supplierDroplist").classList.toggle("show");
  }

//Close the window when it is clicked next to the box

window.onclick = function() {
    if (!event.target.matches ('.dropbtn')) {
        let dropdowns = document.getElementsByClassName ("dropdown-content");
        let i;
        for( i=0;i<dropdowns.length;i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove ('show');
            }
        }
    }
}