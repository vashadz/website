//mediump refers to 16-bit floats
precision highp float;

uniform vec2 u_resolution; 

void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;
  
  vec3 col = vec3(1.0); //set base color
  
  //less than comparison
  if (gl_FragCoord.x < 100.){
    col = vec3(0.);
  }
  
  if (abs(gl_FragCoord.x - 300.) < 1.){
    col = vec3(0.0);
  }
  
  //This is the lowest I could go for a single line
  if (abs(st.x-.5) < 0.00125){
    col = vec3(1.,0.,0.);
  }
  gl_FragColor = vec4(col,1.);
}
