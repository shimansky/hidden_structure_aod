 class FireBall {

	constructor(name, className) {
		this.name = name;
		this.name = document.createElement('div');
		game.appendChild(this.name);
		this.name.className = className;
		this.name.style.left = figure.style.left;
		this.name.style.bottom = figure.style.bottom;
		this.name.style.backgroundSize = "30%";

		this.move=()=>{
			var fireballTempLeft =  parseInt(this.name.style.left.slice(0,-2));
			var fireballTempBottom = parseInt(this.name.style.bottom.slice(0,-2));
				if(flagLookAt == "left"){
					setTimeout(()=>{
						this.name.style.left = (fireballTempLeft - 100) + "px";
						this.name.style.backgroundSize = "50%";	
					},50);
					setTimeout(()=>{
						this.name.style.left = (fireballTempLeft - 150) + "px";
						this.name.style.backgroundSize = "70%";	
					},200);
					setTimeout(()=>{
						this.name.style.left = (fireballTempLeft - 200) + "px";
						this.name.style.backgroundSize = "100%";	
					},500);
					
					
				}
				
				if(flagLookAt == "right"){
					setTimeout(()=>{
						this.name.style.left = (fireballTempLeft + 100) + "px";
						this.name.style.backgroundSize = "50%";	
					},50);
					setTimeout(()=>{
						this.name.style.left = (fireballTempLeft + 150) + "px";
						this.name.style.backgroundSize = "70%";	
					},200);
					setTimeout(()=>{
						this.name.style.left = (fireballTempLeft + 200) + "px";
						this.name.style.backgroundSize = "100%";	
					},500);

					
					
				}
				if(flagLookAt == "up"){
					setTimeout(()=>{
						this.name.style.bottom = (fireballTempBottom + 100) + "px";
						this.name.style.backgroundSize = "50%";
					},50);
					setTimeout(()=>{
						this.name.style.bottom = (fireballTempBottom + 150) + "px";
						this.name.style.backgroundSize = "70%";
					},200);
					setTimeout(()=>{
						this.name.style.bottom = (fireballTempBottom + 200) + "px";
						this.name.style.backgroundSize = "100%";
					},500);

					
					
				}
				if(flagLookAt == "down"){
					setTimeout(()=>{
						this.name.style.bottom = (fireballTempBottom - 100) + "px";
						this.name.style.backgroundSize = "50%";
					},50);
					setTimeout(()=>{
						this.name.style.bottom = (fireballTempBottom - 150) + "px";
						this.name.style.backgroundSize = "70%";
					},200);
					setTimeout(()=>{
						this.name.style.bottom = (fireballTempBottom - 200) + "px";
						this.name.style.backgroundSize = "100%";
					},500);

					
					
				}

				setTimeout(()=>{
					this.name.remove();
				},990);
			}
		}
	}