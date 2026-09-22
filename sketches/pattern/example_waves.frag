//mediump refers to 16-bit floats
precision mediump float;

#define PI 3.14159265

uniform vec2 u_resolution; 
uniform float u_time; 


void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;

  float scale = 7.;
  float wave = abs(cos(scale*st.x * 2.*PI));
  
  float c = step(wave,st.y/.2);
  
  vec3 col = vec3(c);

  gl_FragColor = vec4(col,1.);
}
