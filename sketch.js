var bg;
var cat, catImg, mouse, mouseImg;

function preload() {
    //load the images here
bg=loadImage("images/garden.png");
catImg=loadImage("images/cat1.png");
mouseImg=loadImage("images/mouse1.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600,5,5);
    cat.addImage(catImg);
    cat.scale=0.2;
    mouse=createSprite(200,600,5,5);
    mouse.addImage(mouseImg);
    mouse.scale=0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
