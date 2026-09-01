/* ---------- Lightbox galerija (kratki pregled na naslovnici) ---------- */
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

/* ---------- Cjenik / kalendar ---------- */
function nazivMjeseca(i) {
  return (PRIJEVODI[trenutniJezik()] || PRIJEVODI.hr).mjeseci[i];
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function uMMDD(mjesec, dan) {
  return `${pad(mjesec + 1)}-${pad(dan)}`;
}

function mmddURasponu(mmdd, od, doD) {
  if (od <= doD) return mmdd >= od && mmdd <= doD;
  return mmdd >= od || mmdd <= doD; // raspon koji prelazi iz prosinca u siječanj
}

function cijenaZaDatum(dateStr, mmdd) {
  if (Object.prototype.hasOwnProperty.call(POSEBNE_CIJENE, dateStr)) {
    return POSEBNE_CIJENE[dateStr];
  }
  let nadjena = null;
  SEZONE.forEach((sezona) => {
    if (mmddURasponu(mmdd, sezona.od, sezona.do)) nadjena = sezona.cijena;
  });
  return nadjena;
}

function todayStr() {
  const t = new Date();
  return `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`;
}
const DANAS = todayStr();

function noviDatumString(dateStr, dodajDana) {
  const d = new Date(`${dateStr}T00:00:00`);
  d.setDate(d.getDate() + dodajDana);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Najraniji datum dolaska koji gost smije odabrati (danas + MIN_DANA_UNAPRIJED)
const NAJRANIJI_DOLAZAK = noviDatumString(DANAS, MIN_DANA_UNAPRIJED);

function jeZauzet(dateStr) {
  if (ZAUZETI_DATUMI.includes(dateStr)) return true;
  return ZAUZETI_RASPONI.some((r) => dateStr >= r.od && dateStr <= r.do);
}

function brojNoci(pocetak, kraj) {
  const p = new Date(`${pocetak}T00:00:00`);
  const k = new Date(`${kraj}T00:00:00`);
  return Math.round((k - p) / 86400000);
}

function formatDatumHR(dateStr) {
  const [g, m, d] = dateStr.split("-");
  return `${parseInt(d, 10)}.${parseInt(m, 10)}.${g}.`;
}

function minNociZaDatum(dateStr) {
  let min = MIN_NOCI;
  IZNIMKE_MIN_BORAVKA.forEach((iznimka) => {
    if (dateStr >= iznimka.od && dateStr <= iznimka.do) min = iznimka.minNoci;
  });
  return min;
}

function slobodnoURasponu(pocetak, kraj) {
  let dan = pocetak;
  while (dan < kraj) {
    if (jeZauzet(dan)) return false;
    dan = noviDatumString(dan, 1);
  }
  return true;
}

function ukupnaCijena(pocetak, kraj) {
  let zbroj = 0;
  let dan = pocetak;
  while (dan < kraj) {
    zbroj += cijenaZaDatum(dan, dan.slice(5)) || 0;
    dan = noviDatumString(dan, 1);
  }
  return zbroj;
}

let prikazanaGodina = new Date().getFullYear();
let prikazaniMjesec = new Date().getMonth(); // 0-11
let odabranPocetak = null; // "GGGG-MM-DD"
let odabranKraj = null;

/* ---------- Brzi odabir mjeseca / godine ---------- */
const mjesecGumb = document.getElementById("mjesecGumb");
const godinaGumb = document.getElementById("godinaGumb");
const mjesecDropdown = document.getElementById("mjesecDropdown");
const godinaDropdown = document.getElementById("godinaDropdown");

for (let i = 0; i < 12; i++) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = nazivMjeseca(i);
  b.dataset.mjesec = i;
  b.addEventListener("click", () => {
    prikazaniMjesec = i;
    zatvoriPickere();
    iscrtajKalendar();
  });
  mjesecDropdown.appendChild(b);
}

function azurirajNazivMjeseciUIzborniku() {
  mjesecDropdown.querySelectorAll("button").forEach((b) => {
    b.textContent = nazivMjeseca(Number(b.dataset.mjesec));
  });
}
document.addEventListener("jezik-promijenjen", azurirajNazivMjeseciUIzborniku);

const GODINA_SADA = new Date().getFullYear();
for (let g = GODINA_SADA; g <= GODINA_SADA + 3; g++) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = `${g}.`;
  b.dataset.godina = g;
  b.addEventListener("click", () => {
    prikazanaGodina = g;
    zatvoriPickere();
    iscrtajKalendar();
  });
  godinaDropdown.appendChild(b);
}

