//scoredisplay
const p1scoreDisplay = document.getElementById('p1score');
const p2scoreDisplay = document.getElementById('p2score');
const p3scoreDisplay = document.getElementById('p3score');
const p4scoreDisplay = document.getElementById('p4score');

//scores
let p1score = 0;
let p2score = 0;
let p3score = 0;
let p4score = 0;

//totalscore
const total=document.getElementById('displayedtotal');
let totalscore = 19;

//bottombar
const resetbtn=document.getElementById('resetbtn');
const statwindow=document.getElementById('statwindow');

const p1total=document.getElementById('p1total');
const p2total=document.getElementById('p2total');
const p3total=document.getElementById('p3total');
const p4total=document.getElementById('p4total');

const p1avg=document.getElementById('p1avg');
const p2avg=document.getElementById('p2avg');
const p3avg=document.getElementById('p3avg');
const p4avg=document.getElementById('p4avg');

let p1totalscore=0;
let p2totalscore=0;
let p3totalscore=0;
let p4totalscore=0;

let p1avgscore=0;
let p2avgscore=0;
let p3avgscore=0;
let p4avgscore=0;

let gamecounter=0;

const gamesplayed=document.getElementById('gamesplayed');

const gametable=document.getElementById('gametable');

const confirmwindow=document.getElementById('confirmwindow');

{//inc logic
document.getElementById('player1').onclick=function() {

    if(p1score!=10){

        p1score++;
        p1scoreDisplay.textContent=p1score;

        totalscore--;
        total.innerText=totalscore;
    }
};

document.getElementById('player2').onclick=function() {

    if(p2score!=10){

        p2score++;
        p2scoreDisplay.textContent = p2score;

        totalscore--;
        total.innerText=totalscore;
    }
};

document.getElementById('player3').onclick=function() {

    if(p3score!=10){

        p3score++;
        p3scoreDisplay.textContent = p3score;
        
        totalscore--;
        total.innerText=totalscore;
    }
};

document.getElementById('player4').onclick=function() {

    if(p4score!=10){

        p4score++;
        p4scoreDisplay.textContent = p4score;

        totalscore--;
        total.innerText=totalscore;
    }
};
}

{//dec logic
document.getElementById('p1dec').onclick=function(event){

    if(totalscore==19){

        event.stopPropagation();

        p1score--;
        p1scoreDisplay.textContent = p1score;
    }

    else{

        event.stopPropagation();

        p1score--;
        p1scoreDisplay.textContent = p1score;

        totalscore++;
        total.innerText=totalscore;
    }
}

document.getElementById('p2dec').onclick=function(event){

    if(totalscore==19){

        event.stopPropagation();

        p2score--;
        p2scoreDisplay.textContent = p2score;
    }

    else{

        event.stopPropagation();

        p2score--;
        p2scoreDisplay.textContent = p2score;

        totalscore++;
        total.innerText=totalscore;
    }
}

document.getElementById('p3dec').onclick=function(event){

    if(totalscore==19){

        event.stopPropagation();

        p3score--;
        p3scoreDisplay.textContent = p3score;
    }

    else{

        event.stopPropagation();

        p3score--;
        p3scoreDisplay.textContent = p3score;

        totalscore++;
        total.innerText=totalscore;
    }
}

document.getElementById('p4dec').onclick=function(event){

    if(totalscore==19){

        event.stopPropagation();

        p4score--;
        p4scoreDisplay.textContent = p4score;
    }

    else{

        event.stopPropagation();

        p4score--;
        p4scoreDisplay.textContent = p4score;

        totalscore++;
        total.innerText=totalscore;
    }
}
}

//rani buttons
const p1rani = document.getElementById('p1rani')
const p2rani = document.getElementById('p2rani')
const p3rani = document.getElementById('p3rani')
const p4rani = document.getElementById('p4rani')

