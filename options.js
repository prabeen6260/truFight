
function options(flag){
    if(flag){
        console.log('show option');
    push();
    textFont(font1);
    textSize(100);
    textAlign(CENTER,CENTER);
    fill(255,255,255);
    background(0,0,0,70);
    //stroke(255);
    text("FIGHT",width/2,height/2-250);
    text("CHANGE MAP",width/2,height/2-100);
    text("SETTINGS", windowWidth/2,windowHeight/2+50);
    text("QUIT",width/2,height/2+200);
    pop();
    }
    else console.log("not show options");
}

function maps(flag){
    push();
    if(flag){
    textFont(font1);
    textSize(50);
    textAlign(CENTER,CENTER);
    background(0,0,0,100);
    fill(255);
    text("DESERT BLITZ",width/2-600,height/2);
    text("UMBRA CITY",width/2-300,height/2);
    text("EMBER FALLS",width/2,height/2);
    text("BREEZE HAVEN",width/2+300,height/2);
    text("WET BOULEVARD",width/2+600,height/2);
    text("BACK",width/2,height/2+100);
    console.log("map options");
    }
    else return
    pop();
}
function map1(flag){
    if(flag){
        image(bg1,0,0,windowWidth,windowHeight);
    }
    else return
}
function map2(flag){
    if(flag){
        image(bg2,0,0,windowWidth,windowHeight);
    }
    else return
}
function map3(flag){
    if(flag){
        image(bg3,0,0,windowWidth,windowHeight);
    }
    else return
}
function map4(flag){
    if(flag){
        image(bg4,0,0,windowWidth,windowHeight);
    }
    else return
}
function map5(flag){
    if(flag){
        image(bg5,0,0,windowWidth,windowHeight);
    }
    else return
}

function audioText(flag){
    push();
    textSize(60);
    textFont(font1);
    textAlign(CENTER,CENTER);
    fill(255);
    if(flag ){
        if(!showOptions && !flagForMaps){
            flagForMaps=false;
        text("AUDIO",windowWidth/2,windowHeight/2);
        console.log('audio text');
        }
        
    }
    pop();
}
function backAudio(flag){
    push();
    textSize(60);
    textFont(font1);
    textAlign(CENTER,CENTER);
    fill(255);
    if(flag ){
        text("BACK",windowWidth/2,windowHeight/2+100);
        flagForMap3=false;
        flagForMaps=false;
        console.log("back text");
        
    }
    pop();
}
function quit(flag){
    if(flag){
        window.location.href="https://github.com/prabeen6260/truFight";
    }
}
// function changeOnHover(hover){
//     if(hover==="changeMap"){
//         stroke(255,0,0);
//     }

// }
