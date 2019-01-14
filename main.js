/* clock */ 
const secHand = document.querySelector(".secondHand");
const minsHand = document.querySelector(".minHand");
const hoursHand = document.querySelector(".hourHand");

function setDate() {

    const now = new Date();

    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; /* 360 es por los grados del circulo y 90 es por el transform: rotate(90deg); de la clase hand */
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;


    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); /* cada segundo se actualice*/ 

setDate();

// $(document).ready(() => {

//     $(".latte").on("click", () => { 
//         $(".fluid").css("background", " #C3B299");
//     });

//     $(".americano").on("click", () => { 
//         $(".fluid").css("background", "#685044");
//     });

//     $(".macchiato").on("click", () => { 
//         $(".fluid").css("background", "#FC9E4F");
//     });

    // $("button").on("click", event => {
    //  $(event.currentTarget).addClass('active');
    //  $(event.currentTarget).siblings().removeClass('active')
    //  $(event.currentTarget).closest('.choices').children().removeClass('disabled')
    // })

// });

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById("latte").addEventListener("click", () => { 
//         document.getElementById("fluid").style.backgroundColor = "#C3B299";
//     });

//     document.getElementById("americano").addEventListener("click", () => { 
//         document.getElementById("fluid").style.backgroundColor = "#685044";
//     });

//     document.getElementById("macchiato").addEventListener("click", () => { 
//         document.getElementById("fluid").style.backgroundColor = "#FC9E4F";
//     });

// });

document.addEventListener('DOMContentLoaded', () => {
    const config = [
        {type: "latte", color:"#C3B299"},
        {type: "americano", color:"#685044"},
        {type: "macchiato", color:"#FC9E4F"},
        {type: "crema", color:"#F3D9B0"}
    ]

    config.forEach(coffee => {
        document.getElementById(coffee.type).addEventListener("click", () => { 
            document.getElementById("fluid").style.backgroundColor = coffee.color;
        });    
    })

    $("button").on("click", event => {
        $(event.currentTarget).addClass('active');
        $(event.currentTarget).siblings().removeClass('active')
        $(event.currentTarget).closest('.choices').children().removeClass('disabled')
    })

});


//probar que se active el boton
 //la clase active

//  $(".choices").on("click", event => {
//      $("button").children().removerClass(".disabled")
//      $(event.currentTarget).siblings().removerClass("active")
//  })
 
//  $('.poster-details li').on('click', event => {
//     $(event.currentTarget).addClass('active-size');
    
//     $(event.currentTarget).siblings().removeClass('active-size')
    
//     $(event.currentTarget).closest('.poster-details').children().removeClass('disabled')
    
    
//   });

const arr = [1,2,3]

arr.forEach(() =>  2)


//battery

// $(".plus").on("click", () => { 
//     $(".charge").css("width", "190px");
// });

$('.plus').on('click', function(){
    var length = $('.charge').width() + 40;
    $('.charge').animate({width: length});
});

$(".less").on("click", () => { 
    $('.charge').animate({ width: '6px',},1000);
});



//batman-joker

$(".turn-off").on('click', function(){
    $(".dark-curtain").toggle();
    // $(".dark-curtain").css("background", "transparent");
    $(".light-ball").toggleClass("light-ball--on");
    $(".light-reflections").css("background", "radial-gradient(white, yellow)");
    $(".batman-ear-left-light").toggleClass("batman-ear-left-light--on");
    $(".batman-ear-right-light").toggleClass("batman-ear-right-light--on");
    $(".batman-circle-face-light").toggleClass("batman-circle-face-light--on");
    $(".joker-hair-back-light").toggleClass("joker-hair-back-light--on");
})


