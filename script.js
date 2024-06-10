document.addEventListener("DOMContentLoaded", function () {
  // Memunculkan menu dropdown ketika hamburger-icon diklik
  const navigationList = document.querySelector(".navigation-list");
  const toggleDropdown = document.getElementById("toggle-dropdown");

  toggleDropdown.addEventListener("click", function () {
    navigationList.classList.toggle("dropdown-menu");
  });

  // Menghilangkan menu dropdown ketika salah satu list-nya diklik
  const navigationLink = document.querySelectorAll(".navigation-list a");

  navigationLink.forEach((link) => {
    link.addEventListener("click", function () {
      navigationList.classList.remove("dropdown-menu");
    });
  });

  // Menambahkan tombol "Mode Gelap"
  const navigationListUL = document.querySelector(".navigation-list ul");
  const themeSwitcherButton = document.createElement("button");

  themeSwitcherButton.classList.add("button-theme-switcher");
  themeSwitcherButton.innerText = "Mode Gelap: Mati";

  navigationListUL.appendChild(themeSwitcherButton);

  // Membuat tema halaman web & tulisan "Mode Gelap" berubah ketika tombol "Mode Gelap" diklik
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

  showOrHideReturnToTopButton();

  window.addEventListener("scroll", showOrHideReturnToTopButton);

  // Menggulirkan halaman ke paling atas ketika tombol "Kembali ke Atas" diklik
  returnToTopButton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
    showOrHideReturnToTopButton();
  });
});
