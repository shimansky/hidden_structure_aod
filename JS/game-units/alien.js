 class Enemy {

	constructor(name, className, x, y) {
		this.name = name;
		this.name = document.createElement('div');
		game.appendChild(this.name);
		this.name.className = className;
		this.name.style.left = x + "px";
		this.name.style.bottom = y + "px";
		this.name.temp = x;
		this.name.vertical = y;
		this.name.toggle = 1;
		this.life = Math.floor(Math.random() * (200 - 10)) + 10;
		this.scores = this.life;
		this.damage = Math.floor(Math.random() * (localStorage.getItem('difficult') - localStorage.getItem('minDifficult')))  +  parseInt(localStorage.getItem('minDifficult'), 10);
		this.name.left_empty = " ";
		this.name.right_empty = " ";
		this.name.down_empty = " ";
		this.name.up_empty = " ";
		this.name.speed = 25;
		this.name.style.color = "green";
		this.randAlienInterval = 1000;
		this.speedAlienInterval = 5;
		this.direction = 0;
		this.leftTemp = 0;
		this.rightTemp = 0;
		this.upTemp = 0;
		this.downTemp = 0;
		this.alienCounter = 0;
		this.alienMaximum = 2;
		this.alienVisionRange =+(localStorage.getItem('difficult'))*30;
		this.objLeft;
		this.objRight;
		this.objDown;
		this.objUp;
		this.sensorLeft;
		this.sensorRight;
		this.sensorDown;
		this.sensorUp;
		this.agressive = 0;
		this.memory = 0;
		this.damaged = 0;



this.move=()=>{

	let moveInterval = setTimeout( ()=> {


			let botAnimation = requestAnimationFrame(this.move);

			if(this.life<=0){
				this.name.killSelf();
				clearTimeout(moveInterval);
				cancelAnimationFrame(botAnimation);
				}
		 	try{

		 		if(flagGamePause==0){

		   		var p = figure.getBoundingClientRect();
		   		var mm = this.name.getBoundingClientRect();
		     
		    	// watching for collision to bot
		    	try{
			 			if(( (p.bottom-mm.bottom)<=50 && (p.bottom-mm.bottom)>=-50 ) && ( (p.right-mm.right)<=50 && (p.right-mm.right)>=-50 ) ) {
			 					// end game if life < 0
				  			if(life<=0){
				  				flagGamePause=1;
				  				panel.innerHTML="<div class='healthIcon'></div> " + life;
				  				showMassege();
				  				window.navigator.vibrate([100, 200, 100, 500, 100, 200, 100, 500, 100, 200, 100, 500, 100, 200, 100]);
				  				setTimeout(exit, 10000);
				 
								}else{
									// checking for have agressive 
									if(this.agressive==1 && this.memory>0){
										life-=(this.damage + 5);
											if(life<=0){
							  				flagGamePause=1;
							  				panel.innerHTML="<div class='healthIcon'></div> " + life;
							  				showMassege();
							  				window.navigator.vibrate([100, 200, 100, 500, 100, 200, 100, 500, 100, 200, 100, 500, 100, 200, 100]);
							  				setTimeout(exit, 10000);
											}
										this.memory--;
										
									}else{
										life-=this.damage;
											if(life<=0){
							  				flagGamePause=1;
							  				panel.innerHTML="<div class='healthIcon'></div> " + life;
							  				showMassege();
							  				window.navigator.vibrate([100, 200, 100, 500, 100, 200, 100, 500, 100, 200, 100, 500, 100, 200, 100]);
							  				setTimeout(exit, 10000);
											}
											
									}
									// set life to localStorage & display it on panel
				  				localStorage.setItem('life', life);
				  				try{
				  					panel.innerHTML="<div class='healthIcon'></div> " + life;
				  				}catch{
				  					panel.innerHTML="<div class='healthIcon'></div> " + life;
				  				}
				  				// vibrate after damage
				  				window.navigator.vibrate(50);
				  				// play the bot atack sound
							  	if(this.name.className == "monsteralien"){
							  			monsteralienAttack.play();
										}
									if(this.name.className == "monsterblob"){
							  			monsterblobAttack.play();
										}
									if(this.name.className == "monstersnake"){
							  			monstersnakeAttack.play();
										}
									if(this.name.className == "monsterthongle"){
							  			monsterthongleAttack.play();
										}
									if(this.name.className == "monsterhairbug"){
							  			monsterhairbugAttack.play();
										}
					  		}
					  		// play the player breathe sound
					  		if(life<100){
					  			breathe.play();
					  		}
						}
					}catch{
						
					}



					// if lighter is on & player is visible for monsters
					if(visibleForMonsters==1){
						// if bot life < 25 they run away from player
						if(this.life<50){

							if(this.direction==0){	
					      	this.moveRight();
					      	if(this.life < 100){
			      				this.life+=1;
			      			}	       
					    	}
					    	
					    	if(this.direction==1){	    	
					      	this.moveLeft();
					      	if(this.life < 100){
			      				this.life+=1;
			      			}	       	      
					    	}
					    	
					    	if(this.direction==2){	    	
					      	this.moveUp();
					      	if(this.life < 100){
			      				this.life+=1;
			      			}	       	      
					    	}
					    	
					    	if(this.direction==3){	    	
					      	this.moveDown();
					      	if(this.life < 100){
			      				this.life+=1;
			      			}	       	      
					    	}
					    	
					    	if(this.direction==4){
					    		if(this.life < 100){
			      				this.life+=1;
			      			}
					    		// this.createSelfCopy();
					    	}

								if(((p.left-mm.left<this.alienVisionRange) && (p.left-mm.left)>0)&&( ((p.bottom-mm.bottom) <0 && (p.bottom -mm.bottom) >-this.alienVisionRange) || ((p.bottom-mm.bottom) <this.alienVisionRange && (p.bottom-mm.bottom) >0) )){
			      			this.moveLeft();
			    			}
			    			
			     			if(((p.left-mm.left>-this.alienVisionRange) && (p.left-mm.left)<0)&&( ((p.bottom-mm.bottom) <0 && (p.bottom -mm.bottom) >-this.alienVisionRange) || ((p.bottom-mm.bottom) <this.alienVisionRange && (p.bottom-mm.bottom) >0) )){
			      			this.moveRight();		    	
			    			}
			    			
			      		if(((p.bottom-mm.bottom) <0 && (p.bottom -mm.bottom) >-this.alienVisionRange) && ( ((p.left-mm.left<this.alienVisionRange) && (p.left-mm.left)>0) || ((p.left-mm.left>-this.alienVisionRange) && (p.left-mm.left)<0) )){
			       			this.moveDown();		      
			    			}
								
			     			if(((p.bottom-mm.bottom) <this.alienVisionRange && (p.bottom-mm.bottom) >0) && ( ((p.left-mm.left<this.alienVisionRange) && (p.left-mm.left)>0) || ((p.left-mm.left>-this.alienVisionRange) && (p.left-mm.left)<0) )){
			      			this.moveUp();		    	
			    			}

						}else{

								if(this.direction==0){	
					      	this.moveRight();	       
					    	}
					    	
					    	if(this.direction==1){	    	
					      	this.moveLeft();	       	      
					    	}
					    	
					    	if(this.direction==2){	    	
					      	this.moveUp();	       	      
					    	}
					    	
					    	if(this.direction==3){	    	
					      	this.moveDown();	       	      
					    	}
					    	
					    	if(this.direction==4){
					    		// this.createSelfCopy();
					    	}
								

			   				if(((p.left-mm.left<this.alienVisionRange) && (p.left-mm.left)>0)&&( ((p.bottom-mm.bottom) <0 && (p.bottom -mm.bottom) >-this.alienVisionRange) || ((p.bottom-mm.bottom) <this.alienVisionRange && (p.bottom-mm.bottom) >0) )){
			      			this.moveRight();
			    			}

			     			if(((p.left-mm.left>-this.alienVisionRange) && (p.left-mm.left)<0)&&( ((p.bottom-mm.bottom) <0 && (p.bottom -mm.bottom) >-this.alienVisionRange) || ((p.bottom-mm.bottom) <this.alienVisionRange && (p.bottom-mm.bottom) >0) )){
			      			this.moveLeft();
			    			}

			      		if(((p.bottom-mm.bottom) <0 && (p.bottom -mm.bottom) >-this.alienVisionRange) && ( ((p.left-mm.left<this.alienVisionRange) && (p.left-mm.left)>0) || ((p.left-mm.left>-this.alienVisionRange) && (p.left-mm.left)<0) )){
			       			this.moveUp(); 
			    			}

			     			if(((p.bottom-mm.bottom) <this.alienVisionRange && (p.bottom-mm.bottom) >0) && ( ((p.left-mm.left<this.alienVisionRange) && (p.left-mm.left)>0) || ((p.left-mm.left>-this.alienVisionRange) && (p.left-mm.left)<0) )){
			      			this.moveDown();	
			    			}
						}
		  		}
		  		// if lighter is off & player is invisible for monsters
		  		else{
		    		if(this.direction==0){	
				      this.moveRight();	       
				    }
				    
				    if(this.direction==1){	    	
				      this.moveLeft();	       	      
				    }
				    
				    if(this.direction==2){	    	
				      this.moveUp();	       	      
				    }
				    
				    if(this.direction==3){	    	
				      this.moveDown();	       	      
				    }
				    
				    	if(this.direction==4){
				    	// this.createSelfCopy();
				    }

		    	}
		  	}
			}
			catch(e){
		}
	}, 1000 / this.speedAlienInterval);
}





		this.name.killSelf = ()=> {
					try{
	      		alienKilledCounter-=1;
	      		scores+=this.scores;
   					panel.innerHTML="<div class='healthIcon'></div> " + life;
	      	}catch{

	      	}
	      	try{
	      		aliveAlienCounter--;
	      	}catch{

	      	}
					this.insertDeadBotBody();
					// this.createThing();
					this.name.remove();
					monsterDied.play();

			try{
				clearInterval(blinded);
			}catch{

			}
		}

					
		this.name.get_coordinates =  (unit)=> {

				try{

// element class from left      
			this.objLeft = map[(1450 - this.name.style.bottom.slice(0, -2)) / 50][((+this.name.style.left.slice(0, -2) - 50)/ 50) ];
			// console.log(this.objLeft);
			 	
			if ( this.objLeft!=undefined && this.objLeft!="tab" && this.objLeft!="interface" && this.objLeft!="monsterthongle" && this.objLeft!="monstersnake" && this.objLeft!="monsterblob" && this.objLeft!="monsteralien" && this.objLeft!="world" &&  this.objLeft!="person" && !this.objLeft.includes("wall") ) {
					this.leftTemp = 1;
				}else{
					this.leftTemp = 0;
				}

				try{
					// sensor from left
					this.sensorLeft = document.elementFromPoint((unit.right-55),(unit.bottom-5));
					this.name.left_empty = document.elementFromPoint((unit.right-55),(unit.bottom-5)).className;
					if(this.name.left_empty == "irSensor"){
	  				this.sensorLeft.className = "explode";
	  				this.life-=50;
	  				try{
					  grenadeExplode.pause();
					  grenadeExplode.currentTime = 0;
					}catch{
					  console.log("sound error");
					}
	  				grenadeExplode.play();
	  				this.insertBloodDot();
					}
					//person from left
					if(this.name.left_empty == "person" || this.name.left_empty == "locked_door_white" || this.name.left_empty == "locked_door_black"){
	  				this.leftTemp = 0;
					}
				}catch{
					// console.log("in invisible distance!");
				}
		 	

			

// element class from right
			this.objRight = map[(1450 - this.name.style.bottom.slice(0, -2)) / 50][((+this.name.style.left.slice(0, -2) + 50)/ 50) ];
			// console.log(this.objRight);
		 	
			if ( this.objRight!=undefined && this.objRight!="tab" && this.objRight!="interface" && this.objRight!="monsterthongle" && this.objRight!="monstersnake" && this.objRight!="monsterblob" && this.objRight!="monsteralien" && this.objRight!="world" && this.objRight!="person" && !this.objRight.includes("wall") ) {
					this.rightTemp = 1;
				}else{
					this.rightTemp = 0;
				}

				try{
		// sensor from rigth
					this.sensorRight = document.elementFromPoint((unit.right+5),(unit.bottom-5));
					this.name.right_empty  = document.elementFromPoint((unit.right+5),(unit.bottom-5)).className;
						if(this.name.right_empty == "irSensor"){
			  			this.sensorRight.className = "expole";
			  			this.life-=50;
			  			try{
						  grenadeExplode.pause();
						  grenadeExplode.currentTime = 0;
						}catch{
						  console.log("sound error");
						}
			  			grenadeExplode.play();
			  			this.insertBloodDot();
						}
					//person from rigth
					if(this.name.right_empty == "person" || this.name.right_empty == "locked_door_white" || this.name.right_empty == "locked_door_black"){
			  		this.rightTemp = 0;
					}
				}catch{
					// console.log("in invisible distance!");
				}
						

// element class from down
			this.objDown = map[(1500 - this.name.style.bottom.slice(0, -2)) / 50][((+this.name.style.left.slice(0, -2))/ 50) ];			
			// console.log(this.objDown);
					 	
			if ( this.objDown!=undefined && this.objDown!="tab" && this.objDown!="interface" && this.objDown!="monsterthongle" && this.objDown!="monstersnake" && this.objDown!="monsterblob" && this.objDown!="monsteralien" && this.objDown!="world" && this.objDown!="person" && !this.objDown.includes("wall") ) {
				this.downTemp=1;
				}else{
					this.downTemp = 0;
				}

				try{
				// sensor from down
					this.sensorDown = document.elementFromPoint((unit.right-25),(unit.bottom+5));
					this.name.down_empty = document.elementFromPoint((unit.right-25),(unit.bottom+5)).className;
					if(this.name.down_empty == "irSensor"){
			  			this.sensorDown.className = "explode";
			  			this.life-=50;
			  			try{
						  grenadeExplode.pause();
						  grenadeExplode.currentTime = 0;
						}catch{
						  console.log("sound error");
						}
			  			grenadeExplode.play();
			  			this.insertBloodDot();
					}
					// person from down
					if(this.name.down_empty == "person" || this.name.down_empty == "locked_door_white" || this.name.down_empty == "locked_door_black"){
			  			this.downTemp = 0;
					}
				}catch{
					// console.log("in invisible distance!");
				}
						
				

// element class from up
			this.objUp = map[(1400 - this.name.style.bottom.slice(0, -2)) / 50][((+this.name.style.left.slice(0, -2))/ 50) ];			
			// console.log(this.objUp);
					 	
			if ( this.objUp!=undefined && this.objUp!="tab" && this.objUp!="interface" && this.objUp!="monsterthongle" && this.objUp!="monstersnake" && this.objUp!="monsterblob" && this.objUp!="monsteralien" && this.objUp!="world" && this.objUp!="person" && !this.objUp.includes("wall") ) {
				this.upTemp=1;
				}else{
					this.upTemp = 0;
				}

				try{
					// sensor from up
					this.sensorUp = document.elementFromPoint((unit.right-25),(unit.bottom-55));
					this.name.up_empty = document.elementFromPoint((unit.right-25),(unit.bottom-55)).className;
					if(this.name.up_empty == "irSensor"){
			  			this.sensorUp.className = "explode";
			  			this.life-=50;
			  			try{
						  grenadeExplode.pause();
						  grenadeExplode.currentTime = 0;
						}catch{
						  console.log("sound error");
						}
			  			grenadeExplode.play();
			  			this.insertBloodDot();
					}
					// person from up
					if(this.name.up_empty == "person" || this.name.up_empty == "locked_door_white" || this.name.up_empty == "locked_door_black"){
			  			this.upTemp = 0;
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
		this.name.innerHTML="<div class ='bot-life-line' style='width:" + this.life + "%; height: 2px; background-color: " + this.name.style.color + "'> </div>";
		this.name.get_coordinates(this.name.getBoundingClientRect());
		this.name.style.backgroundImage='URL("IMG/' + this.name.className + '_r.gif")';
		if (this.rightTemp==1) {
		this.name.temp=this.name.temp+this.name.speed;
		this.name.style.left = this.name.temp + 'px';
		// setTimeout(()=>{
			this.name.temp=this.name.temp+this.name.speed;
			this.name.style.left = this.name.temp + 'px';
		// },100);
		
		}
	}

	moveLeft() {
		this.name.innerHTML="<div class ='bot-life-line' style='width:" + this.life + "%; height: 2px; background-color: " + this.name.style.color + "'> </div>";
		 this.name.get_coordinates(this.name.getBoundingClientRect()); 
		this.name.style.backgroundImage='URL("IMG/' + this.name.className + '_l.gif")';
		if (this.leftTemp==1) {
		this.name.temp=this.name.temp-this.name.speed;
		this.name.style.left = this.name.temp + 'px';
		// setTimeout(()=>{
			this.name.temp=this.name.temp-this.name.speed;
			this.name.style.left = this.name.temp + 'px';
		// },100);
		
		}
	}

	moveUp() {
		this.name.innerHTML="<div class ='bot-life-line' style='width:" + this.life + "%; height: 2px; background-color: " + this.name.style.color + "'> </div>";
		this.name.get_coordinates(this.name.getBoundingClientRect());
		this.name.style.backgroundImage='URL("IMG/' + this.name.className + '_r.gif")';
		if (this.upTemp==1) { 
		this.name.vertical=this.name.vertical+this.name.speed;
		this.name.style.bottom = this.name.vertical + 'px';
		// setTimeout(()=>{
			this.name.vertical=this.name.vertical+this.name.speed;
			this.name.style.bottom = this.name.vertical + 'px';
		// },100);
		}
	}

	moveDown() {
		this.name.innerHTML="<div class ='bot-life-line' style='width:" + this.life + "%; height: 2px; background-color: " + this.name.style.color + "'> </div>";
		this.name.get_coordinates(this.name.getBoundingClientRect());
		this.name.style.backgroundImage='URL("IMG/' + this.name.className + '_l.gif")';
		if (this.downTemp==1) {
		this.name.vertical=this.name.vertical-this.name.speed;
		this.name.style.bottom = this.name.vertical + 'px';
		// setTimeout(()=>{
			this.name.vertical=this.name.vertical-this.name.speed;
			this.name.style.bottom = this.name.vertical + 'px';
		// },100);
		
		}
	}

	showEnemy(){
	  this.name.style.display="inline-block";
	  monsterPortalSound.play();
	}

	createThing() {
		let randomThing = Math.floor(Math.random() * (15 - 0)) + 0;
		let thing = document.createElement('div');
		
  if(randomThing == 0){
    thing.className = 'pistolCellsThing';
    }
    
   if(randomThing == 1){
    thing.className = 'shootgunCellsThing';
    }
  
  if(randomThing == 2){
    thing.className = 'medicKitThing';
    }

  if(randomThing == 3){
    thing.className = 'plasmagunCellsThing';
    }

  if(randomThing == 4){
    thing.className = 'armor';
    }

    game.appendChild(thing);
    thing.style.left = this.name.style.left;
    thing.style.bottom = this.name.style.bottom;
}

	insertDeadBotBody() {
	  var deadMonster = document.createElement('div');
	  deadMonster.className = "deadMonster";
	  deadMonster.style.left=this.name.style.left;
	  deadMonster.style.bottom=this.name.style.bottom; 
	  game.append(deadMonster);
	  if(flagSelect==5){
	  	  var burnMonster = document.createElement('div');
		  burnMonster.className = "burnMonster";
		  burnMonster.style.left=this.name.style.left;
		  burnMonster.style.bottom=this.name.style.bottom; 
		  game.append(burnMonster);
		  try{
                burn.pause();
                burn.currentTime = 0;
                }catch{
                  console.log(error);
                }
		  burn.play();
		  setTimeout(()=>{burnMonster.remove();},5000);
	  }
	  
	}

	insertBloodDot() {
	  var bloodDot = document.createElement('div');
	  bloodDot.className = "bloodDot0";
	  bloodDot.style.left=this.name.style.left;
	  bloodDot.style.bottom=this.name.style.bottom; 
	  game.append(bloodDot);
	  // setTimeout(function(){bloodDot.remove();},5000);
	  if(this.damaged == 0){
	  	var blinded = setInterval(()=>{
	  		var bloodDot = document.createElement('div');
	  		let randomBloodDot = Math.floor(Math.random() * (5 - 0)) + 0;
	  		bloodDot.className = "bloodDot" + randomBloodDot;
	  		bloodDot.style.left=this.name.style.left;
	 	 	bloodDot.style.bottom=this.name.style.bottom; 
	  		game.append(bloodDot);
	  		// setTimeout(function(){bloodDot.remove();},5000);
	  	}, 1000);
	  	this.damaged == 1;
	  	try{
	  		setTimeout(()=>{clearInterval(blinded)}, 5000);
	  	}catch{

	  	}
	  }
	}

	startSelf() {
		
		if(this.damage<=10){
				this.name.style.color = "green";
			}
			if(this.damage>10 && this.damage<15){
				this.name.style.color = "yellow";
			}
			if(this.damage>=15) {
				this.name.style.color = "red";
			}
		this.name.addEventListener("mousedown", ()=>{
			if(playerCanShoot==1){
				sensorPlayerAttack();
				this.name.style.filter = 'brightness(100)';
		      setTimeout(()=>{
		      	this.name.style.filter = 'brightness(1)';
		      },200);
				this.insertBloodDot();
				this.life-=attack;

		// set the agressive and memory to bot AI
				this.agressive = 1;
				this.memory = 5; 
				// this.name.style.color = "red";
	      playerCanShoot=0;
	      setTimeout(()=>{playerCanShoot=1;},500);
    	}
		}, false);
	  this.rand();
	  setTimeout(()=>{this.move()},2000);
	//   this.move();
	  console.log(this.name.className + " created!");
	  return this;

	}

	rand(){
			let randInterval = setInterval( ()=> {
			this.direction =  Math.floor(Math.random() * (6 - 0)) + 0;}, this.randAlienInterval);
			if(this.life<=0){
				this.name.killSelf();
				clearInterval(randInterval);
				}
			return this;
	}



	createSelfCopy(){
		let randomName;
		let randomInt = Math.floor(Math.random() * (5 - 0)) + 0;
		if(randomInt == 0){
			randomName = "monsteralien";
		}
		if(randomInt == 1){
			randomName = "monsterblob";
		}
		if(randomInt == 2){
			randomName = "monstersnake";
		}
		if(randomInt == 3){
			randomName = "monsterthongle";
		}
		if(randomInt == 4){
			randomName = "monsterhairbug";
		}
			if(alienCounter<=alienMaximum){
				alienCounter+=1;
	    	new Enemy(randomName, randomName, parseInt(this.name.style.left, 10), parseInt(this.name.style.bottom, 10), 100).startSelf();
		 }
	}




}

var scores = 0;
var bodyClass = document.getElementsByTagName("body")[0];
bodyClass.classList.add("interface");

function createNewGhost(){
     
   try{
                let ghostX = Math.floor(Math.random() * (28 - 2)) + 2;
                let ghostY = Math.floor(Math.random() * (29 - 1)) + 1;
                ghostTarget = map[ghostY][ghostX];
                if ( ghostTarget!=undefined && !ghostTarget.includes("wall") ) {
                    if(maxGhostIsCreated >0){
                        let randomGhostName;
                        let randomGhostInt = Math.floor(Math.random() * (5 - 0)) + 0;
                        if(randomGhostInt == 0){
                            randomGhostName = "monsteralien";
                        }
                        if(randomGhostInt == 1){
                            randomGhostName = "monsterblob";
                        }
                        if(randomGhostInt == 2){
                            randomGhostName = "monstersnake";
                        }
                        if(randomGhostInt == 3){
                            randomGhostName = "monsterthongle";
                        }
                        if(randomGhostInt == 4){
                            randomGhostName = "monsterhairbug";
                        }
                        new Enemy(randomGhostName, randomGhostName, (ghostX * 50), (1450 - (ghostY * 50))).startSelf();
                        
                            maxGhostIsCreated--;
                            try{
                            	aliveAlienCounter++;
                            }catch{

                            }
                            createNewGhost();
                    }
                }
                else{
                  createNewGhost();
                }


       }catch{
            createNewGhost();
       }
    
   }

   









