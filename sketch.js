var t, ti
var d, di, dg
var c, ci, cg
var i, ig
var g, gi
var gameState = 0
var PLAY =0
var END = 1






function preload(){
  
  ti = loadImage("tower.png")
  di = loadImage("door.png")
  ci = loadImage("climber.png")
  gi = loadImage("ghost-standing.png")
  ss = loadSound("spooky.wav")
  
  
}

function setup(){
  createCanvas(600,600)
  ss.loop();
  
  t = createSprite(300,300)
  t.addImage("tower",ti)
  t.velocityY = 2
  
  g = createSprite(300,405)
  g.addImage("character",gi)
  g.scale = 0.35

  
  dg = new Group();
  cg = new Group();
  ig = new Group();
}

function draw(){
 
  if(gameState === PLAY){
    
    if(cg.isTouching(g)){
      g.velocityY = 0;
    }
  
    if(ig.isTouching(g) || g.y > 600){

      gameState = END
         g.destroy();
    
    }
    
    
  if(gameState === PLAY && t.y > 500){  
    t.y = 100
  }
  
  if(keyDown("left_arrow")){
    
    g.x = g.x -3
    
  }
  
  if(keyDown("space")){
    
    g.y = g.y -6
    
  }
  
  if(keyDown("right_arrow")){
    
    g.x = g.x + 3
    
  }
  
g.y = g.y+  3                 
  }
  spawningDoor();
  
  drawSprites();
  
  
  
  if(gameState === END ){
    
    background(0)
    
    stroke("yellow");
    fill("yellow");
    textSize(50);
    text("Game Over", 180,250)
    
   
    
  }
  
}


function spawningDoor(){
  
  if(gameState === PLAY && frameCount % 200 ===0){
    
    d = createSprite(200,-90)
  d.addImage(di)
    
    d.x = Math.round(random(100,500))
    d.velocityY = 2
    
    i = createSprite(200,-13 )
    i.width = 20
    i.height = 1.5
    i.velocityY = 2
    i.x = d.x
    
      c=  createSprite(200,-20)
  c.addImage(ci)
    c.velocityY = 2
    c.x = d.x
    
    d.lifetime = 400
    c.lifetime = 400
    i.lifetime = 400
    
   
    
    g.depth = d.depth
    g.depth =g.depth+1
    
    i.debug = false
    dg.add(d)
    cg.add(c)
    ig.add(i)
    
  }
  

  

  
  
  
  
  
  
  
  
  
}