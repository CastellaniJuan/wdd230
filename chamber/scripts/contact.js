

const select = document.querySelector("#preference");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phonenumber = document.querySelector("#phonenumber");

const emailR = document.querySelector("#emailR");
const addressR = document.querySelector("#addressR");
const phonenumberR = document.querySelector("#phonenumberR");


select.addEventListener("change", changeMethod)

function changeMethod(){
    if (select.options[select.selectedIndex].value == "Phone") {
        phonenumber.setAttribute("required", "required");
        phonenumberR.textContent = "*";

        email.removeAttribute("required");
        emailR.textContent = "";
        address.removeAttribute("required");
        addressR.textContent = "";
    } else if (select.options[select.selectedIndex].value == "Email") {
        email.setAttribute("required", "required");
        emailR.textContent = "*";

        phonenumber.removeAttribute("required");
        phonenumberR.textContent = "";
        address.removeAttribute("required");
        addressR.textContent = "";
    } else if (select.options[select.selectedIndex].value == "Mail") {
        address.setAttribute("required", "required");
        addressR.textContent = "*";

        email.removeAttribute("required");
        emailR.textContent = "";
        phonenumber.removeAttribute("required");
        phonenumberR.textContent = "";

    }
};

