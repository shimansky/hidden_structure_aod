// глобальні змінні
var locator;
var tempLocation;
var buferLocation;
var r = /\d+/;
var row = 30;
var col = 30;
var flag = 1; 
var newMap =["["];
var p;
var error=0;
var inTeleportation=0;
var language = localStorage.getItem('lang');
var flagPistol = +localStorage.getItem('flagPistol');
var flagShootgun = +localStorage.getItem('flagShootgun');
var flagPlasmagun = +localStorage.getItem('flagPlasmagun');
var flagFiregun = +localStorage.getItem('flagFiregun');
var tab;
var toggle=1;
var joy;
var stringMap;
var asideMenuToggler = 0;
var statusMenuToggler = 0;
var asideMenu;
var statusMenu;
var joyFlag;
var menuToggler;
var musicToggler = localStorage.getItem('sound-flag');
var truePassword = Math.floor((Math.random() * 1000) + 1);
var whiteDoorIsOpened = 0;
var blackDoorIsOpened = 0;
var runFlag = 0;
var tempMusicIndicator;
var flashMouseMove = +localStorage.getItem('flashMouseMove');

var keywhiteFlag = 0;
var keyblackFlag = 0;
var medicKitFlag = 0;
var pistolFlag = 0;
var shootGunFlag = 0;    
var pistolCellsFlag = 0;
var shootgunCellsFlag = 0;
var plasmaGunFlag = 0;
var plasmagunCellsFlag = 0;
var fireGunFlag = 0;
var firegunCellsFlag = 0;


// рівень урону який може нанести ігрок
var attack = 5;
var flagGamePause = 0;

// встановлення рівню життя з local storage
var life = +localStorage.getItem('life');


// дефолтні значення для елементів оточення югіту
var upTemp=0;
var downTemp=0;
var leftTemp=0;
var rightTemp=0;

// головні звуки
var gameMenuSound = new Audio('SOUND/gameMenu.mp3');
var picSound = new Audio('SOUND/picsound.mp3');
var accessCard = new Audio('SOUND/accesscard.mp3');
var pickUpPistol = new Audio('SOUND/pickuppistol.mp3');
var medikKit = new Audio('SOUND/medikkit.mp3');
var electricShock = new Audio('SOUND/electricShock.mp3');
var portalSound = new Audio('SOUND/teleport.mp3');
    portalSound.volume = 0.2;
var monsteralienAttack = new Audio('SOUND/monsteralienattack.mp3');
var burn = new Audio('SOUND/burn.mp3');
var monsterhairbugAttack = new Audio('SOUND/monsterhairbugattack.mp3');
var monsterblobAttack = new Audio('SOUND/monsterblobattack.mp3');
var monstersnakeAttack = new Audio('SOUND/monstersnakeattack.mp3');
var monsterthongleAttack = new Audio('SOUND/monsterthongleattack.mp3');
var monsterDied = new Audio('SOUND/monsterdied.mp3');
var pickUpPlasmagun = new Audio('SOUND/pickupplasmagun.mp3');
var pickUpPlasmaCells = new Audio('SOUND/pickupplasmacells.mp3');
var pickUpFiregun = new Audio('SOUND/pickupfiregun.mp3');
var pickUpFireCells = new Audio('SOUND/pickupfirecells.mp3');
var doorOpenCloseSound = new Audio('SOUND/dooropenclosesound.mp3');
var liftMove = new Audio('SOUND/lift-move.mp3');
var radioSound = new Audio('SOUND/radio.mp3');
var radioSoundOff = new Audio('SOUND/radio-off.mp3');
var servDoor = new Audio('SOUND/server-door.mp3');

// флаг для режиму редагування карт
var isDrawing = 0;

// флаг для збереження напрямку погляду гравця станом на зараз
var flagLookAt = "";

// текст для вміщення у діалогове вікно
var tabText;

  try{
    localStorage.setItem('temp-life', life);
    localStorage.setItem('temp-flagPistol', flagPistol);
    localStorage.setItem('temp-flagShootgun', flagShootgun);
    localStorage.setItem('temp-flagPlasmagun', flagPlasmagun);
    localStorage.setItem('temp-flagFiregun', flagFiregun);
    localStorage.setItem('temp-frCells', frCells);
    localStorage.setItem('temp-plCells', plCells);
    localStorage.setItem('temp-cells', cells);
    localStorage.setItem('temp-sCells', sCells);
    localStorage.setItem('temp-flagSelect', flagSelect);
  }catch{
    console.log("trouble with saving localStorage data!");
  }


// Визначаємо URL-адресу та завантажуємо мапу рівня
getLocation();
// loadMap();


// функція, що виконується при завантажені сторінуи - знаходить елементи по ID та надає їм імена
window.onload = function(){
document.addEventListener('contextmenu', event => event.preventDefault());
render();
createAsideMenu();
createStatusMenu();
createBagPackMenu();
createMenuToggler();
wievport=document.getElementById('wievport');
iconBlackCard=document.getElementById('iconBlackCard');
iconWhiteCard=document.getElementById('iconWhiteCard');
iconPistol=document.getElementById('iconPistol');
iconShootgun=document.getElementById('iconShootgun');
iconPlasmagun=document.getElementById('iconPlasmagun');
keywhite=document.getElementsByClassName('key_card_white')[0];
keyblack=document.getElementsByClassName('key_card_black')[0];
lock_white=document.getElementsByClassName('locked_door_white')[0];
lock_black=document.getElementsByClassName('locked_door_black')[0];
lock_white.addEventListener("mousedown", whiteDoorDialog);
lock_black.addEventListener("mousedown", blackDoorDialog);
exit_door=document.getElementsByClassName('exit_door')[0];
medicKit=document.getElementsByClassName('medicKit')[0];
falseDoor=document.getElementsByClassName('exit_door')[0];
portal=document.getElementsByClassName('portal')[0];
pistol=document.getElementsByClassName('pistol')[0]; 
pistolCells=document.getElementsByClassName('pistolCells')[0];
shootGun=document.getElementsByClassName('shootGun')[0];
shootgunCells=document.getElementsByClassName('shootgunCells')[0];
plasmaGun=document.getElementsByClassName('plasmaGun')[0];
plasmagunCells=document.getElementsByClassName('plasmagunCells')[0];
fireGun=document.getElementsByClassName('fireGun')[0];
firegunCells=document.getElementsByClassName('firegunCells')[0];




status=document.getElementById('panel');
panel.innerHTML="<div class='healthIcon'></div> " + life;
setCoordinatesPlayerMonster();
setCurrentView();
searchAllOpenDoors();
searchAllClosedDoors();


if(flagPistol==1){
  iconPistol.style.display="inline-block";
   iconPistol.innerHTML=cells;
}
if(flagShootgun==1){
  iconShootgun.style.display="inline-block";
   iconShootgun.innerHTML=sCells;
}
if(flagPlasmagun==1){
  iconPlasmagun.style.display="inline-block";
   iconPlasmagun.innerHTML=plCells;
}
if(flagFiregun==1){
  iconFiregun.style.display="inline-block";
   iconFiregun.innerHTML=frCells;
}
addJoystik();
try{
  setRedDoorText();
}catch{
  
}


try{
  var hiddenStructure = [medicKit, keywhite, keyblack, lock_white, lock_black, portal, shootGun, shootgunCells, plasmaGun, plasmagunCells, fireGun, firegunCells];
  hideAllStructures(hiddenStructure);
}catch{
  console.log('structures is dont need to hide');
}
};



// створення бокового меню
function createAsideMenu() {
  asideMenu = document.createElement("div");
  asideMenu.className = "asideMenu";
  asideMenu.style.width = "100%";
  asideMenu.style.height = "100%";
  document.body.append(asideMenu);
  
}

// створення меню статусу
function createStatusMenu() {
  statusMenu = document.createElement("div");
  statusMenu.className = "statusMenu";
  statusMenu.style.width = "100%";
  statusMenu.style.height = "100%";
  document.body.append(statusMenu);
  
}

