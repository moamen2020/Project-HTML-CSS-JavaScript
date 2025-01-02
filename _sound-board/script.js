const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");

  btn.classList.add("btn");

  btn.innerHTML = sound;

  document.getElementById("buttons").appendChild(btn);

  btn.addEventListener("click", () => {
    soundPlayer.stop();
    document.getElementById(sound).play();
  });
});

const soundPlayer = {
  stop() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);

      song.pause();
      song.currentTime = 0;
    });
  },
};

// Reference:  https://stackoverflow.com/questions/43167907/sound-play-stop-pause-on-click-javascript
