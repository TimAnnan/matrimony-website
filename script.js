var menu = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");

menu.onclick = function() {
    sidebar.classList.toggle("s-sidebar");
}