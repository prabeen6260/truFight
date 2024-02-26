function mouseClicked() {
    // Check if the mouse is over the "CHANGE MAP" option
    if (
        mouseX > width / 2 - textWidth("FIGHT")&&
        mouseX < width / 2 + textWidth("FIGHT") &&
        mouseY > height / 2 - 250 - 30 && // Adjust based on text size
        mouseY < height / 2 - 250 + 40 && showOptions===true && flagForMaps===false
    ) {
        showOptions=!showOptions;
        gameStart = true;
    
    }
    if (
        mouseX > width / 2 - textWidth("CHANGE MAP")&&
        mouseX < width / 2 + textWidth("CHANGE MAP") &&
        mouseY > height / 2 - 100 - 30 && // Adjust based on text size
        mouseY < height / 2 - 100 + 40 && showOptions===true && flagForMaps===false
    ) {
        showOptions=!showOptions;
        flagForMaps=!flagForMaps;
    }
    // for maps selection
    if (
        mouseX > windowWidth / 2 -600- textWidth("DESERTBLITZ")&&
        mouseX < windowWidth / 2-600 + textWidth("DESERTBLITZ") &&
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
    }
    if (
        mouseX > windowWidth / 2 -300- textWidth("UMBRACITY")&&
        mouseX < windowWidth / 2-300 + textWidth("UMBRACITY") &&
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
    }
    if (
        mouseX > windowWidth / 2 - textWidth("EMBERFALLS")&&
        mouseX < windowWidth / 2 + textWidth("EMBERFALLS") &&
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
    }
    if (
        mouseX > windowWidth / 2 +300- textWidth("BREEZEHAVEN")&&
        mouseX < windowWidth / 2+300 + textWidth("BREEZEHAVEN") &&
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
    }
    if (
        mouseX > windowWidth / 2 +600 -textWidth("WETBOULEVARD")&&
        mouseX < windowWidth / 2+600 + textWidth("WETBOULEVARD") &&
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
    }
    push()
    textSize(100)
    if (
        mouseX > windowWidth / 2  -textWidth("BACK")&&
        mouseX < windowWidth / 2 + textWidth("BACK") &&
        mouseY > windowHeight / 2 +100 -20 && // Adjust based on text size
        mouseY < windowHeight / 2  + 100+20  && flagForMaps===true && showOptions ===false
    ) {
        flagForMaps=false;
        showOptions=true;
    }
    if (
        mouseX > windowWidth / 2  -textWidth("SETTINGS")&&
        mouseX < windowWidth / 2 + textWidth("SETTINGS") &&
        mouseY > windowHeight / 2 +50 -30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 50 + 40 && showOptions===true && flagForMaps===false
    ) {
        console.log('settings');
        flagForMaps=false;
        showOptions=false;
        flagForAudioText=true;
        flagForAudioBack=true;
    }
    pop();
    // for back option in audio
    if (
        mouseX > windowWidth / 2  -textWidth("BACK")&&
        mouseX < windowWidth / 2 + textWidth("BACK") &&
        mouseY > windowHeight / 2 +100 -30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 100+30 && showOptions===false && flagForMaps===false && flagForAudioText==true
    ) {
        flagForMaps=false;
        //flagForAudioText=true;
        showOptions=true;
        flagForAudiotext=false;
        flagForAudioBack=false;
        flagForMaps=false;
        flagForMap3=false;
       // flagForAudioText=!flagForAudioText;
    }
    // BACK OPTION IN AUDIO
    if (
        mouseX > windowWidth / 2  -textWidth("AUDIO")&&
        mouseX < windowWidth / 2 + textWidth("AUDIO") &&
        mouseY > windowHeight / 2  -30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 30 && showOptions===false && flagForMaps===false && flagForAudioText==true
    ) {
        flagForMaps=false;
        //flagForAudioText=true;
        showOptions=false;
        flagForAudiotext=true;
        flagForAudioBack=true;
        flagForMap3=false;
        flagForMaps=false;
    }
    // quit function
    if (
        mouseX > windowWidth / 2  -textWidth("QUIT")&&
        mouseX < windowWidth / 2 + textWidth("QUIT") &&
        mouseY > windowHeight / 2  +200 - 30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 200 + 30 
    ) {
        flagForQuit=true;
    }

    
    
}