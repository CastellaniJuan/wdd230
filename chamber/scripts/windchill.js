

const temp = parseFloat(document.getElementById("temp").textContent);
const windspeed = parseFloat(document.getElementById("windspeed").textContent);
const windchill = document.getElementById("windchill");
var chillvalue = "";
if (temp <= 10 && windspeed >= 4.8) {
   chillvalue = (13.12 + 0.6215*temp - 11.37 * (windspeed**0.16) + 0.3965 * temp * (windspeed**0.16)).toFixed(1);
   windchill.textContent = chillvalue + "ºC";
}else{
    chillvalue = "N/A";
    windchill.textContent = chillvalue
}
