var mouseEvent="empty";
var last_position_x,last_position_y;

  canvas= document.getElementById("myCanvas");
  ctx= canvas.getContext("2d");

  color="black";
  width_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color_line").value;
    width_line=document.getElementById("width_line").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=width_line;
        ctx.moveTo(last_position_x,last_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
    }
    last_position_x= current_position_x;
    last_position_y= current_position_y;
}

function clearcan(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

}