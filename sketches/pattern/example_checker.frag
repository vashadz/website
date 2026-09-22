
//mediump refers to 16-bit floats
precision mediump float;

uniform vec2 u_resolution; 

void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;

  //bigger
  // float scale = 10.;
  
  //smaller
 vec2 scale = vec2(7.,2.);
  
  vec2 scaled_st = st *scale  ;
  vec2 stID = floor(scaled_st);
  vec2 stUV = fract(scaled_st);
  
  vec3 col = vec3(1.,1.,0.)  ;


  gl_FragColor = vec4(col,1.);
}
