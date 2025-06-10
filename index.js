const p3namefield=document.getElementById('p3name');
const p4namefield=document.getElementById('p4name');

const startbtn=document.getElementById('start');

document.getElementById('gamemode1').onclick=function(){
    p3namefield.style.visibility='hidden';
    p4namefield.style.visibility='hidden';
    startbtn.style.top="60%";
}

document.getElementById('gamemode2').onclick=function(){
    p3namefield.style.visibility='visible';
    p4namefield.style.visibility='visible';
    startbtn.style.top="80%";
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

    window.location.href = 'https://kilsw1ch.github.io/Carrom-Counter/carrom.html';
    // window.location.href = 'carrom.html';
}