// створення меню рюкзаку
function createBagPackMenu() {
  bagPackMenu = document.createElement("div");
  bagPackMenu.className = "bagPackMenu";
  
}



// створюєм джойстик
function addJoystik(){

joy = document.createElement('div');
  joy.id = "joystik";
  swapFlag = localStorage.getItem('swapFlag');
  if(swapFlag == "buttons") {
  joy.innerHTML= '<button class="joyButtonsStyle" ontouchstart="joyUp()" ontouchend="joyUpEnd()">&uArr;</button><br><button class="joyButtonsStyle" ontouchstart="joyLeft()" ontouchend="joyLeftEnd()">&lArr;</button><button class="joyButtonsStyleDummie" ontouchstart="" ontouchend="">&nbsp;</button><button class="joyButtonsStyle" ontouchstart="joyRight()" ontouchend="joyRightEnd()">&rArr;</button><br><button class="joyButtonsStyle" ontouchstart="joyDown()" ontouchend="joyDownEnd()">&dArr;</button>' ;
  document.body.append(joy);
}else{
  joy.innerHTML= '' ;
  document.body.append(joy);
  jo = new JoyRoller('joystik');
}
  
    joyButtons = document.createElement('div');
    joyButtons.id = "joyButtons";
    if(language==1){
      joyButtons.innerHTML= '<button class="joyButtonsStyle" ontouchstart="joySetGrenade()" ontouchend=""><img src="IMG/irsensor.png"></button><button id="lightButton" class="joyButtonsStyle" ontouchstart="toggleFlashLight()" ontouchend=""><img src="IMG/lightIconON.png"></button><button id="runButton" class="joyButtonsStyle" ontouchstart="joyTurnRunMode()" ontouchend="">біг</button><button class="joyButtonsStyle" ontouchstart="showHideStatusMenu()" ontouchend="">рюк<br>зак</button>' ;
    }else{
      joyButtons.innerHTML= '<button class="joyButtonsStyle" ontouchstart="joySetGrenade()" ontouchend=""><img src="IMG/irsensor.png"></button><button id="lightButton" class="joyButtonsStyle" ontouchstart="toggleFlashLight()" ontouchend=""><img src="IMG/lightIconON.png"></button><button id="runButton" class="joyButtonsStyle" ontouchstart="joyTurnRunMode()" ontouchend="">run</button><button class="joyButtonsStyle" ontouchstart="showHideStatusMenu()" ontouchend="">back<br>pack</button>' ;
    }  
    document.body.append(joyButtons);
    joyFlag = localStorage.getItem('joyFlag');
  if(joyFlag == 1) {
    joy.style.display = "inline-block";
    joyButtons.style.display = "flex";
  }else{
    joy.style.display = "none";
    joyButtons.style.display = "none";
  }

   
}


// відобразити/приховати джойстик
function showHideJoystic() {
  joyFlag = localStorage.getItem('joyFlag');
  if(joyFlag == 0) {
    localStorage.setItem('joyFlag', 1);
    joy.style.display = "inline-block";
    joyButtons.style.display = "flex";
    try{
      if(language==0){
        joyIndicator.innerHTML = "on";
      }else{
        joyIndicator.innerHTML = "увімкнено";
      }    
  }catch{
    
  }
    pickUpPistol.play();
  }else{
    localStorage.setItem('joyFlag', 0);
    joy.style.display = "none";
    joyButtons.style.display = "none";
    try{
    if(language==0){
        joyIndicator.innerHTML = "off";
      }else{
        joyIndicator.innerHTML = "вимкнено";
      } 
  }catch{
    
  }
    pickUpPistol.play();
  }
}

// змінити джойстик/сенсор
function swapJoysticSensor() {
  swapFlag = localStorage.getItem('swapFlag');
  if(swapFlag == "joy") {
    joy.style.width = '130px';
    joy.style.height = '130px';
    joy.innerHTML= '<button class="joyButtonsStyle" ontouchstart="joyUp()" ontouchend="joyUpEnd()">&uArr;</button><br><button class="joyButtonsStyle" ontouchstart="joyLeft()" ontouchend="joyLeftEnd()">&lArr;</button><button class="joyButtonsStyleDummie" ontouchstart="" ontouchend="">&nbsp;</button><button class="joyButtonsStyle" ontouchstart="joyRight()" ontouchend="joyRightEnd()">&rArr;</button><br><button class="joyButtonsStyle" ontouchstart="joyDown()" ontouchend="joyDownEnd()">&dArr;</button>' ;
      if(language==0){
        swapIndicator.innerHTML = "buttons";
      }else{
        swapIndicator.innerHTML = "кнопки";
      }
    localStorage.setItem('swapFlag', "buttons");
    pickUpPistol.play();
    try{
      joyArea.remove();
    }catch{
      console.log('something wrong...');
    }
  }else{
    joy.style.width = '130px';
    joy.style.height = '130px';
    joy.innerHTML= '' ;
    jo = new JoyRoller('joystik');
    if(language==0){
      swapIndicator.innerHTML = "joy";
    }else{
      swapIndicator.innerHTML = "джойстик";
    }
    localStorage.setItem('swapFlag', "joy");
    pickUpPistol.play();
  }
}

// перемкнути режим бігу у мобільній версії
function joyTurnRunMode(){
  if(runFlag==0){
      playerLeftXDistance=-10;
      playerRightXDistance=10;
      playerUpYDistance=10;
      playerDownYDistance=-10;
      runFlag=1;
      runButton.style.backgroundColor="#71d742";
      runButton.style.color="black";
  }else{
      playerLeftXDistance=-7;
      playerRightXDistance=7;
      playerUpYDistance=7;
      playerDownYDistance=-7;
      runFlag=0;
      runButton.style.backgroundColor="black";
      runButton.style.color="#71d742";
  }
}

// увімкнути/вимкнути музику
function toggleMusic() {
  if(musicToggler == 0) {
    musicToggler=1;
    localStorage.setItem('sound-flag',1);
    try{
      if(language==0){
        musicIndicator.innerHTML = "on";
      }else{
        musicIndicator.innerHTML = "увімкнено";
      } 
  }catch{
    
  }
    pickUpPistol.play();
  }else{
    musicToggler=0;
    localStorage.setItem('sound-flag',0);
    try{
         if(language==0){
        musicIndicator.innerHTML = "off";
      }else{
        musicIndicator.innerHTML = "вимкнено";
      }  
  }catch{
    
  }
    pickUpPistol.play();
  }
}


