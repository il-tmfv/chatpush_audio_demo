const audio = document.getElementById("audio-123");
const progress = document.getElementById("progress");
const duration = document.getElementById("duration");

function play() {
  audio.play();
}

function updateProgress(e) {
  const { duration, currentTime } = e.target;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setDuration() {
  duration.innerText = `${this.duration} seconds`;
}

audio.addEventListener("loadedmetadata", setDuration);

audio.addEventListener("timeupdate", updateProgress);

audio.addEventListener("ended", () => {
  progress.style.width = "0%";
});
