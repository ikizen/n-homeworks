let playing = true;

function playPause() {
    const song = document.getElementById('song');
  if (playing) {
    song.play();
    playing = false;
  } else {
    song.pause();
    playing = true;
  }
}