/* Lightbox za kratki pregled galerije na naslovnici. */
if (document.getElementById("lightbox") && document.querySelector(".gallery-item")) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  document.querySelectorAll(".gallery-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      lightboxImg.src = btn.dataset.full;
      lightboxImg.alt = btn.querySelector("img").alt;
      lightbox.classList.add("open");
    });
  });
  document.getElementById("lightboxClose").addEventListener("click", () => {
    lightbox.classList.remove("open");
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("open");
  });
}
