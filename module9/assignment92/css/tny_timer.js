"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Thienkim Le
   Date:   04/24/2024

*/

// Call the showClock() function to display the current date and time
showClock();

// Run the showClock() function every second to update the clock in real-time
setInterval("showClock()", 1000);

/* Function to create and run the countdown clock */
function showClock() {
    // Step a & b: Store the current date and time
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();

    // Step c: Display the current date and time
    document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";

    // Call the nextJuly4() function and store the returned date in the j4Date variable
    var j4Date = nextJuly4(thisDay);

    // Set the hours value of j4Date to 9 p.m.
    j4Date.setHours(21);

    // Step f: Calculate the days, hours, minutes, and seconds until July 4 at 9 p.m.
    var days = (j4Date - thisDay) / (1000 * 60 * 60 * 24);
    var hrs = (days - Math.floor(days)) * 24;
    var mins = (hrs - Math.floor(hrs)) * 60;
    var secs = (mins - Math.floor(mins)) * 60;

    // Step g: Display the time left until July 4 at 9 p.m.
    document.getElementById("dLeft").textContent = Math.floor(days);
    document.getElementById("hLeft").textContent = Math.floor(hrs);
    document.getElementById("mLeft").textContent = Math.floor(mins);
    document.getElementById("sLeft").textContent = Math.floor(secs);
}

/* Function to find the date of the next July 4th */
function nextJuly4(currentDate) {
    var cYear = currentDate.getFullYear();
    var jDate = new Date("July 4, 2024");
    jDate.setFullYear(cYear);
    if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
    return jDate;
}
