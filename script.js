const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const testimonials = document.querySelectorAll(".testimonial");
const sliderDots = document.querySelectorAll(".slider-dot");
const sliderButtons = document.querySelectorAll(".slider-button");
const enquiryForm = document.getElementById("trial-form");

const WHATSAPP_NUMBER = "919676049453";

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
    document.body.classList.remove("nav-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + testimonials.length) % testimonials.length;

  testimonials.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === currentSlide);
  });

  sliderDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
}

sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.direction === "next" ? 1 : -1;
    showSlide(currentSlide + direction);
  });
});

sliderDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
  });
});

setInterval(() => showSlide(currentSlide + 1), 6500);

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(enquiryForm);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const age = formData.get("age");
  const program = formData.get("program");
  const goal = formData.get("goal") || "Not provided";

  const message = [
    "Hello Coach Bhikku Naik,",
    "",
    "I would like to enquire about a trial session.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Age group: ${age}`,
    `Program: ${program}`,
    `Goal / preferred time: ${goal}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.getElementById("current-year").textContent = new Date().getFullYear();