// поява/зникнення бокового меню
function showHideAsideMenu() {
  var swapTempIndicator;
  var currentConrolType = localStorage.getItem('swapFlag');
  if(currentConrolType == 'buttons'){
    if(language==0){
        swapTempIndicator = "buttons";
      }else{
        swapTempIndicator = "кнопки";
      }
  }else{
     if(language==0){
        swapTempIndicator = "joy";
      }else{
        swapTempIndicator = "джойстик";
      }
  }
  var tempIndicator;
  if(localStorage.getItem('joyFlag')==1){
     if(language==0){
        tempIndicator = "on";
      }else{
        tempIndicator = "увімкнено";
      }    
  }
  if(localStorage.getItem('joyFlag')==0){
   if(language==0){
        tempIndicator = "off";
      }else{
        tempIndicator = "вимкнено";
      }  
  }
  if(musicToggler==1){
    if(language==0){
        tempMusicIndicator = "on";
      }else{
        tempMusicIndicator = "увімкнено";
      } 
  }else{
    if(language==0){
        tempMusicIndicator = "off";
      }else{
        tempMusicIndicator = "вимкнено";
      };
  }

  try{
    if(language==0){
      asideMenu.innerHTML = "<div class='menuItemWrapper'><button onclick='showHideJoystic()'>joy</button> <div id='joyIndicator' class='menuItemIndicator'>" + 
    tempIndicator +" </div></div><div class='menuItemWrapper'><button onclick='swapJoysticSensor()'>control</button> <div id='swapIndicator' class='menuItemIndicator'>" + 
    swapTempIndicator +" </div></div> <div class='menuItemWrapper'><button onclick='toggleMusic()'>Music</button> <div id='musicIndicator' class='menuItemIndicator'>"+ tempMusicIndicator +"</div></div> <div class='menuItemWrapper'><a href='index.html'>end game and exit to MAIN MENU ></a></div>";
    }else{
      asideMenu.innerHTML = "<div class='menuItemWrapper'><button onclick='showHideJoystic()'>джойстик</button> <div id='joyIndicator' class='menuItemIndicator'>" + 
    tempIndicator +" </div></div><div class='menuItemWrapper'><button onclick='swapJoysticSensor()'>керування</button> <div id='swapIndicator' class='menuItemIndicator'>" + 
    swapTempIndicator +" </div></div> <div class='menuItemWrapper'><button onclick='toggleMusic()'>музика</button> <div id='musicIndicator' class='menuItemIndicator'>"+ tempMusicIndicator +"</div></div> <div class='menuItemWrapper'><a href='index.html'>закінчити гру та вийти до ГОЛОВНОГО МЕНЮ ></a></div>";
    }
    
  }catch{

      asideMenu.innerHTML = "<div class='menuItemWrapper'><button onclick='showHideJoystic()'>joy</button> <div id='joyIndicator' class='menuItemIndicator'>"+ tempIndicator +"</div></div><div class='menuItemWrapper'><button onclick='swapJoysticSensor()'>control</button> <div id='swapIndicator' class='menuItemIndicator'>" + 
    swapTempIndicator +" </div></div> <div class='menuItemWrapper'><button onclick='toggleMusic()'>Music</button> <div id='musicIndicator' class='menuItemIndicator'>"+ tempMusicIndicator +"</div></div> <div class='menuItemWrapper'><a href='index.html'>end game and exit to MAIN MENU ></a></div>";
    console.log("default asideMenu created");
    
  }

  if(asideMenuToggler==0) {
    flagGamePause = 1;
    inTeleportation=1;
    asideMenu.style.left = "0";
    asideMenuToggler = 1;
    if(language==0){
      menuToggler.innerHTML = "close";
    }else{
      menuToggler.innerHTML = "назад";
    }    
    flagLeft=0;
    leftInMove=0;
    clearInterval(timerLeft);
    flagRight=0;
    rightInMove=0;
    clearInterval(timerRight);
    flagDown=0;
    downInMove=0;
    clearInterval(timerDown); 
    flagUp=0;
    upInMove=0;
    clearInterval(timerUp);
    changePlayerImgThenButtonUp();
    try{
      gameMenuSound.pause();
      gameMenuSound.currentTime = 0;
    }catch{
      
    }
    gameMenuSound.play();
     try{
      ambient.pause();
    }catch{

    }
    
  }else{
   
     inTeleportation=0;
     asideMenu.style.left = "-100%";
     asideMenuToggler = 0;
     flagGamePause = 0;
    if(language==0){
      menuToggler.innerHTML = "menu";
    }else{
      menuToggler.innerHTML = "меню";
    }
     try{
      gameMenuSound.pause();
      gameMenuSound.currentTime = 0;
    }catch{
      
    }
    gameMenuSound.play();
      try{
        if(musicToggler==1){
        ambient.play();
      }
    }catch{

    }
    
  }
}


// поява/зникнення status меню 
function showHideStatusMenu() {

  if(statusMenuToggler==0) {
    flagGamePause = 1;
    inTeleportation=1;

    var bagpackItemsArrEng = localStorage.getItem('bagpackItemsArrEng');
    var bagpackItemsArrUa = localStorage.getItem('bagpackItemsArrUa');

    tempbagPackMenuEng = "";
    tempbagPackMenuUa = "";

     
    if(language==0){
      for(i=0; i<bagpackItemsArrEng.length; i++){
      tempbagPackMenuEng += bagpackItemsArrEng[i];
        }
      bagPackMenu.innerHTML = "backpack<p>weapons / ammunition:" + "<div class='menuItemWrapper'><div class='menuItemIndicator'> pistol:<br>walter-p99 </div> <div class='menuItemIndicator'>" + 
    cells +" </div></div><div class='menuItemWrapper'><div class='menuItemIndicator'> shootgun:<br>mossberg-500 </div> <div class='menuItemIndicator'>" + sCells +" </div></div><div class='menuItemWrapper'><div class='menuItemIndicator'> plasmagun:<br>pg-h720 </div> <div class='menuItemIndicator'>" + 
    plCells +" </div></div><div class='menuItemWrapper'><div class='menuItemIndicator'> sensor-grenades:<br>sfg-k </div> <div class='menuItemIndicator'>" + granadesCount +" </div></div><div class='menuItemWrapper'><div class='menuItemIndicator'> firegun:<br>ftt-j67 </div> <div class='menuItemIndicator'>" + 
    frCells +" </div></div></div>" + "things:" + tempbagPackMenuEng;

    statusMenu.innerHTML="<button class='joyButtonsStyle' onclick='showHideStatusMenu()' ontouchstart='showHideStatusMenu()' ontouchend=''>back</button><div class='card-status'><div class='healthIcon'>" + life + "</div></div>"; 
    }else{
      for(i=0; i<bagpackItemsArrUa.length; i++){
      tempbagPackMenuUa += bagpackItemsArrUa[i];
        }
      bagPackMenu.innerHTML = "рюкзак<p>зброя / набої:" + "<div class='menuItemWrapper'><div class='menuItemIndicator'> пістолет:<br>walter-p99 </div> <div class='menuItemIndicator'>" + 
    cells +" </div></div><div class='menuItemWrapper'><div class='menuItemIndicator'> дробовик:<br>mossberg-500 </div> <div class='menuItemIndicator'>" + sCells +" </div></div><div class='menuItemWrapper'><div class='menuItemIndicator'> плазмоган:<br>pg-h720 </div> <div class='menuItemIndicator'>" + 
    plCells +" </div></div><div class='menuItemWrapper'><div class='menuItemIndicator'> сенсорні-гранати:<br>sfg-k </div> <div class='menuItemIndicator'>" + granadesCount +" </div></div><div class='menuItemWrapper'><div class='menuItemIndicator'> вогнемет:<br>ftt-j67 </div> <div class='menuItemIndicator'>" + 
    frCells +" </div></div></div>" + "речі:" + tempbagPackMenuUa;

    statusMenu.innerHTML="<button class='joyButtonsStyle' onclick='showHideStatusMenu()' ontouchstart='showHideStatusMenu()' ontouchend=''>назад</button><div class='card-status'><div class='healthIcon'>" + life + "</div></div>"; 
    }
    


    statusMenu.append(bagPackMenu);

    statusMenu.style.left = "0";
    statusMenuToggler = 1;
    flagLeft=0;
    leftInMove=0;
    clearInterval(timerLeft);
    flagRight=0;
    rightInMove=0;
    clearInterval(timerRight);
    flagDown=0;
    downInMove=0;
    clearInterval(timerDown); 
    flagUp=0;
    upInMove=0;
    clearInterval(timerUp);
    changePlayerImgThenButtonUp();
    try{
      gameMenuSound.pause();
      gameMenuSound.currentTime = 0;
    }catch{
      
    }
    gameMenuSound.play();
     try{
      ambient.pause();
    }catch{

    }
    
  }else{
   
     inTeleportation=0;
     statusMenu.style.left = "-100%";
     statusMenuToggler = 0;
     flagGamePause = 0;
    try{
      gameMenuSound.pause();
      gameMenuSound.currentTime = 0;
    }catch{
      
    }
    gameMenuSound.play();
      try{
        if(musicToggler==1){
        ambient.play();
      }
    }catch{

    }
    


  }
}

