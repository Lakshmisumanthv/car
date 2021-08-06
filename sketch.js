var car1Image
var car2Image
var trackImage


function preload(){
car1Image=loadImage("car1.jpg")
car2Image=loadImage("car 2.jpg")
trackImage=loadImage("track.jpg")
} 

function setup(){
createCanvas(1000,2000)

  

  track =createSprite(900,879,100,100)
  track.addImage(trackImage)
  track.scale=3
  
  car1=createSprite(670,710,70,70)
  car1.addImage(car1Image)
  car1.scale=0.4

  car2 =createSprite(560,520,60,60)
  car2.addImage(car2Image)
  car2.scale=0.2
}

function draw(){
  background("lightblue")
 
  if (keyDown("UP_ARROW")){
   car1.y=car1.y-2
  }
   
  if (keyDown("DOWN_ARROW")){
   car1.y=car1.y+2
  } 
  
    
  if (keyDown("RIGHT_ARROW")){
car1.x=car1.x+2
  }
    
  if (keyDown("LEFT_ARROW")){
 car1.x=car1.x-2
  }
 
  
  if (keyDown("UP_ARROW")){
   car2.y=car1.y-2
  }
   
  if (keyDown("DOWN_ARROW")){
   car2.y=car1.y+2
  } 
  
    
  if (keyDown("RIGHT_ARROW")){
  car2.x=car1.x+2
  }
    
  if (keyDown("LEFT_ARROW")){
  car2.x=car1.x-2
  }
   drawSprites()
}