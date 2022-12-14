const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });



function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');
    let ordinal = "";

    switch (prophet.order) {
        case 1:
            ordinal = "1st";
            break;
        case 2:
            ordinal = "2nd";
            break;
        case 3:
            ordinal = "3rd";
            break;
        default:
            ordinal = prophet.order + "th";
            break

    }

    // Change the textContent property of the h2 element to contain the prophet's full name
    name.textContent = prophet.name + ' ' + prophet.lastname;
    birthdate.textContent = 'Date of Birth: ' + prophet.birthdate;
    birthplace.textContent = 'Place of Birth: ' + prophet.birthplace;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname + ' - ' + ordinal + ' Latter-day President');
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}


