
//mediump refers to 16-bit floats
precision mediump float;

uniform vec2 u_resolution; 

void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;

  float scale = 10.;
  
  vec2 scaled_st = vec2(st.x * scale, st.y*scale*3.);
  vec2 stID = floor(scaled_st);
  vec2 stUV = fract(scaled_st);
  
  float d = distance(stUV,vec2(.5));
   float d1 = distance(stUV,vec2(.1));
  
  float circleColor = step(.15,d);
  float circleColor1 = step(.05,d1);
  
  vec3 colorBigCircle = vec3(.5, 0.8, 0.1); // Red color for the big circle
  vec3 colorSmallCircle = vec3(.9,.9, .5); // Blue color for the small circle

  
  // Combine colors based on masks.
  vec3 col = colorBigCircle * colorSmallCircle+ circleColor;

  gl_FragColor = vec4(col, 1.0);
}
