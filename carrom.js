//player div
const p1 = document.getElementById('player1')
const p2 = document.getElementById('player2')
const p3 = document.getElementById('player3')
const p4 = document.getElementById('player4')


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

//dec buttons
const p1dec = document.getElementById('p1dec')
const p2dec = document.getElementById('p2dec')
const p3dec = document.getElementById('p3dec')
const p4dec = document.getElementById('p4dec')

//rani buttons
const p1rani = document.getElementById('p1rani')
const p2rani = document.getElementById('p2rani')
const p3rani = document.getElementById('p3rani')
const p4rani = document.getElementById('p4rani')

//totalscore
const total=document.getElementById('displayedtotal');
let totalscore = 19;

//reset
const reset=document.getElementById('resetbtn');

{//inc logic
p1.addEventListener('click', function() {

    if(p1score!=10){

        p1score++;
        p1scoreDisplay.textContent=p1score;

        totalscore--;
        total.innerText=totalscore;
    }
});

p2.addEventListener('click', function() {

    if(p2score!=10){

        p2score++;
        p2scoreDisplay.textContent = p2score;

        totalscore--;
        total.innerText=totalscore;
    }
});

p3.addEventListener('click', function() {

    if(p3score!=10){

        p3score++;
        p3scoreDisplay.textContent = p3score;
        
        totalscore--;
        total.innerText=totalscore;
    }
});

p4.addEventListener('click', function() {

    if(p4score!=10){

        p4score++;
        p4scoreDisplay.textContent = p4score;

        totalscore--;
        total.innerText=totalscore;
    }
});
}

{//dec logic
p1dec.addEventListener('click', function(event){

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
})

p2dec.addEventListener('click', function(event){

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
})

p3dec.addEventListener('click', function(event){

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
})

p4dec.addEventListener('click', function(event){

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
})
}

{//rani logic
p1rani.addEventListener('click', function(event){

    event.stopPropagation();

    this.disabled=true;
    p2rani.disabled=true;
    p3rani.disabled=true;
    p4rani.disabled=true;

    this.style.setProperty("background-color", "#999");
    p2rani.style.setProperty("background-color", "#999");
    p3rani.style.setProperty("background-color", "#999");
    p4rani.style.setProperty("background-color", "#999");

    p1score++;
    p1scoreDisplay.textContent=p1score;

    totalscore--;
    total.innerText=totalscore;
})

p2rani.addEventListener('click', function(event){

    event.stopPropagation();

    this.disabled=true;
    p1rani.disabled=true;
    p3rani.disabled=true;
    p4rani.disabled=true;

    this.style.setProperty("background-color", "#999");
    p1rani.style.setProperty("background-color", "#999");
    p3rani.style.setProperty("background-color", "#999");
    p4rani.style.setProperty("background-color", "#999");

    p2score++;
    p2scoreDisplay.textContent=p2score;

    totalscore--;
    total.innerText=totalscore;
})

p3rani.addEventListener('click', function(event){

    event.stopPropagation();

    this.disabled=true;
    p1rani.disabled=true;
    p2rani.disabled=true;
    p4rani.disabled=true;

    this.style.setProperty("background-color", "#999");
    p2rani.style.setProperty("background-color", "#999");
    p1rani.style.setProperty("background-color", "#999");
    p4rani.style.setProperty("background-color", "#999");

    p3score++;
    p3scoreDisplay.textContent=p3score;

    totalscore--;
    total.innerText=totalscore;
})

p4rani.addEventListener('click', function(event){

    event.stopPropagation();

    this.disabled=true;
    p1rani.disabled=true;
    p2rani.disabled=true;
    p3rani.disabled=true;

    this.style.setProperty("background-color", "#999");
    p2rani.style.setProperty("background-color", "#999");
    p3rani.style.setProperty("background-color", "#999");
    p1rani.style.setProperty("background-color", "#999");

    p4score++;
    p4scoreDisplay.textContent=p4score;

    totalscore--;
    total.innerText=totalscore;
})
}

{//reset logic
reset.addEventListener('click', function(){

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
})
}