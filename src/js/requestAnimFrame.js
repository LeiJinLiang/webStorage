/**
 * Created by john on 2016/3/23.
 */
window.requestAnimationFrame=(function () {
    return window.requestAnimationFrame||
           window.webkitRequestAnimationFrame||
           window.mozRequestAnimationFrame||
           window.oRequestAnimationFrame||
           window.msRequestAnimationFrame||
        function () {
            window.setTimeout(callback,1000/60);
        }
})();
var canvas,context;
init();
animate();
function init(){
    canvas=document.createElement('canvas');
    canvas.style.left=0;
    canvas.style.top=0;
    canvas.width = 210;
    canvas.height=210;
    context=canvas.getContext('2d');
    document.body.appendChild(canvas);
}

function animate(){
    requestAnimationFrame(animate);
    draw();
}
function draw(){
    var time=new Date().getTime()*0.002;
    var x=Math.sin(time)*96+105;
    var y=Math.cos(time*0.9)+105;
    context.fillStyle='pink';
    context.fillRect(0,0,255,255);
    context.fillStyle='rgb(255,0,0)';
    context.beginPath();
    context.arc(x,y,10,0,Math.PI*2,true);
    context.closePath();
    context.fill();
}
