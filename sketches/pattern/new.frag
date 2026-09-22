// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

   vec2 n_mouse = u_mouse / u_resolution;
     float scale = .2;
  float wave = sin(scale*n_mouse.y * 2.*PI);
      float wave2 = tan(scale* n_mouse.x * 2.*PI);
    float c = step(wave,st.y);
    float c2 = step(wave2,st.x);
  vec3 color = vec3(c) * vec3(c2)* vec3(0.576,0.800,0.352);

  gl_FragColor = vec4(color, 1.0);
}
