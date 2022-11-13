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
    address.textContent = "📍 " + company.address;
    phonenumber.textContent = "📞 " + company.phonenumber;
    url.textContent = "🌐 " + company.name + " site";
    membership.textContent = company.membership + " member";
    category.textContent = company.category;

    url.setAttribute('href', company.url);
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('alt', company.name + " logo");
    membership.style.fontSize = "1.1em";
    membership.style.fontweight = "bolder";

    switch (company.membership){
        case "Bronze":
            membership.style.color = "#967444";
            break;
        case "Silver":
            membership.style.color = "#808080";
            break;
        case "Gold":
            membership.style.color = "#cda434";
            break;
    }
    

    card.appendChild(name);
    card.appendChild(membership);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(phonenumber);
    card.appendChild(url);
    card.appendChild(category);

    document.querySelector('main').appendChild(card);
}


