const audio = document.getElementById("audio-123");
const progress = document.getElementById("progress");

function play() {
  audio.play();
}

function updateProgress(e) {
  const { duration, currentTime } = e.target;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener("timeupdate", updateProgress);

audio.addEventListener("ended", () => {
  progress.style.width = "0%";
});
