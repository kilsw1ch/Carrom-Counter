const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')

const p1scoreDisplay = document.getElementById('p1score');
const p2scoreDisplay = document.getElementById('p2score');
const p3scoreDisplay = document.getElementById('p3score');
const p4scoreDisplay = document.getElementById('p4score');

let p1score = 0;
let p2score = 0;
let p3score = 0;
let p4score = 0;

const p1dec = document.getElementById('p1dec')
const p2dec = document.getElementById('p2dec')
const p3dec = document.getElementById('p3dec')
const p4dec = document.getElementById('p4dec')

const total=document.getElementById('displayedtotal');
let totalscore = 19;

const reset=document.getElementById('resetbtn');

p1.addEventListener('click', function() {

    p1score++;
    p1scoreDisplay.textContent = p1score;

    totalscore--;
    total.innerText=totalscore;
});

p2.addEventListener('click', function() {

    p2score++;
    p2scoreDisplay.textContent = p2score;

    totalscore--;
    total.innerText=totalscore;
});

p3.addEventListener('click', function() {

    p3score++;
    p3scoreDisplay.textContent = p3score;
    
    totalscore--;
    total.innerText=totalscore;
});

p4.addEventListener('click', function() {

    p4score++;
    p4scoreDisplay.textContent = p4score;

    totalscore--;
    total.innerText=totalscore;
});

p1dec.addEventListener('click', function(){

    if(p1score!=0){

        p1score = p1score-2;
        p1scoreDisplay.textContent = p1score;
        
        if(totalscore!=0){
            totalscore=totalscore+2;
            total.innerText=totalscore;
        }
    }
})

p2dec.addEventListener('click', function(){

    if(p2score!=0){
        
        p2score=p2score-2;
        p2scoreDisplay.textContent = p2score;

        if(totalscore!=0){
            totalscore=totalscore+2;
            total.innerText=totalscore;
        }
    }
})

p3dec.addEventListener('click', function(){

    if(p3score!=0){

        p3score=p3score-2;
        p3scoreDisplay.textContent = p3score;

        if(totalscore!=0){
            totalscore=totalscore+2;
            total.innerText=totalscore;
        }
    }
})

p4dec.addEventListener('click', function(){

    if(p4score!=0){

        p4score=p4score-2;
        p4scoreDisplay.textContent = p4score;
        
        if(totalscore!=0){
            totalscore=totalscore+2;
            total.innerText=totalscore;
        }
    }
})

reset.addEventListener('click', function(){

    totalscore = 19;

    p1scoreDisplay.textContent = 0;
    p2scoreDisplay.textContent = 0;
    p3scoreDisplay.textContent = 0;
    p4scoreDisplay.textContent = 0;

    total.innerText=totalscore;
})