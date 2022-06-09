let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
const video = document.querySelector('#video');

console.log('hhhhh');

let thumbnail = document.querySelector('#thumbnail');
// const song = document.querySelector('#song');
// const video = document.querySelector('#background');

let playing = false;

// pause.style = "display: none;"

function playPause() {
  const video = document.querySelector('#video');
  const song = document.querySelector('#song');
  
  if (playing) {
    song.pause();
    video.pause();
    
    pause.style = "display: none"
    play.style = "display: block"

    // pPause.src = "./pause-fill.svg";
    // thumbnail.style.transform = "scale(1.15)";
    playing = false;
  } else {
      song.play();
      video.play();

      pause.style = "display: block"
      play.style = "display: none"


      playing = true;
  }
}