{//rani logic
p1rani.onclick=function(event){

    if(p1score<9){

        event.stopPropagation();

        this.disabled=true;
        p2rani.disabled=true;
        p3rani.disabled=true;
        p4rani.disabled=true;

        p2rani.style.setProperty("background-color", "#999");
        p3rani.style.setProperty("background-color", "#999");
        p4rani.style.setProperty("background-color", "#999");

        p1score=p1score+2;
        p1scoreDisplay.textContent=p1score;

        totalscore=totalscore-2;
        total.innerText=totalscore;
    }

    else event.stopPropagation();
}

p2rani.onclick=function(event){

    if(p2score<9){

        event.stopPropagation();

        this.disabled=true;
        p1rani.disabled=true;
        p3rani.disabled=true;
        p4rani.disabled=true;

        p1rani.style.setProperty("background-color", "#999");
        p3rani.style.setProperty("background-color", "#999");
        p4rani.style.setProperty("background-color", "#999");

        p2score=p2score+2;
        p2scoreDisplay.textContent=p2score;

        totalscore=totalscore-2;
        total.innerText=totalscore;
    }

    else event.stopPropagation();
}

p3rani.onclick=function(event){

    if(p3score<9){

        event.stopPropagation();

        this.disabled=true;
        p1rani.disabled=true;
        p2rani.disabled=true;
        p4rani.disabled=true;

        p2rani.style.setProperty("background-color", "#999");
        p1rani.style.setProperty("background-color", "#999");
        p4rani.style.setProperty("background-color", "#999");

        p3score=p3score+2;
        p3scoreDisplay.textContent=p3score;

        totalscore=totalscore-2;
        total.innerText=totalscore;
    }

    else event.stopPropagation();
}

p4rani.onclick=function(event){

    if(p4score<9){

        event.stopPropagation();

        this.disabled=true;
        p1rani.disabled=true;
        p2rani.disabled=true;
        p3rani.disabled=true;

        p2rani.style.setProperty("background-color", "#999");
        p3rani.style.setProperty("background-color", "#999");
        p1rani.style.setProperty("background-color", "#999");

        p4score=p4score+2;
        p4scoreDisplay.textContent=p4score;

        totalscore=totalscore-2;
        total.innerText=totalscore;
    }

    else event.stopPropagation();
}
}

{//stat logic
document.getElementById('statsbtn').onclick=function(){
    statwindow.style.visibility='visible';
}
}

{//closebtn logic
document.getElementById('closebtn').onclick=function(){
    statwindow.style.visibility='hidden';
}
}

{//reset logic
resetbtn.onclick=function(){

    p1score=0;
    p2score=0;
    p3score=0;
    p4score=0;

    totalscore = 19;

    p1rani.disabled=false;
    p2rani.disabled=false;
    p3rani.disabled=false;
    p4rani.disabled=false;

    p1rani.style.setProperty("background-color", "#FF6A4D");
    p2rani.style.setProperty("background-color", "#FF6A4D");
    p3rani.style.setProperty("background-color", "#FF6A4D");
    p4rani.style.setProperty("background-color", "#FF6A4D");

    p1scoreDisplay.textContent = p1score;
    p2scoreDisplay.textContent = p2score;
    p3scoreDisplay.textContent = p3score;
    p4scoreDisplay.textContent = p4score;

    total.innerText=totalscore;
}
}

{//newbtn logic
document.getElementById('newbtn').onclick=function(){
    confirmwindow.style.visibility = 'visible';
}
}

{//click out logic
window.onclick = function(event) {

    if (event.target === confirmwindow) {
        confirmwindow.style.visibility = 'hidden';
    }

    else if(event.target === statwindow) {
        statwindow.style.visibility = 'hidden';
    }
}    
}

{//nobtn logic
document.getElementById('nobtn').onclick=function(){

    confirmwindow.style.visibility = 'hidden';
}
}

{//yesbtn logic
document.getElementById('yesbtn').onclick=function(){

    gamecounter++;

    p1totalscore=p1totalscore+p1score;
    p2totalscore=p2totalscore+p2score;
    p3totalscore=p3totalscore+p3score;
    p4totalscore=p4totalscore+p4score;

    p1avgscore=(p1totalscore/gamecounter).toFixed(2);
    p2avgscore=(p2totalscore/gamecounter).toFixed(2);
    p3avgscore=(p3totalscore/gamecounter).toFixed(2);
    p4avgscore=(p4totalscore/gamecounter).toFixed(2);

    p1total.textContent=p1totalscore;
    p2total.textContent=p2totalscore;
    p3total.textContent=p3totalscore;
    p4total.textContent=p4totalscore;

    p1avg.textContent=p1avgscore;
    p2avg.textContent=p2avgscore;
    p3avg.textContent=p3avgscore;
    p4avg.textContent=p4avgscore;

    gamesplayed.textContent="Games played : "+gamecounter;

    // gametable.

    resetbtn.click();
    confirmwindow.style.visibility = 'hidden';
}
}

const p1name = sessionStorage.getItem('p1name');
const p2name = sessionStorage.getItem('p2name');
const p3name = sessionStorage.getItem('p3name');
const p4name = sessionStorage.getItem('p4name');

document.getElementById('p1namep').textContent = p1name;
document.getElementById('p2namep').textContent = p2name;
document.getElementById('p3namep').textContent = p3name;
document.getElementById('p4namep').textContent = p4name;

document.getElementById('p1namet').textContent = p1name;
document.getElementById('p2namet').textContent = p2name;
document.getElementById('p3namet').textContent = p3name;
document.getElementById('p4namet').textContent = p4name;