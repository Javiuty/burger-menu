let menu = document.getElementById("menu");
let hidden = document.getElementById("hidden");

let icon2 = document.querySelector(".icon1");
let icon1 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");


let openOrNot = false;

menu.addEventListener("click", function() {


    if (!openOrNot) {
        hidden.style.opacity = "1";
        icon2.style.opacity = "0";
        icon1.style.transform = "translateY(1.3rem) translateX(.3rem) rotate(45deg)";
        icon3.style.transform = "translateY(-1.0rem) translateX(-.35rem) rotate(-45deg)";
        icon1.style.transition = "all .3s";
        icon2.style.transition = "all .3s";
        icon3.style.transition = "all .3s";

        openOrNot = true;
    } else {
        hidden.style.opacity = "0";
        icon2.style.opacity = "1";
        icon1.style.transform = "inherit";
        icon3.style.transform = "inherit";

        openOrNot = false;
    }

});



