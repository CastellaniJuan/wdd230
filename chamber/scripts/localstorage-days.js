const displayVisit = document.getElementById("lsvisit");

let LastVisit = Number(window.localStorage.getItem("lsvisit"));

let today = Math.round(currentDate/(1000 * 3600 * 24))
const dayDiff = 0;

if (LastVisit == 0){
    
displayVisit.textContent = "This is your first day visiting us!";
}else{
    dayDiff = today - LastVisit;
    LastVisit = today;
    displayVisit.textContent = "Your last visit was " + dayDiff + " ago";

}


