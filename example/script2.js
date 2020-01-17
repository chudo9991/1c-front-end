function displayCanvas(){
    let canvas = document.getElementById('sandbox');
    let context = canvas.getContext('2d');
    context.strokeRect(0,0,canvas.width, canvas.height);
	
    //Расчет координат центра и радиуса часов
    let radiusClock = canvas.width/2 - 10;
    let xCenterClock = canvas.width/2;
    let yCenterClock = canvas.height/2;
	
    //Очистка экрана
    context.fillStyle = "#ffffff";
    context.fillRect(0,0,canvas.width,canvas.height);
	
    //Рисуем контур часов
    context.strokeStyle =  "#000000";
    context.lineWidth = 1;
    context.beginPath();
    context.arc(xCenterClock, yCenterClock, radiusClock, 0, 2*Math.PI, true);
    context.moveTo(xCenterClock, yCenterClock);
    context.stroke();
    context.closePath();
	
    //Рисуем рисочки часов
    let radiusNum = radiusClock - 10; //Радиус расположения рисочек	
    let radiusPoint;
    for(let tm = 0; tm < 60; tm++){
	  context.beginPath();
	  if(tm % 5 == 0){radiusPoint = 3;}else{radiusPoint = 2;} //для выделения часовых рисочек
	  let xPointM = xCenterClock + radiusNum * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2);
	  let yPointM = yCenterClock - radiusNum * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2);
	  context.arc(xPointM, yPointM, radiusPoint, 0, 2*Math.PI, true);
	  context.stroke();
	  context.closePath();
    } 
		
    //Рисуем стрелки
    let lengthSeconds = radiusNum - 10;
    let lengthMinutes = radiusNum - 15;
    let lengthHour = lengthMinutes / 1.5;
    let data = new Date();                //Получаем экземпляр даты
    let t_sec = 6*data.getSeconds();                           //Определяем угол для секунд
    let t_min = 6*(data.getMinutes() + (1/60)*data.getSeconds()); //Определяем угол для минут
    let t_hour = 30*(data.getHours() + (1/60)*data.getMinutes()); //Определяем угол для часов
	
    //Рисуем секунды
    context.beginPath();
    context.strokeStyle =  "#FF0000";
    context.moveTo(xCenterClock, yCenterClock);
    context.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
				yCenterClock - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
    context.stroke();
    context.closePath();

    //Рисуем минуты
    context.beginPath();
    context.strokeStyle =  "#000000";
    context.lineWidth = 3;
    context.moveTo(xCenterClock, yCenterClock);
    context.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
				 yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
    context.stroke();
    context.closePath();

    //Рисуем часы
    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(xCenterClock, yCenterClock);
    context.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
				 yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
    context.stroke();
    context.closePath();	
	
    //Рисуем центр часов
    context.beginPath();
    context.strokeStyle =  "#000000";
    context.fillStyle = "#ffffff";
    context.lineWidth = 3;
    context.arc(xCenterClock, yCenterClock, 5, 0, 2*Math.PI, true);
    context.stroke();
    context.fill();
    context.closePath();
	  
    return;
}


window.onload = function(){
    window.setInterval(
	function(){
		let d = new Date();
		document.getElementById("sandbox").innerHTML = d.toLocaleTimeString();
		displayCanvas();
	}
    , 1000);
}