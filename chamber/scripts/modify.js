let LastModify = new Date(document.lastModified);
let currentDate= new Date();
let year = currentDate.getFullYear();


let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(currentDate);
let day = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(currentDate);
let date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currentDate);



let hours = LastModify.getHours();
let minutes = LastModify.getMinutes();
let seconds = LastModify.getSeconds();


document.getElementById("date").textContent = day + ", " + date + " " + month + " " + year;
document.getElementById("modify").textContent += LastModify.toLocaleDateString("en-US") +" "+hours+":"+minutes+":"+seconds;
document.getElementById("copyright").textContent = year;

const banner = document.getElementById("banner");
if (day == "Tuesday" || day =="Monday"){
    banner.style.display = "block";
}