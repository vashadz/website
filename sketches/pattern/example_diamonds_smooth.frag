
//mediump refers to 16-bit floats
precision mediump float;

uniform vec2 u_resolution; 

void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;

  float scale = 5.;
  
  vec2 scaled_st = st * scale;
  vec2 stID = floor(scaled_st);
  vec2 stUV = fract(scaled_st);
  
  float upDown = mod(stID.x + stID.y, 2.);
  
  float edge = stUV.y;
  
  
  float edgeDelta = .01; //play with this value
  
  float up = smoothstep(edge,edge-edgeDelta,stUV.x);
  float down = smoothstep(1.-edge+edgeDelta, 1.-edge,stUV.x);
  
  float c = mix(down,up,upDown);
  
  vec3 col = vec3(c);

  gl_FragColor = vec4(col,1.);
}
