for(i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
        // alternative code below.
        // switch(event.currentTarget.className){
        //     case "w drum": 
        //     var audio = new Audio('./sounds/tom-1.mp3');
        //     audio.play();
        //     break;
        //     case "a drum":
        //     var audio = new Audio('./sounds/tom-2.mp3');
        //     audio.play();
        //     break;  
        //     case "s drum": 
        //     var audio = new Audio('./sounds/tom-3.mp3');
        //     audio.play();
        //     break;
        //     case "d drum":
        //     var audio = new Audio('./sounds/tom-4.mp3');
        //     audio.play();
        //     break;
        //     case "j drum": 
        //     var audio = new Audio('./sounds/snare.mp3');
        //     audio.play();
        //     break;
        //     case "k drum":
        //     var audio = new Audio('./sounds/kick-bass.mp3');
        //     audio.play();
        //     break;
        //     case "l drum":
        //     var audio = new Audio('./sounds/crash.mp3');
        //     audio.play();
        //     break;
        // }
        switch(this.className){
            case "w drum": 
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
            case "a drum":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;  
            case "s drum": 
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
            case "d drum":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
            case "j drum": 
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
            case "k drum":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
            case "l drum":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        }
    });
}
