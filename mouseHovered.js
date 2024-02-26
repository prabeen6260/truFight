function mouseHovered(){
    if (
        mouseX > width / 2 - textWidth('FIGHT') &&
        mouseX < width / 2 + textWidth("FIGHT")  &&
        mouseY > height / 2 - 250 - 40 && // Adjust based on text size
        mouseY < height / 2 - 250 + 40
    ) {
        
        if(showOptions){
        push();
        textFont(font1);
        textSize(103);
        textAlign(CENTER,CENTER);
        fill(255,0,0);
        text("FIGHT",width/2,height/2-250);
        pop();
        }

    }
    
    if (
        mouseX > width / 2 - textWidth('CHANGE MAP') &&
        mouseX < width / 2 + textWidth("CHNAGE MAP")  &&
        mouseY > height / 2 - 100 - 40 && // Adjust based on text size
        mouseY < height / 2 - 100 + 40
    ) {
        
        if(showOptions){
        push();
        textFont(font1);
        textSize(103);
        textAlign(CENTER,CENTER);
        fill(255,0,0);
        text("CHANGE MAP",width/2,height/2-100);
        pop();
        }

    }
    else if (
        mouseX > windowWidth / 2  -textWidth("SETTINGS")&&
        mouseX < windowWidth / 2 + textWidth("SETTINGS") &&
        mouseY > windowHeight / 2 +50 -30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 50 + 40 && showOptions===true && flagForMaps===false
    ) {
        if(showOptions){
            push();
            textFont(font1);
            textSize(103);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("SETTINGS",width/2,height/2+50);
            pop();
            }
    }
    else if (
        mouseX > windowWidth / 2  -textWidth("QUIT")&&
        mouseX < windowWidth / 2 + textWidth("QUIT") &&
        mouseY > windowHeight / 2  +200 - 30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 200 + 30 
    ) {
        if(showOptions){
            push();
            textFont(font1);
            textSize(103);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("QUIT",width/2,height/2+200);
            pop();
            }
    }

    else if (
        mouseX > windowWidth / 2 -600- textWidth("DESERTBLITZ")&&
        mouseX < windowWidth / 2-600 + textWidth("DESERTBLITZ") &&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2   + 20
    ) {
        if(!showOptions && !flagForAudioText){
            push();
            textFont(font1);
            textSize(52);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("DESERT BLITZ",width/2-600,height/2);
            pop();
            }
    }
    else if (
        mouseX > windowWidth / 2 -300- textWidth("UMBRACITY")&&
        mouseX < windowWidth / 2-300 + textWidth("UMBRACITY") &&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2   + 20 
    ) { 
        if(!showOptions &&  !flagForAudioText){
            push();
            textFont(font1);
            textSize(52);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("UMBRA CITY",width/2-300,height/2);
            pop();
            }
    }
    else if (
        mouseX > windowWidth / 2 - textWidth("EMBERFALLS")&&
        mouseX < windowWidth / 2 + textWidth("EMBERFALLS") &&
        mouseY > windowHeight / 2 - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20) {
            if(!showOptions && !flagForAudioText){
                push();
                textFont(font1);
                textSize(52);
                textAlign(CENTER,CENTER);
                fill(255,0,0);
                text("EMBER FALLS",width/2,height/2);
                pop();
                }
    }
    else if (
        mouseX > windowWidth / 2 +300- textWidth("BREEZEHAVEN")&&
        mouseX < windowWidth / 2+300 + textWidth("BREEZEHAVEN") &&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20
    ) {
        if(!showOptions && !flagForAudioText){
            push();
            textFont(font1);
            textSize(52);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("BREEZE HAVEN",width/2+300,height/2);
            pop();
            }
    }
    else if (
        mouseX > windowWidth / 2 +600 -textWidth("WETBOULEVARD")&&
        mouseX < windowWidth / 2+600 + textWidth("WETBOULEVARD") &&
        mouseY > windowHeight / 2 - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20 && !flagForAudioText
    ) {
        if(!showOptions ){
            push();
            textFont(font1);
            textSize(52);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("WET BOULEVARD",width/2+600,height/2);
            pop();
            }
    }
    
    else if (
        mouseX > windowWidth / 2  -textWidth("BACK")&&
        mouseX < windowWidth / 2 + textWidth("BACK") &&
        mouseY > windowHeight / 2 +100 -20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 100+20  && flagForMaps===true && showOptions ===false
    ) {
        if(!showOptions){
            push();
            textFont(font1);
            textSize(52);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("BACK",width/2,height/2+100);
            pop();
            }
    }
    // for back option in audio
    else if (
        mouseX > windowWidth / 2  -textWidth("BACK")&&
        mouseX < windowWidth / 2 + textWidth("BACK") &&
        mouseY > windowHeight / 2 +100 -30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 100+30 && showOptions===false && flagForMaps===false && flagForAudioText==true
    ) {
        if(!showOptions){
            push();
            textFont(font1);
            textSize(62);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("BACK",width/2,height/2+100);
            pop();
            }
    }
    // BACK OPTION IN AUDIO
    else if (
        mouseX > windowWidth / 2  -textWidth("AUDIO")&&
        mouseX < windowWidth / 2 + textWidth("AUDIO") &&
        mouseY > windowHeight / 2  -30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 30 && showOptions===false && flagForMaps===false && flagForAudioText==true
    ) {
        if(!showOptions){
            push();
            textFont(font1);
            textSize(62);
            textAlign(CENTER,CENTER);
            fill(255,0,0);
            text("AUDIO",width/2,height/2);
            pop();
            }
    }
    // quit function
    
}