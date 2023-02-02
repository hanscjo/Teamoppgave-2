//kristian og hans christian sitt territorie
//kristian var her

function evolve() {
    if (experience >= nextLevel) {
        errorMessage = '';
        evolveState++ ;
        nextLevel =  nextLevel * 2.5;
        evolveImg = fishGifs[evolveState];
        experienceRate += 0.1;
    }
    else {
        errorMessage = 'Du trenger ' + nextLevel + ' experience for å utvikle fisken.';
    }

    if (evolveState == 3){
        evolveBtnStyle = 'visibility: hidden';
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
        clearInterval(decreasing);
        clearInterval(evaluating);
        errorMessage = 'Joel har dødd!';
    }
    
    moodImg = moodGifs[moodState];
    view(); 
}

function reset() {
    sleep = 100;
    hunger = 100;
    hygiene = 100;
    love = 100;

    experience = 0;
    experienceRate = 0.25;
    nextLevel = 1000;
    evolveState = 0;

    errorMessage = '';


    moodState = 0;

    evolveBtnStyle = '';

    moodImg = 'img/mood/fiskglad1.1(bilde1)mbakgrunn.png';
    evolveImg = 'img/evolution/fiskevolve1(bilde1)mbakgrunn.png';
    decreasing = setInterval(decreaseValues, 1000);
    evaluating = setInterval(evaluate, 1000);
    view();
}