function setup() {
  createCanvas(400, 600);
  background(220);
  
  //cabeça
  fill(255, 224, 189);
  ellipse(200, 200, 150, 200);
  
  //olhos
  fill(255);
  ellipse(170, 180, 30, 20);
  ellipse(230, 180, 30, 20);
  
  fill(0);
  ellipse(170, 180, 10, 10);
  ellipse(230, 180, 10, 10);
  
  //nariz
  fill(255, 200, 150);
  triangle(200, 190, 190, 220, 210, 220);
  
  //boca
  fill(255, 0, 0);
  arc(200, 250, 50, 30, 0, PI);
  
  //cabelo
  fill(139, 69, 19);
  beginShape();
  vertex(130, 130);
  vertex(270, 130);
  vertex(250, 50);
  vertex(150, 50);
  endShape(CLOSE);
  
  //corpo
  fill(0, 0, 255);
  rect(150, 300, 100, 150);
  
  //braços
  fill(255, 224, 189);
  rect(100, 300, 50, 120);
  rect(250, 300, 50, 120);
  
  //mãos
  ellipse(125, 420, 40, 40);
  ellipse(275, 420, 40, 40);
  
  //pernas
  fill(0);
  rect(150, 450, 40, 120);
  rect(210, 450, 40, 120);
  
  //pés
  fill(139, 69, 19);
  ellipse(170, 570, 60, 30);
  ellipse(230, 570, 60, 30);
}

function draw() {
}