// створення кнопки виклику меню
function createMenuToggler() {
  menuToggler = document.createElement("div");
  menuToggler.id = "menuToggler";
  menuToggler.className = "interface";
  if(language==0){
      menuToggler.innerHTML = "menu";
    }else{
      menuToggler.innerHTML = "меню";
    }
  document.body.append(menuToggler);
  menuToggler.onclick = showHideAsideMenu;
}




// встановлення початкових координат гравця на мапі
function setCoordinatesPlayerMonster(){
  figure.style.left = left +'px';
  figure.style.bottom = bottom + 'px';
  setCurrentView();
}



// визначення URL сторінки на цей час
function getLocation(){
  locator = window.location;
  buferLocation=locator.toString().slice(-11);
  tempLocation = buferLocation.match(r);
  tempLocation = +tempLocation.toString();
  
}


// функція визначення координат гравця при зіштовхуваннях із монстром та речами
function get_coordinates(unit){

    var p = figure.getBoundingClientRect();
    var k = keywhite.getBoundingClientRect();
    var b = keyblack.getBoundingClientRect();
    var kit = medicKit.getBoundingClientRect();
    var teleport = portal.getBoundingClientRect();
    var gun = pistol.getBoundingClientRect();
    var sGun = shootGun.getBoundingClientRect();    
    var ex = exit_door.getBoundingClientRect();
    var pc = pistolCells.getBoundingClientRect();
    var sc = shootgunCells.getBoundingClientRect();
    var pGun = plasmaGun.getBoundingClientRect();
    var plc = plasmagunCells.getBoundingClientRect();
    var fGun = fireGun.getBoundingClientRect();
    var flc = firegunCells.getBoundingClientRect();



    // підбір пістолета з підлоги
    if (( (p.bottom-gun.bottom)<=25 && (p.bottom-gun.bottom)>=-25 ) && ( (p.right-gun.right)<=25 && (p.right-gun.right)>=-25 ) ) {
        if(pistolFlag == 0){
          pistolFlag = 1;
          localStorage.setItem('flagPistol', 1);
          flagPistol=1;
          flagSelect=2;
          localStorage.setItem('flagSelect', flagSelect);
          cells+=10;
          iconPistol.innerHTML=cells;
          pistol.className = "flf";
          iconPistol.style.display="inline-block";
          iconPistol.innerHTML=cells;
          iconPistol.style.border="1px solid #71d742";
          iconShootgun.style.border="none";
          iconPlasmagun.style.border="none";
          iconFiregun.style.border="none";
          pickUpPistol.play();
          pistol.style.pointerEvents = 'none';
        }
    }

    // підбір рушниці з підлоги
    if (( (p.bottom-sGun.bottom)<=25 && (p.bottom-sGun.bottom)>=-25 ) && ( (p.right-sGun.right)<=25 && (p.right-sGun.right)>=-25 ) ) {
      if(shootGunFlag == 0){
         shootGunFlag = 1; 
         localStorage.setItem('flagShootgun', 1);
         flagShootgun=1;
         flagSelect=3;
         localStorage.setItem('flagSelect', flagSelect); 
         sCells+=5;
         iconShootgun.innerHTML=sCells;
         shootGun.className = "flf";
         iconShootgun.style.display="inline-block";
         iconShootgun.style.border="1px solid red";
         iconShootgun.innerHTML=sCells;
         iconPistol.style.border="none";
         iconPlasmagun.style.border="none";
         iconFiregun.style.border="none";
         iconShootgun.style.border="1px solid #71d742";
         pickUpPistol.play();
         shootGun.style.pointerEvents = 'none';
      }
    }

    // підбір плазмогану з підлоги
    if (( (p.bottom-pGun.bottom)<=25 && (p.bottom-pGun.bottom)>=-25 ) && ( (p.right-pGun.right)<=25 && (p.right-pGun.right)>=-25 ) ) {
      if(plasmaGunFlag == 0){
         plasmaGunFlag = 1;
         localStorage.setItem('flagPlasmagun', 1);
         flagPlasmagun=1;
         flagSelect=4;
         localStorage.setItem('flagSelect', flagSelect);
         plCells+=5;
         iconPlasmagun.innerHTML=plCells;
         plasmaGun.className = "flf";
         iconPistol.style.border="none";
         iconShootgun.style.border="none";
         iconPlasmagun.style.display="inline-block";
         iconFiregun.style.border="none";
         iconPlasmagun.style.border="1px solid #71d742";
         pickUpPlasmagun.play();
         plasmaGun.style.pointerEvents = 'none';
      } 

    }

        // підбір вогнемету з підлоги
    if (( (p.bottom-fGun.bottom)<=25 && (p.bottom-fGun.bottom)>=-25 ) && ( (p.right-fGun.right)<=25 && (p.right-fGun.right)>=-25 ) ) {
      if(fireGunFlag == 0){
         fireGunFlag = 1;
         localStorage.setItem('flagFiregun', 1);
         flagFiregun=1;
         flagSelect=5;
         localStorage.setItem('flagSelect', flagSelect);
         frCells+=5;
         iconFiregun.innerHTML=frCells;
         fireGun.className = "flf";
         iconPistol.style.border="none";
         iconShootgun.style.border="none";
         iconPlasmagun.style.border="none";
         iconFiregun.style.display="inline-block";
         iconFiregun.style.border="1px solid #71d742";
         pickUpFiregun.play();
         fireGun.style.pointerEvents = 'none';
      } 

    }


    // підбір патронів для пістолета
    if (( (p.bottom-pc.bottom)<=25 && (p.bottom-pc.bottom)>=-25 ) && ( (p.right-pc.right)<=25 && (p.right-pc.right)>=-25 ) ) {
       if(pistolCellsFlag == 0){
         pistolCellsFlag = 1;
         cells+=5;
         iconPistol.innerHTML=cells;
         pistolCells.className = "flf";
         pickUpPistol.play();
         pistolCells.style.pointerEvents = 'none';
       }

    }

    // підбір патронів для рушниці
    if (( (p.bottom-sc.bottom)<=25 && (p.bottom-sc.bottom)>=-25 ) && ( (p.right-sc.right)<=25 && (p.right-sc.right)>=-25 ) ) {
       if(shootgunCellsFlag == 0){
         shootgunCellsFlag = 1;
         sCells+=5;
         iconShootgun.innerHTML=sCells;
         shootgunCells.className = "flf";
         pickUpPistol.play();
         shootgunCells.style.pointerEvents = 'none';
       }
       
    }

    // підбір патронів для плазмогану
    if (( (p.bottom-plc.bottom)<=25 && (p.bottom-plc.bottom)>=-25 ) && ( (p.right-plc.right)<=25 && (p.right-plc.right)>=-25 ) ) {
      if(plasmagunCellsFlag == 0){
         plasmagunCellsFlag = 1;
         plCells+=10;
         iconPlasmagun.innerHTML=plCells;
         plasmagunCells.className = "flf";
         pickUpPlasmaCells.play();
         plasmagunCells.style.pointerEvents = 'none'; 
      }

    }

    // підбір патронів для вогнемету
    if (( (p.bottom-flc.bottom)<=25 && (p.bottom-flc.bottom)>=-25 ) && ( (p.right-flc.right)<=25 && (p.right-flc.right)>=-25 ) ) {
      if(firegunCellsFlag == 0){
         firegunCellsFlag = 1;
         frCells+=5;
         iconFiregun.innerHTML=frCells;
         firegunCells.className = "flf";
         pickUpFireCells.play();
         firegunCells.style.pointerEvents = 'none'; 
      }

    }


    // логіка роботи дверей та карток-ключів
    if (( (p.bottom-k.bottom)<=25 && (p.bottom-k.bottom)>=-25 ) && ( (p.right-k.right)<=25 && (p.right-k.right)>=-25 ) ) {
        if(keywhiteFlag == 0){
          keywhiteFlag = 1;
          console.log("you have a white card!");
          keywhite.className = "flf";
          iconWhiteCard.style.display="inline-block";
          whiteDoorIsOpened = 1;
          accessCard.play();
          keywhite.style.pointerEvents = 'none';
        }
        
      }

    if (( (p.bottom-b.bottom)<=25 && (p.bottom-b.bottom)>=-25 ) && ( (p.right-b.right)<=25 && (p.right-b.right)>=-25 ) ) {
        if(keyblackFlag == 0){
          keyblackFlag = 1;
          console.log("you have a black card!");
          keyblack.className = "flf";
          iconBlackCard.style.display="inline-block";
          blackDoorIsOpened = 1;
          accessCard.play();
          keyblack.style.pointerEvents = 'none';
        }
        
      }


    // аптечка
    if (( (p.bottom-kit.bottom)<=25 && (p.bottom-kit.bottom)>=-25 ) && ( (p.right-kit.right)<=25 && (p.right-kit.right)>=-25 ) ) {
        if(medicKitFlag == 0){
          medicKitFlag = 1;
          medicKit.className = "flf";
          life+=50;
          panel.innerHTML="<div class='healthIcon'></div> " + life;
          console.log(life);
          medikKit.play();
          medicKit.style.pointerEvents = 'none';
        }
        
    }


    // телепортація гравця
    if (( (p.bottom-teleport.bottom)<=25 && (p.bottom-teleport.bottom)>=-25 ) && ( (p.right-teleport.right)<=25 && (p.right-teleport.right)>=-25 ) ) {
        inTeleportation=1;
        flagGamePause=1;
        setImgPlayerTeleportation();
        setTimeout(()=>{
          left=left+teleportX;
          bottom=bottom+teleportY;
          figure.style.left = left +'px';
          figure.style.bottom = bottom + 'px';
          setCurrentView();
          flagGamePause=0;
        }, 3500);
        console.log("teloportation");
        setTimeout(changePlayerImgInTeleportation,4000);
        portalSound.play();
    }


  

    //  вихід із рівня
    if (( (p.bottom-ex.bottom)<=25 && (p.bottom-ex.bottom)>=-25 ) && ( (p.right-ex.right)<=25 && (p.right-ex.right)>=-25 ) ) {
        if(error==0){
          error=1;
        // збереження статусу життя гравця при виході із рівня
        localStorage.setItem('life', life);
        localStorage.setItem('flagPistol', flagPistol);
        localStorage.setItem('flagShootgun', flagShootgun);
        localStorage.setItem('flagPlasmagun', flagPlasmagun);
        localStorage.setItem('flagFiregun', flagFiregun);
        localStorage.setItem('frCells', frCells);
        localStorage.setItem('plCells', plCells);
        localStorage.setItem('cells', cells);
        localStorage.setItem('sCells', sCells);
        localStorage.setItem('flagSelect', flagSelect);
        flagGamePause = 1;
        exit_door.style.backgroundImage = "url(IMG/exitdoor.gif)";
        try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
        setTimeout(()=>{
          loadNextMap();
          
      }, 1500);
        }
        else{
          console.log("lift is blocked!");
        }

    }


    // визначення імені класу елемента "ліворуч" від юніту
    left_empty = document.elementFromPoint((unit.right-55),(unit.bottom-5)).className;
    if (!left_empty.includes("wall") && left_empty!="monsterthongle" && left_empty!="monstersnake" && left_empty!="monsterblob" && left_empty!="alien" && left_empty!="world" && left_empty!="person" && left_empty!="locked_door_white" && left_empty!="locked_door_black" ) {
     leftTemp=1;
     
    }
    else{
      leftTemp=0;
    }

    // визначення імені класу елемента "праворуч" від юніту
    right_empty  = document.elementFromPoint((unit.right+5),(unit.bottom-5)).className;
    if (!right_empty.includes("wall") && right_empty!="monsterthongle" && right_empty!="monstersnake" && right_empty!="monsterblob" && right_empty!="alien" && right_empty!="world" && right_empty!="person" && right_empty!="locked_door_white" && right_empty!="locked_door_black" ) {
     rightTemp=1;
     
    }
    else{
      rightTemp=0;
    }

    // визначення імені класу елемента "знизу" від юніту
    down_empty = document.elementFromPoint((unit.right-25),(unit.bottom+5)).className;
    if (!down_empty.includes("wall") && down_empty!="monsterthongle" && down_empty!="monstersnake" && down_empty!="monsterblob" && down_empty!="alien" && down_empty!="world" && down_empty!="person" && down_empty!="locked_door_white" && down_empty!="locked_door_black" ) {
     downTemp=1;
     
    }
    else{
      downTemp=0;
    }

    // визначення імені класу елемента "згори" від юніту
    up_empty = document.elementFromPoint((unit.right-25),(unit.bottom-55)).className;
    if (!up_empty.includes("wall") && up_empty!="monsterthongle" && up_empty!="monstersnake" && up_empty!="monsterblob" && up_empty!="alien" && up_empty!="world" && up_empty!="person" && up_empty!="locked_door_white" && up_empty!="locked_door_black" ) {
     upTemp=1;
     
    }
    else{
      upTemp=0;
    }


    // підбір предметів випавших із монстрів
    left_thing_empty = document.elementFromPoint((unit.right-55),(unit.bottom-5)).className;
    right_thing_empty  = document.elementFromPoint((unit.right+5),(unit.bottom-5)).className;
    down_thing_empty = document.elementFromPoint((unit.right-25),(unit.bottom+5)).className;
    up_thing_empty = document.elementFromPoint((unit.right-25),(unit.bottom-55)).className;

    left_thing = document.elementFromPoint((unit.right-55),(unit.bottom-5));
    right_thing  = document.elementFromPoint((unit.right+5),(unit.bottom-5));
    down_thing = document.elementFromPoint((unit.right-25),(unit.bottom+5));
    up_thing = document.elementFromPoint((unit.right-25),(unit.bottom-55));



    switch(left_thing_empty) {
       case 'plasmagunCellsThing':  
       
       plCells+=5;
       iconPlasmagun.innerHTML=plCells;
       left_thing.remove();
       pickUpPlasmaCells.play();

        break;

      case 'pistolCellsThing':  
       
       cells+=5;
       iconPistol.innerHTML=cells;
       left_thing.remove();
       pickUpPistol.play();

        break;

      case 'shootgunCellsThing':  
       
       sCells+=5;
       iconShootgun.innerHTML=sCells;
       left_thing.remove();
       pickUpPistol.play();

        break;

      case 'medicKitThing' :
        
        life+=50;
        panel.innerHTML="<div class='healthIcon'></div> " + life;
        left_thing.remove();
        console.log(life);
        medikKit.play();

        break;

      case 'armor' :
        
        life+=70;
        panel.innerHTML="<div class='healthIcon'></div> " + life;
        left_thing.remove();
        console.log('armor collected');
        medikKit.play();

        break;

      case 'trap1' :
        electricShockDamage();

        break;

       case 'lift' :
        liftingDown();

        break;
    }

    switch(right_thing_empty) {
      case 'plasmagunCellsThing':  
       
       plCells+=5;
       iconPlasmagun.innerHTML=plCells;
       right_thing.remove();
       pickUpPlasmaCells.play();

        break;

      case 'pistolCellsThing':  
       
       cells+=5;
       iconPistol.innerHTML=cells;
       right_thing.remove();
       pickUpPistol.play();

        break;

      case 'shootgunCellsThing':  
       
       sCells+=5;
       iconShootgun.innerHTML=sCells;
       right_thing.remove();
       pickUpPistol.play();

        break;

      case 'medicKitThing' :
        
        life+=50;
        panel.innerHTML="<div class='healthIcon'></div> " + life;
        right_thing.remove();
        console.log("You have a medic-kit, life: " +  life);
        medikKit.play();

        break;

      case 'armor' :
        
        life+=70;
        panel.innerHTML="<div class='healthIcon'></div> " + life;
        right_thing.remove();
        console.log('armor collected, life: ' +  life);
        medikKit.play();

        break;

        case 'trap1' :
        electricShockDamage();

        break;

      case 'lift' :
        liftingDown();

        break;
    }

    switch(down_thing_empty) {
      case 'plasmagunCellsThing':  
       
       plCells+=5;
       iconPlasmagun.innerHTML=plCells;
       down_thing.remove();
       pickUpPlasmaCells.play();

        break;

      case 'pistolCellsThing':  
       
       cells+=5;
       iconPistol.innerHTML=cells;
       down_thing.remove();
       pickUpPistol.play();

        break;

      case 'shootgunCellsThing':  
       
       sCells+=5;
       iconShootgun.innerHTML=sCells;
       down_thing.remove();
       pickUpPistol.play();

        break;

      case 'medicKitThing' :
        
        life+=50;
        panel.innerHTML="<div class='healthIcon'></div> " + life;
        down_thing.remove();
        console.log(life);
        medikKit.play();

        break;

      case 'armor' :
        
        life+=70;
        panel.innerHTML="<div class='healthIcon'></div> " + life;
        down_thing.remove();
        console.log('armor collected');
        medikKit.play();

        break;

        case 'trap1' :
        electricShockDamage();

        break;

      case 'lift' :
        liftingDown();

        break;
    }

    switch(up_thing_empty) {
      case 'plasmagunCellsThing':  
       
       plCells+=5;
       iconPlasmagun.innerHTML=plCells;
       up_thing.remove();
       pickUpPlasmaCells.play();

        break;

      case 'pistolCellsThing':  
       
       cells+=5;
       iconPistol.innerHTML=cells;
       up_thing.remove();
       pickUpPistol.play();

        break;

      case 'shootgunCellsThing':  
       
       sCells+=5;
       iconShootgun.innerHTML=sCells;
       up_thing.remove();
       pickUpPistol.play();

        break;

      case 'medicKitThing' :
        
        life+=50;
        panel.innerHTML="<div class='healthIcon'></div> " + life;
        up_thing.remove();
        console.log(life);
        medikKit.play();

        break;

      case 'armor' :
        
        life+=70;
        panel.innerHTML="<div class='healthIcon'></div> " + life;
        up_thing.remove();
        console.log('armor collected');
        medikKit.play();

        break;

        case 'trap1' :
        electricShockDamage();

        break;

      case 'lift' :
        liftingDown();

        break;
    }
}


