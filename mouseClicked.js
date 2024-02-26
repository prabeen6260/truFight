function mouseClicked() {
    push();
        textFont(font1);
        textSize(100);
        textAlign(CENTER,CENTER);
        fill(255,0,0);
    // Check if the mouse is over the "CHANGE MAP" option
    if (
        mouseX > windowWidth / 2 - textWidth("FIGHT")/2&&
        mouseX < width / 2 + textWidth("FIGHT")/2 &&
        mouseY > windowHeight / 2 - 250 - 30 && // Adjust based on text size
        mouseY < windowHeight / 2 - 250 + 40 && showOptions===true && flagForMaps===false
    ) {
        showOptions=!showOptions;
        gameStart = true;
        fight.play();
        tring.play();
    
    }
    if (
        mouseX > windowWidth / 2 - textWidth("CHANGE MAP")/2&&
        mouseX < windowWidth / 2 + textWidth("CHANGE MAP")/2 &&
        mouseY > windowHeight / 2 - 100 - 30 && // Adjust based on text size
        mouseY < windowHeight / 2 - 100 + 40 && showOptions===true && flagForMaps===false
    ) {
        showOptions=!showOptions;
        flagForMaps=!flagForMaps;
        bullet.play();
    }
    if (
        mouseX > windowWidth / 2  -textWidth("QUIT")/2&&
        mouseX < windowWidth / 2 + textWidth("QUIT")/2 &&
        mouseY > windowHeight / 2  + 200 - 30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 200 + 30 
    ) {
        flagForQuit=true;
    }
    
    // if (
    //     mouseX > windowWidth / 2  -textWidth("AUDIO")/2&&
    //     mouseX < windowWidth / 2 + textWidth("AUDIO") /2&&
    //     mouseY > windowHeight / 2  + 50 - 30 && // Adjust based on text size
    //     mouseY < windowHeight / 2  + 50 + 30 &&flagForMaps===false
    // ) {
    //     audioPressed();
    //     console.log('hi');
    // }
    pop();
    textFont(font1);
        textSize(50);
        textAlign(CENTER,CENTER);
        fill(255,0,0);
    if (
        mouseX > windowWidth / 2 -600- textWidth("DESERTBLITZ")/2&&
        mouseX < windowWidth / 2-600 + textWidth("DESERTBLITZ")/2 &&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2   + 20 && showOptions===false
    ) {
        showOptions=false;
        flagForMap1=!flagForMap1;
        flagForMaps=true;
         flagForMap2=false;
         flagForMap3=false;
         flagForMap4=false;
         flagForMap5=false;
         mapMusic("map1");
    }
    if (
        mouseX > windowWidth / 2 -300- textWidth("UMBRACITY")/2&&
        mouseX < windowWidth / 2-300 + textWidth("UMBRACITY")/2 &&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2   + 20 && showOptions===false
    ) {
        showOptions=false;
        flagForMap2=!flagForMap2;
        flagForMaps=true;
         flagForMap1=false;
         flagForMap3=false;
         flagForMap4=false;
         flagForMap5=false;
         mapMusic("map2");
    }
    if (
        mouseX > windowWidth / 2 - textWidth("EMBERFALLS")/2&&
        mouseX < windowWidth / 2 + textWidth("EMBERFALLS")/2 &&
        mouseY > windowHeight / 2 - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20  && showOptions===false
    ) {
        showOptions=false;
        flagForMap3=!flagForMap3;
         flagForMap2=false;
         flagForMap1=false;
         flagForMap4=false;
         flagForMap5=false;
        flagForMaps=true;
        mapMusic("map3");
    }
    if (
        mouseX > windowWidth / 2 +300- textWidth("BREEZEHAVEN")/2&&
        mouseX < windowWidth / 2+300 + textWidth("BREEZEHAVEN")/2 &&
        mouseY > windowHeight / 2  - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20 && showOptions===false
    ) {
        showOptions=false;
        flagForMap4=!flagForMap4;
        flagForMaps=true;
         flagForMap2=false;
         flagForMap3=false;
         flagForMap1=false;
         flagForMap5=false;
         mapMusic("map4");
    }
    if (
        mouseX > windowWidth / 2 +600 -textWidth("BLAZE LODGE")/2&&
        mouseX < windowWidth / 2+600 + textWidth("BLAZE LODGE")/2 &&
        mouseY > windowHeight / 2 - 20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 20 && showOptions===false
    ) {
        showOptions=false;
        flagForMap5=!flagForMap5;
        flagForMaps=true;
         flagForMap2=false;
         flagForMap3=false;
         flagForMap4=false;
         flagForMap1=false;
         mapMusic("map5");
    }
    if (
        mouseX > windowWidth / 2  -textWidth("BACK")/2&&
        mouseX < windowWidth / 2 + textWidth("BACK")/2 &&
        mouseY > windowHeight / 2 +100 -20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 100+20  && flagForMaps===true && showOptions ===false
    ) {
        flagForMaps=false;
        showOptions=true;
    }
}
    // if (
    //     mouseX > windowWidth / 2  -textWidth("BACK")&&
    //     mouseX < windowWidth / 2 + textWidth("BACK") &&
    //     mouseY > windowHeight / 2 +100 -20 && // Adjust based on text size
    //     mouseY < windowHeight / 2  + 100+20  && flagForMaps===true && showOptions ===false
    // ) {
    //     flagForMaps=false;
    //     showOptions=true;
    // }
    // if (
    //     mouseX > windowWidth / 2  -textWidth("SETTINGS")&&
    //     mouseX < windowWidth / 2 + textWidth("SETTINGS") &&
    //     mouseY > windowHeight / 2 +50 -30 && // Adjust based on text size
    //     mouseY < windowHeight / 2  + 50 + 40 && showOptions===true && flagForMaps===false
    // ) {
    //     console.log('settings');
    //     flagForMaps=false;
    //     showOptions=false;
    //     flagForAudioText=true;
    //     flagForAudioBack=true;
    
    
    

    
    
