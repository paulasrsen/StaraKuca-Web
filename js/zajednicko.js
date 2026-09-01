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
