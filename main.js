// Smooth scrolling for anchor links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollBtn = document.getElementById("scrollToTop");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const headerHeight = header.offsetHeight;

  // Show button after header
  if (scrollY > headerHeight) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }

  // Prevent overlapping footer
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    // Move button up when footer is visible
    scrollBtn.style.bottom = (windowHeight - footerTop + 20) + "px";
  } else {
    scrollBtn.style.bottom = "30px";
  }
});

// Scroll to top
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});