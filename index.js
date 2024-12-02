//js for switch clock format

const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("date-format");

    if (formatValue === "12") {
        formatSwitchBtn.setAttribute("date-format", "24");
    }
    else {
        formatSwitchBtn.setAttribute("date-format", "12");
    }
});


//Get Current Time In Javascript
function clock() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    //set the time period
    if (hours >= 12) {
        period = "PM";
    }

    //set 12 hour clock format
    var formatValue = formatSwitchBtn.getAttribute("date-format");

    if (formatValue === "12") {
        hours = hours > 12 ? hours % 12 : hours;
    }




    //add 0 for the value lower than 10
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".period").innerHTML = period;
    document.querySelector(".seconds").innerHTML = seconds;
}
var updateClock = setInterval(clock, 1000);

// get the date in js

var today = new Date();
const dayNum = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", { weekday: "long" });
const monthName = today.toLocaleString("default", { month: "short" });

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-num").innerHTML = dayNum;
// document.querySelector(".year").innerHTML = year;

//js for dot menu toglle

const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");
dotmenuBtn.addEventListener("click", () => {
    dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (e.target.id !== "active-menu") {
        dotMenu.classList.remove("active");
    }
});