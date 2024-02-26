function mouseHovered(){
    if(!gameStart){
    push();
        textFont(font1);
        textSize(103);
        textAlign(CENTER,CENTER);
        fill(255,0,0);
    if (
        mouseX > windowWidth / 2 - textWidth('FIGHT')/2 &&
        mouseX < windowWidth / 2 + textWidth("FIGHT")/2 &&
        mouseY > windowHeight / 2 - 250 - 40 && // Adjust based on text size
        mouseY < windowHeight / 2 - 250 + 40 && flagForMaps===false
    ) {
        
        if(showOptions){
        text("FIGHT",windowWidth/2,windowHeight/2-250);
        }

    }
    
    if (
        mouseX > windowWidth / 2 - textWidth('CHANGE MAP')/2 &&
        mouseX < windowWidth / 2 + textWidth("CHNAGE MAP") /2 &&
        mouseY > windowHeight / 2 - 100 - 40 && // Adjust based on text size
        mouseY < windowHeight / 2 - 100 + 40 && flagForMaps===false
    ) {
        
        if(showOptions){
        text("CHANGE MAP",windowWidth/2,windowHeight/2-100);
        
        }

    }
    else if (
        mouseX > windowWidth / 2  -textWidth("AUDIO")/2&&
        mouseX < windowWidth / 2 + textWidth("AUDIO")/2 &&
        mouseY > windowHeight / 2 +50 -30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 50 + 40 && showOptions===true && flagForMaps===false
    ) {
        if(showOptions){
            text("AUDIO",windowWidth/2,windowHeight/2+50);
            
            }
    }
    else if (
        mouseX > windowWidth / 2  -textWidth("QUIT")/2&&
        mouseX < windowWidth / 2 + textWidth("QUIT") /2&&
        mouseY > windowHeight / 2  +200 - 30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 200 + 30 && flagForMaps===false
    ) {
        if(showOptions){
            text("QUIT",windowWidth/2,windowHeight/2+200);
            
            }
    }
    pop();
    push();
    textFont(font1);
    textSize(52);
    textAlign(CENTER,CENTER);
    fill(255,0,0);

     if (
        mouseX > windowWidth / 2 -600- textWidth("DESERTBLITZ")/2&&
        mouseX < windowWidth / 2-600 + textWidth("DESERTBLITZ")/2 &&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2   + 20
    ) {
        if(!showOptions){
            text("DESERT BLITZ",windowWidth/2-600,windowHeight/2);
            
            }
    }
    else if (
        mouseX > windowWidth / 2 -300- textWidth("UMBRACITY")/2&&
        mouseX < windowWidth / 2-300 + textWidth("UMBRACITY") /2&&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2   + 20 
    ) { 
        if(!showOptions){
            text("UMBRA CITY",windowWidth/2-300,windowHeight/2);
            
            }
    }
    else if (
        mouseX > windowWidth / 2 - textWidth("EMBERFALLS")/2&&
        mouseX < windowWidth / 2 + textWidth("EMBERFALLS")/2 &&
        mouseY > windowHeight / 2 - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20) {
            if(!showOptions){
                text("EMBER FALLS",windowWidth/2,windowHeight/2);
                
                }
    }
    else if (
        mouseX > windowWidth / 2 +300- textWidth("BREEZEHAVEN")/2&&
        mouseX < windowWidth / 2+300 + textWidth("BREEZEHAVEN")/2 &&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20
    ) {
        if(!showOptions ){
            text("BREEZE HAVEN",windowWidth/2+300,windowHeight/2);
            
            }
    }
    else if (
        mouseX > windowWidth / 2 +600 -textWidth("BLAZE LODGE")/2&&
        mouseX < windowWidth / 2+600 + textWidth("BLAZE LODGE")/2 &&
        mouseY > windowHeight / 2 - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20
    ) {
        if(!showOptions ){
            
            text("BLAZE LODGE",windowWidth/2+600,windowHeight/2);
            
            }
    }
    
    else if (
        mouseX > windowWidth / 2  -textWidth("BACK")/2&&
        mouseX < windowWidth / 2 + textWidth("BACK")/2 &&
        mouseY > windowHeight / 2 +100 -20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 100+20  && flagForMaps===true && showOptions ===false
    ) {
        if(!showOptions){
            
            text("BACK",windowWidth/2,windowHeight/2+100);
            }
    }
    pop();
    // quit function
}
    
}