function electricShockDamage(){
  electricShock.play();
  life=0;
  panel.innerHTML="<div class='healthIcon'></div> " + life;
  console.log('electric shock!!!');
  flagGamePause=1;
  game.style.filter = 'brightness(80.5)';
  setTimeout(()=>{
    game.style.filter = 'brightness(1)';
  }, 300);
  setTimeout(()=>{
    game.style.filter = 'brightness(80.5)';
  }, 500);
  setTimeout(()=>{
    game.style.filter = 'brightness(1)';
  }, 800);
  setTimeout(()=>{
    game.style.filter = 'brightness(80.5)';
  }, 900);
  setTimeout(()=>{
    game.style.filter = 'brightness(1)';
  }, 1200);
    setTimeout(()=>{
    game.style.filter = 'brightness(80.5)';
  }, 1600);
  setTimeout(()=>{
    game.style.filter = 'brightness(1)';
  }, 1900);

  setTimeout(showMassege, 3000);
  window.navigator.vibrate([100, 200, 100, 500, 100, 200, 100, 500, 100, 200, 100, 500, 100, 200, 100]);
  setTimeout(exit, 10000);
}


function liftingDown(){
  flagGamePause=1;
  figure.style.bottom="1025px";
  var watch = setInterval(setCurrentView, 50);
  liftMove.pause();
  liftMove.currentTime = 0;
  liftMove.play();
  setTimeout(()=>{
    lift.style.bottom = "275px";
    figure.style.transition = "all 15s";
    figure.style.bottom = "275px";
    bottom=300;
  },1000);
  setTimeout(()=>{
    clearInterval(watch);
    liftMove.pause();
    liftMove.currentTime = 0;
    liftMove.play();
    lift.style.bottom = "1075px";
    figure.style.transition = "";
  },15000);
  setTimeout(()=>{
      flagGamePause=0;
  },17000);
}