function zatvoriPickere() {
  mjesecDropdown.classList.remove("open");
  godinaDropdown.classList.remove("open");
  mjesecGumb.classList.remove("active");
  godinaGumb.classList.remove("active");
}

mjesecGumb.addEventListener("click", (e) => {
  e.stopPropagation();
  const bioOtvoren = mjesecDropdown.classList.contains("open");
  zatvoriPickere();
  if (!bioOtvoren) { mjesecDropdown.classList.add("open"); mjesecGumb.classList.add("active"); }
});
godinaGumb.addEventListener("click", (e) => {
  e.stopPropagation();
  const bioOtvoren = godinaDropdown.classList.contains("open");
  zatvoriPickere();
  if (!bioOtvoren) { godinaDropdown.classList.add("open"); godinaGumb.classList.add("active"); }
});
document.addEventListener("click", zatvoriPickere);

/* ---------- Odabir raspona boravka ---------- */
function naDanKliknut(dateStr) {
  if (!odabranPocetak || odabranKraj) {
    odabranPocetak = dateStr;
    odabranKraj = null;
  } else if (dateStr > odabranPocetak) {
    odabranKraj = dateStr;
  } else {
    odabranPocetak = dateStr;
    odabranKraj = null;
  }
  iscrtajKalendar();
  iscrtajSazetak();
}

function iscrtajSazetak() {
  const wrap = document.getElementById("odabirSazetak");

  if (!odabranPocetak) {
    wrap.innerHTML = `<p class="booking-hint">${t("booking_hint_pocetni")}</p>`;
    return;
  }
  if (odabranPocetak && !odabranKraj) {
    wrap.innerHTML = `<p class="booking-hint">${t("booking_hint_dolazak", { datum: `<strong>${formatDatumHR(odabranPocetak)}</strong>` })}</p>`;
    return;
  }
  if (!slobodnoURasponu(odabranPocetak, odabranKraj)) {
    wrap.innerHTML = `<p class="booking-warning">${t("booking_warning_zauzeto")}</p>`;
    return;
  }

  const noci = brojNoci(odabranPocetak, odabranKraj);
  const potrebnoNoci = minNociZaDatum(odabranPocetak);
  if (noci < potrebnoNoci) {
    wrap.innerHTML = `<p class="booking-warning">${t("booking_warning_min", {
      min: potrebnoNoci,
      minRijec: mnozina(potrebnoNoci, "nocenje"),
      noci: noci,
      nociRijec: mnozina(noci, "nocenje"),
    })}</p>`;
    return;
  }

  const cijenaUkupno = ukupnaCijena(odabranPocetak, odabranKraj);
  wrap.innerHTML = `
    <div class="booking-ok">
      <span class="booking-ok-dates">${formatDatumHR(odabranPocetak)} – ${formatDatumHR(odabranKraj)} · ${noci} ${mnozina(noci, "nocenje")}</span>
      <span class="booking-ok-total">${cijenaUkupno} €</span>
      <button type="button" class="btn btn-primary" id="posaljiUpitGumb">${t("booking_ok_button")}</button>
    </div>
  `;
  document.getElementById("posaljiUpitGumb").addEventListener("click", () => {
    document.querySelector('#upitForma [name="datumi"]').value =
      `${formatDatumHR(odabranPocetak)} – ${formatDatumHR(odabranKraj)} (${noci} ${mnozina(noci, "nocenje")})`;
    document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
    document.querySelector('#upitForma [name="ime"]').focus();
  });
}

