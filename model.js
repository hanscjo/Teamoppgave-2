//Å kjøre dette som script førte til krøll mht intervals. Håper det finnes en god løsning slik at vi kan unngå å ha en stor model foran viewet.
var sleep = 100;
var hunger = 100;
var hygiene = 100;
var love = 100;

let experience = 0;
let experienceRate = 0.25;
let nextLevel = 1000;
let evolveState = 0;




let moodState = 0;

const moodGifs = ['img/mood/fiskglad1.1(bilde1)mbakgrunn.png', 
'img/mood/fiskmediumglad1(bilde2)mbakgrunn.png',
'img/mood/fiskbekymret1(bilde3)mbakgrunn.png',
'img/mood/fisk kjempe trist1(bilde5)mbakgrunn.png',
'img/mood/fisksint1(bilde6)mbakgrunn.png',
'img/mood/fiskdod1(bilde7)alternative.png'];

const fishGifs = ['img/evolution/fiskevolve1(bilde1)mbakgrunn.png',
'img/evolution/fiskevolve2(bilde2)mbakgrunn.png',
'img/evolution/fiskevolve3(bilde3)mbakgrunn.png',
'img/evolution/fiskevolve4(bilde4)mbakgrunn.png'];