let time;
function gameOver(){
    push()
    textFont(font1);
    textSize(100);
    fill(255);
    textAlign(CENTER,CENTER);
    if(player2_health===0){
        text("GAME OVER",windowWidth/2,windowHeight/2);
        time=millis();
        console.log("game over");
    }
    if(time>5000){
        showOptions=!showOptions;
        console.log("game start");
        player2_health=100;
    }
    pop();
}