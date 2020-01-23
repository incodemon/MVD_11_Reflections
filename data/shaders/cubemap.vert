#version 330

layout(location = 0) in vec3 a_vertex;

out vec3 v_tex; //note vec3 not vec2
uniform mat4 u_vp;

void main(){
	v_tex = a_vertex;
	vec4 pos = u_vp * vec4(a_vertex, 1.0);
	gl_Position = pos.xyww;
    
}


