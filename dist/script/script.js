let concerts = document.querySelectorAll(".event");
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

const songs = document.getElementsByClassName("songContainer");
const buttonsPlay = document.querySelectorAll(".songContainer > div i");

for (const song of songs) {
  song.addEventListener("click", () => {
    let button = song.getElementsByTagName("i")[0];
    console.log(button);
    console.log(song);
    console.log("------------------");

    if (button.classList.contains("gg-play-button-o")) {
      button.classList.remove("gg-play-button-o");
      button.classList.add("gg-play-pause-o");
    } else {
      button.classList.add("gg-play-button-o");
      button.classList.remove("gg-play-pause-o");
    }
  });
}
