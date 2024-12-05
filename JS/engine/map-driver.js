// let tempMap = 0;
let tempMap = +localStorage.getItem('tempMap');

// завантаження нової мапи рівня
function loadMap(){
    script = document.createElement("script");
    script.src = 'MAPS/room'+ tempMap + '.js';
    document.getElementsByTagName('head')[0].appendChild(script);
    console.log( "map: " + tempMap + " - loaded");

}


// очищення мапи рівня
function clearMap(){
  try{
    document.getElementsByTagName('script')[0].remove();
    map = '';
    let trash = game.getElementsByTagName('*');
    for(i=1; i<trash.length; i++){
      trash[i].remove();
    }
    console.log( "map deleted");
  }catch{
    console.log( "error of map delete!");
  }
}

function insertPlayerInToMap(){
  game.innerHTML = '<div id="player" class="person" style="left: ' + left + 'px; bottom: ' + bottom + 'px;"><img src="IMG/noflashlight.png" class="playerBackRight" style="transform: rotate(0deg);"></div>';
  figure=document.getElementById('player');
  figure.style.left = left +'px';
  figure.style.bottom = bottom + 'px';
  setCurrentView();
}

function loadNextMap(){
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
  game.style.opacity = '0';
  flashlight = 0;
  deleteAllMonsters();
  deleteAllMonsters();
  deleteAllMonsters();
  deleteAllMonsters();
  deleteAllMonsters();
  clearMap();
  tempMap++;
  localStorage.setItem('tempMap', tempMap);
  setTimeout(insertPlayerInToMap, 1500);
  loadMap();
  setTimeout(render, 2000);
  setTimeout(()=>{

    let playerBackRight = document.getElementsByClassName("playerBackRight")[0];

     figure.moveLeft=function(distance){
   var p = figure.getBoundingClientRect();
   get_coordinates(p);
    if (leftTemp==1) {
    left=left+distance;
    this.style.left = left +'px';
    setCurrentView();
    steps.play();
    }
}

 figure.moveRight=function(distance){
   var p = figure.getBoundingClientRect();
   get_coordinates(p);
    if (rightTemp==1) {
    left=left+distance;
    this.style.left = left +'px';
    setCurrentView();
    steps.play();
    }
}

 figure.moveUp=function(distance){
   var p = figure.getBoundingClientRect();
   get_coordinates(p);
    if (upTemp==1) {
    bottom=bottom+distance;
    this.style.bottom = bottom +'px';
    setCurrentView();
    steps.play();
    }
}

 figure.moveDown=function(distance){
   var p = figure.getBoundingClientRect();
   get_coordinates(p);
    if (downTemp==1) {
    bottom=bottom+distance;
    this.style.bottom = bottom +'px';
    setCurrentView();
    steps.play();
    }
}

figure.hit=function(){
    if(flagPistol==1 && cells>0 && flagSelect==2){
          playerHitByPistol();
         }
    else   
        
    if(flagShootgun==1 && sCells>0 && flagSelect==3){
          playerHitByShootgun();
         }
    else   
        
    if(flagPlasmagun==1 && plCells>0 && flagSelect==4){
          playerHitByPlasmagun();
         }
    else

    if(flagFiregun==1 && frCells>0 && flagSelect==5){
          playerHitByFiregun();
         }   
    else{
          playerHitByArms();     
         }
      
}
    keywhiteFlag = 0;
    keyblackFlag = 0;
    medicKitFlag = 0;
    pistolFlag = 0;
    shootGunFlag = 0;    
    pistolCellsFlag = 0;
    shootgunCellsFlag = 0;
    plasmaGunFlag = 0;
    plasmagunCellsFlag = 0;
    fireGunFlag = 0;
    firegunCellsFlag = 0;
    whiteDoorIsOpened = 0;
    blackDoorIsOpened = 0;
    iconWhiteCard.style.display="none";
    iconBlackCard.style.display="none";

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
    searchAllOpenDoors();
    searchAllClosedDoors();
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


    
  }, 2500);

  error = 0;
  setTimeout(()=>{
    flagGamePause = 0;
    game.style.opacity = '1';
}, 3000);
  
}




// малювання мапи рівню з завантаженого файлу
function render () {
    for (var r = 0; r < row; r++) {
        for (var c = 0; c < col; c++) {
            var tile = map[ r ][ c ];
            let div = document.createElement('div');
            div.className = tile;
            div.innerHTML = ("&nbsp");
            game.append(div);
        }

    }
}

function deleteAllMonsters(){
  try{
    let aliens = document.getElementsByClassName('monsteralien');
    for (let entry of aliens) {
          entry.killSelf();
          
    }
  }catch{
    console.log('no monsteralien finded...');
  }

  try{
    let snakes = document.getElementsByClassName('monstersnake');
    for (let entry of snakes) {
          entry.killSelf();

    }
  }catch{
    console.log('no monstersnake finded...');
  }

  try{
    let hairbugs = document.getElementsByClassName('monsterhairbug');
    for (let entry of hairbugs) {
          entry.killSelf();

    }
  }catch{
    console.log('no monsterhairbug finded...');
  }

  try{
    let blobs = document.getElementsByClassName('monsterblob');
    for (let entry of blobs) {
          entry.killSelf();

    }
  }catch{
    console.log('no monsterblob finded...');
  }

  try{
    let thongles = document.getElementsByClassName('monsterthongle');
    for (let entry of thongles) {
          entry.killSelf();

    }
  }catch{
    console.log('no monsterthongle finded...');
  }

  console.log('all monsters deleted');
}

loadMap();
