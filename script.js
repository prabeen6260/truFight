//menu-options-----------------------
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
let gameStart = false;
let bg;
//menu-options----------------------------
//let hovered="";
//let isHovered=false;

//player-1-----------------------------------
let player_img;
let player1_x = 1300;
const DEFAULT_PLAYER_HEIGHT = 200;
const DEFAULT_PLAYER_WIDTH = 100;
let player1_img_width = DEFAULT_PLAYER_WIDTH;
let player1_img_height = DEFAULT_PLAYER_HEIGHT;
let player1_y = 650;
let moveleft = false;
let moveright = false;
let player_speed = 10; 
let is_main_attack = false;
let player1_blast_x = 0;
let player1_blast_y = 0;
//--------------------------------------------------

//player-2-----------------------------------
let player2_img;
let player2_x = 500;
const P2_PLAYER_HEIGHT = 400;
const P2_PLAYER_WIDTH = 200;
let player2_img_width = P2_PLAYER_WIDTH;
let player2_img_height = P2_PLAYER_HEIGHT;
let player2_y = 450;
let p2_moveleft = false;
let p2_moveright =false;
let player2_speed = 3; 
let is_player2_injured = false;
//---------------------------------------------------



//for jujmping--------------
let  vy;
const g = 1; // Gravity
const jump = 30; // Jump power
const ground = 300;
const size = 20;
//----------------------
let audio = false;
let is_player_injured = false;
let injure_counter = 0;

let are_players_inverted = false;

//-----------------------------------------------


function setup(){
    createCanvas(windowWidth,windowHeight);
    textFont(font1);
    textSize(50);
    vy = 0;
}
let count = 0;
function draw(){
    if (!gameStart){

        push();
        background(255);
       // bg1.size(windowWidth,windowHeight);
        //bg1.position(0,0);
        //background1.position(0,0);
        pop();
        
        //changeOnHover(hovered);
    
       // options(showOptions);
        // for showing maps options
        image(bg,0,0,windowWidth,windowHeight);
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
 
    }else {
    let gy = height - ground;
    player1_y += vy;
    if(player1_y < height - ground - size / 2){ // in the air
        vy += g;
    }else{
        vy = 0;
        player1_y = height - ground - size / 2;
    }
    push();
    background(0);
    //bg1.size(windowWidth,windowHeight);
    //bg1.position(0,0);
    //background1.position(0,0);
    //options();

    image(bg,0,0,windowWidth,windowHeight);
   //fill(0,0,0,191);
   // noStroke();
   // ellipse(player1_x+40,player1_y+190, 80,30)
   if (player1_x<player2_x){
    scale(-1,1);
    image(player2_img, -player2_x-170,player2_y, player2_img_width, player2_img_height);
    image(player_img, -player1_x-170,player1_y, player1_img_width, player1_img_height);
    are_players_inverted=true;
    } else {
        are_players_inverted=false;
        image(player2_img, player2_x,player2_y, player2_img_width, player2_img_height);
        image(player_img, player1_x,player1_y, player1_img_width, player1_img_height);
    }

    
    if (is_main_attack){
        console.log(player1_blast_x);
        scale(-1,1);
        player1_blast_x=player1_blast_x+10;
        blast();

        if(Math.abs(Math.abs(player1_blast_x)-(player2_x+50))<=200){
            is_player2_injured=true;
            player2_img=player2_injured;
            
            
        } else {
            is_player2_injured=false;
            player2_img = player2_idle;
        }
    }
    if (player1_blast_x>0){
        is_main_attack=false;
    }
    
    

    pop();
    
    if (moveleft){
        player1_x = player1_x - player_speed;
    } 
    if (moveright){
        player1_x = player1_x + player_speed;
    }

    if (p2_moveleft){
        player2_x = player2_x - player2_speed;
    } 
    if (p2_moveright){
        player2_x = player2_x + player2_speed;
    }
    }

}