function iscrtajKalendar() {
  mjesecGumb.textContent = nazivMjeseca(prikazaniMjesec);
  godinaGumb.textContent = `${prikazanaGodina}.`;
  mjesecDropdown.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("trenutno", Number(b.dataset.mjesec) === prikazaniMjesec);
  });
  godinaDropdown.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("trenutno", Number(b.dataset.godina) === prikazanaGodina);
  });

  const grid = document.getElementById("kalendarGrid");
  grid.innerHTML = "";

  const prviDan = new Date(prikazanaGodina, prikazaniMjesec, 1);
  // JS: 0=nedjelja...6=subota -> pretvaramo u tjedan koji počinje ponedjeljkom
  const praznihNaPocetku = (prviDan.getDay() + 6) % 7;
  const brojDana = new Date(prikazanaGodina, prikazaniMjesec + 1, 0).getDate();

  for (let i = 0; i < praznihNaPocetku; i++) {
    const prazno = document.createElement("div");
    prazno.className = "cal-day empty";
    grid.appendChild(prazno);
  }

  for (let dan = 1; dan <= brojDana; dan++) {
    const dateStr = `${prikazanaGodina}-${pad(prikazaniMjesec + 1)}-${pad(dan)}`;
    const mmdd = uMMDD(prikazaniMjesec, dan);
    const zauzet = jeZauzet(dateStr);
    const prosli = dateStr < NAJRANIJI_DOLAZAK;
    const cijena = cijenaZaDatum(dateStr, mmdd);

    const cell = document.createElement("div");
    let klase = "cal-day";
    if (prosli) klase += " prosli";
    else if (zauzet) klase += " zauzeto";
    else {
      klase += " slobodno";
      if (dateStr === odabranPocetak) klase += " pocetak";
      else if (dateStr === odabranKraj) klase += " kraj";
      else if (odabranPocetak && odabranKraj && dateStr > odabranPocetak && dateStr < odabranKraj) klase += " u-rasponu";
    }
    cell.className = klase;

    const brojEl = document.createElement("span");
    brojEl.className = "day-num";
    brojEl.textContent = dan;

    const cijenaEl = document.createElement("span");
    cijenaEl.className = "day-price";
    cijenaEl.textContent = zauzet ? t("cal_zauzeto") : (cijena != null ? `${cijena} €` : "");

    cell.appendChild(brojEl);
    cell.appendChild(cijenaEl);

    if (!prosli && !zauzet) {
      cell.addEventListener("click", () => naDanKliknut(dateStr));
    }

    grid.appendChild(cell);
  }
}

document.getElementById("mjesecPrije").addEventListener("click", () => {
  prikazaniMjesec--;
  if (prikazaniMjesec < 0) { prikazaniMjesec = 11; prikazanaGodina--; }
  iscrtajKalendar();
});
document.getElementById("mjesecPoslije").addEventListener("click", () => {
  prikazaniMjesec++;
  if (prikazaniMjesec > 11) { prikazaniMjesec = 0; prikazanaGodina++; }
  iscrtajKalendar();
});
iscrtajKalendar();
iscrtajSazetak();
document.addEventListener("jezik-promijenjen", () => {
  iscrtajKalendar();
  iscrtajSazetak();
});

/* ---------- Recenzije ---------- */
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
      <p class="review-text"></p>
      ${imaPrijevod ? `<button type="button" class="review-translate-btn"></button>` : ""}
      <p class="review-author">${r.autor}</p>
    `;

    const tekstEl = card.querySelector(".review-text");
    tekstEl.textContent = `"${r.tekst}"`;

    if (imaPrijevod) {
      const gumbPrijevod = card.querySelector(".review-translate-btn");
      let prevedeno = false;
      gumbPrijevod.textContent = t("review_prevedi");
      gumbPrijevod.addEventListener("click", () => {
        prevedeno = !prevedeno;
        tekstEl.textContent = prevedeno ? `"${r.prijevodi[trenutniJezik()]}"` : `"${r.tekst}"`;
        gumbPrijevod.textContent = prevedeno ? t("review_izvornik") : t("review_prevedi");
      });
    }

    recenzijeGrid.appendChild(card);
  });
}
iscrtajRecenzije();
document.addEventListener("jezik-promijenjen", iscrtajRecenzije);

/* ---------- Kontakt forma (šalje se putem WhatsAppa) ---------- */
document.getElementById("upitForma").addEventListener("submit", (e) => {
  e.preventDefault();
  const podaci = new FormData(e.target);
  const ime = podaci.get("ime");
  const email = podaci.get("email");
  const datumi = podaci.get("datumi");
  const gosti = podaci.get("gosti");
  const poruka = podaci.get("poruka");

  // Poruka domaćinu uvijek ide na hrvatskom, bez obzira na jezik koji je gost odabrao na stranici.
  let tekstPoruke =
    `Upit za rezervaciju - Apartman Stara Kuća\n` +
    `Ime i prezime: ${ime}\n` +
    `E-mail: ${email}\n` +
    `Datum dolaska / odlaska: ${datumi}\n` +
    `Broj gostiju: ${gosti}`;
  if (poruka) tekstPoruke += `\nPoruka: ${poruka}`;

  const whatsappHref = document.querySelector('a[href^="https://wa.me/"]').href.split("?")[0];
  window.open(`${whatsappHref}?text=${encodeURIComponent(tekstPoruke)}`, "_blank", "noopener");

  document.getElementById("upitPotvrda").hidden = false;
  e.target.reset();
});
