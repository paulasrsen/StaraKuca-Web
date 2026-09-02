/* Dijelovi zajednički svim stranicama: godina u podnožju, mobilni izbornik, gumb "natrag na vrh". */

function iscrtajFooterPrava() {
  const el = document.getElementById("footerPrava");
  if (el) el.textContent = t("footer_rights", { godina: new Date().getFullYear() });
}
iscrtajFooterPrava();
document.addEventListener("jezik-promijenjen", iscrtajFooterPrava);

const hamburger = document.getElementById("hamburger");
const glavniMeni = document.getElementById("glavniMeni");
if (hamburger && glavniMeni) {
  hamburger.addEventListener("click", () => {
    const open = glavniMeni.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });
  glavniMeni.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      glavniMeni.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });
}

const gumbNatrag = document.getElementById("natrag");
if (gumbNatrag) {
  window.addEventListener("scroll", () => {
    gumbNatrag.classList.toggle("visible", window.scrollY > 500);
  });
  gumbNatrag.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* Samo na naslovnici (index.html): na mobitelu se sadržaj (O nama/Cjenik/Recenzije/Kontakt) ne
   prikazuje na istoj stranici nego na zasebnim stranicama, pa izbornik i gumb "Rezervirajte" tamo
   moraju voditi na te stranice umjesto na dijelove (#sidro) iste stranice. Na desktopu i tabletu
   ostaje sve isto (skrolanje po jednoj stranici). */
if (document.body.dataset.mobilniHub === "true" && window.innerWidth > 0 && window.innerWidth <= 640) {
  const preslikavanjeSidra = {
    "#o-apartmanu": "o-nama.html",
    "#cjenik": "cjenik.html",
    "#recenzije": "recenzije.html",
    "#kontakt": "kontakt.html",
  };
  document.querySelectorAll('#glavniMeni a[href^="#"], .nav-cta[href^="#"]').forEach((a) => {
    const novaAdresa = preslikavanjeSidra[a.getAttribute("href")];
    if (novaAdresa) a.setAttribute("href", novaAdresa);
  });
}
