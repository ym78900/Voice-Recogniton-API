const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let amazing = [
  "my best friend is black, dont mess with me",
  "You picked a nice color"
];
let transcript;
let white = "Why not black, you dont like it or its not your color";
let other = "oh my god, why dont you pay attention to the question?";

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("voice is activated, talk to me beautiful");
};

recognition.onresult = event => {
  console.log(event);
  let transcript = event.results[0][0].transcript;
  content.textContent = transcript;
  if (transcript.includes("black")) {
    document.body.style.background = "black";
    document.body.style.color = "white";
    content.textContent = "You picked a nice color";
    readOutLoud(amazing[Math.floor(Math.random() * amazing.length)]);
  } else if (transcript.includes("white")) {
    readOutLoud(white);
  } else {
    readOutLoud(other);
  }
};

btn.addEventListener("click", () => {
  recognition.start();
  content.textContent = "which one you prefer Black or white?";
});

readOutLoud = message => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
