let hunger = 100;
let hygiene = 100;
let sleep = 100;
let love = 100;
let imgName = null;

const imgSrc = ["https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_1280.png",
'https://images.emojiterra.com/google/android-11/512px/263a.png',
'https://www.pngitem.com/pimgs/m/50-500914_neutral-emoji-png-transparent-background-neutral-emoji-png.png',
'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/frowning-face.png',
'https://media.tenor.com/gMC-purKMQ4AAAAM/sad-cry.gif'];
        
updateView();
function updateView(){
    if (sleep >= 80 && hunger >= 80 && hygiene >= 80 && love >= 80 ) imgName = imgSrc[0];
    else if (sleep >= 60 && hunger >= 60 && hygiene >= 60 && love >= 60 ) imgName = imgSrc[1];
    else if (sleep >= 40 && hunger >= 40 && hygiene >= 40 && love >= 40 ) imgName = imgSrc[2];
    else if (sleep >= 20 && hunger >= 20 && hygiene >= 20 && love >= 20 ) imgName = imgSrc[3];
    else if (sleep >= 0 && hunger >= 0 && hygiene >= 0 && love >= 0 ) imgName = imgSrc[4];
           
document.getElementById('app').innerHTML = /*html*/ `
    <h1>Fisk-tamagotchi</h1>
    <img height="200px" width="200px" id="humør" alt="humør" src="${imgName}" /> <br/>

    Sleep   : <progress id="sleep" value="${sleep}" min="0" max="100">Leke</progress>
    <button onclick="add('sleep')">Soothe the fish</button><br/>

    Hunger  : <progress id="hunger" value="${hunger}" min="0" max="100">Hungry</progress>
    <button onclick="add('hunger')">Feed</button> <br/>

    Hygiene : <progress id="hygiene" value="${hygiene}" min="0" max="100">Hungry</progress>
    <button onclick="add('hygiene')">Wash</button> <br/>

    Love    : <progress id="love" value="${love}" min="0" max="100">Love</progress>
    <button onclick="add('love')">Give attention</button> <br/>
    `;        
}

        
//Decreases automatically the values of sleep, hunger, hygeiene, love. 
setInterval( function() {
    sleep = Math.max(0, sleep - 5);
    hunger = Math.max(0, hunger - 5);
    hygiene = Math.max(0, hygiene - 5);
    love = Math.max(0, love - 5);
    updateView();
}, 1000 );

       
//Increases the values of sleep, hunger, hygeiene, love on click.
function add(s) {
    if (s == 'sleep') sleep = Math.min(sleep + 10, 100);
    if (s == 'hunger') hunger = Math.min(hunger + 10, 100);
    if (s == 'hygiene') hygiene = Math.min(hygiene + 10, 100);
    if (s == 'love') love = Math.min(love + 10, 100);
        
    updateView();

}