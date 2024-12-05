var menuClickSound = new Audio('SOUND/flashlight.mp3');
    function timedClick(element) {
  this.event.preventDefault();
  menuClickSound.play();
}

function timedClickLink(element) {
  this.event.preventDefault();
  menuClickSound.play();
  setTimeout(() => window.location = element.href, 1000);
}