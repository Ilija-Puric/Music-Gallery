let concerts = document.querySelectorAll(".event");
const playerBtPlay = document.getElementsByClassName("plpause")[0];
const playBt = document.getElementsByClassName("play")[0];
const pauseBt = document.getElementsByClassName("pause")[0];
const audio = document.getElementsByTagName("audio")[0];
const imageSongPlaying = document.getElementById("imageSong");

console.log(concerts);
console.log(playBt);
console.log(pauseBt);
for (let concert of concerts) {
  concert.addEventListener("mouseenter", () => {
    let p = concert.querySelector("a>p");
    p.style.color = "#991825";
    p.style.filter = "grayscale(0)";
    p.style.backgroundColor = " rgba(0, 0, 0, 0.92)";
    p.style.borderColor = "#991825 ";
    console.log(p);
  });

  concert.addEventListener("mouseleave", () => {
    let p = concert.querySelector("a>p");
    p.style.color = "rgba(182, 182, 182, 0.296) ";
    p.style.borderColor = "rgba(182, 182, 182, 0.296) ";
    p.style.backgroundColor = "rgba(0, 0, 0, 0) ";
  });
}

let songPlayer = () => {
  if (!playBt.classList.contains("hide")) {
    pauseBt.classList.remove("hide");
    playBt.classList.add("hide");
    audio.play();
    console.log("play");

    imageSongPlaying.classList.remove("paused");
  } else {
    pauseBt.classList.add("hide");
    playBt.classList.remove("hide");
    audio.pause();
    console.log("pause");
    imageSongPlaying.classList.add("paused");
  }
  console.log(audio);
};

playerBtPlay.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target.className);
  if (e.target.className !== "plpause") {
    songPlayer();
  }
});
