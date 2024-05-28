document.addEventListener("DOMContentLoaded", function () {
  const navigationList = document.querySelector(".navigation-list");
  const navigationListUL = document.querySelector(".navigation-list ul");
  const navigationLink = document.querySelectorAll(".navigation-list a");
  const toggleDropdown = document.getElementById("toggle-dropdown");

  // Memunculkan menu dropdown ketika hamburger-icon diklik
  toggleDropdown.addEventListener("click", function () {
    navigationList.classList.toggle("open");
  });

  // Menghilangkan menu dropdown ketika salah satu list-nya diklik
  navigationLink.forEach((link) => {
    link.addEventListener("click", function () {
      navigationList.classList.remove("open");
    });
  });
});
