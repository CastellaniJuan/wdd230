function toggleMenu() {
    document.getElementById("navbar").classList.toggle("open");
    document.getElementById("navbtn").classList.toggle("open");
}

const button = document.getElementById("navbtn");

button.onclick = toggleMenu;