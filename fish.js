//kristian og hans christian sitt territorie
//kristian var her

function evolve() {
    if (experience >= nextLevel) {
        errorMessage = '';
        evolveState++ ; //øker utviklingsstadiet med 1
        nextLevel =  nextLevel * 2.5;
        evolveImg = fishGifs[evolveState]; //henter bilde utifra utviklingsstadie
        experienceRate += 0.1;
    }
    else {
        errorMessage = 'Du trenger ' + nextLevel + ' experience for å utvikle fisken.';
    }

    if (evolveState == 3){ //Siste utviklingsstadie
        evolveBtnStyle = 'visibility: hidden';
    } 
    view();
}

function evaluate() {
    const avg = (hunger + hygiene + sleep + love)/4; //Sjekker "magefølelsen"
    experience += avg * experienceRate; //belønner at du tar godt vare på Joel

    if (avg > 80) { //sjekker magefølelsen
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
    else { //avg == 0, fisken er død
        moodState = 5;
        clearInterval(decreasing);
        clearInterval(evaluating);
        errorMessage = 'Joel har dødd!';
    }
    
    moodImg = moodGifs[moodState]; //oppdaterer bildepath til det som korresponderer til humøret
    view(); 
}

function reset() { //Nullstiller alt til model
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