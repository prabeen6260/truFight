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
        rect(50, 90, 500*(p1_health/100),20);
    } else if (p1_health>40){
        fill(255,255,153);
        rect(50, 90, 500*(p1_health/100),20);
    } else {
        fill(255,0,0);
        rect(50, 90, 500*(p1_health/100),20);
    }
    
    
    fill(255,255,255);
    stroke(0,255,0);
    strokeWeight(1.5);
    text("Your Health:",50,60);
    pop();
    push();

    
    
    if (p2_health>70){
        fill(0,255,0);
        rect(windowWidth-550, 90, 500*(p2_health/100),20);
    } else if (p2_health>40){
        fill(255,255,153);
        rect(windowWidth-550, 90, 500*(p2_health/100),20);
    } else {
        fill(255,0,0);
        rect(windowWidth-550, 90, 500*(p2_health/100),20);
    }
    
    
    fill(255,255,255);
    stroke(255,0,0);
    strokeWeight(1.5);
    textFont(font1);
    textSize(50);
    
    textAlign(TOP,LEFT);
    text("Opponent's Health:",windowWidth-350, 60);



    pop();

}