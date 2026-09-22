
//mediump refers to 16-bit floats
precision mediump float;

#define PI 3.1415926

uniform vec2 u_resolution; 

void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;

  float d = distance(vec2(.5,.2), st);
  
  float scale = 10.;
  
  float scaledD = scale * d;
  
  float fractD = fract(scaledD);
  
  float sinD = sin(fractD * 1.5*PI);
  
  vec3 col = vec3(sinD) * vec3(.3,.8,.6);
  
  gl_FragColor = vec4(col,1.);
}
