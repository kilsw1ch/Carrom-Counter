const gamemode1btn=document.getElementById('gamemode1');
const gamemode2btn=document.getElementById('gamemode2');

const p3namefield=document.getElementById('p3name');
const p4namefield=document.getElementById('p4name');

const startbtn=document.getElementById('start');

gamemode1btn.onclick=function(){
    p3namefield.style.visibility='hidden';
    p4namefield.style.visibility='hidden';
    startbtn.style.top="60%";
}

gamemode2btn.onclick=function(){
    p3namefield.style.visibility='visible';
    p4namefield.style.visibility='visible';
    startbtn.style.top="80%";
}

startbtn.onclick=function(){


    window.open('https://kilsw1ch.github.io/Carrom-Counter/carrom.html');
}