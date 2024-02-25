function mouseClicked() {
    // Check if the mouse is over the "CHANGE MAP" option
    if (
        mouseX > width / 2 - textWidth("CHANGE MAP")&&
        mouseX < width / 2 + textWidth("CHANGE MAP") &&
        mouseY > height / 2 - 100 - 20 && // Adjust based on text size
        mouseY < height / 2 - 100 + 20 && showOptions===true && flagForMaps===false
    ) {
        showOptions=!showOptions;
        flagForMaps=!flagForMaps;
    }
    // for maps selection
    if (
        mouseX > width / 2 -400- textWidth("MAP1")&&
        mouseX < width / 2-400 + textWidth("map1") &&
        mouseY > height / 2  - 20 && // Adjust based on text size
        mouseY < height / 2   + 20 && showOptions===false
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
        mouseX > width / 2 -200- textWidth("MAP1")&&
        mouseX < width / 2-200 + textWidth("map1") &&
        mouseY > height / 2  - 20 && // Adjust based on text size
        mouseY < height / 2   + 20 && showOptions===false
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
        mouseX > width / 2 - textWidth("MAP1")&&
        mouseX < width / 2 + textWidth("map1") &&
        mouseY > height / 2 - 20 && // Adjust based on text size
        mouseY < height / 2  + 20  && showOptions===false
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
        mouseX > width / 2 +200- textWidth("MAP1")&&
        mouseX < width / 2+200 + textWidth("map1") &&
        mouseY > height / 2  - 20 && // Adjust based on text size
        mouseY < height / 2  + 20 && showOptions===false
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
        mouseX > width / 2 +400 -textWidth("MAP1")&&
        mouseX < width / 2+400 + textWidth("map1") &&
        mouseY > height / 2 - 20 && // Adjust based on text size
        mouseY < height / 2  + 20 && showOptions===false
    ) {
        showOptions=false;
        flagForMap5=!flagForMap5;
        flagForMaps=true;
         flagForMap2=false;
         flagForMap3=false;
         flagForMap4=false;
         flagForMap1=false;
    }
    if (
        mouseX > width / 2  -textWidth("BACK")&&
        mouseX < width / 2 + textWidth("BACK") &&
        mouseY > height / 2 +100 -20 && // Adjust based on text size
        mouseY < height / 2  + 100+20  && flagForMaps===true && showOptions ===false
    ) {
        flagForMaps=false;
        showOptions=true;
    }
}