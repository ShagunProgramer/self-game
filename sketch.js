var girlanimation,girl;

var bg;
var jack ,jack_img;
var shira,shira_img;
var mother,mother_img;
var father,father_img;
var startGame;
var h1,h1_img;

function preload(){

jack_img=loadAnimation("boy1.png","boy2.png","boy3.png")
shira_img=loadAnimation("girl1.png","girl2.png","girl3.png")
bg=loadImage("bg2.png")
h1_img=loadImage("h1.jpg")
}
function setup (){
createCanvas(windowWidth,windowHeight)

startGame=new Start()
startGame.display()

h1=createSprite(windowWidth/2,windowHeight/2)
h1.addImage(h1_img)
h1.scale=4.9
h1.visible=false
jack=createSprite(900,500)
jack.addAnimation("running",jack_img)

shira=createSprite(700,500)
shira.addAnimation("running",shira_img)

}
function draw(){

background(bg)


drawSprites()
}