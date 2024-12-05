var god_on = document.getElementById('god_on');
var nocklip = document.getElementById('nocklip');

var dev_cells = document.getElementById('dev_cells');
var add_cells = document.getElementById('add_cells');

var dev_scells = document.getElementById('dev_scells');
var add_scells = document.getElementById('add_scells');

var dev_pcells = document.getElementById('dev_pcells');
var add_pcells = document.getElementById('add_pcells');

var dev_life = document.getElementById('dev_life');
var add_life = document.getElementById('add_life');


var god_result = document.getElementById('god_result');

var nocklip_result = document.getElementById('nocklip_result');

var cells_result = document.getElementById('cells_result');

var scells_result = document.getElementById('scells_result');

var pcells_result = document.getElementById('pcells_result');

var life_result = document.getElementById('life_result');


var god_life = 100000000;

var god_toggle=0;

var nocklip_toggle=0;


god_on.onclick = godFunction;

nocklip.onclick = nocklipFunction;

add_cells.onclick = addCellsFunction;

add_scells.onclick = addScellsFunction;

add_pcells.onclick = addPcellsFunction;

add_life.onclick = addLifeFunction;


function godFunction(){

	if(god_toggle==0){

		life = +localStorage.getItem('life') + god_life;

		localStorage.setItem('life', life);

		console.log(life);

		god_on.innerText = 'ON';

		god_result.innerText = 'ON';

		god_toggle=1;


	}else{

		life = +localStorage.getItem('life') - god_life;

		localStorage.setItem('life', life);

		console.log(life);

		god_on.innerText = 'OFF';

		god_result.innerText = 'OFF';

		god_toggle=0;
	}

}

function nocklipFunction(){

	if(nocklip_toggle==0){
	

		console.log('noclip mode ON');

		nocklip.innerText = 'ON';

		nocklip_result.innerText = 'ON';

		nocklip_toggle=1;


	}else{
	

		console.log('noclip mode OFF');

		nocklip.innerText = 'OFF';

		nocklip_result.innerText = 'OFF';

		nocklip_toggle=0;
	}

}


function addCellsFunction(){

	var temp_cells = +dev_cells.value;

		cells = +localStorage.getItem('cells') + temp_cells;

		localStorage.setItem('cells', cells);

		cells_result.innerText = cells;

		console.log('add cells: ' + cells);

}

function addScellsFunction(){

	var temp_sCells = +dev_scells.value;

		sCells = +localStorage.getItem('sCells') + temp_sCells;

		localStorage.setItem('sCells', sCells);

		scells_result.innerText = sCells;

		console.log('add sCells: ' + sCells);

}

function addPcellsFunction(){

	var temp_plCells = +dev_pcells.value;

		plCells = +localStorage.getItem('plCells') + temp_plCells;

		localStorage.setItem('plCells', plCells);

		pells_result.innerText = plCells;

		console.log('add plCells: ' + plCells);

}

function addLifeFunction(){

	var temp_life = +dev_life.value;

		life = +localStorage.getItem('life') + temp_life;

		localStorage.setItem('life', life);

		life_result.innerText = life;

		console.log(life);


}

window.onload = function() {

	cells_result.innerText=+localStorage.getItem('cells');

	scells_result.innerText=+localStorage.getItem('sCells');

	pells_result.innerText=+localStorage.getItem('pCells');

	life_result.innerText=+localStorage.getItem('life');
}