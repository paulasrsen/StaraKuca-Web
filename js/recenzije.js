/* Recenzije gostiju - radi na svakoj stranici koja ima <div id="recenzijeGrid">. */
if (document.getElementById("recenzijeGrid")) {

  const recenzijeGrid = document.getElementById("recenzijeGrid");
  const IZVOR_LABEL = { booking: "Booking.com", airbnb: "Airbnb" };

  function iscrtajRecenzije() {
    recenzijeGrid.innerHTML = "";

    RECENZIJE.forEach((r) => {
      const card = document.createElement("article");
      card.className = "review-card";

      const zvijezde = "★".repeat(r.ocjena) + "☆".repeat(5 - r.ocjena);
      const imaPrijevod = r.prijevodi && r.izvorniJezik !== trenutniJezik();

      card.innerHTML = `
        <div class="review-top">
          <span class="review-source source-${r.izvor}">${IZVOR_LABEL[r.izvor] || r.izvor}</span>
          <span class="review-stars">${zvijezde}</span>
        </div>
        <p class="review-text klamano"></p>
        <div class="review-actions"></div>
        <p class="review-author">${r.autor}</p>
      `;
      // Prvo dodajemo karticu u dokument - mjerenje visine teksta (za gumb "Pročitaj više")
      // radi ispravno samo dok je element stvarno prikazan na stranici.
      recenzijeGrid.appendChild(card);

      const tekstEl = card.querySelector(".review-text");
      const akcijeEl = card.querySelector(".review-actions");
      let prevedeno = false;
      let prosireno = false;
      let gumbCitaj = null;

      function azurirajGumbCitaj() {
        const potrebno = tekstEl.scrollHeight > tekstEl.clientHeight + 2;
        if (potrebno && !gumbCitaj) {
          gumbCitaj = document.createElement("button");
          gumbCitaj.type = "button";
          gumbCitaj.className = "review-action-btn";
          akcijeEl.appendChild(gumbCitaj);
          gumbCitaj.addEventListener("click", () => {
            prosireno = !prosireno;
            tekstEl.classList.toggle("klamano", !prosireno);
            gumbCitaj.textContent = prosireno ? t("review_prikazi_manje") : t("review_procitaj_vise");
          });
        }
        if (!potrebno && gumbCitaj) {
          gumbCitaj.remove();
          gumbCitaj = null;
        }
        if (gumbCitaj) gumbCitaj.textContent = t("review_procitaj_vise");
      }

      function iscrtajTekst() {
        prosireno = false;
        tekstEl.classList.add("klamano");
        tekstEl.textContent = `"${prevedeno ? r.prijevodi[trenutniJezik()] : r.tekst}"`;
        azurirajGumbCitaj();
      }
      iscrtajTekst();

      if (imaPrijevod) {
        const gumbPrijevod = document.createElement("button");
        gumbPrijevod.type = "button";
        gumbPrijevod.className = "review-action-btn";
        gumbPrijevod.textContent = t("review_prevedi");
        akcijeEl.prepend(gumbPrijevod);
        gumbPrijevod.addEventListener("click", () => {
          prevedeno = !prevedeno;
          gumbPrijevod.textContent = prevedeno ? t("review_izvornik") : t("review_prevedi");
          iscrtajTekst();
        });
      }
    });
  }
  iscrtajRecenzije();
  document.addEventListener("jezik-promijenjen", iscrtajRecenzije);

}
