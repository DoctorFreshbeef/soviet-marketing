var i = 1;
var audio = new Audio('audio/sm_sound.mp3');

function play(){
    audio.loop = true;
    audio.play();
    setTimeout( next, 10000);
}

function next() {
    i++;
    if (i < 31) {
        $("#frame").fadeOut(4000, function () {
            $("#frame").attr("src", "img/img" + i + ".png");
            $("#frame").fadeIn(5000);
            setTimeout( next, 10000);
        });
    }else{
        setTimeout(fade, 500);
    } 
}

function fade(){
    audio.volume = audio.volume * 0.9;
    if (audio.volume < 0.05){
        audio.pause();
    }else{
        setTimeout(fade, 500);
    }
}