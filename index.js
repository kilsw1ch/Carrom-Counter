const gamemode1btn=document.getElementById('gamemode1');
const gamemode2btn=document.getElementById('gamemode2');

const names2v2=document.getElementById('names2v2');

gamemode1btn.onclick=function(){
    names2v2.style.visibility='hidden';
}

gamemode2btn.onclick=function(){
    names2v2.style.visibility='visible';
}