const counterdisplay = document.getElementById("drinksmade-text");

let counter = Number(window.localStorage.getItem("freshcounter"));

counterdisplay.innerHTML = counter;