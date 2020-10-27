// To listen to a "keydown" event
window.addEventListener('keydown', (event) => {
console.log("The event: ", event.key);  

// Chosse the audio element that corresponds with the event.key
const audio = document.querySelector(`audio[data-key="${event.key}"`)
console.log(audio);
audio.play();
})