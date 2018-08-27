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

});


//probar que se active el boton
 //la clase active

 

const arr = [1,2,3]

arr.forEach(() =>  2)
