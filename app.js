let daysItems = document.querySelector(`#days`) 
let hourseItems = document.querySelector(`#hours`) 
let minItems = document.querySelector(`#min`) 
let secItems = document.querySelector(`#sec`) 
let todayDate = document.querySelector(`.date-time`)



let countdown = () => {
    let futureDate = new Date(`17 jun 2024`)
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    console.log(myDate);
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
   

    let hours = Math.floor(myDate / 1000 / 60 / 60 ) % 24;

    let min = Math.floor(myDate / 1000 /60 ) % 60;

    let sec = Math.floor(myDate / 1000 ) % 60;
    
    daysItems.innerText = days;
    hourseItems.innerText = hours;
    minItems.innerText = days;
    secItems.innerText = sec;
    todayDate.innerText = currentDate


}
countdown()
setInterval(countdown)





