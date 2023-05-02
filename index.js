x = document.querySelectorAll(".drum").length;
for(var b = 0; b < x; b++){
    document.querySelectorAll(".drum")[b].addEventListener("click", function(){
        var muSic = this.textContent;
      music(muSic);
        
    });
}

function music(name){
      
    switch(name){
       
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "a":
            var crash = new Audio("sounds/kick-bass.mp3");
            crash.play();
        break;
        case "s":
            var crash = new Audio("sounds/snare.mp3");
            crash.play();
        break;
        case "d":
            var crash = new Audio("sounds/tom-1.mp3");
            crash.play();
        break;
        case "j":
            var crash = new Audio("sounds/tom-2.mp3");
            crash.play();
        break;
        case "k":
            var crash = new Audio("sounds/tom-3.mp3");
            crash.play();
        break;
        case "l":
            var crash = new Audio("sounds/tom-4.mp3");
            crash.play();
        break;
    }
    
}

document.addEventListener("keypress", (event) => {
          music(event.key);
});