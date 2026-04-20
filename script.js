"use strict";

/* =============================================
   PLACEHOLDER CERTIFICATION DATA
   (All content replaced with lorem ipsum)
   ============================================= */

const certifications = [
  {
    icon: "📄",
    title: "Certification 1",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📄",
    title: "Certification 2",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📄",
    title: "Certification 3",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📄",
    title: "Certification 4",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📄",
    title: "Certification 5",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📄",
    title: "Certification 6",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
];

const otherCertifications = [
  {
    icon: "📋",
    title: "Certification 7",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill A", "Skill B", "Skill C", "Skill D", "Skill E"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📋",
    title: "Certification 8",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill A", "Skill B", "Skill C", "Skill D", "Skill E"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📋",
    title: "Certification 9",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill A", "Skill B", "Skill C", "Skill D", "Skill E"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📋",
    title: "Certification 10",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill A", "Skill B", "Skill C", "Skill D", "Skill E"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📋",
    title: "Certification 11",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill A", "Skill B", "Skill C", "Skill D", "Skill E"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
  {
    icon: "📋",
    title: "Certification 12",
    issuer: "Lorem Ipsum Issuer",
    date: "Month YYYY",
    badge: "Level",
    skills: ["Skill A", "Skill B", "Skill C", "Skill D", "Skill E"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    details: [
      { icon: "📅", label: "Issued", value: "Month YYYY" },
      { icon: "⏳", label: "Valid Until", value: "Month YYYY" },
      { icon: "🆔", label: "Credential ID", value: "XXXX-XXXX-XXXX" },
      { icon: "📊", label: "Level", value: "Lorem Level" },
    ],
  },
];

/* =============================================
   CAROUSEL SYSTEM
   ============================================= */

const carousels = {};

function getCardsPerSlide() {
  const w = window.innerWidth;
  if (w <= 600) return 1;
  if (w <= 1024) return 2;
  return 3;
}

function initCarousel(carouselId, data) {
  const cardsPerSlide = getCardsPerSlide();
  const trackId = carouselId.replace("certCarousel", "certTrack");
  const dotsId = carouselId.replace("certCarousel", "certDots");
  const track = document.getElementById(trackId);
  const dotsContainer = document.getElementById(dotsId);

  if (!track || !dotsContainer) return;

  const totalSlides = Math.ceil(data.length / cardsPerSlide);
  carousels[carouselId] = { current: 0, total: totalSlides, data: data };

  /* ---- Build slides ---- */
  track.innerHTML = "";

  for (let s = 0; s < totalSlides; s++) {
    const slide = document.createElement("div");
    slide.className = "cert-slide";

    const startIdx = s * cardsPerSlide;
    const endIdx = Math.min(startIdx + cardsPerSlide, data.length);

    for (let c = startIdx; c < endIdx; c++) {
      const cert = data[c];
      const card = document.createElement("div");
      card.className = "cert-card";

      card.innerHTML =
        '<div class="cert-card-image">' +
        '<span class="cert-icon">' +
        cert.icon +
        "</span>" +
        '<span class="cert-badge">' +
        cert.badge +
        "</span>" +
        "</div>" +
        '<div class="cert-card-body">' +
        '<div class="cert-card-title">' +
        cert.title +
        "</div>" +
        '<div class="cert-card-issuer">' +
        cert.issuer +
        "</div>" +
        '<div class="cert-card-date">' +
        cert.date +
        "</div>" +
        '<div class="cert-card-skills">' +
        cert.skills
          .slice(0, 3)
          .map(function (sk) {
            return '<span class="skill-tag">' + sk + "</span>";
          })
          .join("") +
        "</div>" +
        "</div>";

      /* Click opens modal */
      (function (certData) {
        card.addEventListener("click", function () {
          openModal(certData);
        });
      })(cert);

      /* Cursor enlarge on hover */
      card.addEventListener("mouseenter", function () {
        document.getElementById("cursor").classList.add("hover");
      });
      card.addEventListener("mouseleave", function () {
        document.getElementById("cursor").classList.remove("hover");
      });

      slide.appendChild(card);
    }

    track.appendChild(slide);
  }

  /* ---- Build dots ---- */
  dotsContainer.innerHTML = "";

  for (let d = 0; d < totalSlides; d++) {
    const dot = document.createElement("div");
    dot.className = "carousel-dot" + (d === 0 ? " active" : "");

    (function (idx) {
      dot.addEventListener("click", function () {
        goToSlide(carouselId, idx);
      });
    })(d);

    dotsContainer.appendChild(dot);
  }

  /* ---- Reset position ---- */
  track.style.transform = "translateX(0%)";
}

function goToSlide(carouselId, index) {
  const carousel = carousels[carouselId];
  if (!carousel) return;

  if (index < 0) index = 0;
  if (index >= carousel.total) index = carousel.total - 1;

  carousel.current = index;

  const trackId = carouselId.replace("certCarousel", "certTrack");
  const dotsId = carouselId.replace("certCarousel", "certDots");
  const track = document.getElementById(trackId);
  const dotsContainer = document.getElementById(dotsId);

  track.style.transform = "translateX(-" + index * 100 + "%)";

  const dots = dotsContainer.children;
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("active", i === index);
  }
}

function nextSlide(carouselId) {
  const carousel = carousels[carouselId];
  if (carousel && carousel.current < carousel.total - 1) {
    goToSlide(carouselId, carousel.current + 1);
  }
}

function prevSlide(carouselId) {
  const carousel = carousels[carouselId];
  if (carousel && carousel.current > 0) {
    goToSlide(carouselId, carousel.current - 1);
  }
}

/* =============================================
   MODAL SYSTEM
   ============================================= */

function openModal(cert) {
  document.getElementById("modalIcon").textContent = cert.icon;
  document.getElementById("modalTitle").textContent = cert.title;
  document.getElementById("modalIssuer").textContent = cert.issuer;
  document.getElementById("modalBadge").textContent = cert.badge;
  document.getElementById("modalDescription").textContent = cert.description;

  /* Details rows */
  var detailsHtml = cert.details
    .map(function (d) {
      return (
        '<div class="modal-detail-row">' +
        '<div class="detail-icon">' +
        d.icon +
        "</div>" +
        "<div>" +
        '<div class="detail-label">' +
        d.label +
        "</div>" +
        '<div class="detail-value">' +
        d.value +
        "</div>" +
        "</div>" +
        "</div>"
      );
    })
    .join("");
  document.getElementById("modalDetails").innerHTML = detailsHtml;

  /* Skills */
  var skillsHtml = cert.skills
    .map(function (s) {
      return '<span class="modal-skill">' + s + "</span>";
    })
    .join("");
  document.getElementById("modalSkills").innerHTML = skillsHtml;

  document.getElementById("cardModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("cardModal").classList.remove("active");
  document.body.style.overflow = "";
}

/* =============================================
   CUSTOM CURSOR & TRAIL EFFECTS
   ============================================= */

var cursor = document.getElementById("cursor");
var cursorGlow = document.getElementById("cursorGlow");
var mouseX = 0;
var mouseY = 0;
var glowX = 0;
var glowY = 0;
var trailDots = [];
var MAX_TRAIL = 18;
var lastTrailTime = 0;

function handleMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

  /* Throttled trail */
  var now = Date.now();
  if (now - lastTrailTime > 30) {
    lastTrailTime = now;
    createTrailDot(mouseX, mouseY);
  }
}

function createTrailDot(x, y) {
  var dot = document.createElement("div");
  dot.className = "trail-dot";

  var size = 4 + Math.random() * 4;
  var hue = Math.random() > 0.5 ? "190, 100%, 60%" : "260, 80%, 60%";

  dot.style.cssText =
    "left:" +
    x +
    "px;" +
    "top:" +
    y +
    "px;" +
    "width:" +
    size +
    "px;" +
    "height:" +
    size +
    "px;" +
    "background: hsla(" +
    hue +
    ", 0.6);" +
    "box-shadow: 0 0 " +
    size * 2 +
    "px hsla(" +
    hue +
    ", 0.3);" +
    "transform: translate(-50%, -50%) scale(1);" +
    "transition: opacity 0.6s ease-out, transform 0.6s ease-out;";

  document.body.appendChild(dot);
  trailDots.push(dot);

  /* Trigger fade on next frame */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      dot.style.opacity = "0";
      dot.style.transform = "translate(-50%, -50%) scale(0)";
    });
  });

  /* Remove from DOM */
  setTimeout(function () {
    if (dot.parentNode) dot.parentNode.removeChild(dot);
    var idx = trailDots.indexOf(dot);
    if (idx > -1) trailDots.splice(idx, 1);
  }, 700);

  /* Prune excess */
  while (trailDots.length > MAX_TRAIL) {
    var old = trailDots.shift();
    if (old && old.parentNode) old.parentNode.removeChild(old);
  }
}

