let bg1,bg2,bg3,bg4,bg5;
let font1, punch2;
let player2_idle, player2_walk_left, player2_walk_right, player2_injured, player2_lose, player2_punch;
let pc1,pc2,pc3,pc4,pc5, player_idle_left, player_walk_left, player_walk_right, player_punch, player_injured, player_jump, player1_main_attack, player1_blast,player1_lose;
let themeMusic;
let fight,punch1,tring,bullet,thunder,wind,fire,autumn,city;

function preload(){
bg1=loadImage("./assets/backgrounds/bg1.gif");
bg2=loadImage("./assets/backgrounds/bg2.gif");
bg3=loadImage("./assets/backgrounds/bg3.gif");
bg4=loadImage("./assets/backgrounds/bg4.gif");
bg5=loadImage("./assets/backgrounds/fire.gif");
bg = bg1;
player_idle_left =  loadImage("./sprites/player1/idle/left/idle.gif");
player_img = player_idle_left;
player_walk_left =  loadImage("./sprites/player1/walk/left/walkleft.gif");
player_punch = loadImage("./sprites/player1/fight/timedpunch.gif");
//bg1=loadImage("./assets/backgrounds/bg4.gif","second");
font1=loadFont("./assets/fonts/font1.otf");
themeMusic = loadSound("./assets/music/Theme.mp3");
player_walk_right =  loadImage("./sprites/player1/walk/right/walkright.gif");
player_injured = loadImage("./sprites/player1/fight/injured.gif")
player_jump =  loadImage("./sprites/player1/jump/jump.gif");
player2_idle = loadImage("./sprites/player2/idle/right/idle2.gif");
player2_walk_left = loadImage("./sprites/player2/walk/p2_walk_left.gif");
player2_walk_right =loadImage("./sprites/player2/walk/p2_walk_right.gif");
player2_punch = loadImage("./sprites/player2/fight/p2_punchhi.gif");
player2_injured = loadImage("./sprites/player2/fight/p2_injured.gif");
player2_img = player2_idle;
player1_main_attack = loadImage("./sprites/player1/fight/main_attack.gif");
player1_blast = loadImage("./sprites/player1/fight/blast.gif");
player1_lose =  loadImage("./sprites/player1/fight/p1_loose.gif");
player2_lose = loadImage("./sprites/player2/fight/p2_loose.gif");

fight=loadSound("./assets/music/fight.mp3");
bullet=loadSound("./assets/music/bullet.mp3");
punch1=loadSound("./assets/music/fight.mp3");
tring=loadSound("./assets/music/tring.mp3");
punch2=loadSound("./assets/music/punch1.mp3");
thunder=createAudio("./assets/music/thunder.mp3");
fire=createAudio("./assets/music/fire.mp3");
wind=createAudio("./assets/music/wind.mp3");
autumn=createAudio("./assets/music/autumn.mp3");
city=createAudio("./assets/music/city.mp3");
}


