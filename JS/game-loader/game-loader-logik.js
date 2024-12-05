let langBlock = document.getElementsByClassName('lang-block')[0];
let controlsBlock = document.getElementsByClassName('controls-block')[0];
let difficultBlock = document.getElementsByClassName('difficult-block')[0];
let difficultSurviveBlock = document.getElementsByClassName('difficult-block-survive')[0];
let difficultMutationBlock = document.getElementsByClassName('difficult-block-mutation')[0];
let aboutBlock = document.getElementsByClassName('about-block')[0];
let settingsBlock = document.getElementsByClassName('settings-block')[0];
let boardBlock = document.getElementById('board');




function hideBoardBlock(){
    boardBlock.style.display = 'none';
    
}

function showBoardBlock(){
    boardBlock.style.display = 'flex';
    
}

function showHideLangBlock(){
    langBlock.classList.toggle('visible-in-loader');
}

function showHideControlsBlock(){
    controlsBlock.classList.toggle('visible-in-loader');
}

function showHideDifficultBlock(){
    difficultBlock.classList.toggle('visible-in-loader');
}

function showHideDifficultSurviveBlock(){
    difficultSurviveBlock.classList.toggle('visible-in-loader');
}

function showHideDifficultMutationBlock(){
    difficultMutationBlock.classList.toggle('visible-in-loader');
}

function showHideAboutBlock(){
    aboutBlock.classList.toggle('visible-in-loader');
}

function showHideSettingsBlock(){
    settingsBlock.classList.toggle('visible-in-loader');
}

function toggleMenuMusic(){
    let menuSoundToggler = document.getElementsByClassName('sound-icon')[0];
    let mFlag = localStorage.getItem('sound-flag');
    let language = localStorage.getItem('lang');
    if(mFlag == 1){
        if(language == 0){
            menuSoundToggler.innerHTML='music: 🔕';            
        }else{
            menuSoundToggler.innerHTML='музика: 🔕';
        }
        localStorage.setItem('sound-flag',0);
        ambientMenu.pause();
        ambientMenu.currentTime = 0;
    }else{
        if(language == 0){
            menuSoundToggler.innerHTML='music: 🔔';            
        }else{
            menuSoundToggler.innerHTML='музика: 🔔';
        }
        localStorage.setItem('sound-flag',1);
        ambientMenu.play();   
    }
    
}

function setDefaultToggleMenuMusic(){
    let menuSoundToggler = document.getElementsByClassName('sound-icon')[0];
    let mFlag = localStorage.getItem('sound-flag');
    let language = localStorage.getItem('lang');
    if(mFlag == 0){
        if(language == 0){
            menuSoundToggler.innerHTML='music: 🔕';            
        }else{
            menuSoundToggler.innerHTML='музика: 🔕';
        }        
    }else{
        if(language == 0){
            menuSoundToggler.innerHTML='music: 🔔';            
        }else{
            menuSoundToggler.innerHTML='музика: 🔔';
        }   
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


