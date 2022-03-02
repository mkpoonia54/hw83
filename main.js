var mouseEvent="empty"
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;


new_width=screen.width-70;
new_height=screen.height-300;




    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
       
        console.log("my_touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
       
        mouseEvent = "mouseDown";
    }

    
    canvas.addEventListener("touchmove", my_mousemove);
    function my_mousemove(e)
    {
        console.log("touchmove")
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

         if(mouseEvent == "mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width_of_line;
         ctx.moveTo(last_position_of_x,last_position_of_y);
         ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
         ctx.stroke();

         }
         last_position_of_x=current_position_of_mouse_x;
         last_position_of_y=current_position_of_mouse_y;
        }

        canvas.addEventListener("mouseup",my_mouseup);

        function my_mouseup(e){
         MouseEvent="mouseUP";    
        }

        canvas.addEventListener("mouseleave",my_mouseleave);
        function my_mouseleave(e){
            mouseEvent="mouseLeave";
        }

        var last_position_of_touch_x, last_position_of_touch_y;
        var width=screen.width;


        new_width=screen.width - 70;
        new_height=screen.height - 300;

        if(width<992)
        {
            document.getElementById("myCanvas").width = new_width;
            document.getElementById("myCanvas").height=new_height;
            document.body.style.overflow="hidden";
        }

        canvas.addEventListener("touchstart",my_touchstart);

        function my_touchstart(e){

            console.log("my_touchstart");
            width_of_line=document.getElememtById("width_of_line").value;
            color=document.getElementById("color").value;

            last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
            last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
        }

        canvas.addEventListener("touchmove",my_touchmove);

        function my_touchmove(e)
    {
        
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width_of_line;
         ctx.moveTo(last_position_of_x,last_position_of_y);
         ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
         ctx.stroke();

         last_position_of_touch_x=current_position_of_mouse_x;
         last_position_of_touch_y=current_position_of_mouse_y;
    }

    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }