const container = document.getElementById("container");

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.35&appid=9593dd778627f33833096d13b9cc5bfb&units=metric&cnt=24';

var options = { weekday: 'long', month: 'long', day: 'numeric' };

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      // displayResults(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  let dater = new Date;
  weatherData.list.forEach(element => {


      let dateValue = new Date(element.dt_txt)
      let section = document.createElement('section');
      let date = document.createElement('h3');
      let temp = document.createElement('h2');
      let weatherimg = document.createElement('img');
      let imgsrc = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
      let condition = document.createElement('h3');
      let humidity = document.createElement('h3');

      date.innerHTML = dateValue.toLocaleDateString("en-us", options);
      temp.innerHTML = element.main.temp + "ºC";
      weatherimg.setAttribute("src", imgsrc);
      condition.innerHTML = element.weather[0].description.charAt(0).toUpperCase() + element.weather[0].description.slice(1);;
      humidity.innerHTML = "Humidity: " + element.main.humidity + "%";

  if (dater != dateValue.toLocaleDateString("en-us", options)) {
      section.appendChild(date);
      section.appendChild(temp);
      section.appendChild(weatherimg);
      section.appendChild(condition);
      section.appendChild(humidity);
      
      container.appendChild(section);

      section.classList.add('box');

      dater = dateValue.toLocaleDateString("en-us", options);
    } 

  });

}