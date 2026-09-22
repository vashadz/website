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

int randomNum(vec2 v){
    // Generate a random integer between 1 and 4
  float randomValue = fract(sin(dot(v.xy, vec2(12.9898, 78.233))) * 43758.5453);
  int randomInt = int(randomValue * 14.0); // Scale to range
  return randomInt;
}


float sdBox( in vec2 p, in vec2 b, in vec2 id)
{
    b.y *= float(randomNum(id)) / 1.;
    b.x *= float(randomNum(id * 7264.2345));
    
    b.x = 1.;
    b.y = clamp(b.y, .4, .9);
    vec2 d = abs(p)-b;
    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
}

float sdLight(in vec2 p, in vec2 b, in vec2 id)
{
//     b.y *= float(randomNum(id)) / 1.;
//     b.x *= float(randomNum(id * 7264.2345));
    p -= vec2(0.1,0.1);
    b.x = .1;
    b.y = .0125;
    vec2 d = abs(p)-b;
    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
}




void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;
  vec2 skySt = vec2(st.x + u_time * 0.001, st.y + u_time * 0.0001);
  vec3 col = vec3(fBM(skySt),0.,0.);
  
  st.x += u_time * 0.0001;
  
  vec2 st_scaled = vec2(st.x* 12., st.y * 1.);
  vec2 stID = floor(st_scaled);
  vec2 stUV = fract(st_scaled);
  vec3 finalColor = col;
  
  float building = sdBox(stUV - vec2(.5, .0), vec2(.0, .1), stID);
  building = smoothstep(0.,0.01, building);
  finalColor *= building;
  
  float bigLight = 11.;
  
  for(int i = 0; i < 12; i++){
    float light = sdLight(stUV - vec2(.25, (.1 * float(i))) + 0.050, vec2(.0, .0), stID);
    light = smoothstep(0.,0.025, light);    
    bigLight  *= light;
    //bigLight  = min(bigLight, light2);
    //bigLight  = min(bigLight, light2);
    //building = max(building, light);
  }
  building = max(building, 1. - bigLight);
  
  gl_FragColor = vec4(vec3(building + vec3(0.9,0.8,0.1)) * col,1.);
}
