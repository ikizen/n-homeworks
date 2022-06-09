const background = document.querySelector('#background'); // background derived from album cover below
const thumbnail = document.querySelector('#thumbnail'); // album cover 
const song = document.querySelector('#song'); // audio object

const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears
const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
songs = ['./assets/music/beyonce.mp3', './assets/music/dontstartnow.mp3']; // object storing paths for audio objects
thumbnails = ['./assets/images/lemonade.png', './assets/images/dontstartnow.png']; // object storing paths for album covers and backgrounds
songArtists = ['Beyonce', 'Dua Lipa']; // object storing track artists
songTitles = ["Don't Hurt Yourself", "Don't Start Now"]; // object storing track titles

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song'),
        thumbnail = document.querySelector('#thumbnail');

        pPause.src = "pause-fill.svg"
        thumbnail.style.transform = "scale(1.15)";
        
        song.play();
        playing = false;
    } else {
        pPause.src = "./assets/icons/play.png"
        thumbnail.style.transform = "scale(1)"
        
        song.pause();
        playing = true;
    }
}
