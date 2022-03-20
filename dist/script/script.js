let concerts = document.querySelectorAll(".event");
for (let concert of concerts) {
  concert.addEventListener("mouseenter", () => {
    let p = concert.querySelector("a>p");
    p.style.color = "#991825";
    p.style.filter = "grayscale(0)";
    p.style.backgroundColor = " rgba(0, 0, 0, 0.92)";
    p.style.borderColor = "#991825 ";
  });

  concert.addEventListener("mouseleave", () => {
    let p = concert.querySelector("a>p");
    p.style.color = "rgba(182, 182, 182, 0.296) ";
    p.style.borderColor = "rgba(182, 182, 182, 0.296) ";
    p.style.backgroundColor = "rgba(0, 0, 0, 0) ";
  });
}

const songs = document.getElementsByClassName("songContainer");
const songPlaying = document.getElementById("songToPlay");
const buttonsExit = document.getElementsByClassName("xIcon");
let exitBt;
let songPlayingDiv;

for (const song of songs) {
  song.addEventListener("click", () => {
    for (let i = 0; i < songs.length; i++) {
      const element = songs[i];
      let button = element.getElementsByTagName("i")[0];

      element.classList.remove("playing");
      if (element == song) {
        let songName = song
          .querySelector(" div > p:nth-child(2)")
          .textContent.toLowerCase();
        songName = songName.replace(/\s+/g, "");
        songPlayingDiv = song;

        song
          .querySelector(" div > p:nth-child(2)")
          .classList.add("playingText");
        console.log(songPlaying);
        if (button.classList.contains("gg-play-button-o")) {
          if (
            songPlaying.src == "audio/" + songName + ".mp3" ||
            songPlaying.src ==
              "http://127.0.0.1:5500/audio/" + songName + ".mp3"
          ) {
            playSong(button);
            console.log("Play song ONE MORE TIME");
          } else {
            console.log(songName);
            songPlaying.src = "audio/" + songName + ".mp3";
            playSong(button);
            console.log("Play FIRST TIME");
          }
        } else if (button.classList.contains("gg-play-pause-o")) {
          pauseSong(button);
        }
        song.classList.add("playing");
      } else {
        button.classList.add("gg-play-button-o");
        button.classList.remove("gg-play-pause-o");
        // song.classList.remove("playing");
      }
    }
  });
}

for (const bt of buttonsExit) {
  bt.addEventListener("click", (e) => {
    songPlayingDiv.classList.remove("playing");
    bt.classList.add("hide");
    e.stopPropagation();
  });
}

function playSong(button) {
  button.classList.remove("gg-play-button-o");
  button.classList.add("gg-play-pause-o");
  console.log(button.nextElementSibling.classList.remove("hide"));
  songPlaying.play();
}

function pauseSong(button) {
  button.classList.add("gg-play-button-o");
  button.classList.remove("gg-play-pause-o");
  songPlaying.pause();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    songPlayingDiv.classList.remove("playing");
  }
});
