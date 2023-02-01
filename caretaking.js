
var sleep = document.getElementById('sleep');
var hunger = document.getElementById('hunger');
var hygiene = document.getElementById('hygiene');
var love = document.getElementById('love');
const imgSrc = ["img/fiskglad1.1(bilde1).png",
'img/fiskmediumglad1(bilde2).png',
'img/fisktrist1(bilde4).png',
'img/fisk kjempe trist1(bilde5).png',
'img/fiskdod1(bilde7).png'];
let imgName = document.getElementById('image');

setImageSource();

setInterval( function() {
    sleep.value -= 5;
    hunger.value -= 5;
    hygiene.value -= 5;
    love.value -= 5;
    
    setImageSource();
    return [sleep.value, hunger.value, hygiene.value, love.value];
}, 1000 );
    
function changeValue(a){
    if (a.value <100) {
        setImageSource();
        return a.value += 10;
                
    }
}
    
function setImageSource() {
    if (sleep.value >= 80 && hunger.value >= 80 && hygiene.value >= 80 && love.value >= 80 ) imgName.src = imgSrc[0];
    else if (sleep.value >= 60 && hunger.value >= 60 && hygiene.value >= 60 && love.value >= 60 ) imgName.src = imgSrc[1];
    else if (sleep.value >= 40 && hunger.value >= 40 && hygiene.value >= 40 && love.value >= 40 ) imgName.src = imgSrc[2];
    else if (sleep.value >= 20 && hunger.value >= 20 && hygiene.value >= 20 && love.value >= 20 ) imgName.src = imgSrc[3];
    else if (sleep.value >= 0 && hunger.value >= 0 && hygiene.value >= 0 && love.value >= 0 ) imgName.src = imgSrc[4];
}