function animateGlow() {
  glowX += (mouseX - glowX) * 0.1;
  glowY += (mouseY - glowY) * 0.1;
  cursorGlow.style.left = glowX + "px";
  cursorGlow.style.top = glowY + "px";
  requestAnimationFrame(animateGlow);
}

function setupCursorHover() {
  var interactives = document.querySelectorAll(
    "a, button, .nav-link, .cta-btn, .social-link, " +
      ".quick-link, .carousel-btn, .carousel-dot, " +
      ".back-to-top, .modal-close",
  );
  interactives.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      cursor.classList.add("hover");
    });
    el.addEventListener("mouseleave", function () {
      cursor.classList.remove("hover");
    });
  });
}

/* =============================================
   INTRO ANIMATION
   ============================================= */

function runIntro() {
  var overlay = document.getElementById("introOverlay");
  var introImg = document.getElementById("introImage");
  var introName = document.getElementById("introName");
  var introSub = document.getElementById("introSubtitle");
  var introTag = document.getElementById("introTagline");
  var header = document.getElementById("header");
  var mainContent = document.getElementById("mainContent");
  var particles = document.getElementById("introParticles");

  /* Create floating particles */
  for (var i = 0; i < 40; i++) {
    var p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = 30 + Math.random() * 70 + "%";
    p.style.animationDelay = Math.random() * 5 + "s";
    p.style.animationDuration = 3 + Math.random() * 4 + "s";

    var size = 2 + Math.random() * 3;
    p.style.width = size + "px";
    p.style.height = size + "px";

    var colors = [
      "hsl(190, 100%, 60%)",
      "hsl(260, 80%,  60%)",
      "hsl(340, 80%,  60%)",
    ];
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    particles.appendChild(p);
  }

  /* Phase 1 – reveal text */
  setTimeout(function () {
    introName.classList.add("visible");
  }, 800);
  setTimeout(function () {
    introSub.classList.add("visible");
  }, 1200);
  setTimeout(function () {
    introTag.classList.add("visible");
  }, 1500);

  /* Phase 2 – hide text */
  setTimeout(function () {
    introName.classList.add("hide");
    introSub.classList.add("hide");
    introTag.classList.add("hide");
  }, 3000);

  /* Phase 3 – image moves to corner */
  setTimeout(function () {
    introImg.classList.remove("center");
    introImg.classList.add("corner");
  }, 3500);

  /* Phase 4 – reveal main site */
  setTimeout(function () {
    overlay.classList.add("hidden");
    introImg.style.opacity = "0";
    introImg.style.pointerEvents = "none";

    header.classList.add("visible");
    mainContent.classList.add("visible");

    revealOnScroll();
  }, 5000);

  /* Phase 5 – cleanup DOM */
  setTimeout(function () {
    if (overlay.parentNode) overlay.remove();
    if (introImg.parentNode) introImg.remove();
    if (introName.parentNode) introName.remove();
    if (introSub.parentNode) introSub.remove();
    if (introTag.parentNode) introTag.remove();
    if (particles.parentNode) particles.remove();
  }, 6500);
}

