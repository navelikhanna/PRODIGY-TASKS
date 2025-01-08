// Navbar background change on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#128";
    } else {
      navbar.style.backgroundColor = "#00000";
    }
  });