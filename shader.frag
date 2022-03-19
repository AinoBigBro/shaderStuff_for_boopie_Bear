
precision mediump float;


uniform float points[120];
uniform float angle;
uniform vec2 mouse;
uniform sampler2D image;
uniform float counter;
float dist( vec2 A, vec2 B )
{
   // vec2 C=A-B;
    //return dot(C,C);
    float re=abs(A.x-B.x)+abs(A.y-B.y);
    return re;
}




float closest(vec2 pos){
    float re=0.0;
    float dis=0.0;
    
    float min=999999.0;
    for(int i=0;i<120;i+=3){    
        float center=dist(vec2(300,300),pos)*counter;
        //float center=dist(vec2(points[i]+points[i+2]),pos)*counter;

        dis=dist(vec2(points[i]+cos(angle)*center,points[i+1]+sin(angle)*center),pos);
        if(dis<min){
            re=points[i+2];
            min=dis;
        }
    }
    return re;
}


void main() {
    vec2 st=gl_FragCoord.xy;
    vec4 tex=texture2D(image,vec2(st.x,600.0-st.y)/vec2(600,600));
    float ff=closest(st);
    if(tex.x>0.5){
        ff=1.0-ff;
    }
    
    gl_FragColor = vec4(ff,ff,ff, 1.0);
}