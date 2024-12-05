var flatBlackPlane = document.getElementById("flatBlackPlane");
var enot = document.getElementById("enot");
var startPhrase = document.getElementById("startPhrase");
var ambientMenu = new Audio('SOUND/ambientmenu.mp3');
ambientMenu.volume = 0.8;
ambientMenu.loop = true;
var musicToggler = localStorage.getItem('sound-flag');

function startNewGame(){
	startPhrase.style.animationName ="none";
	setTimeout(function(){startPhrase.style.opacity="0%"},1000); 
	setTimeout(function(){enot.style.opacity="0%"},1000);
	setTimeout(function(){flatBlackPlane.style.display="none"},2000);
	if(musicToggler == 1){
		ambientMenu.play();
	}
}

// let splash = document.getElementsByClassName('splash')[0];

// function setBlinkFlame(element){
// 	setInterval(()=>{element.style.filter = 'saturate(1)'}, 1000);
// 	setInterval(()=>{element.style.filter = 'saturate(5.5)'}, 4000);
// }

// setBlinkFlame(splash);
