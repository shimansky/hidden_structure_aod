var tempMap;
var map;
var row = 30;
var col = 30;
var newMap =["["];
var Enemy;
var isDrawing = 0;
var script;

// відображення мапи рівня 
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

// завантаження обраної мапи рівня
function loadMap(){
tempMap = +prompt("select map from 0 to 99");
script = document.createElement("script");
script.src = 'MAPS/room'+ tempMap + '.js';
document.getElementsByTagName('head')[0].appendChild(script);
console.log( "map: " + tempMap + " - loaded");
setTimeout(render, 500);
getIdOfDiv();
setIDOfDiv();
}


// завантаження дефолтної мапи рівня
function loadDefaultMap(){
script = document.createElement("script");
script.src = 'MAPS/defaultMap.js';
document.getElementsByTagName('head')[0].appendChild(script);
console.log( "default map - loaded");
setTimeout(render, 500);
getIdOfDiv();
setIDOfDiv();
}

// очищення мапи рівня
function clearMap(){
  try{
    document.getElementsByTagName('script')[0].remove();
    map = '';
    game.innerHTML = '';
    console.log( "map deleted");
  }catch{
    console.log( "error of map delete!");
  }
}

// логіка роботи редактору мап
function getIdOfDiv(){
  try{
document.querySelector('#editor').addEventListener('click', function(e){ 
  tempClassName= e.target.className; 
  return tempClassName;
});
 }
 catch{
  console.log("editor not loaded");
 }
}

function setIDOfDiv(){
  if(true){
  try{
document.querySelector('#game').addEventListener('mousedown', e => {
  isDrawing = 1;
});
document.querySelector('#game').addEventListener('mouseup', e => {
  isDrawing = 0;
});

  document.querySelector('#game').onmouseover = function(event) {
    if (isDrawing == 1) {
  let target = event.target;
  target.className = tempClassName;
  }
};
 }
 catch{
  console.log("target not loaded");
 }
 }
}


// виведення мапи рівню у вигляді масиву для збереження
function createMap(){
  editor.style.display = "none";
  var mapArr=game.getElementsByTagName('*');
    var l = 0;
     for(i=0;i<=899;i++){
        
          if(l%30==0){
            newMap.push("],<br>["+'"'+mapArr[i].className+'"');
          }
          else{
             newMap.push('"'+mapArr[i].className+'"');
          }
          l++;
        } 
        newMap.push("]");
        stringMap = String(newMap);
        // console.log(stringMap);
        message = document.createElement('div');
        message.id = "message";
        message.style.display="block";
        message.style.fontSize="9pt";
        game.append(message);
        message.innerHTML=stringMap + "<br><button onclick='message.remove(); showEditor()'>close code</button><br><button onclick=copyToClipboard()>copy code</button>";
        newMap =["["];   
}

function showEditor() {
  editor.style.display = 'flex';
}

function copyToClipboard(){
  let element = document.getElementById("message");
  let copyText = element.textContent.slice(4,-19); 
  let copiedMap = "var map =[ " + copyText + " ];";
  navigator.clipboard.writeText(copiedMap);
}


// window.onload = function(){
// render();
// getIdOfDiv();
// setIDOfDiv();
// }

