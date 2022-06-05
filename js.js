let jton     = document.getElementById("ton");
let jtime    = document.getElementById("time");
let jppm     = document.getElementById("ppm");
let joutNum  = document.getElementById("outNum");

function  total(){
    joutNum.value = jton.value * jtime.value * jppm.value / 1000;
};

let  jfoot = document.getElementById("myFoot");

jfoot.innerText = 'By Hesham Mohamed © 2022';
