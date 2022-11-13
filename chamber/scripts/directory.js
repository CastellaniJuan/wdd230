const requestURL = 'https://raw.githubusercontent.com/CastellaniJuan/wdd230/main/chamber/data/data.json';
const main = document.querySelector('main');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        companies.forEach(displayProphets);
    });



function displayProphets(company) {

    let card = document.createElement('section');
    let name = document.createElement('h1');
    let address = document.createElement('p');
    let phonenumber = document.createElement('p');
    let url = document.createElement('a');
    let portrait = document.createElement('img');
    let membership = document.createElement('p');
    let category = document.createElement('p');

    card.classList.add('cards');

    name.textContent = company.name;
    address.textContent = company.address;
    phonenumber.textContent = company.phonenumber;
    url.setAttribute('href', company.url);
    url.textContent = company.name + " site";
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('alt', company.name + " logo");
    membership.textContent = company.membership + " member";
    category.textContent = company.category;

    card.appendChild(name);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(phonenumber);
    card.appendChild(url);
    card.appendChild(membership);
    card.appendChild(category);

    document.querySelector('main').appendChild(card);
}


