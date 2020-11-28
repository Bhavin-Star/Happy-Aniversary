var bg, bg2;

function preload(){
  
   bg = loadImage('images/bg.jpeg');
   bg2 = loadImage('images/bg2.jpeg')
}

function setup() {
  createCanvas(700,800);
  
  bg.scale = 0.1
  
}

function draw() {
  background(bg2);
  
  console.log(mouseX);
  //console.log(mouseY);

  
  
  drawSprites();    

  textSize(25);
  fill(8,255,8);
  text('Baby its our sixteenth anniversary.',60,50) 
  
  textSize(25);
  fill(8,255,8);
  text('You are a special gift from the God.',90,80)
  
  textSize(25);
  fill(8,255,8);
  text('Your smile warms my heart and',120,110) 
  
  textSize(25)
  fill(8,255,8)
  text('Your presence make me whole.',140,140)

  textSize(25);
  fill(102,2,60)
  text('From the sun that rises in the morning', 142.5, 570);

  textSize(25);
  fill('cyan')
  text('The sun that sets in the evening',175,600);
  
  textSize(25);
  fill('green')
  text('You mean everything to my life', 182.5,630);

  textSize(25);
  fill('yellow')
  text('You mean everything to my life',180,660);

  textSize(25);
  fill(70,102,255)
  text('My life is incomplete without you',175,690);

  textSize(25);
  fill(247, 33, 25)
  text('Happy Aniversary!',252.5,720);
}