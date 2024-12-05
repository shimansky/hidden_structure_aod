localStorage.setItem("life", 1000);

// service access to localStorage

localStorage.setItem('frankAlive', 1);

if(localStorage.getItem('tempMap')==null){
    localStorage.setItem('tempMap', 0);
}

if(localStorage.getItem('lock0')==null){
    localStorage.setItem('lock0', 0);
}
if(localStorage.getItem('lock1')==null){
    localStorage.setItem('lock1', 1);
}
if(localStorage.getItem('lock2')==null){
    localStorage.setItem('lock2', 1);
}
if(localStorage.getItem('lock3')==null){
    localStorage.setItem('lock3', 1);
}
if(localStorage.getItem('lock4')==null){
    localStorage.setItem('lock4', 1);
}
if(localStorage.getItem('lock5')==null){
    localStorage.setItem('lock5', 1);
}
if(localStorage.getItem('lock6')==null){
    localStorage.setItem('lock6', 1);
}
if(localStorage.getItem('lock7')==null){
    localStorage.setItem('lock7', 1);
}
if(localStorage.getItem('lock8')==null){
    localStorage.setItem('lock8', 1);
}
if(localStorage.getItem('lock9')==null){
    localStorage.setItem('lock9', 1);
}
if(localStorage.getItem('lock10')==null){
    localStorage.setItem('lock10', 1);
}

localStorage.setItem('level1', 0);
localStorage.setItem('level2', 0);
localStorage.setItem('level3', 0);
localStorage.setItem('level4', 0);
localStorage.setItem('level5', 0);
localStorage.setItem('level6', 0);
localStorage.setItem('level7', 0);
localStorage.setItem('level8', 0);
localStorage.setItem('level9', 0);
localStorage.setItem('level10', 0);
localStorage.setItem('level11', 0);
localStorage.setItem('level12', 0);
localStorage.setItem('level13', 0);
localStorage.setItem('level14', 0);
localStorage.setItem('level15', 0);
localStorage.setItem('level16', 0);
localStorage.setItem('level17', 0);
localStorage.setItem('level18', 0);
localStorage.setItem('level19', 0);
localStorage.setItem('level20', 0);
localStorage.setItem('level21', 0);
localStorage.setItem('flagPistol', 0);
localStorage.setItem('flagShootgun', 0);
localStorage.setItem('flagPlasmagun', 0);
localStorage.setItem('flagFiregun', 0);
localStorage.setItem('lang', 0);
localStorage.setItem('cells', 0);
localStorage.setItem('sCells', 0);
localStorage.setItem('plCells', 0);
localStorage.setItem('frCells', 0);
if(localStorage.getItem('scafander')==null){
    localStorage.setItem('scafander', 0);
}
if(localStorage.getItem('scafanderFlag')==null){
    localStorage.setItem('scafanderFlag', 0);
}
if(localStorage.getItem('phoneFlag')==null){
    localStorage.setItem('phoneFlag', 0);
}
if(localStorage.getItem('serverPass')==null){
    localStorage.setItem('serverPass', 0);
}
if(localStorage.getItem('joyFlag')==null){
    localStorage.setItem('joyFlag', 1);
}
if(localStorage.getItem('sound-flag')==null){
    localStorage.setItem('sound-flag',1);
}
if(localStorage.getItem('swapFlag')==null){
    localStorage.setItem('swapFlag', "buttons");
}
if(localStorage.getItem('flashMouseMove')==null){
    localStorage.setItem('flashMouseMove', 0);
}

try{
    if(localStorage.getItem('lang')==0){
        if(localStorage.getItem('bagpackItemsArrEng')==null){
        localStorage.setItem('bagpackItemsArrEng', ["<div class='flashLightIcon'>flashlight</div>",]);
        }
    }
    if(localStorage.getItem('lang')==1){
        if(localStorage.getItem('bagpackItemsArrUa')==null){
        localStorage.setItem('bagpackItemsArrUa', ["<div class='flashLightIcon'>ліхтарик</div>",]);
        }
    }

}catch{
    if(localStorage.getItem('bagpackItemsArrEng')==null){
        localStorage.setItem('bagpackItemsArrEng', ["<div class='flashLightIcon'>flashlight</div>",]);
        }
}




