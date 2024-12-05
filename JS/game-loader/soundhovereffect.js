var menuItem = new Audio('SOUND/menuitem.mp3');
menuItem.volume = 0.4;

function menuItemPlay(){
	menuItem.pause();
	menuItem.currentTime = 0;
	menuItem.play();
}




