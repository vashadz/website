//Much of this example is lifted from https://p5js.org/learn/getting-started-in-webgl-shaders.html

let myShader;

function preload(){
  //Shader must be loaded before we use it
  myShader = loadShader('shader.vert', 'new.frag');
}

function setup() {
  createCanvas(400, 400,WEBGL);
  pixelDensity(1); 
  shader(myShader);
  
  myShader.setUniform('u_resolution', [width,height]);
  myShader.setUniform("u_time", millis() / 1000);
   myShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);
  
  //myShader is used to draw this rect
  rect(0,0,width,height);
}