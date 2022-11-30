var points;
var chances;
var clarice;
var joao;
var bg
var pointsImg
var chancesImg
var clariceImg
var joaoImg
var bgImg
var score
function preload(){
pointsImg = loadImage("./assets/moeda.png");
chancesImg = loadImage("./assets/chances.png")
joaoImg = loadImage("./assets/joao.png")
clariceImg = loadImage ("./assets/menina.png")
bgImg = loadImage ("./assets/stage.jpeg")




}
function setup(){
 createCanvas(windowWidth,windowHeight);
 fill("white")
  text("points"+score,150,150)
 moeda=createSprite(250,150,5,5)
 moeda.addImage(pointsImg)
}
function draw(){
background(0)  
image(bgImg,0,0)
}


