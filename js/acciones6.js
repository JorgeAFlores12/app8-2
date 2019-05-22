//JavaScript Document

$(document).ready(function (e) {
	document.addEventListener("deviceready",function(){
		
$('#izquierda').on("swipeleft",function(){
	navigator.notification.alert("Deslizó a la izquierda",function(){"Aplicación ","Aceptar"});
	});
	
	$('#derecha').on("swiperight",function(){
		navigator.notification.confirm("¿Qué quieres hacer?",function(opt){
			switch(opt)
			{
				case 1:
				navigator.notification.beep(2);
				break;
				
				case 2:
				navigator.notification.vibrate(1000);
				break;
			}
		},"Aplicacion","Beep,Vibrar,Cancelar");
		
	});
	},false);
});//Document
				