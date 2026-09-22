precision mediump float;

#define PI 3.14159265

uniform vec2 u_resolution; 

uniform float time;

void main() {

 vec2 st = gl_FragCoord.xy/u_resolution;
 // vec2 st = inData.v_texcoord;
  
  float scale = 10.;
  vec2 scaleSt = st* scale;
  vec2 scaleUnitSt = floor(scaleSt);
  vec2 normalizeScaledSt = scaleUnitSt/ scale;
  
  vec3 color1 = vec3(0.,0.,1.);
  vec3 color2 = vec3(0.,0.,.1);
    
  vec3 col = vec3(normalizeScaledSt.x,normalizeScaledSt.y,0.);
  vec3 applyColor = mix(mix(color1,color2,normalizeScaledSt.x),normalizeScaledSt.x,normalizeScaledSt.y);
  
  gl_FragColor = vec4(col,1.);
}