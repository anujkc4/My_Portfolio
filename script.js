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

// const rightsection = document.querySelector(".right-section");
const modebtn = document.getElementById("btn");
modebtn.addEventListener("click", function () {
  const icon = document.querySelector("#btn i");
  console.log(icon.className);

  colorchnage(icon);
});

function colorchnage(icon) {
  if (icon.className == "fa-regular fa-moon") {
    modedark(icon);
  } else {
    modelight(icon);
  }
}

function modedark(icon) {
  icon.className = "fa-solid fa-lightbulb";
  icon.style.color = "#101010";
  document.querySelector(".right-section").style.backgroundColor = "#ffff";
  document.querySelector(".left-section").style.backgroundColor = "#e5d4d4ff";
  document.querySelectorAll(".nav-list a").forEach((el) => {
    el.style.color = "#010101";
  });
  document.querySelectorAll(".nav-list li").forEach((el) => {
    el.style.color = "#010101";
  });
  document.querySelectorAll(".footer-list li a i").forEach((el) => {
    el.style.color = "#010101";
  });
}

function modelight(icon) {
  icon.className = "fa-regular fa-moon";
  icon.style.color = "#fff";
  document.querySelector(".right-section").style.backgroundColor = "#000115";
  document.querySelector(".left-section").style.backgroundColor = "#090b18";
  document.querySelectorAll(".nav-list a").forEach((el) => {
    el.style.color = "#eaecef";
  });
  document.querySelectorAll(".nav-list li").forEach((el) => {
    el.style.color = "#eaecef";
  });
  document.querySelectorAll(".footer-list li a i").forEach((el) => {
    el.style.color = "#fff";
  });
}
