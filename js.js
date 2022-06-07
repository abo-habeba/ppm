let jtime    = document.getElementById("time");
let jppm     = document.getElementById("ppm");
let joutNum  = document.getElementById("outNum");

function  total(){
    joutNum.value = jton.value * jtime.value * jppm.value / 1000;
};

let  jfoot = document.getElementById("myFoot");

jfoot.innerText = 'By Hesham Mohamed © 2022';



let myFooter =document.createElement('footer');
let myP   = document.createElement('p');

myP.innerText = `By Hesham Mohamed © 2022`;

document.body.appendChild(myFooter).appendChild(myP);

myFooter.style.cssText = 'background-color: dimgray;position:fixed;bottom:0px; width: 100%;height:50px;margin:0px;padding:0px; text-align:center;color:white;display: flex;align-items:center;justify-content: center';
