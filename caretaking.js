
function decreaseValues() {
   
    sleep = Math.max(0, sleep - 5);
    hunger = Math.max(0, hunger - 5);
    hygiene = Math.max(0, hygiene - 5);
    love = Math.max(0, love - 5);
    
    //return [sleep.value, hunger.value, hygiene.value, love.value];
}

function changeValue(a){
    if (document.getElementById(a).value < 100 && errorMessage != 'Joel har dødd!') {
        if (a == 'sleep') sleep = Math.min(sleep + 10, 100);
        if (a == 'hunger') hunger = Math.min(hunger + 10, 100);
        if (a == 'hygiene') hygiene = Math.min(hygiene + 10, 100);
        if (a == 'love') love = Math.min(love + 10, 100);
    }
    view();
}
    
