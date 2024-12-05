
var joyRoller;
var joyWrapper;
var joyArea;
var vector;

var JoyRoller = (function(wrapper)
{
    var joyRollerColor = "#e8012c";
    var onCenter = true;
    joyWrapper = document.getElementById(wrapper);
    joyWrapper.style.touchAction = "none";
    var width = joyWrapper.clientWidth; 
    var height = joyWrapper.clientHeight;
    joyArea = document.createElement("div");
    joyArea.id = "joyarea"; 
    joyArea.style.width = width + 'px';
    joyArea.style.height = height + 'px';
    joyArea.style.border = '2px solid #4f4f4f';
    joyArea.style.borderRadius = '50%';
    joyArea.style.boxSizing = 'border-box';
    joyArea.width = 130;
    joyArea.height = 130;
    joyArea.style.position = 'relative';
    var isJoyPressed = 0;
    var internalRadius = (joyArea.width-((joyArea.width/2)+10))/2;
    var maxMoveRoller = internalRadius + 5;
    var externalRadius = internalRadius + 30;
    var centerX = joyArea.width / 2;
    var centerY = joyArea.height / 2;
    var directionHorizontalLimitPos = joyArea.width / 10;
    var directionHorizontalLimitNeg = directionHorizontalLimitPos * -1;
    var directionVerticalLimitPos = joyArea.height / 5;
    var directionVerticalLimitNeg = directionVerticalLimitPos * -1;
    var movedX=centerX;
    var movedY=centerY;

    paintJoyRoller();

    joyWrapper.appendChild(joyArea);

  
    if("ontouchstart" in document.documentElement)
    {
        joyArea.addEventListener("touchstart", onTouchStart, false);
        joyArea.addEventListener("touchmove", onTouchMove, false);
        joyArea.addEventListener("touchend", onTouchEnd, false);
    }
    else
    {
        joyArea.addEventListener("mousedown", onMouseDown, false);
        joyArea.addEventListener("mousemove", onMouseMove, false);
        joyArea.addEventListener("mouseup", onMouseUp, false);
    }
   
    // paintJoyRoller();
    
    function paintJoyRoller()
    {
        joyRoller = document.createElement("div");
        joyRoller.id = "joyRoller"; 
        joyRoller.style.position = 'absolute';
        joyRoller.style.left = (centerX - 25) + 'px';
        joyRoller.style.top = (centerY - 25) + 'px';
        joyRoller.style.width = '50px';
        joyRoller.style.height = '50px';
        joyRoller.style.borderRadius = '50px';
        joyRoller.style.backgroundColor = '#71d742';
        joyRoller.style.touchAction = "none";
        joyWrapper.appendChild(joyRoller);
        
    }

    function rePaintJoyRoller()
    {
        if(movedX<internalRadius) { movedX=maxMoveRoller; }
        if((movedX+internalRadius) > joyArea.width) { movedX = joyArea.width-(maxMoveRoller); }
        if(movedY<internalRadius) { movedY=maxMoveRoller; }
        if((movedY+internalRadius) > joyArea.height) { movedY = joyArea.height-(maxMoveRoller); }
        joyRoller.style.left = (movedX - 25) + 'px';
        joyRoller.style.top = (movedY - 25) + 'px';
        
    }

   
    function onTouchStart(event) 
    {
        isJoyPressed = 1;
    }

    function onTouchMove(event)
    {
        if(isJoyPressed === 1 && event.targetTouches[0].target === joyArea)
        {
            movedX = event.targetTouches[0].pageX;
            movedY = event.targetTouches[0].pageY;
            // Manage offset
            if(joyArea.offsetParent.tagName.toUpperCase() === "BODY")
            {
                movedX -= joyArea.offsetLeft;
                movedY -= joyArea.offsetTop;
            }
            else
            {
                movedX -= joyArea.offsetParent.offsetLeft;
                movedY -= joyArea.offsetParent.offsetTop;
            }
            
            rePaintJoyRoller();
            getCardinalDirection();
            
        }
    } 

    function onTouchEnd(event) 
    {
        isJoyPressed = 0;

        if(onCenter)
        {
            movedX = centerX;
            movedY = centerY;
        }

        try{
              joyUpEnd();
              joyDownEnd();
              joyLeftEnd();
              joyRightEnd();
            }catch{
              
            }

            rePaintJoyRoller();


        getCardinalDirection();
        
    }

    
    function onMouseDown(event) 
    {
        isJoyPressed = 1;
    }

    
    function onMouseMove(event) 
    {
        if(isJoyPressed === 1)
        {
            movedX = event.pageX;
            movedY = event.pageY;

            if(joyArea.offsetParent.tagName.toUpperCase() === "BODY")
            {
                movedX -= joyArea.offsetLeft;
                movedY -= joyArea.offsetTop;
            }
            else
            {
                movedX -= joyArea.offsetParent.offsetLeft;
                movedY -= joyArea.offsetParent.offsetTop;
            }

            rePaintJoyRoller();
            getCardinalDirection();
            
        }
    }

    function onMouseUp(event) 
    {
        isJoyPressed = 0;

        if(onCenter)
        {
            movedX = centerX;
            movedY = centerY;
        }
        try{
              joyUpEnd();
              joyDownEnd();
              joyLeftEnd();
              joyRightEnd();
              // console.log(vector);
            }catch{
              
            }


            rePaintJoyRoller();
        getCardinalDirection();
        
    }

    function getCardinalDirection()
    {
        vector = "";
        let orizontal = movedX - centerX;
        let vertical = movedY - centerY;
        
        if(vertical >= directionVerticalLimitNeg && vertical <= directionVerticalLimitPos)
        {
            vector = "C";
           
             
        }


        if(vertical < directionVerticalLimitNeg)
        {
            vector = "N";
            joyUp();
            // console.log(vector);
        }
        if(vertical > directionVerticalLimitPos)
        {
            vector = "S";
            joyDown();
            // console.log(vector);
        }
        
        if(orizontal < directionHorizontalLimitNeg)
        {
            if(vector === "C")
            { 
                vector = "W";
                joyLeft();
                // console.log(vector);
            }
            else
            {
                vector += "W";
                // joyLeft();
                // console.log(vector);
            }
        }
        if(orizontal > directionHorizontalLimitPos)
        {
            if(vector === "C")
            { 
                vector = "E";
                joyRight();
                // console.log(vector);
            }
            else
            {
                vector += "E";
                // joyRight();
                // console.log(vector);
            }
        }
        
        return vector;
    }


});
