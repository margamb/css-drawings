$(document).ready(() => {

    $(".latte").on("click", () => { 
        $(".fluid").css("background", " #C3B299");
    });

    $(".americano").on("click", () => { 
        $(".fluid").css("background", "#685044");
    });

    $(".macchiato").on("click", () => { 
        $(".fluid").css("background", "#FC9E4F");
    });

});