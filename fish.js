//kristian og hans christian sitt territorie
//kristian var her

function evolve() {
    let errorMessage;
    

    if (experience >= nextLevel) {
        errorMessage = '';
        evolveState++ ;
        nextLevel =  nextLevel * 2.5;
        document.getElementById('evolve').src = fishGifs[evolveState];


    }
    else {
        errorMessage = 'Du trenger ' + nextLevel + ' experience for å utvikle fisken.';
    }
    document.getElementById('errorMessage').innerHTML = errorMessage;

    if (evolveState == 3){
        document.getElementById('evolveknapp').style.visibility = "hidden";
    }  
}

function evaluate() {
    const avg = (hunger + hygiene + sleep + love)/4;
    experience += avg * experienceRate;

    if (avg > 80) {
        moodState = 0;
    }
    else if (avg > 60) {
        moodState = 1;
    }
    else if (avg > 40) {
        moodState = 2;
    }
    else if (avg > 20) {
        moodState = 3
    }
    else if (avg > 0) {
        moodState = 4;
    }
    else {
        moodState = 5;
    }
    
    document.getElementById('mood').src = moodGifs[moodState];
    document.getElementById('experiencePoints').innerHTML = experience;
}