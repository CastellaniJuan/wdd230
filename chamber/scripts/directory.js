const requestURL = 'data/data.json';
const cards = document.querySelector('.cards');


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
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phonenumber = document.createElement('p');
    let url = document.createElement('a');
    let portrait = document.createElement('img');
    let membership = document.createElement('p');
    let category = document.createElement('p');

    name.textContent = company.name;
    address.textContent = company.address;
    phonenumber.textContent = company.address;
    url.setAttribute('href', company.url);
    url.textContent = company.name + " site";
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('alt', company.name + " logo");
    membership.textContent = company.membership + " member";
    category.textContent = company.category;

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(url);
    card.appendChild(portrait);
    card.appendChild(membership);
    card.appendChild(category);

    document.querySelector('div.cards').appendChild(card);
}


