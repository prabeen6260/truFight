
function options(flag){
    if(flag){
        console.log('show option');
    push();
    textFont(font1);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,20,255);
    //stroke(255);
    text("FIGHT",width/2,height/2-200);
    text("CHANGE MAP",width/2,height/2-100);
    text("SETTINGS", width/2,height/2);
    text("QUIT",width/2,height/2+100);
    pop();
    }
    else console.log("false");
}

function maps(flag){
    if(flag){
    textFont(font1);
    textSize(50);
    textAlign(CENTER,CENTER);
    fill(255,20,255);
    text("MAP1",width/2-400,height/2);
    text("MAP2",width/2-200,height/2);
    text("MAP3",width/2,height/2);
    text("MAP4",width/2+200,height/2);
    text("MAP5",width/2+400,height/2);
    text("BACK",width/2,height/2+100);
    }
    else return
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