let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(4000, 4000);

   background(color(0,0,0));
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 400;


  posicaoVertical = 200;

}


function draw() {
  
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,100);
 


  
  
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
  
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
    
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
  
  if (mouseIsPressed){
    cor = color(random(0,2255), random(0,255), random(0,2255), random(0,1200));
  }
    
}
