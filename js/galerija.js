const filterGumbi = document.querySelectorAll(".filter-btn");
const galerijaGrid = document.getElementById("punaGalerijaGrid");
const brojSlikaEl = document.getElementById("brojSlika");
let trenutniFilter = "sve";
let trenutnaLista = [];
let trenutniIndex = 0;

function iscrtajGaleriju() {
  galerijaGrid.innerHTML = "";
  trenutnaLista = GALERIJA_SLIKE.filter(
    (s) => trenutniFilter === "sve" || s.kategorija === trenutniFilter
  );

  trenutnaLista.forEach((slika, i) => {
    const btn = document.createElement("button");
    btn.className = "gallery-item";
    btn.innerHTML = `<img src="${slika.src}" alt="${slika.alt}" loading="lazy">`;
    btn.addEventListener("click", () => otvoriLightbox(i));
    galerijaGrid.appendChild(btn);
  });

  brojSlikaEl.textContent = `${trenutnaLista.length} ${mnozina(trenutnaLista.length, "fotografija")}`;
}

document.addEventListener("jezik-promijenjen", iscrtajGaleriju);

filterGumbi.forEach((gumb) => {
  gumb.addEventListener("click", () => {
    filterGumbi.forEach((g) => g.classList.remove("active"));
    gumb.classList.add("active");
    trenutniFilter = gumb.dataset.filter;
    iscrtajGaleriju();
  });
});

iscrtajGaleriju();

/* ---------- Lightbox s navigacijom ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxBroj = document.getElementById("lightboxBroj");

function otvoriLightbox(index) {
  trenutniIndex = index;
  prikaziSliku();
  lightbox.classList.add("open");
}

function prikaziSliku() {
  const slika = trenutnaLista[trenutniIndex];
  lightboxImg.src = slika.src;
  lightboxImg.alt = slika.alt;
  lightboxBroj.textContent = `${trenutniIndex + 1} / ${trenutnaLista.length}`;
}

function sljedecaSlika() {
  trenutniIndex = (trenutniIndex + 1) % trenutnaLista.length;
  prikaziSliku();
}

function prethodnaSlika() {
  trenutniIndex = (trenutniIndex - 1 + trenutnaLista.length) % trenutnaLista.length;
  prikaziSliku();
}

document.getElementById("lightboxClose").addEventListener("click", () => {
  lightbox.classList.remove("open");
});
document.getElementById("lightboxNext").addEventListener("click", sljedecaSlika);
document.getElementById("lightboxPrev").addEventListener("click", prethodnaSlika);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") lightbox.classList.remove("open");
  if (e.key === "ArrowRight") sljedecaSlika();
  if (e.key === "ArrowLeft") prethodnaSlika();
});
