let curtain = document.getElementById("curtain");
let lamp = document.getElementById("lamp_img");
let light = document.getElementById("light");
let magic = document.getElementById("magic");
let magician = document.getElementById("magician");
let hat = document.getElementById("hat");
let rabbit = document.getElementById("rabbit");
let bird = document.getElementById("bird");

curtain.onclick = function() {
    curtain.style.transition = 'margin-top 1s linear';
    curtain.style.marginTop = '-100vh';
}

lamp.onclick = function () {
    if (light.style.opacity == "0.5")
    {
        light.style.opacity = 0;
        magic.style.opacity = 0;
    }
    else
    {
        light.style.opacity = '0.5';
        magic.style.opacity = '1';
    }
}

rabbit.onclick = function () {
    console.log("click");
    rabbit.style.transition = "top 0.5s linear";
    bird.style.transition = "top 0.5s linear 0.5s";

    rabbit.style.top = "450px";
    bird.style.top = "365px";
}

bird.onclick = function () {
    console.log("click");
    rabbit.style.transition = "top 0.5s linear 0.5s";
    bird.style.transition = "top 0.5s linear";

    rabbit.style.top = "365px";
    bird.style.top = "450px";
}