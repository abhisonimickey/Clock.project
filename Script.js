/*var hr = document.getElementById('hour');
var mi = document.getElementById('min');
var se = document.getElementById('sec');

function displayTime(){
   var now = new Date();

   // getting hour,mins,secs from date

   var hh = now.getHours();
   var mm= now.getMinutes();
   var ss= now.getSeconds();

   var hRotation = 30*hh + mm/2;
   var mRotation = 6*mm;
   var sRotation = 6*ss;

hr.style.transform = `rotate(${hRotation}deg)`;
mi.style.transform = `rotate(${mRotation}deg)`;
se.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime, 1000);*/
/*var hr = document.getElementById('hour');
var mi = document.getElementById('min');
function updateClock() {

    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();//.innerText=Date()

    // correct the values to a 12-hour format
    if (hours > 12) {
        hours -= 12;
    }

    // adjust for a 360-degree circle
    var secondDegrees = ((seconds / 60) * 360) + 90;
    var minuteDegrees = ((minutes / 60) * 360) + 90;
    var hourDegrees = ((hours / 12) * 360) + 90;

    // apply the rotations
    hr.style.transform = 'rotate(' + hourDegrees + 'deg)';
    mi.style.transform = 'rotate(' + minuteDegrees + 'deg)';
    document.getElementById('sec').style.transform = 'rotate(' + secondDegrees + 'deg)';
    
              
        
    
}

// Call updateClock() every second to update the clock's display.
updateClock();
setInterval(updateClock, 1000);*/
var hr = document.getElementById('hour');
var mi = document.getElementById('min');
 var se =document.getElementById('sec')
function updateClock() {

    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();//.innerText=Date()

    // correct the values to a 12-hour format
    if (hours > 12) {
        hours -= 12;
    }

    // adjust for a 360-degree circle
    var secondDegrees = ((seconds / 60) * 360) + 90;
    var minuteDegrees = ((minutes / 60) * 360) + 90;
    var hourDegrees = ((hours / 12) * 360) + 90;

    // apply the rotations
    hr.style.transform = 'rotate(' + hourDegrees + 'deg)';
    mi.style.transform = 'rotate(' + minuteDegrees + 'deg)';
    se.style.transform = 'rotate(' + secondDegrees + 'deg)';
    
              
        
    
}

// Call updateClock() every second to update the clock's display.
//updateClock();
setInterval(updateClock, 1000);

