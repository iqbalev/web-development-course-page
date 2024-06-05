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

  // Menambahkan tombol "Ubah Tema"
  const themeSwitcherButton = document.createElement("button");
  themeSwitcherButton.classList.add("button-theme-switcher");

  const themeSwitcherButtonText = document.createTextNode("Ubah Tema");

  themeSwitcherButton.appendChild(themeSwitcherButtonText);
  navigationListUL.appendChild(themeSwitcherButton);

  // Membuat function switcher untuk tombol "Ubah Tema"
  themeSwitcherButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
