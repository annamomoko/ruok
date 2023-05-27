document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("fullscreen-video");
  var playPauseBtn = document.getElementById("play-pause-btn");
  var volumeSlider = document.getElementById("volume-slider");

  playPauseBtn.addEventListener("click", function() {
    if (video.paused || video.ended) {
      video.play();
      playPauseBtn.innerHTML = "&#10074;&#10074;";
    } else {
      video.pause();
      playPauseBtn.innerHTML = "&#9658;";
    }
  });

  volumeSlider.addEventListener("input", function() {
    video.volume = volumeSlider.value;
  });
});
