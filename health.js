function health(p1_health = 100, p2_health = 100){
    if (p1_health<0){
        p1_health =0;
    }

    if (p2_health<0){
        p2_health =0;
    }

    push();
    textFont(font1);
    textSize(50);
    textAlign(TOP,LEFT);
    if (p1_health>70){
        fill(0,255,0);
        rect(50, 100, 500*(p1_health/100),30);
    } else if (p1_health>40){
        fill(255,255,153);
        rect(50, 100, 500*(p1_health/100),30);
    } else {
        fill(255,0,0);
        rect(50, 100, 500*(p1_health/100),30);
    }
    
    
    fill(255,255,255);
    text("Your Health:",50,70);


    
    
    if (p2_health>70){
        fill(0,255,0);
        rect(windowWidth-550, 100, 500*(p2_health/100),30);
    } else if (p2_health>40){
        fill(255,255,153);
        rect(windowWidth-550, 100, 500*(p2_health/100),30);
    } else {
        fill(255,0,0);
        rect(windowWidth-550, 100, 500*(p2_health/100),30);
    }
    
    
    fill(255,255,255);
    text("Opponent's Health:",windowWidth-350, 70);



    pop();

}