function drawWatch() {
let canvas=document.getElementById("sandbox"),
    context = canvas.getContext('2d'),
    circle = new Path2D(),
    line = new Path2D(),
    R = 300/2,
    date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
 
context.clearRect(0,0,300,300); // Очищаем холст

circle.arc(150,150,150,0,2*Math.PI); // рисуем круг
context.stroke(circle);

// рисуем риски на часах
for (let d=0;d<60;++d) {
    let angle = (d/60)*(2*Math.PI);
    let pX = Math.cos(angle)*R;
    let pY = -Math.sin(angle)*R;
    let qX = 0.9 * pX;
    let qY = 0.9 * pY;
    pX += R; pY += R;
    qX += R; qY += R;
    line.moveTo(pX,pY);
    line.lineTo(qX,qY);
    context.stroke(line);
}

// считаем смежные углы
let secondsAngle = (seconds/60)*(2*Math.PI);
let minutesAngle = (minutes/60)*(2*Math.PI);
let hoursAngle = ((hours%12)/12)*(2*Math.PI);
secondsAngle = Math.PI/2 - secondsAngle;
minutesAngle = Math.PI/2 - minutesAngle;
hoursAngle = Math.PI/2 - hoursAngle;

// считаем координаты стрелок
let pX = Math.cos(secondsAngle)*R;
let pY = -Math.sin(secondsAngle)*R;
let pXmin = Math.cos(minutesAngle)*R;
let pYmin = -Math.sin(minutesAngle)*R;
let pXhour = Math.cos(hoursAngle)*R;
let pYhour = -Math.sin(hoursAngle)*R;

pX += R; pY += R;
pXmin =(pXmin*0.85 + R); pYmin = (pYmin*0.85 + R);
pXhour =(pXhour*0.7 + R); pYhour = (pYhour*0.7 + R);

context.beginPath();
context.moveTo(R,R);
context.moveTo(R,R);
context.lineTo(pX,pY);
context.strokeStyle =  "red";
context.stroke();
context.lineWidth = 1;
context.closePath();

context.beginPath();
context.moveTo(R,R);
context.lineTo(pXmin,pYmin);
context.strokeStyle =  "black";
context.lineWidth = 3;
context.stroke();
context.lineWidth = 1;
context.closePath();

context.beginPath();
context.moveTo(R,R);
context.lineTo(pXhour,pYhour);
context.strokeStyle =  "black";
context.lineWidth = 7;
context.stroke();
context.closePath();

context.lineWidth = 1;
context.strokeStyle =  "black";
setTimeout(drawWatch, 1000);

}

drawWatch();