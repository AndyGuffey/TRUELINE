
// Contact Form and Hamburger Menu Script
document.addEventListener("DOMContentLoaded", function () {
  // Toggle Contact Form Visibility
  const toggleBtn = document.getElementById("toggleContactForm");
  const formContainer = document.getElementById("contactFormContainer");

  if (toggleBtn && formContainer) {
    toggleBtn.addEventListener("click", function () {
      formContainer.classList.toggle("hidden");
    });
  }

  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("open");
    });

    // Close the hamburger menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }
});
