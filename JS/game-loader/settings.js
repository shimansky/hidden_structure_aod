var flashMouseMove;

function setDefaultFlashlightControls(){
    flashMouseMove = +localStorage.getItem('flashMouseMove');
    let language = localStorage.getItem('lang');
    if(flashMouseMove == 1){
        if (language == 1){
            setFlashControls.innerText = "ліхтарик: миша";
        }else{
            setFlashControls.innerText = "flashlight: mouse";
        }
    }else{
         if (language == 1){
            setFlashControls.innerText = "ліхтарик: кнопки";
        }else{
            setFlashControls.innerText = "flashlight: buttons";
        }
    }
}


function setFlashlightControls(obj){
    flashMouseMove = +localStorage.getItem('flashMouseMove');
    let language = localStorage.getItem('lang');
    if(flashMouseMove == 1){
        localStorage.setItem('flashMouseMove', 0);
        if (language == 1){
            obj.innerText = "ліхтарик: кнопки";
        }else{
            obj.innerText = "flashlight: buttons";
        }
    }else{
        localStorage.setItem('flashMouseMove', 1);
         if (language == 1){
            obj.innerText = "ліхтарик: миша";
        }else{
            obj.innerText = "flashlight: mouse";
        }
    }
}

