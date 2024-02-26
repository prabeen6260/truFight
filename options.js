
function options(flag){
    if(flag){
        
    push();
    textFont(font1);
    textSize(100);
    textAlign(CENTER,CENTER);
    fill(255,255,255);
    background(0,0,0,70);
    //stroke(255);
    text("FIGHT",windowWidth/2,windowHeight/2-250);
    text("CHANGE MAP",windowWidth/2,windowHeight/2-100);
    text("AUDIO", windowWidth/2,windowHeight/2+50);
    text("QUIT",windowWidth/2,windowHeight/2+200);
    pop();
    }
}

function maps(flag){
    push();
    if(flag){
    textFont(font1);
    textSize(50);
    textAlign(CENTER,CENTER);
    background(0,0,0,100);
    fill(255);
    text("DESERT BLITZ",windowWidth/2-600,windowHeight/2);
    text("UMBRA CITY",windowWidth/2-300,windowHeight/2);
    text("EMBER FALLS",windowWidth/2,windowHeight/2);
    text("BREEZE HAVEN",windowWidth/2+300,windowHeight/2);
    if (winCount>=3){ //for easter egg
             text("BLAZE LODGE",windowWidth/2+600,windowHeight/2);

    }
    text("BACK",windowWidth/2,windowHeight/2+100);
    }
    else return
    pop();
}
function map1(flag){
    if(flag){
        bg=bg1;
    }
    else return
}
function map2(flag){
    if(flag){
        bg=bg2;
    }
    else return
}
function map3(flag){
    if(flag){
    bg=bg3;    }
    else return
}
function map4(flag){
    if(flag){
        bg=bg4;
    }
    else return
}
function map5(flag){
    if(flag){
        bg=bg5;
    }
    else return
}
function quit(flag){
    if(flag){
        window.location.href="https://github.com/prabeen6260/truFight";
    }
}
function audioPressed(){
    if (
        mouseX > windowWidth / 2  -200&&
        mouseX < windowWidth / 2 + 200 &&
        mouseY > windowHeight / 2  +50 - 30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 50 + 30 && mouseIsPressed && !themeMusic.isPlaying()){
            console.log("mouse is pressed in audio");
            themeMusic.play();

            
        }
    else if (
        mouseX > windowWidth / 2  -50&&
        mouseX < windowWidth / 2 + 50 &&
        mouseY > windowHeight / 2  +50 - 30 && // Adjust based on text size
        mouseY < windowHeight / 2  + 50 + 30 && mouseIsPressed && themeMusic.isPlaying()) {
            themeMusic.stop();
           

    }
}
let music_map = "map1";
function mapMusic(flag){
    if (flag==="map1"){
        stopMusic(flag);
        thunder.loop();
    }
    else if(flag==="map2"){
        stopMusic(flag);
        city.loop();
    }
    else if(flag==="map3"){
        stopMusic(flag);
        autumn.loop();
    }
    else if(flag==="map4"){
        stopMusic(flag);
        wind.loop();
    }else if(flag==="map5"){
        stopMusic(flag);
        fire.loop();
    }
    music_map = flag;
}
function stopMusic(flag){
    if(flag==="map1"){
       fire.stop();
       city.stop();
       autumn.stop();
       wind.stop();
    }
    else if(flag==="map2"){
        fire.stop();
        thunder.stop();
        autumn.stop();
        wind.stop();
     }
     else if(flag==="map3"){
        fire.stop();
        city.stop();
        thunder.stop();
        wind.stop();
     } 
     else if(flag==="map4"){
        fire.stop();
        city.stop();
        autumn.stop();
        thunder.stop();
     }
     else if(flag==="map5"){
        thunder.stop();
        city.stop();
        autumn.stop();
        wind.stop();
     }
}