



setInterval( function() {
    sleep.value -= 5;
    hunger.value -= 5;
    hygiene.value -= 5;
    love.value -= 5;
    
    
    return [sleep.value, hunger.value, hygiene.value, love.value];
}, 1000 );
    
function changeValue(a){
    if (a.value <100) {
        return a.value += 10;
                
    }
}
    
