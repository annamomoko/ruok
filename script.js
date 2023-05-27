document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("fullscreen-video");
  var playPauseBtn = document.getElementById("play-pause-btn");
  var spotifyBtn = document.getElementById("spotify-btn");

  playPauseBtn.addEventListener("click", function() {
    if (video.paused || video.ended) {
      video.play();
      playPauseBtn.innerHTML = "&#10074;&#10074;";
    } else {
      video.pause();
      playPauseBtn.innerHTML = "&#9658;";
    }
  });

  spotifyBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.open("https://www.spotify.com", "_blank");
  });
});
