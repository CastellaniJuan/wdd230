const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

const fruit1 = document.getElementById('fruit1');
const fruit2 = document.getElementById('fruit2');
const fruit3 = document.getElementById('fruit3');

var data = [];
let counter = 0;

const form = document.getElementById('freshform');

function findElement(arr, propValue) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i].name == propValue)
            return arr[i];

    // will return undefined if not found; you could return a default instead
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const fruits = jsonObject;
        data = fruits;
        fruits.forEach(fruit => {
            const fruitv1 = document.createElement('option');
            const fruitv2 = document.createElement('option');
            const fruitv3 = document.createElement('option');

            fruitv1.setAttribute("value", fruit.name);
            fruitv1.innerHTML = fruit.name;
            fruitv2.setAttribute("value", fruit.name);
            fruitv2.innerHTML = fruit.name;
            fruitv3.setAttribute("value", fruit.name);
            fruitv3.innerHTML = fruit.name;

            fruit1.appendChild(fruitv1);
            fruit2.appendChild(fruitv2);
            fruit3.appendChild(fruitv3);
        });
    });


form.addEventListener('submit', (event) => {

    counter = window.localStorage.getItem("freshcounter");
    // stop form submission
    const date = new Date;
    event.preventDefault();
    values1 = findElement(data, form.elements[3].value);
    values2 = findElement(data, form.elements[4].value);
    values3 = findElement(data, form.elements[5].value);

    alert("Thank you for your order!" +
        "\nOrder date: " + date.toUTCString() +
        "\nName: " + form.elements[0].value
        + "\nEmail: " + form.elements[1].value
        + "\nPhone #: " + form.elements[2].value
        + "\nFruit 1: " + form.elements[3].value
        + "\nFruit 2: " + form.elements[4].value
        + "\nFruit 3: " + form.elements[5].value
        + "\nInstructions: " + form.elements[6].value
        + "\nTotal nutritional values:"
        + "\nCarbohydrates: " + (values1.nutritions.carbohydrates + values2.nutritions.carbohydrates + values3.nutritions.carbohydrates) +"g"
        + "\nProtein: " + (values1.nutritions.protein + values2.nutritions.protein + values3.nutritions.protein) +"g"
        + "\nFat: " + (values1.nutritions.fat + values2.nutritions.fat + values3.nutritions.fat) +"g"
        + "\nSugar: " + (values1.nutritions.sugar + values2.nutritions.sugar + values3.nutritions.sugar) +"g"
        + "\nCalories: " + (values1.nutritions.calories + values2.nutritions.calories + values3.nutritions.calories) +"g"
    );
    form.reset();
    counter++;
    window.localStorage.setItem("freshcounter", counter);
});

