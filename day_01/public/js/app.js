// To listen to a "keydown" event
window.addEventListener("keydown", (event) => {
  // Chosse the audio element that corresponds with the event.key
  const audio = document.querySelector(`audio[data-key="${event.key}"`);
  audio.play();
});
