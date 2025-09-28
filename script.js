const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Optional: grow cursor when hovering clickable items
document.querySelectorAll("a, button, li").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor.style.background = "rgba(84, 138, 232, 0.7)";
    cursor.style.border = "2px solid skyblue";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.background = "rgba(255, 255, 255, 0.7)";
    cursor.style.border = "2px solid blue";
  });
});

// +++++++++++++++++++++++++++++++++++++

var typed = new Typed("#element", {
  strings: [
    "a full stack developer.",
    "a web-developer.",
    "&amp; web-designer.",
  ],
  typeSpeed: 100,
  backSpeed: 150,
  backDelay: 3000,
  loop: true,
  showCursor: true,
});

const texts = ["Anuj kc", "अनुज के.सी"];
let index = 0;

setInterval(() => {
  index = (index + 1) % texts.length;
  document.getElementById("myname").textContent = texts[index];
}, 4000);

const modebtn = document.getElementById("btn");
modebtn.addEventListener("click", function () {
  const icon = document.querySelector("#btn i");
  console.log(icon.className);

  colorchnage(icon);
});

function colorchnage(icon) {
  if (icon.className == "fa-regular fa-moon") {
    modedark(icon);
    cursor.style.border = "2px solid black";
  } else {
    modelight(icon);
    cursor.style.border = "2px solid white";
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
  document.querySelectorAll(".paragraph").forEach((el) => {
    el.style.color = "#010101";
  });
  const aboutmebox = document.querySelector("#about-me");
  const projectbox = document.querySelector("#project");
  aboutmebox.style.border = "2px solid black";
  aboutmebox.style.color = "#010101";
  projectbox.style.color = "#fff";
  projectbox.style.backgroundColor = "#010101";
  document.getElementById("myname").style.color = "#06089aff";
  document.getElementsByClassName("paragraph").style.color = "#06089aff";
  MouseOnDarkMode();
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
  document.querySelectorAll(".paragraph").forEach((el) => {
    el.style.color = "#fff";
  });
  const aboutmebox = document.querySelector("#about-me");
  const projectbox = document.querySelector("#project");
  aboutmebox.style.border = "2px solid white";
  aboutmebox.style.color = "#fff";
  projectbox.style.color = "#010101";
  projectbox.style.backgroundColor = "#fff";
  document.getElementById("myname").style.color = "#fff";
  MouseOnLightMode();
}

function MouseOnLightMode() {
  document.querySelectorAll("a, button, li").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      cursor.style.background = "rgba(56, 238, 0, 0.7)";
      // cursor.style.border = "2px solid white";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.background = "rgba(255, 255, 255, 0.7)";
      // cursor.style.border = "2px solid white";
    });
  });
}

function MouseOnDarkMode() {
  document.querySelectorAll("a, button, li").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      cursor.style.background = "rgba(0, 172, 238, 0.7)";
      // cursor.style.border = "2px solid black";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.background = "rgba(255, 255, 255, 0.7)";
      // cursor.style.border = "2px solid black";
    });
  });
}
