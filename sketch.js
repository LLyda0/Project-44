var hero,heroSprite;
var greenSlime,redSlime,purpleSlime,blueSlime;
var GrassBG,DryGrassBG,SnowBG;
var bg ;
function preload(){
  getBackgroundImage();
  hero=loadImage("animations/hero.png");
  greenSlime=loadImage("animations/Slimes/GreenSlimes.png");
  redSlime=loadImage("animations/Slimes/RedSlimes.png");
  purpleSlime=loadImage("animations/Slimes/PurpleSlimes.png");
  blueSlime=loadImage("animations/Slimes/BlueSlimes.png");
  //GrassBG=loadImgae("animations/backgrounds/GrassBackground.png");
  //DryGrassBG=loadImgae("animations/backgrounds/DryGrassBackground.png");
  //SnowBG=loadImgae("animations/backgrounds/SnowBackground.png");
}

function setup(){
  createCanvas(800,800);
  heroSprite = createSprite(700,700);
  heroSprite.addImage(hero);
  heroSprite.scale=0.15;
}

function draw(){
  background(backgroundImg);

  if(keyDown(UP_ARROW)){
    heroSprite.y-=3
  }

  if(keyDown(DOWN_ARROW)){
    heroSprite.y+=3
  }

  if(keyDown(RIGHT_ARROW)){
    heroSprite.x+=3  
  }

  if(keyDown(LEFT_ARROW)){
    heroSprite.x-=3
  }

  Slimes();


  drawSprites();
}

function getBackgroundImage(){
  var rand=Math.round(random(1,3));
  console.log(rand);
  switch(rand){
    case 1 : bg = "animations/backgrounds/grassBackground.png";
    break;
    case 2 : bg = "animations/backgrounds/dryGrassBackground.png";
    break;
    case 3 : bg = "animations/backgrounds/snowBackground.png";
    break;
    default :break;
  }
  backgroundImg=loadImage(bg);
}

function Slimes(){
  if(frameCount%30===0){
    slime=createSprite(400,400);
    slime.x=Math.round(random(100,700));
    slime.y=Math.round(random(100,700));
    slime.lifetime=50;
  }
}