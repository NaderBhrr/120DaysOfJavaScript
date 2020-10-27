// To listen to a "keydown" event
window.addEventListener("keydown", (event) => {
  // Chosse the audio element that corresponds with the event.key
  const audio = document.querySelector(`audio[data-key="${event.key}"`);
  const key = document.querySelector(`div[data-key="${event.key}"`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

// To manage the transition style when it is completed
const removeTransition = event => {
    console.log(event);
}
const keys = document.querySelectorAll(".key");
for (key of keys) {
  key.addEventListener("transitionend", removeTransition);
}
