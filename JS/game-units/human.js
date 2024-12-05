 class Human {

	constructor(name, className, phraseEng, phraseUa, life, x, y, func) {
		this.subject = name;
		this.name = document.createElement('div');
		game.appendChild(this.name);
		this.name.className = className;
		this.name.style.left = x + "px";
		this.name.style.bottom = y + "px";
		this.name.temp = x;
		this.name.vertical = y;
		this.name.toggle = 1;
		this.life = life;
		this.scores = this.life;
		this.damage = 0;
		this.name.left_empty = " ";
		this.name.right_empty = " ";
		this.name.down_empty = " ";
		this.name.up_empty = " ";
		this.name.speed = 25;
		this.randHumanInterval = 1000;
		this.speedHumanInterval = 5;
		this.direction = 0;
		this.leftTemp = 0;
		this.rightTemp = 0;
		this.upTemp = 0;
		this.downTemp = 0;
		this.objLeft;
		this.objRight;
		this.objDown;
		this.objUp;
		this.name.func = func;
		this.randInterval;
		this.phraseEng = phraseEng;
		this.phraseUa = phraseUa;



		this.move=()=>{

			let moveInterval = setTimeout( ()=> {
		let botAnimation = requestAnimationFrame(this.move);

	if(this.life<=0){
		clearInterval(this.randInterval);
		clearTimeout(moveInterval);
		cancelAnimationFrame(botAnimation);
		this.name.killSelf();
	}
 	try{

 		if(flagGamePause==0){

   var p = figure.getBoundingClientRect();
   var mm = this.name.getBoundingClientRect();

    
    		if(this.direction==0){	
		      this.moveRight();	       
		    }
		    else
		    if(this.direction==1){	    	
		      this.moveLeft();	       	      
		    }
		    else
		    if(this.direction==2){	    	
		      this.moveUp();	       	      
		    }
		    else
		    if(this.direction==3){	    	
		      this.moveDown();	       	      
		    }
		    else
		    	if(this.direction==4){
		    	
		    }
		    return this;   

  	}
	}
	catch(e){
		}

	


	}, 1000 / this.speedHumanInterval);
}



		this.name.killSelf = ()=> {
					this.insertDeadBotBody();
					
					setTimeout(()=>{
						this.name.remove();
					},2000);
					
					monsterDied.play();
					}

		this.name.get_coordinates =  (unit)=> {

				try{

			
// element class from left      
			this.objLeft = map[(1450 - this.name.style.bottom.slice(0, -2)) / 50][((+this.name.style.left.slice(0, -2) - 50)/ 50) ];
			// console.log(this.objLeft);
			 	
			if ( this.objLeft!=undefined && !this.objLeft.includes("wall") ) {
					this.leftTemp = 1;
				}else{
					this.leftTemp = 0;
				}
			try{
				this.name.left_empty = document.elementFromPoint((unit.right-55),(unit.bottom-5)).className;
					if(this.name.left_empty == "alien" || this.name.left_empty == "monsterthongle" || this.name.left_empty =="monstersnake" || this.name.left_empty =="monsterblob"){
	  			this.life-=10;
	  			this.insertDeadBotBody();
	  			
					}
				}catch{
					// console.log("in invisible distance!");
				}

		
		// element class from right
			this.objRight = map[(1450 - this.name.style.bottom.slice(0, -2)) / 50][((+this.name.style.left.slice(0, -2) + 50)/ 50) ];
			// console.log(this.objRight);
		 	
			if ( this.objRight!=undefined && !this.objRight.includes("wall") ) {
					this.rightTemp = 1;
				}else{
					this.rightTemp = 0;
				}
			try{
				this.name.right_empty  = document.elementFromPoint((unit.right+5),(unit.bottom-5)).className;
					if(this.name.right_empty == "alien" || this.name.right_empty == "monsterthongle" || this.name.right_empty =="monstersnake" || this.name.right_empty =="monsterblob"){
	  			this.life-=10;
	  			this.insertDeadBotBody();
	  			
					}
				}catch{
					// console.log("in invisible distance!");
				}
			
		

	
// element class from down
			this.objDown = map[(1500 - this.name.style.bottom.slice(0, -2)) / 50][((+this.name.style.left.slice(0, -2))/ 50) ];			
			// console.log(this.objDown);
					 	
			if ( this.objDown!=undefined && !this.objDown.includes("wall") ) {
				this.downTemp=1;
				}else{
					this.downTemp = 0;
				}
			try{
				this.name.down_empty = document.elementFromPoint((unit.right-25),(unit.bottom+5)).className;
				if(this.name.down_empty == "alien" || this.name.down_empty == "monsterthongle" || this.name.down_empty =="monstersnake" || this.name.down_empty =="monsterblob"){
	  			this.life-=10;
	  			this.insertDeadBotBody();
	  			
					}
				}catch{
					// console.log("in invisible distance!");
				}
			

// element class from up
			this.objUp = map[(1400 - this.name.style.bottom.slice(0, -2)) / 50][((+this.name.style.left.slice(0, -2))/ 50) ];			
			// console.log(this.objUp);
					 	
			if ( this.objUp!=undefined && !this.objUp.includes("wall") ) {
				this.upTemp=1;
				}else{
					this.upTemp = 0;
				}
			try{
				this.name.up_empty = document.elementFromPoint((unit.right-25),(unit.bottom-55)).className;
				if(this.name.up_empty == "alien" || this.name.up_empty == "monsterthongle" || this.name.up_empty =="monstersnake" || this.name.up_empty =="monsterblob"){
	  			this.life-=10;
	  			this.insertDeadBotBody();
	  			
					}
				}catch{
					// console.log("in invisible distance!");
				}
			
		

			}catch{
					console.log("error left: " + this.objLeft);
					console.log("error right: " + this.objRight);
					console.log("error up: " + this.objUp);
					console.log("error down: " + this.objDown);
			}
		}
}

	moveRight() {
		this.name.innerHTML="<div style='width:" + this.life + "%; height: 2px; background-color: green'> </div>";
		this.name.get_coordinates(this.name.getBoundingClientRect());
		this.name.style.backgroundImage='URL("IMG/' + this.name.className + '_r.gif")';
		if (this.rightTemp==1 && this.name.down_empty!= "world" && this.name.down_empty!= "interface" && this.name.up_empty!= "world" && this.name.up_empty!= "interface" && ((this.name.temp+this.name.speed)<=1400)) {
		this.name.temp=this.name.temp+this.name.speed;
		this.name.style.left = this.name.temp + 'px';
		this.name.temp=this.name.temp+this.name.speed;
		this.name.style.left = this.name.temp + 'px';
		}
	}

	moveLeft() {
		this.name.innerHTML="<div style='width:" + this.life + "%; height: 2px; background-color: green'> </div>";
		this.name.get_coordinates(this.name.getBoundingClientRect());
		this.name.style.backgroundImage='URL("IMG/' + this.name.className + '_l.gif")';
		if (this.leftTemp==1 && this.name.down_empty!= "world" && this.name.down_empty!= "interface" && this.name.up_empty!= "world" && this.name.up_empty!= "interface" &&((this.name.temp-this.name.speed)>=50)) {
		this.name.temp=this.name.temp-this.name.speed;
		this.name.style.left = this.name.temp + 'px';
		this.name.temp=this.name.temp-this.name.speed;
		this.name.style.left = this.name.temp + 'px';
		}
	}

	moveUp() {
		this.name.innerHTML="<div style='width:" + this.life + "%; height: 2px; background-color: green'> </div>";
		this.name.get_coordinates(this.name.getBoundingClientRect());
		this.name.style.backgroundImage='URL("IMG/' + this.name.className + '_r.gif")';
		if (this.upTemp==1 && ((this.name.vertical+this.name.speed)<=1400)) { 
		this.name.vertical=this.name.vertical+this.name.speed;
		this.name.style.bottom = this.name.vertical + 'px';
		this.name.vertical=this.name.vertical+this.name.speed;
		this.name.style.bottom = this.name.vertical + 'px';
		}
	}

	moveDown() {
		this.name.innerHTML="<div style='width:" + this.life + "%; height: 2px; background-color: green'> </div>";
		this.name.get_coordinates(this.name.getBoundingClientRect());
		this.name.style.backgroundImage='URL("IMG/' + this.name.className + '_l.gif")';
		if (this.downTemp==1 && ((this.name.vertical-this.name.speed)>=50)) {
		this.name.vertical=this.name.vertical-this.name.speed;
		this.name.style.bottom = this.name.vertical + 'px';
		this.name.vertical=this.name.vertical-this.name.speed;
		this.name.style.bottom = this.name.vertical + 'px';
		}
	}


	insertDeadBotBody() {
	  var deadMonster = document.createElement('div');
	  deadMonster.className = "deadMonster";
	  deadMonster.style.left=this.name.style.left;
	  deadMonster.style.bottom=this.name.style.bottom; 
	  game.append(deadMonster);
	  setTimeout(function(){deadMonster.remove();},10000);
	}


	startSelf() {
		this.name.style.color = "white";			
		this.name.addEventListener("mousedown", ()=>{
				createTab(this.phraseEng, this.name.func, this.phraseUa);
		}, false);
	  this.rand();
	  setTimeout(()=>{this.move()},1000);
	  console.log(this.name.className + " " + this.subject + " created!");
	  return this;
	}

	rand(){
			this.randInterval = setInterval( ()=> {
			this.direction =  Math.floor(Math.random() * (6 - 0)) + 0;}, this.randHumanInterval);
			return this;
	}


	insertDeadBody() {
         let deadMonster = document.createElement('div');
         deadMonster.className = "deadMonster";
         deadMonster.style.left=this.name.style.left;
         deadMonster.style.bottom=this.name.style.bottom; 
         game.append(deadMonster);
}


	createEnemySoul(){
	    let soul = document.createElement('div');
	    soul.className = 'soul-thing';
	    game.appendChild(soul);
	    soul.style.left = this.name.style.left;
	    soul.style.bottom = this.name.style.bottom;
	    setTimeout(function(){
	      soul.remove();
	    },500);
	}

}


var bodyClass = document.getElementsByTagName("body")[0];
bodyClass.classList.add("interface");






