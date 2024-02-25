
function options(){
    font1.load
    push();
    textFont(font1);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255);
    //stroke(255);
    text("FIGHT",width/2,height/2-100);
    text("RESTART",width/2,height/2);
    text("SETTINGS", width/2,height/2+100);
    pop();

}