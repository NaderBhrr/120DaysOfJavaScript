// To listen to a "keydown" event
const playSound = (event) => {
  // Choose the audio element that corresponds with the event.key
  const audio = document.querySelector(`audio[data-key="${event.key}"`);
  const key = document.querySelector(`div[data-key="${event.key}"`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

// To manage the transition style when it is completed
function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
for (key of keys) {
  key.addEventListener("transitionend", removeTransition);
}

window.addEventListener("keydown", playSound);
