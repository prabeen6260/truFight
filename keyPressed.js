function keyPressed(){
    if (key=="m"){
        playMusic();
    }

    if(keyCode===27 && flagForMaps===false){
        showOptions=!showOptions;
        if (gameStart){
            gameStart=false;
        } else {
            gameStart=true;
        }
    }

    if (gameStart){
        if (key=="a"){
            moveleft = true;
            if (are_players_inverted){
            player_img =player_walk_right;
            player1_img_width = 120;
            player1_img_height = 170;
    
            } else {
            player_img = player_walk_left;
            player1_img_width = 150;
            player1_img_height = 170;
            }
           
            //console.log(player1_x);
        } else if (key=="d"){
            moveright = true;
            if (are_players_inverted){
                player_img =player_walk_left;
    
            } else {
            player_img =player_walk_right;
            }
            player1_img_width = 120;
            player1_img_height = 170;
            
        }else if (key=="w"){
            
            if(player1_y >= height - ground - size / 2){ // on the ground
                player_img =player_jump;
                player1_img_width = 150;
            player1_img_height = 220;
                vy = -jump;     
              }  
        } 
         else if (key=="e"){
            player_img =player_punch;
            player1_img_width = 200;
            player1_img_height = 200;
            if (are_players_inverted){
                player1_x = player1_x+75;
    
            } else {
                player1_x = player1_x-75;
    
            }
    
            console.log("player1x",player1_x);
            console.log("player2x",player2_x);
    
            if (Math.abs(player1_x-player2_x)<=150 && Math.abs(player1_y-(player2_y-200))<=400){
                player2_img = player2_injured;
                is_player2_injured = true;
            }
            
    
        } else if (key=="q"){
            if (!is_main_attack){
                player_img = player1_main_attack;
                is_main_attack = true;
                player1_img_width = 140;
                player1_img_height = 200;
                player1_blast_x = -player1_x-100;
                player1_blast_y = player1_y+50;
            }
           
    
        }
        
       
    
        //player2-controls-------------------------------
        
        if (key=="ArrowLeft"){
            p2_moveleft = true;
            player2_img = player2_walk_left;
            
            //console.log(player1_x);
        } else if (key=="ArrowRight"){
            p2_moveright = true;
            player2_img =player2_walk_right;
            
        } else if (key=="p"){
            if (!is_player2_injured){
                player2_img =player2_punch;
                player2_img_height = 400;
                player2_img_width =400;
    
                if (Math.abs(player1_x-player2_x)<=300 && Math.abs(player1_y-(player2_y-200))<=400){
                   // console.log("reached here");
                    player_img = player_injured;
                    player1_img_width = 200;
                    is_player1_injured = true;
                }
            }
           
            
        }
    
        //player2-controls------------------------------
    
    
    }
}

function blast(){
    image(player1_blast, player1_blast_x, player1_blast_y);
}

function keyReleased(){

    if (key=="a" || key =="d" || key=="e" || key=="w" || key=="q"){
        player_img = player_idle_left;
        moveleft = false;
        moveright = false;
        player1_img_width = DEFAULT_PLAYER_WIDTH;
        player1_img_height = DEFAULT_PLAYER_HEIGHT;
        if (is_player2_injured){
            player2_img= player2_idle;
            is_player2_injured= false;
        }
    } 
    //playMusic();

    if (key=="ArrowLeft" || key=="ArrowRight" || key=="p" ){
        
        p2_moveleft = false;
        p2_moveright = false;
        player2_img = player2_idle;
        player2_img_width = P2_PLAYER_WIDTH;
        player2_img_height = P2_PLAYER_HEIGHT;

        if (is_player1_injured){
            player_img= player_idle_left;
            player1_img_height = DEFAULT_PLAYER_HEIGHT;
            player1_img_width = DEFAULT_PLAYER_WIDTH;
            is_player1_injured= false;
        }
        //console.log(player1_x);
    }

    
    //player1_x=temp_x;
}

function playMusic(){
    
    //console.log("function active")
    if (!themeMusic.isPlaying()){
        console.log("reached")
        themeMusic.loop();  
    } else {
        themeMusic.stop();
    }
}
