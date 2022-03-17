let concerts = document.querySelectorAll(".event");
console.log(concerts);

for (let concert of concerts) {
  concert.addEventListener("mouseenter", () => {
    let p = concert.querySelector("p");
    p.style.color = "#991825";
    p.style.backgroundColor = " rgba(0, 0, 0, 0.95)";
    p.style.borderColor = "#991825";
  });

  concert.addEventListener("mouseleave", () => {
    let p = concert.querySelector("p");
    p.style.color = "rgba(182, 182, 182, 0.296)";
    p.style.borderColor = "rgba(182, 182, 182, 0.296)";
    p.style.backgroundColor = "rgba(0, 0, 0, 0)";
  });
}
