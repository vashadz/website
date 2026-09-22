
//mediump refers to 16-bit floats
precision mediump float;

uniform vec2 u_resolution; 

void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;
  
  vec2 scaleSt = 10. *st;
  vec2 unitSt = fract(scaleSt);
    
  float y = unitSt.y;
  float edge = .5;

  float c = step(edge, y) ;

  vec3 col = c * vec3(1.,0.,.0);
  
  float edge2 =.2;
  float edge3 = .6;
  
  float c2 = step(edge2,y);
  float c3 = step (edge3,y+.2);
  
  col = col + c2 * vec3(0.,1.,0.) + c3 * vec3(0.,0.,1.);

  gl_FragColor = vec4(col,1.);
  
}
