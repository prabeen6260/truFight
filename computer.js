function computer(){
    
    let computer_moveright =false;
    let computer_moveleft =false;
    let computer_punch = false;
    // console.log(player2_x,player1_x, player1_x-player2_x);
    let rand_value = random(0, 100);

    if (rand_value<20){
        if (!is_player2_injured){
            if (Math.abs(player1_x-player2_x)>=300){
                if (player1_x>player2_x){
                   player2_x = player2_x+player2_speed;
                   player2_img = player2_walk_right;
                   player2_img_height = P2_PLAYER_HEIGHT;
                   player2_img_width = P2_PLAYER_WIDTH;
                } else {
                   player2_x = player2_x-player2_speed;
                   player2_img = player2_walk_right;
                   player2_img_height = P2_PLAYER_HEIGHT;
                   player2_img_width = P2_PLAYER_WIDTH;
               
                }
               is_player1_injured =false;
                   
           } else if (Math.abs(player1_x-player2_x)<=300) {
               player2_img =player2_punch;
               player2_img_height = 400;
               player2_img_width =400;
               is_player1_injured = true;
           }
        }
    }

    
     





    

}