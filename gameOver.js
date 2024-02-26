
function gameOver(){
    
    push()
    textFont(font1);
    textSize(100);
    fill(255);
    textAlign(CENTER,CENTER);
    
    if(player1_health<=1){
        
        showOptions = false;
        gameStart = false;
        text("GAME OVER",windowWidth/2,windowHeight/2);
        //time2=millis();
        //console.log("game over");
    } else if(player1_health>=1 && player2_health<=1){
        
        showOptions = false;
        gameStart = false;
        text("YOU WIN",windowWidth/2,windowHeight/2);
        //time=millis();
        //console.log("game over");
    }
    
    if(Math.abs(millis()-time1)>=5000){
        showOptions=true;
        player1_health = 100;
        player2_health = 100;
        console.log("game start");
        player2_health=100;
        player1_x = 1300;
        player2_x = 500;
    }
    pop();
}