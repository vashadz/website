precision mediump float;
#define PI 3.14159265

uniform vec2 u_resolution; 
uniform float u_time;

float hash21(vec2 v){
  return fract(23425.32 * sin(v.x*542.02 + v.y * 456.834));
}

float noise21(vec2 uv){
  
 vec2 scaleUV = floor(uv);
  vec2 unitUV = fract(uv);
  
  vec2 noiseUV = scaleUV;
  
  float value1 = hash21(noiseUV);
  float value2 = hash21(noiseUV + vec2(1.,0.));
  float value3 = hash21(noiseUV + vec2(0.,1.));
  float value4 = hash21(noiseUV + vec2(1.,1.));
  
  unitUV = smoothstep(vec2(0.),vec2(1.),unitUV);
  
  float bresult = mix(value1,value2,unitUV.x);
  float tresult = mix(value3,value4,unitUV.x);
  
  return mix(bresult,tresult,unitUV.y);
}

float fBM(vec2 uv){
  float result = 0.;
  for(int i = 0; i <  8; i++){
    result = result + (noise21(uv * pow(2.,float(i))) / pow(2.,float(i)+1.));
  }
  
  return result;
}
void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;
  
  st -= vec2(.5, .5);
  float gravel = hash21(st);
  st.y += u_time / 3000.;
  
  float scale = 10.;
  vec2 scaledSt = st * scale;
  vec2 gridID = floor(scaledSt);
  
  float lineMask = step(0.03 * noise21(vec2(u_time / 10000.)), distance(abs(st.x), 0.2 + 0.3 * noise21(vec2(u_time / 10000.))));
  lineMask = 1. - lineMask;
  
  float dottedLineMask = step (0.03 * noise21(vec2(u_time / 10000.)), distance(abs(st.x), 0.0));
  dottedLineMask = 1. - dottedLineMask;
  dottedLineMask *= mod(gridID.y, 2.);
  
  gravel *= dottedLineMask + lineMask;
  
  vec3 col = vec3(lineMask * vec3(1., 1., 0)) + vec3(dottedLineMask) + vec3(gravel);
  gl_FragColor = vec4(col,1.);
}
