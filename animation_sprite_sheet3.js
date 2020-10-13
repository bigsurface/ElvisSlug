let diameter = 50;
let numberCircles = 30;
let xBegin = 0;
let yBegin = 0;
let bacon1 = [240,230,250];
let bacon2 = [250,240,230];
let bacon3 = [5,7,9];
let counter = 0;
let rotationVal = 0;
let addX = 0;
let yoff = 0.0;


function preload() {
  myMovingslug = loadSpriteSheet('abstract/ElvisSlugslime.png', 96, 96, 40);
  mySlug = loadAnimation(myMovingslug);
}

function setup() {
  createCanvas(1350, 550);
}

function draw() {
  clear();
  background(5, 7, 9);


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
      rotate(rotationVal+counter/10);
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

    fill(255);
    beginShape();
  
    let xoff = 0; // Option #1: 2D Noise
    // let xoff = yoff; // Option #2: 1D Noise
  
    for (let x = 0; x <= width; x += 10) {
      // Calculate a y value according to noise, map to
  
      // Option #1: 2D Noise
      let y = map(noise(xoff, yoff), 0, 1, 400, 300);
  
      // Option #2: 1D Noise
      // let y = map(noise(xoff), 0, 1, 200,300);
  
      vertex(x, y);
      // Increment x dimension for noise
      xoff += 0.05;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);   

    }
  }

  counter+=10

  animation(mySlug, 625, 350);
}
