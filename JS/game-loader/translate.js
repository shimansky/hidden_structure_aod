



function translateToUa(){
	try{
		
		localStorage.setItem('lang', 1);
	}
	catch{

	}
	autoTranslate();
}

function translateToEng(){
	try{
		
		localStorage.setItem('lang', 0);
	}
	catch{

	}
	autoTranslate();
}

function autoTranslate(){
	musicToggler = localStorage.getItem('sound-flag');
	if(musicToggler==1){
		soundIcon.innerHTML="🔔";
	}else{
		soundIcon.innerHTML="🔕";	
	}
	if (localStorage.getItem('lang') == 1){
		// start phrase
		startPhrase.innerHTML = "натисніть для старту";

		// lang-block
		selectLang.innerHTML = "оберіть мову:";

		// board
		storyMode.innerHTML = "грати ><br><span>проходження гри рівень за рівнем</span>";
		settings.innerHTML = "налаштування<br><span>музика, ліхтарик...</span>";
		control.innerHTML = "керування<br><span>кнопки</span>";
		about.innerHTML = "зкинути прогрес<br><span>ресет усього ігрового прогресу та налаштувань!</span>";
		boardBlockBack.innerHTML = "◄ повернутися";

		// налаштування
		
		settingsBlockBack.innerHTML = "◄ повернутися";
		settingsBlockText.innerHTML = "налаштування";
		setFlashControls.innerHTML = "ліхтарик: кнопки";

		// керування
		// controls-block
		controls.innerHTML = "керування";
		fullscreen.innerHTML = "ENTER - ввімк/вимк на увесь єкран"
		up.innerHTML = "W / джойстик вверх - вверх";
		left.innerHTML = "A / джойстик вліво - вліво";
		down.innerHTML = "S / джойстик вниз - вниз";
		right.innerHTML = "D / джойстик вправо - вправо";
		grenade.innerHTML = "E - встановити сенсорну гранату";
		light.innerHTML = "F - ввімк/вимк ліхтарик";
		info.innerHTML = "i - рюкзак";
		run.innerHTML = "SHIFT - біг";
		attack.innerHTML = "click / тач - атака, взаємодія";
		selectWeapon.innerHTML = "обрати зброю:";
		punch.innerHTML = "1 / натиснути іконку - кулаки";
		pistol.innerHTML = "2 / натиснути іконку - пістолет";
		shootgun.innerHTML = "3 / натиснути іконку - дробовик";
		plasmagun.innerHTML = "4 / натиснути іконку - плазмаган";
		firegun.innerHTML = "5 / натиснути іконку - вогнемет";
		screenTitle.innerHTML = "масштабування екрану:";
		zoom.innerHTML = "ctrl + scroll - зум+ / зум-";
		controlsBlockBack.innerHTML = "◄ повернутися";

		// difficult-block
		selectDifficultLevel.innerHTML = "оберіть складність:";
		easy.innerHTML = "легко";
		medium.innerHTML = "середнє";
		hard.innerHTML = "важко";
		nightmare.innerHTML = "страхіття";
		difficultBlockBack.innerHTML = "◄ повернутися";


		// about-block
		aboutBlockText.innerHTML = "2D шутер із монстрами, зброєю та секретами...<br>Монстри мають штучний інтелект, пам'ять та агресивність.<br>Використано лише HTML, CSS, JavaScript.<br>Створено <a href='https://enot-webstudio.netlify.app'>ENOT web-studio</a> у 2023.";
		aboutBlockBack.innerHTML = "◄ повернутися";

		// dev
		devPage.innerHTML = "зкинути прогрес та налаштування";

		

	}else{
		// start phrase
		startPhrase.innerHTML = "click to start";

		// lang-block
		selectLang.innerHTML = "select language:";

		// board
		storyMode.innerHTML = "play ><br><span>passing the game level by level</span>";
		settings.innerHTML = "settings<br><span>music, flashlight...</span>";
		control.innerHTML = "controls<br><span>buttons</span>";
		about.innerHTML = "reset progress<br><span>reset all game progress and settings!</span>";
		boardBlockBack.innerHTML = "◄ back";

		// settings
		
		settingsBlockBack.innerHTML = "◄ back";
		settingsBlockText.innerHTML = "settings";
		setFlashControls.innerHTML = "flashlight: buttons";

		// controls-block
		controls.innerHTML = "controls";
		fullscreen.innerHTML = "ENTER - turn on/off fullscreen"
		up.innerHTML = "W / swipe up - forward";
		left.innerHTML = "A / swipe left - left";
		down.innerHTML = "S / swipe down - down";
		right.innerHTML = "D / swipe right - right";
		grenade.innerHTML = "E - set sensor grenade";
		light.innerHTML = "F - turn on/off lighter";
		info.innerHTML = "i - backpack";
		run.innerHTML = "SHIFT - run";
		attack.innerHTML = "click / touch - attack, action";
		selectWeapon.innerHTML = "select weapon:";
		punch.innerHTML = "1 / touch icon - punch";
		pistol.innerHTML = "2 / touch icon - pistol";
		shootgun.innerHTML = "3 / touch icon - shootgun";
		plasmagun.innerHTML = "4 / touch icon - plasmagun";
		firegun.innerHTML = "5 / touch icon - flamethrower";
		screenTitle.innerHTML = "screen zooming:";
		zoom.innerHTML = "ctrl + scroll - zoom+ / zoom-";
		controlsBlockBack.innerHTML = "◄ back";


		// difficult-block
		selectDifficultLevel.innerHTML = "choose difficulty:";
		easy.innerHTML = "easy";
		medium.innerHTML = "medium";
		hard.innerHTML = "hard";
		nightmare.innerHTML = "nightmare";
		difficultBlockBack.innerHTML = "◄ back";

		

		// about-block
		aboutBlockText.innerHTML = "2D shooter with monsters, weapons, secrets and more...<br>Monsters have artificial intelligence, memory and aggressiveness.<br>Based only on HTML, CSS, JavaScript.<br>Сreated by <a href='https://enot-webstudio.netlify.app'>ENOT web-studio</a> 2023.";
		aboutBlockBack.innerHTML = "◄ back";

		// dev
		devPage.innerHTML = "reset game progress and settings";

		
	}
}






	









