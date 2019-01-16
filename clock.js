/* clock */ 

const secHand = document.querySelector(".secondHand");
const minsHand = document.querySelector(".minHand");
const hoursHand = document.querySelector(".hourHand");

function setDate() {

    const now = new Date();

    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; /* 360 es por los grados del circulo y 90 es por el transform: rotate(90deg); de la clase hand */
    secHand1.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand1.style.transform = `rotate(${minsDegrees}deg)`;


    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hoursHand1.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); /* cada segundo se actualice*/ 

setDate();



const secHand1 = document.querySelector(".secondHand");
const minsHand1 = document.querySelector(".minHand");
const hoursHand1 = document.querySelector(".hourHand");

function setDate() {

    const today = new Date();

    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; /* 360 es por los grados del circulo y 90 es por el transform: rotate(90deg); de la clase hand */
    secHand1.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand1.style.transform = `rotate(${minsDegrees}deg)`;


    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hoursHand1.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); /* cada segundo se actualice*/ 

setDate();