/* =============================================
   SCROLL EFFECTS
   ============================================= */

function handleScroll() {
  handleSectionBlur();
  updateActiveNav();
  revealOnScroll();
  updateScrollProgress();
  updateHeaderStyle();
}

/* Blur the "other" cert section when viewing one */
function handleSectionBlur() {
  var certSection = document.getElementById("certifications");
  var otherSection = document.getElementById("other-certifications");
  if (!certSection || !otherSection) return;

  var scrollCenter = window.scrollY + window.innerHeight / 2;
  var certTop = certSection.offsetTop;
  var certBottom = certTop + certSection.offsetHeight;
  var otherTop = otherSection.offsetTop;
  var otherBottom = otherTop + otherSection.offsetHeight;

  if (scrollCenter >= certTop && scrollCenter < certBottom) {
    otherSection.classList.add("blurred");
    certSection.classList.remove("blurred");
  } else if (scrollCenter >= otherTop && scrollCenter < otherBottom) {
    certSection.classList.add("blurred");
    otherSection.classList.remove("blurred");
  } else {
    certSection.classList.remove("blurred");
    otherSection.classList.remove("blurred");
  }
}

/* Highlight active nav link */
function updateActiveNav() {
  var sections = ["about", "certifications", "other-certifications", "contact"];
  var scrollY = window.scrollY + 150;

  sections.forEach(function (id) {
    var section = document.getElementById(id);
    if (!section) return;

    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;
    var link = document.querySelector('.nav-link[data-target="' + id + '"]');

    if (link) {
      link.classList.toggle("active", scrollY >= top && scrollY < bottom);
    }
  });
}

