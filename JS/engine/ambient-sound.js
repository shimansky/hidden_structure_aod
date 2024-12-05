var ambient = new Audio('SOUND/outdoor ambient.mp3');
ambient.volume = 0.4;
ambient.loop = true;
musicToggler = localStorage.getItem('sound-flag');
if(musicToggler==1){
    ambient.play();  
}