// вихід з рівня
function exit(){


      localStorage.setItem('life', localStorage.getItem('temp-life'));
      localStorage.setItem('flagPistol', localStorage.getItem('temp-flagPistol'));
      localStorage.setItem('flagShootgun', localStorage.getItem('temp-flagShootgun'));
      localStorage.setItem('flagPlasmagun', localStorage.getItem('temp-flagPlasmagun')); 
      localStorage.setItem('flagFiregun', localStorage.getItem('temp-flagFiregun'));
      localStorage.setItem('frCells', localStorage.getItem('temp-frCells'));
      localStorage.setItem('cells', localStorage.getItem('temp-cells'));
      localStorage.setItem('sCells', localStorage.getItem('temp-sCells'));
      localStorage.setItem('plCells', localStorage.getItem('temp-plCells'));
      localStorage.setItem('flagSelect', localStorage.getItem('temp-flagSelect'));
  //     localStorage.setItem('bagpackItemsArrEng', ["<div class='flashLightIcon'>flashlight</div>",]);         
  //     localStorage.setItem('bagpackItemsArrUa', ["<div class='flashLightIcon'>ліхтарик</div>",]);
      setTimeout(()=>{
        location.reload();
      },1000);  
    
}

// вихід з рівня та збереження статусу життя гравця
function enterToElevator(){
  localStorage.setItem('life', life);
  localStorage.setItem('flagPistol', flagPistol);
  localStorage.setItem('flagShootgun', flagShootgun);
  localStorage.setItem('flagPlasmagun', flagPlasmagun);
  localStorage.setItem('flagFiregun', flagFiregun);
  localStorage.setItem('frCells', frCells);
  localStorage.setItem('plCells', plCells);
  localStorage.setItem('cells', cells);
  localStorage.setItem('sCells', sCells);
  localStorage.setItem('flagSelect', flagSelect);
  console.log(cells, sCells);
  document.location.href = "room" + tempLocation + ".html";   
}



// відображення повідомлення при загибелі гравця
function showMassege(){
  message=document.getElementById('message');
  message.style.display="block";
  message.innerHTML="<br><br><br><br><br><h1>YOU DIED!</h1><img class='dead-player' src='IMG/player_dead.gif'>";
  var flagGamePause = 1;
}


// приховування повідомлення
function hideMassege(){  
  message=document.getElementById('message');
  message.style.display="none";
}


// інформація у телефоні
function stat(item){ 
  tab = document.createElement('div');
  tab.className = "tab";        
  tab.innerHTML= item + '<br>' ;
  tab.style.left=window.innerWidth/2-90+"px";
  inTeleportation=1;
  wievport.append(tab);
  tab.onclick = function(){flagInHit=1};
  picSound.play();
  flagLeft=0;
  leftInMove=0;
  clearInterval(timerLeft);
  flagRight=0;
  rightInMove=0;
  clearInterval(timerRight);
  flagDown=0;
  downInMove=0;
  clearInterval(timerDown);
  flagUp=0;
  upInMove=0;
  clearInterval(timerUp);
  changePlayerImgThenButtonUp();
}

// вимкнення/увімкнення CSS-стилю "blink"
function toggleBlink(){
  var phoneIcon = document.getElementById('iconPhone');
  phoneIcon.classList.remove('blink');
}




// виведення рівня життя в інформаційну панель
function showLife(){
  panel.innerHTML="<div class='healthIcon'></div> " + life;
  
}



// наведення фокусу на гравця під час телепортації
function setCurrentView(){
  player.scrollIntoView({block: "center", inline: "center"});

}



