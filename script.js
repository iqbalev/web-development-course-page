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

  // Menambahkan tombol "Mode Gelap"
  const themeSwitcherButton = document.createElement("button");
  themeSwitcherButton.classList.add("button-theme-switcher");
  themeSwitcherButton.innerText = "Mode Gelap: Mati";

  navigationListUL.appendChild(themeSwitcherButton);

  // Membuat event switcher untuk tombol "Mode Gelap"
  themeSwitcherButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    themeSwitcherButton.innerText = document.body.classList.contains(
      "dark-mode"
    )
      ? "Mode Gelap: Hidup"
      : "Mode Gelap: Mati";
  });

  // Membuat tombol "Kembali ke Atas"
  const returnToTopButton = document.createElement("button");
  returnToTopButton.classList.add("button-return-to-top");

  const returnToTopButtonIcon = document.createElement("i");
  returnToTopButtonIcon.classList.add("fas", "fa-caret-up");

  returnToTopButton.appendChild(returnToTopButtonIcon);

  document.body.appendChild(returnToTopButton);

  // Memunculkan atau menghilangkan tombol "Kembali ke Atas"
  function showOrHideReturnToTopButton() {
    document.documentElement.scrollTop > 0
      ? (returnToTopButton.style.display = "block")
      : (returnToTopButton.style.display = "none");
  }

  window.addEventListener("scroll", showOrHideReturnToTopButton);

  // Menggulirkan halaman ke paling atas ketika tombol "Kembali ke Atas" diklik
  returnToTopButton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
    showOrHideReturnToTopButton();
  });
});
