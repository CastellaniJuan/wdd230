const requestURL = 'https://raw.githubusercontent.com/CastellaniJuan/wdd230/main/final-project/data/fruits.json';



fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //const companies = jsonObject['companies'];
        //companies.forEach(displayCompanies);
    });
