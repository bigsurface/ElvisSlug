let diameter = 300;
let numberCircles = 10;
let xBegin = 0;
let yBegin = 0;
let bacon1 = [180,31,31];
let bacon2 = [246,86,86];
let bacon3 = [238,191,119];
let counter = 0;
let rotationVal = 0;
let addX = 0;


function preload() {
  mySpritesheet = loadSpriteSheet('abstract/ElvisSlug.png', 64, 64, 16);
  myAnimation = loadAnimation(mySpritesheet);
  myMovingslug = loadSpriteSheet('abstract/ElvisSlugslime.png', 96, 96, 40);
  mySlug = loadAnimation(myMovingslug);
  myMovingbanana2 = loadSpriteSheet('abstract/bananaslow.png', 75, 75, 8);
  myBanana2 = loadAnimation(myMovingbanana2);
}

function setup() {
  createCanvas(1350, 550);
  noStroke();
}

function draw() {
  clear();
  background(140, 40, 240);


  for(let i = 0; i < numberCircles; i++){
    for(let j = 0; j < numberCircles; j++){
    

      let addX = 0;
    
   if(i%2==0){
       rotationVal = 0;
       

   } else {
       rotationVal = PI;   

     }
      
  if(j%2 == 0){
    rotationVal = rotationVal - 0;
    thisColor = bacon1;
    addX = diameter/2;
  }else{
    rotationVal = rotationVal - PI/2;
    thisColor = bacon2;
  }
      
   if(j%4 == 0){
   rotationVal = rotationVal + PI;
   }   
      
    let x = diameter * i + addX;
    let y = diameter*j*0.95;
      
    push();
    
      translate(x,y);    
      rotate(rotationVal+counter/500);
      translate(-x, -y);
    
      fill(bacon1);
      arc(x , y, diameter, diameter, 0, PI/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI/4, PI/2);
      fill(bacon2);
      arc(x , y, diameter, diameter, PI/2, PI*3/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*3/4, PI);
      fill(bacon1);
      arc(x , y, diameter, diameter, PI, PI*5/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*5/4, PI*3/2 );
      fill(bacon2);
      arc(x , y, diameter, diameter, PI*3/2, PI*7/4);
      fill(bacon3);
      arc(x , y, diameter, diameter, PI*7/4, TWO_PI );
    pop();

    

    }
  }

  counter+=10

  animation(myAnimation, 100, 100);
  animation(mySlug, 275, 200);
  animation(myBanana2, 50, 50);
}
