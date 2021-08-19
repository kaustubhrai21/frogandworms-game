
var player;
var score=0;
var wormGroup;

function preload() {
  swampImage = loadImage("images/swampImg.png");
 wormImage = loadImage("images/worm.png");
 playerImage = loadImage("images/frog.png");
}

function setup() {
createCanvas(600,600);
swamp = createSprite(300,300);
swamp.addImage(swampImage);
swamp.scale = 4.3;
player = createSprite(40,550,30,30); 
player.addImage(playerImage);
player.scale = 0.3
wormGroup= new Group();
}

function draw() {
background("black");  
stroke("red")
noFill();
player.x= mouseX;
player.y= mouseY;


generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(random(40,380),random(290,380),40,5);
  worm.addImage(wormImage);
  worm.scale = random(0.1,0.3);
  worm.shapeColor="green"
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
