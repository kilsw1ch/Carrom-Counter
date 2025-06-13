const p1namefield=document.getElementById('p1name');
const p2namefield=document.getElementById('p2name');
const p3namefield=document.getElementById('p3name');
const p4namefield=document.getElementById('p4name');

const startbtn=document.getElementById('start');
const vsspan=document.getElementById('vsspan');

document.getElementById('gamemode1').onclick=function(){

    p3namefield.style.visibility='hidden';
    p4namefield.style.visibility='hidden';

    p1namefield.style.top="0";
    p2namefield.style.top="50%";

    vsspan.style.top="25%";

    startbtn.style.top="65%";
}

document.getElementById('gamemode2').onclick=function(){

    p2namefield.style.top="15%";

    vsspan.style.top="37%";

    p3namefield.style.visibility='visible';
    p4namefield.style.visibility='visible';

    p3namefield.style.top="61%";
    p4namefield.style.top="75%";

    startbtn.style.top="75%";
}

startbtn.onclick=function(){

    // if(p1namefield.value!="" && p2namefield.value!=""){

    //     sessionStorage.setItem('p1name', p1namefield.value);
    //     sessionStorage.setItem('p2name', p2namefield.value);

    //     window.location.href = 'carrom.html';
    // }

    if(p1namefield.value!="" && p2namefield.value!="" && p3namefield.value!="" && p4namefield.value!=""){

        sessionStorage.setItem('p1name', p1namefield.value);
        sessionStorage.setItem('p2name', p2namefield.value);
        sessionStorage.setItem('p3name', p3namefield.value);
        sessionStorage.setItem('p4name', p4namefield.value);

        window.location.href = 'carrom.html';
    }
}