// сенсорний інтерфейс (touch interface)
function clearLeftInterval(){
  clearInterval(timerLeft);
  flagLeft=0;
  leftInMove=0;
   if((upInMove==0) && (downInMove==0) && (rightInMove==0)){
    figure.style.backgroundImage='url(' + figureStayLeftImg + ')';
   }
  
}

function clearRightInterval(){
  clearInterval(timerRight);
  flagRight=0;
  rightInMove=0;
   if((upInMove==0) && (downInMove==0) && (leftInMove==0)){
    figure.style.backgroundImage='url(' + figureStayRightImg + ')';
   }
  
}

function clearUpInterval(){
  clearInterval(timerUp);
  flagUp=0;
  upInMove=0;
   if((leftInMove==0) && (downInMove==0) && (rightInMove==0)){
    figure.style.backgroundImage='url(' + figureStayLeftImg + ')';
   }
  
}

function clearDownInterval(){
  clearInterval(timerDown);
  flagDown=0;
  downInMove=0;
   if((upInMove==0) && (leftInMove==0) && (rightInMove==0)){
    figure.style.backgroundImage='url(' + figureStayRightImg + ')';
   }
  
}


function createTab(textEng, func, textUa) {
   flagGamePause = 1;
   tab = document.createElement('div');
   tab.className = "tab";
   tab.style.left="0";
   tab.style.bottom="0";
   inTeleportation=1;
   if(language==0){
    tab.innerHTML= textEng + "<br><button onclick='closeTab(this)'>ok</button>";
  }else{

      tab.innerHTML= textUa + "<br><button onclick='closeTab(this)'>ok</button>";
   
  } 
   wievport.append(tab);
   try{
      picSound.pause();
      picSound.currentTime = 0;
    }catch{
      
    }
   picSound.play();
   // console.log(text);

   flagLeft=0;
   leftInMove=0;
   clearInterval(timerLeft);
   flagRight=0;
   rightInMove=0;
   clearInterval(timerRight);
   flagDown=0;
   downInMove=0;
   clearInterval(timerDown);
   flagUp=0;
   upInMove=0;
   clearInterval(timerUp);
   flagStayLeft=1;
   changePlayerImgThenButtonUp();
   try{
    func();
   }catch{
    console.log('no func to run');
   }
   
}

function closeTab(element) {
  flagGamePause = 0;
  tab.innerHTML="...";
  tab.style.width="10px";
  inTeleportation=0;
  try{
    element.parentElement.remove();
  }catch{

  }
  try{
    wievport.removeChild(tab);
    tab.style.display="none";
  }catch{

  }
  try{
      picSound.pause();
      picSound.currentTime = 0;
    }catch{
      
    }
   picSound.play(); 
     
}

function createDiaryTab(diaryTextEng, diaryTextUa) {
   flagGamePause = 1;
   tab = document.createElement('div');
   tab.className = "tab";
   tab.style.left="calc((100vw / 2) - 115px)";
   tab.style.bottom="45%";
   inTeleportation=1;
   if(language==0){
    tab.innerHTML= diaryTextEng + "<br><button onclick='closeTab(this)'>ok</button>";
  }else{
    tab.innerHTML= diaryTextUa + "<br><button onclick='closeTab(this)'>ok</button>"; 
  } 
   wievport.append(tab);
   try{
      picSound.pause();
      picSound.currentTime = 0;
    }catch{
      
    }
   picSound.play();
   flagLeft=0;
   leftInMove=0;
   clearInterval(timerLeft);
   flagRight=0;
   rightInMove=0;
   clearInterval(timerRight);
   flagDown=0;
   downInMove=0;
   clearInterval(timerDown);
   flagUp=0;
   upInMove=0;
   clearInterval(timerUp);
   flagStayLeft=1;
   changePlayerImgThenButtonUp();
   
}

function createRadioTab(textEng, textUa) {
   flagGamePause = 1;
   tab = document.createElement('div');
   tab.className = "radioTab";
   tab.style.left="0";
   tab.style.bottom="0";
   inTeleportation=1;
   if(language==0){
    tab.innerHTML="<div class='radio-image'></div>" + textEng + "<br><button onclick='closeRadioTab(this)'>ok</button>";
  }else{

      tab.innerHTML="<div class='radio-image'></div>" + textUa + "<br><button onclick='closeRadioTab(this)'>ok</button>";
   
  } 
   wievport.append(tab);
   try{
      radioSound.pause();
      radioSound.currentTime = 0;
    }catch{
      
    }
   radioSound.play();
   flagLeft=0;
   leftInMove=0;
   clearInterval(timerLeft);
   flagRight=0;
   rightInMove=0;
   clearInterval(timerRight);
   flagDown=0;
   downInMove=0;
   clearInterval(timerDown);
   flagUp=0;
   upInMove=0;
   clearInterval(timerUp);
   flagStayLeft=1;
   changePlayerImgThenButtonUp();
   
}

function closeRadioTab(element) {
  flagGamePause = 0;
  tab.innerHTML="...";
  tab.style.width="10px";
  inTeleportation=0;
  try{
    element.parentElement.remove();
  }catch{

  }
  try{
    wievport.removeChild(tab);
    tab.style.display="none";
  }catch{

  }
  try{
      radioSoundOff.pause();
      radioSoundOff.currentTime = 0;
    }catch{
      
    }
   radioSoundOff.play(); 
     
}

function reloadLocation(){
  location.reload();
}

function whiteDoorDialog() {
  let tempDoorStyleBottom = (this.offsetTop / 50);
  let tempDoorStyleLeft = (this.offsetLeft / 50);

  if(whiteDoorIsOpened == 0){
    createTab("You need white key-card, to open this door", null, "Тобі потрібна біла ключ-карта, щоб відчинити ці двері");
  }else{    
    if(this.className == "ud"){
          this.className = "ws wall";
          map[tempDoorStyleBottom][tempDoorStyleLeft] = "ws wall";
           try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
          this.style.backgroundPositionX = "left";
        }else{
          this.style.backgroundPositionX = "-50px";
          try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
          setTimeout(()=>{
            this.className = "ud";
          map[tempDoorStyleBottom][tempDoorStyleLeft] = "ud";
           
          },300);
          
        }
  }
}

function blackDoorDialog() {
  let tempDoorStyleBottom = (this.offsetTop / 50);
  let tempDoorStyleLeft = (this.offsetLeft / 50);

  if(blackDoorIsOpened == 0){
    createTab("You need black key-card, to open this door", null, "Тобі потрібна чорна ключ-карта, щоб відчинити ці двері");
  }else{    
    if(this.className == "ud"){
          this.className = "ws wall";
          map[tempDoorStyleBottom][tempDoorStyleLeft] = "ws wall";
           try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
          this.style.backgroundPositionX = "left";
        }else{
          this.style.backgroundPositionX = "-50px";
          try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
          setTimeout(()=>{
            this.className = "ud";
          map[tempDoorStyleBottom][tempDoorStyleLeft] = "ud";
           
          },300);
          
        }
  }
}

function redDoorDialog() {
  if(error == 1) {
    createTab("You need to find control panel and disable it, to open this door", null, "Тобі потрібно знайти контрольну панель та активувати її, щоб відчинити ці двері"); 
  }
}

function setRedDoorText(){
  for(i=1;i<=tempArr.length;i++){
      try{
      tempArr[i-1].addEventListener("mousedown", redDoorDialog);
      
  }
  catch{
          console.log(error);
          
      }
      
  }
};

function createSomeThing(thing, thingClass, thingLeft, thingBottom, thingId){
    thing = document.createElement('div');
    thing.className = thingClass;
    thing.style.left=thingLeft + "px";
    thing.style.bottom=thingBottom + "px"; 
    game.append(thing);
    thing.id = thingId;
}


// отримання координат курсору  (coordinates on viewport)

