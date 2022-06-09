let play = document.querySelector('#play');
let pause = document.querySelector('#pause');

let thumbnail = document.querySelector('#thumbnail');
// const song = document.querySelector('#song');
// const video = document.querySelector('#background');

let playing = false;

pause.style = "display: none;"

function playPause() {
  const video = document.querySelector('#background');
  const song = document.querySelector('#song');
  
  if (playing) {
    song.pause();
    video.pause();
    
    pause.style = "display: block"
    play.style = "display: none"

    // pPause.src = "./pause-fill.svg";
    // thumbnail.style.transform = "scale(1.15)";
    playing = false;
  } else {
      song.play();
      video.play();

      pause.style = "display: none"
      play.style = "display: block"


      playing = true;
  }
}
