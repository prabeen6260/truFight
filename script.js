let showOptions=true;
let flagForMaps=false;
let flagForMap1=false;
let flagForMap2=false;
let flagForMap3=false;
let flagForMap4=false;
let flagForMap5=false;
let flagForAudioText=false;
let flagForAudioBack=false;
let flagForQuit=false;
//let hovered="";
//let isHovered=false;
function setup(){
    createCanvas(windowWidth,windowHeight);
    textFont(font1);
    textSize(50);
}
function draw(){
    
    push();
    background(255);
   // bg1.size(windowWidth,windowHeight);
    //bg1.position(0,0);
    //background1.position(0,0);
    pop();
    
    //changeOnHover(hovered);

   // options(showOptions);
    // for showing maps options
    image(bg1,0,0,windowWidth,windowHeight);
    // for choosing map1
    map1(flagForMap1);
    // for choosing map2
    map2(flagForMap2);
    // for choosing map3
    map3(flagForMap3);
    // for choosing map4
    map4(flagForMap4);
    // for choosing map5
    map5(flagForMap5);
    // audio text
    backAudio(flagForAudioBack);
    audioText(flagForAudioText);
    maps(flagForMaps);  

    options(showOptions);
    quit(flagForQuit);
    mouseHovered();
    
    
    
}
