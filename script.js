const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Optional: grow cursor when hovering clickable items
document.querySelectorAll("a, button, li").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor.style.background = "rgba(0, 172, 238, 0.7)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.background = "rgba(255, 255, 255, 0.7)";
  });
});

// +++++++++++++++++++++++++++++++++++++

var typed = new Typed("#element", {
  strings: [
    "a full stack developer.",
    "a web-developer.",
    "&amp; web-designer.",
  ],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
  showCursor: true,
});

const modebtn = document.getElementById("btn");
modebtn.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "red";
});
// function colorchnage(btn){
//   if (btn == "dark") {

//   } else {

//   }
// }
