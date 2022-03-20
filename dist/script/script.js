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

console.log(songPlaying);

for (const song of songs) {
  song.addEventListener("click", () => {
    for (let i = 0; i < songs.length; i++) {
      const element = songs[i];
      // console.log(element);
      let button = element.getElementsByTagName("i")[0];

      if (element == song) {
        let songName = song
          .querySelector(" div > p:nth-child(2)")
          .textContent.toLowerCase();

        songName = songName.replace(/\s+/g, "");
        console.log(songName);
        //     // console.log(song);
        //     console.log("------------------");
        songPlaying.src = "audio/" + songName + ".mp3";
        console.log(songPlaying.src);
        console.log(songPlaying);
        //     console.log(songPlaying);

        console.log("ITS MY SONG");
        if (button.classList.contains("gg-play-button-o")) {
          button.classList.remove("gg-play-button-o");
          button.classList.add("gg-play-pause-o");
          // songPlaying.
          songPlaying.play();
          console.log("Play");
        } else if (button.classList.contains("gg-play-pause-o")) {
          console.log("Pause");
          button.classList.add("gg-play-button-o");
          button.classList.remove("gg-play-pause-o");
          songPlaying.pause();
        }
      } else {
        button.classList.add("gg-play-button-o");
        button.classList.remove("gg-play-pause-o");
      }
    }
  });
}
