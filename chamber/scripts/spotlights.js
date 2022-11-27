const requestURL = 'https://raw.githubusercontent.com/CastellaniJuan/wdd230/main/chamber/data/data.json';

const name1 = document.querySelector("#name1");
const img1 = document.querySelector("#img1");
const address1 = document.querySelector("#address1");
const phone1 = document.querySelector("#phone1");
const web1 = document.querySelector("#web1");

const name2 = document.querySelector("#name2");
const img2 = document.querySelector("#img2");
const address2 = document.querySelector("#address2");
const phone2 = document.querySelector("#phone2");
const web2 = document.querySelector("#web2");

const name3 = document.querySelector("#name3");
const img3 = document.querySelector("#img3");
const address3 = document.querySelector("#address3");
const phone3 = document.querySelector("#phone3");
const web3 = document.querySelector("#web3");

let spotlightCompanies = [];

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        Spotlights(companies);
    });



function Spotlights(companies) {

    for (i = 0; i < 3; i++) {
        while (true) {
            company = companies[getRandomInt(companies.length)];
            if ((company.membership == "Silver" || company.membership == "Gold") && !(spotlightCompanies.includes(company))) {
                spotlightCompanies.push(company);
                break;
            }
        }
    }

    name1.textContent = spotlightCompanies[0].name;
    img1.setAttribute("src", spotlightCompanies[0].image);
    address1.textContent = spotlightCompanies[0].address;
    phone1.textContent = spotlightCompanies[0].phonenumber;
    web1.setAttribute("href", spotlightCompanies[0].url);

    name2.textContent = spotlightCompanies[1].name;
    img2.setAttribute("src", spotlightCompanies[1].image);
    address2.textContent = spotlightCompanies[1].address;
    phone2.textContent = spotlightCompanies[1].phonenumber;
    web2.setAttribute("href", spotlightCompanies[1].url);

    name3.textContent = spotlightCompanies[2].name;
    img3.setAttribute("src", spotlightCompanies[2].image);
    address3.textContent = spotlightCompanies[2].address;
    phone3.textContent = spotlightCompanies[2].phonenumber;
    web3.setAttribute("href", spotlightCompanies[2].url);

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}