/* Scroll-triggered reveal */
function revealOnScroll() {
  var reveals = document.querySelectorAll(".reveal");
  reveals.forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

/* Header scroll-progress bar */
function updateScrollProgress() {
  var bar = document.getElementById("scrollProgress");
  if (!bar) return;

  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  bar.style.width = progress + "%";
}

/* Header background on scroll */
function updateHeaderStyle() {
  var header = document.getElementById("header");
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 50);
}

/* =============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================= */

function setupSmoothScroll() {
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}

/* =============================================
   INITIALISATION
   ============================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* Build carousels */
  initCarousel("certCarousel1", certifications);
  initCarousel("certCarousel2", otherCertifications);

  /* Carousel button listeners */
  document.getElementById("prev1").addEventListener("click", function () {
    prevSlide("certCarousel1");
  });
  document.getElementById("next1").addEventListener("click", function () {
    nextSlide("certCarousel1");
  });
  document.getElementById("prev2").addEventListener("click", function () {
    prevSlide("certCarousel2");
  });
  document.getElementById("next2").addEventListener("click", function () {
    nextSlide("certCarousel2");
  });

  /* Modal close */
  document
    .getElementById("modalCloseBtn")
    .addEventListener("click", closeModal);
  document.getElementById("cardModal").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });

  /* Keyboard close */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  /* Cursor */
  document.addEventListener("mousemove", handleMouseMove);
  animateGlow();

  /* Scroll */
  window.addEventListener("scroll", handleScroll);

  /* Smooth scroll */
  setupSmoothScroll();

  /* Cursor hover states */
  setupCursorHover();

  /* Responsive carousel rebuild */
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      initCarousel("certCarousel1", certifications);
      initCarousel("certCarousel2", otherCertifications);
      setupCursorHover();
    }, 300);
  });

  /* Run intro then initial scroll check */
  runIntro();
  handleScroll();
});

/* =============================================
   TOUCH DEVICE FALLBACK
   ============================================= */
(function () {
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    document.body.style.cursor = "auto";

    var c = document.getElementById("cursor");
    var g = document.getElementById("cursorGlow");
    if (c) c.style.display = "none";
    if (g) g.style.display = "none";

    var style = document.createElement("style");
    style.textContent = "* { cursor: auto !important; }";
    document.head.appendChild(style);
  }
})();
