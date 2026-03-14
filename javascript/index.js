function player(letter){
  var audio = document.getElementById("audio");
  var icon = document.getElementById("icon");

  if(letter == 'a') {audio.src = "sound/apple.mp3";}
  else if (letter == 'b'){audio.src = "sound/ball.mp3";}
   else if (letter == 'c') {audio.src = "sound/cat.mp3";}
    else if (letter == 'd') {audio.src = "sound/dog.mp3";}
    else {
        alert("Not Found");
    }
    icon.style.color = "black";
    audio.play();

    setTimeout(function(){
          icon.style.color = "#ccc";
    },1000)
    

}