function getPosition(e){
  var x = y = 0;
 
  if (!e) {
    var e = window.event;
  }
 
  if (e.pageX || e.pageY){
    x = e.pageX;
    y = e.pageY;
  } else if (e.clientX || e.clientY){
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {x: x, y: y}

}



// обертання світла ліхтарика навколо гравця за допомогою миші
let gameArea = document.getElementsByTagName("body")[0];
gameArea.onmousemove = function(e){
  var p = figure.getBoundingClientRect();
  if(flashMouseMove == 1 && inBulletFly==0) {
     var coord = getPosition(e);
     if(p.left>coord.x){
      // flash light turn to left
      flagLookAt = "left";
      playerBackRight.style.transform = "rotate(180deg)";
      if(leftInMove==0 && rightInMove==0 && upInMove==0 && downInMove==0){
        if(!inTeleportation){
          figure.style.backgroundImage= "url(" + figure_l_lightImg + ")"; 
        }
        
      }
      
      
     }else{
      // flash light turn to right
      flagLookAt = "right";
      playerBackRight.style.transform = "rotate(0deg)";
      if(leftInMove==0 && rightInMove==0 && upInMove==0 && downInMove==0){
        if(!inTeleportation){
          figure.style.backgroundImage= "url(" + figure_r_lightImg + ")";
        }
        
      }
      
     }
     if((p.bottom - 100)>coord.y){
      // flash light turn to up
      flagLookAt = "up";
      playerBackRight.style.transform = "rotate(270deg)";
       if(leftInMove==0 && rightInMove==0 && upInMove==0 && downInMove==0){
        if(!inTeleportation){
          figure.style.backgroundImage= "url(" + figure_u_lightImg + ")";
        }
        
      }
      
     }
     if((p.bottom + 100)<coord.y){
      // flash light turn to down
      flagLookAt = "down";
      playerBackRight.style.transform = "rotate(90deg)";
       if(leftInMove==0 && rightInMove==0 && upInMove==0 && downInMove==0){
        if(!inTeleportation){
          figure.style.backgroundImage= "url(" + figure_d_lightImg + ")";
        }
        
      }
      
     }

  }

};


// створити броню
function CreateNewArmor(left, bottom) {
         var item = document.createElement('div');
         item.className = "armor";
         item.points=50;
         item.style.left=left+'px';
         item.style.bottom=bottom+'px';
         game.append(item);
}


function searchAllOpenDoors(){
  let allOpenDoors = document.getElementsByClassName("ud");
  for(i=0;i<allOpenDoors.length;i++){
    try{
      allOpenDoors[i].addEventListener("mousedown", function(){
        let tempDoorStyleBottom = (this.offsetTop / 50);
        let tempDoorStyleLeft = (this.offsetLeft / 50);

        if(this.className == "ud"){
          this.className = "ws wall";
          // console.log(tempDoorStyleBottom, tempDoorStyleLeft);
          // console.log(map[tempDoorStyleBottom][tempDoorStyleLeft]);
          map[tempDoorStyleBottom][tempDoorStyleLeft] = "ws wall";
           try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
        }else{
          this.className = "ud";
          // console.log(tempDoorStyleBottom, tempDoorStyleLeft);
          // console.log(map[tempDoorStyleBottom][tempDoorStyleLeft]);
          map[tempDoorStyleBottom][tempDoorStyleLeft] = "ud";
           try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
        }
      }, false);
    }catch{
      console.log("searchAllOpenDoors - function dont work properly!");
    } 
  }
  // console.log(allOpenDoors);
}

function searchAllClosedDoors(){
  let allClosedDoors = document.getElementsByClassName("ws wall");
  for(i=0;i<allClosedDoors.length;i++){
    try{
      allClosedDoors[i].addEventListener("mousedown", addActionToDoors, false);
    }catch{
      console.log("searchAllOpenDoors - function dosnt work properly!");
    } 
  }
}

function searchAllClosedDoorsAndDisableIt(){
  let allClosedDoorsToDisable = document.getElementsByClassName("ws wall");
  for(i=0;i<allClosedDoorsToDisable.length;i++){
    try{
      allClosedDoorsToDisable[i].removeEventListener("mousedown", addActionToDoors, false);  
    }catch{
      console.log("searchAllOpenDoorsAndDisableIt - function dosnt work properly!");
    } 
  }
}

function addActionToDoors(){
        let tempDoorStyleBottom = (this.offsetTop / 50);
        let tempDoorStyleLeft = (this.offsetLeft / 50);
        if(this.className == "ud"){                
          this.className = "ws wall";
          map[tempDoorStyleBottom][tempDoorStyleLeft] = "ws wall";
           try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
      this.style.backgroundPositionX = "left";
        }else{
          this.style.backgroundPositionX = "-50px";
          try{
                doorOpenCloseSound.pause();
                doorOpenCloseSound.currentTime = 0;
                }catch{
                  console.log("doorOpenCloseSound - dont played!");
                }
          doorOpenCloseSound.play();
          setTimeout(()=>{
            this.className = "ud";
          map[tempDoorStyleBottom][tempDoorStyleLeft] = "ud";
           
          },300);
          
        }
}

var wallPenals;
var brickPenals;
var wallServLeft;
var wallServBottom;
var brickServLeft;
var brickServBottom;

function openWallServ(){
  this.removeEventListener("mousedown", openWallServ, false);
  this.className = "wallserv-open wall";
  wallServLeft = this.offsetLeft;
  wallServBottom = 1450-this.offsetTop;
  let randomThing = Math.floor(Math.random() * (15 - 0)) + 0;
  let thingClassName = "";
  if(randomThing == 0){
    thingClassName = 'pistolCellsThing';
    }
    
   if(randomThing == 1){
    thingClassName = 'shootgunCellsThing';
    }
  
  if(randomThing == 2){
    thingClassName = 'medicKitThing';
    }

  if(randomThing == 3){
    thingClassName = 'plasmagunCellsThing';
    }

  if(randomThing == 4){
    thingClassName = 'armor';
    }
  createSomeThing(thingClassName, thingClassName, wallServLeft, wallServBottom);
  servDoor.play();
  // console.log(wallServLeft);
  // console.log(wallServBottom);
}

function openBrickServ(){
  this.removeEventListener("mousedown", openBrickServ, false);
  this.className = "brickserv-open wall";
  brickServLeft = this.offsetLeft;
  brickServBottom = 1450-this.offsetTop;
  let randomThing = Math.floor(Math.random() * (15 - 0)) + 0;
  let thingClassName = "";
  if(randomThing == 0){
    thingClassName = 'pistolCellsThing';
    }
    
   if(randomThing == 1){
    thingClassName = 'shootgunCellsThing';
    }
  
  if(randomThing == 2){
    thingClassName = 'medicKitThing';
    }

  if(randomThing == 3){
    thingClassName = 'plasmagunCellsThing';
    }

  if(randomThing == 4){
    thingClassName = 'armor';
    }
  createSomeThing(thingClassName, thingClassName, brickServLeft, brickServBottom);
  servDoor.play();
  // console.log(brickServLeft);
  // console.log(brickServBottom);
}

function addThingsOnPenals(){
  try{
    try{
         wallPenals = document.getElementsByClassName("wallserv wall");
      for(i=0; i<=wallPenals.length-1; i++){
        wallPenals[i].addEventListener("mousedown", openWallServ, false);
      }
    }catch{
      console.log("no more wallserv there...");
    }
    try{
         brickPenals = document.getElementsByClassName("brickserv wall");
      for(i=0; i<=brickPenals.length-1; i++){
        brickPenals[i].addEventListener("mousedown", openBrickServ, false);
      }
    }catch{
      console.log("no more brickserv there...");
    }



  }catch{
    console.log("no servers there...");
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener(
  "keypress",
  function (e) {
    if (e.keyCode === 13) {
      toggleFullScreen();
    }
  },
  false,
);









