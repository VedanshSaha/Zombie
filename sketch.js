var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var e1,e2,e3;
var bg,branch,branchy;
var b1,b2,b3,b4;
var z,zim,y,yim,x,xim;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	bg = loadImage("imag.jpg")
	branch = loadImage("branch.png")
	branchy = loadImage("branchy.png")
	zim = loadImage("gif.gif");
	yim = loadImage("gif1.gif");
	xim = loadImage("scry.gif");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	e1 = new Boxy(330,620,30,100);
	e2 = new Boxy(450,620,30,100);
	e3 = new Boxy(380,695,300,100);
	
	b1 = createSprite(310,620,30,100);
	b1.addImage("D",branchy);
	b1.scale = 0.22;

	b2 = createSprite(450,620,30,100);
	b2.addImage("DiD",branchy);
	b2.scale = 0.22;
	
	b3 = createSprite(380,675,30,100);
	b3.addImage("D",branch);
	b3.scale = 0.22;
	
	packageSprite=createSprite(width/2, 80, 10,10);
   packageSprite.addImage(packageIMG);
   packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	z = createSprite(700,630,630,100);
	z.addImage("D",zim);
	z.scale = 0.3;
	z.frameDelay = 0.5;

	y = createSprite(540,630,630,100);
	y.addImage("D",yim);
	y.scale = 0.23;
	y.frameDelay = 0.25;

	x = createSprite(240,630,630,100);
	x.addImage("D",zim);
	x.scale = 0.3;

	xe = createSprite(140,630,630,100);
	xe.addImage("D",zim);
	xe.scale = 0.3;
	

	
	

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
	angleMode(RADIANS);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  //To draw the sprites
  drawSprites();

      
  console.log("x = " + packageBody.position.x + " y = "+packageBody.position.y)
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
    
  }
}



