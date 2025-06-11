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

    const p1name = document.getElementById('p1name').value;
    const p2name = document.getElementById('p2name').value;
    const p3name = document.getElementById('p3name').value;
    const p4name = document.getElementById('p4name').value;

    sessionStorage.setItem('p1name', p1name);
    sessionStorage.setItem('p2name', p2name);
    sessionStorage.setItem('p3name', p3name);
    sessionStorage.setItem('p4name', p4name);

    // window.location.href = 'https://kilsw1ch.github.io/Carrom-Counter/carrom.html';
    window.location.href = 'carrom.html';
}