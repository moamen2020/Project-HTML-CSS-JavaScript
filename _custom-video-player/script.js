const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & pause video
const toggleVideoStatus = () => (video.paused ? video.play() : video.pause());

// Update play/pause icon
const updatePlayIcon = () => {
  play.innerHTML = video.paused
    ? '<i class="fa fa-play fa-2x"></i>'
    : '<i class="fa fa-pause fa-2x"></i>';
};

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  const mins = String(Math.floor(video.currentTime / 60)).padStart(2, "0");
  const secs = String(Math.floor(video.currentTime % 60)).padStart(2, "0");

  timestamp.innerHTML = `${mins}:${secs}`;
};

const stopVideo = () => {
  video.currentTime = 0;
  progress.value = 0;
  timestamp.innerHTML = "00:00";
  video.pause();
};

const setVideoTimeToProgress = () => {
  video.currentTime = (progress.value * video.duration) / 100;
};

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoTimeToProgress);
