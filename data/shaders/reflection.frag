#version 330

//varyings and out color
in vec2 v_uv;
in vec3 v_normal;
in vec3 v_vertex_world_pos;
out vec4 fragColor;

uniform vec3 u_cam_pos;
uniform samplerCube u_skybox; 


void main(){
    //calculate direction from vertex to camera in world space

    //calculate reflection vector

    //sample skybox texture
    
    //output to fragcolor
    fragColor = vec4(1.0,0.0,0.0,1.0);
}
