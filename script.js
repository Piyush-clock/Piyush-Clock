/* ==============================
   TECH HAVEN - AAA SCIFI JS
   ============================== */

// Elements
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

const playTrailerBtn = document.getElementById("playTrailerBtn");
const trailerModal = document.getElementById("trailerModal");
const closeTrailerBtn = document.getElementById("closeTrailer");

const yearEl = document.getElementById("year");

/* ==============================
   Set Current Year
   ============================== */
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ==============================
   Mobile Menu Controls
   ============================== */
if (openMenuBtn && mobileMenu) {
  openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });
}

if (closeMenuBtn && mobileMenu) {
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
}

// Close mobile menu when any link is clicked
if (mobileMenu) {
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

/* ==============================
   Trailer Modal Controls
   ============================== */
if (playTrailerBtn && trailerModal) {
  playTrailerBtn.addEventListener("click", () => {
    trailerModal.classList.add("active");
  });
}

if (closeTrailerBtn && trailerModal) {
  closeTrailerBtn.addEventListener("click", () => {
    trailerModal.classList.remove("active");
  });
}

// Close modal when clicking outside the modal box
if (trailerModal) {
  trailerModal.addEventListener("click", (e) => {
    if (e.target === trailerModal) {
      trailerModal.classList.remove("active");
    }
  });
}

/* ==============================
   Escape Key Close (Menu + Modal)
   ============================== */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (mobileMenu) mobileMenu.classList.remove("active");
    if (trailerModal) trailerModal.classList.remove("active");
  }
});

/* ==============================
   Smooth Scroll for Navbar Links
   ============================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* ==============================
   Button Click FX (Mini Sci-Fi)
   ============================== */
const allButtons = document.querySelectorAll("button, .btn, .mini-btn, .social");

allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 180);
  });
});

/* ==============================
   Optional: Small Hover Sound (OFF)
   (Future upgrade if you want)
   ============================== */
// const hoverSound = new Audio("hover.mp3");
// document.querySelectorAll("a, button").forEach(el => {
//   el.addEventListener("mouseenter", () => {
//     hoverSound.currentTime = 0;
//     hoverSound.play();
//   });
// });

/* ==============================
   Done ✅
   ============================== */
console.log("🚀 Tech Haven Sci-Fi Portfolio Loaded Successfully!");
