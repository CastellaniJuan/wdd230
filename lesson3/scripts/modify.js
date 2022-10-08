let LastModify = new Date(document.lastModified);
let currentDate= new Date();
let year = currentDate.getFullYear();
let hours = LastModify.getHours();
let minutes = LastModify.getMinutes();
let seconds = LastModify.getSeconds();

document.getElementById("modify").textContent += LastModify.toLocaleDateString("en-US") +" "+hours+":"+minutes+":"+seconds;
document.getElementById("copyright").textContent = year;