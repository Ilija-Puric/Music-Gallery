let concerts = document.querySelectorAll(".event");
console.log(concerts);

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
