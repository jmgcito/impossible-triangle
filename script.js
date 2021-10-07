function setup() {
  var myCanvas = createCanvas(1000, 800, WEBGL);
  myCanvas.parent('triangle-div');
  ortho();
  noStroke();
}
  
let angleX = -32.2, angleY = -45; angleZ = -1.5;


function draw() {
  background('#26BED8')
 
  //orbitControl();
  let b=35, w=25, h=200;
  
  let rX = angleX  * (PI/180);
  let rY = angleY * (PI/180);
  let rZ = angleZ * (PI/180);

  rotateX(rX);
  rotateY(rY);
  rotateZ(rZ);
  
  if(mouseIsPressed){
    if(rX < .7){
      angleX +=1;
      angleY +=1;
    }
  }
  else{
    if(angleX != -32.2 && angleY != -45){
      angleX -=1;
      angleY -=1;
    }
  }

  //changes lighting with mouse
  lights();
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);

  ambientMaterial(250);
  //middle
  translate(0,0,0);
  push();
  fill(219, 147, 112);
  box(b,h,w);
  pop();

  //top
  translate(0, -87.5, 88);
  push();
  fill(219, 147, 112);
  box(b,w,175);
  pop();

  //bottom
  translate(-83, 170, -88);
  push();
  fill(219, 147, 112);
  box(h,b,w);
  pop();

}
