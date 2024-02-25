function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    push();
    background(0);
   // bg1.size(windowWidth,windowHeight);
    //bg1.position(0,0);
    //background1.position(0,0);
    image(bg4,0,0,windowWidth,windowHeight);
    pop();

    options();
}