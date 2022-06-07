let jton = document.getElementById('ton');
let jtime    = document.getElementById("time");
let jppm     = document.getElementById("ppm");
let joutNum  = document.getElementById("outNum");


// function is storag
jppm.onblur = function(){
  window.localStorage.setItem('ppm',jppm.value);
  
  };



onload = function(){
  jppm.value = window.localStorage.getItem('ppm');
};

  
// function is total sum
function  total(){
    let storagppm = window.localStorage.getItem('ppm');
  
    joutNum.value = jton.value * jtime.value * storagppm / 1000;
};



// hts is  my footer
let myFooter =document.createElement('footer');
document.body.appendChild(myFooter);
myFooter.innerText = 'By Hesham Mohamed © 2022';
myFooter.style.cssText = 'background-color: dimgray; position:fixed; bottom:0px; width: 100%; height:50px; margin:0px; padding:0px; text-align:center; color:white;display: flex;align-items:center;justify-content: center';
