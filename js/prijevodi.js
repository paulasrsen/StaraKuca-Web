/*
  SUSTAV ZA PRIJEVODE (HR / EN / DE).
  Svaki red ispod je jedan komad teksta na stranici. Ako želite promijeniti neki tekst,
  potražite isti "ključ" (riječ prije dvotočke) u sva tri jezika (hr, en, de) i uredite ga.
  Redoslijed ključeva nije bitan, samo mora ostati isti naziv ključa u sva tri rječnika.
*/
const PRIJEVODI = {
  hr: {
    nav_o_apartmanu: "O apartmanu",
    nav_galerija: "Galerija",
    nav_cjenik: "Cjenik",
    nav_recenzije: "Recenzije",
    nav_kontakt: "Kontakt",
    nav_rezervirajte: "Rezervirajte",
    aria_izbornik: "Otvori izbornik",
    aria_zatvori: "Zatvori",
    aria_prethodna_slika: "Prethodna slika",
    aria_sljedeca_slika: "Sljedeća slika",
    aria_vrh: "Povratak na vrh",
    aria_whatsapp: "WhatsApp",

    title_pocetna: "Apartman Stara Kuća",
    title_galerija: "Fotogalerija - Apartman Stara Kuća",
    meta_desc_pocetna: "Apartman Stara Kuća – ugodan smještaj za vaš odmor. Pogledajte slike, cijene i recenzije gostiju.",
    meta_desc_galerija: "Fotogalerija apartmana Stara Kuća - pogledajte apartman i okolicu.",

    hero_eyebrow: "Dobrodošli u",
    hero_subtitle: "Kamena priča, moderna udobnost. Vaš mir usred stare gradske jezgre.",
    hero_btn_cjenik: "Pogledajte cjenik",
    hero_btn_slike: "Pogledajte slike",

    about_eyebrow: "Dobrodošli",
    about_title: "O apartmanu",
    about_text_1: "Apartman <strong>Stara Kuća</strong> nalazi se u stogodišnjoj kamenoj kući koju smo 2023. godine pažljivo obnovili i tada počeli iznajmljivati gostima. Na 88 m² prostiru se tri prostrane spavaće sobe, svaka s bračnim krevetom i vlastitom kupaonicom, pa je apartman idealan za do 6 gostiju - obitelji, grupe prijatelja ili dvije obitelji zajedno. Uživajte na balkonu s pogledom ili u vrtu tik uz more, u mirnom, obiteljski nastrojenom malom mjestu gdje je sve nadohvat ruke.",
    about_text_2: "Nalazimo se točno na pola puta između Splita i Dubrovnika, savršena polazna točka za dnevne izlete brodom do otoka Korčule i drugih obližnjih otoka - u mjestu se organiziraju i ture brodom do prekrasnih skrivenih lokacija. Obližnja plaža poznata je po kitesurfingu, a okolna mala mjesta nude bogat ljetni program, uključujući tradicionalni maraton lađa.",
    amenity_wifi: "Besplatan WiFi",
    amenity_klima: "Klima uređaj",
    amenity_parking: "Parking",
    amenity_kuhinja: "Opremljena kuhinja",
    amenity_perilica: "Perilica rublja",
    amenity_posteljina: "Čista posteljina i ručnici",
    amenity_kupaonice: "Privatna kupaonica u svakoj sobi",
    amenity_balkon: "Balkon i vrt uz more",
    amenity_ljubimci: "Ljubimci nisu dopušteni",
    amenity_pusenje: "Zabranjeno pušenje",
    amenity_grijanje: "Podno grijanje",
    amenity_rostilj: "Vanjski roštilj",

    gallery_eyebrow: "Pogledajte",
    gallery_title: "Galerija",
    gallery_btn_sve: "Pogledajte cijelu galeriju",

    cjenik_eyebrow: "Planirajte",
    cjenik_title: "Cjenik i dostupnost",
    cjenik_lead: "Cijene po noćenju prikazane su ispod svakog datuma. Odaberite datum dolaska i datum odlaska klikom na kalendar. Rezervacija je moguća najranije dva dana unaprijed.",
    dan_pon: "Pon", dan_uto: "Uto", dan_sri: "Sri", dan_cet: "Čet", dan_pet: "Pet", dan_sub: "Sub", dan_ned: "Ned",
    mjeseci: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
    legend_slobodno: "Slobodno",
    legend_zauzeto: "Zauzeto",
    legend_odabrano: "Odabrano",
    cal_zauzeto: "Zauzeto",
    booking_hint_pocetni: "Kliknite datum dolaska, pa datum odlaska.",
    booking_hint_dolazak: "Dolazak: {datum}. Sada kliknite datum odlaska.",
    booking_warning_zauzeto: "U odabranom razdoblju postoji već rezerviran datum. Molimo odaberite drugi raspon.",
    booking_warning_min: "Minimalni boravak za odabrani datum dolaska je {min} {minRijec} (odabrali ste {noci} {nociRijec}). Za kraći boravak kontaktirajte nas izravno.",
    booking_ok_button: "Pošaljite upit za ove datume",

    reviews_eyebrow: "Što kažu gosti",
    reviews_title: "Recenzije",
    reviews_lead: "Pogledajte što naši gosti kažu o svom boravku.",
    review_prevedi: "Prevedi",
    review_izvornik: "Prikaži izvornik",
    review_procitaj_vise: "Pročitaj više",
    review_prikazi_manje: "Prikaži manje",

    policy_title: "Uvjeti rezervacije",
    policy_depozit: "Za potvrdu rezervacije potreban je depozit u iznosu od 30% ukupnog iznosa rezervacije.",
    policy_otkazivanje: "Besplatno otkazivanje moguće je najkasnije mjesec dana prije datuma dolaska.",

    mob_poziv: "Poziv",

    kontakt_eyebrow: "Javite nam se",
    kontakt_title: "Kontakt i rezervacije",
    kontakt_poziv_label: "Nazovite nas",
    kontakt_email_label: "Pošaljite e-mail",
    kontakt_whatsapp_label: "WhatsApp",
    kontakt_whatsapp_value: "Pošaljite poruku",
    kontakt_lokacija_label: "Lokacija",
    form_title: "Pošaljite upit",
    form_ime_label: "Ime i prezime",
    form_email_label: "E-mail",
    form_datumi_label: "Datum dolaska / odlaska",
    form_datumi_placeholder: "npr. 12.7. – 19.7.2026.",
    form_gosti_label: "Broj gostiju",
    form_gosti_placeholder: "Odaberite broj gostiju",
    form_poruka_label: "Poruka (nije obavezno)",
    form_poruka_placeholder: "Dodatne napomene ili pitanja...",
    form_submit_btn: "Pošaljite upit putem WhatsAppa",
    form_note: "Otvorit će se WhatsApp s pripremljenom porukom - samo je potvrdite i pošaljite.",
    form_success_title: "Upit je pripremljen!",
    form_success_text: "Poslat će se domaćinu čim potvrdite slanje u WhatsAppu. Javit ćemo vam se u najkraćem roku.",

    footer_rights: "© {godina} Apartman Stara Kuća. Sva prava pridržana.",
    footer_credit_pocetna: "Izrada stranice: prilagodite sadržaj u index.html, js/podaci.js i mapi images.",
    footer_credit_galerija: "Slike dodajete u js/galerija-podaci.js i mapu images.",

    galerija_eyebrow: "Pogledajte",
    galerija_h1: "Fotogalerija",
    galerija_lead: "Apartman Stara Kuća i njegova okolica - kliknite na sliku za veći prikaz.",
    filter_sve: "Sve",
    filter_soba1: "Soba 1",
    filter_soba2: "Soba 2",
    filter_soba3: "Soba 3",
    filter_zajednicki: "Zajednički prostori",
    filter_vanjski: "Vrt i okoliš",
    filter_ostalo: "Ostalo",
  },

  en: {
    nav_o_apartmanu: "About",
    nav_galerija: "Gallery",
    nav_cjenik: "Prices",
    nav_recenzije: "Reviews",
    nav_kontakt: "Contact",
    nav_rezervirajte: "Book now",
    aria_izbornik: "Open menu",
    aria_zatvori: "Close",
    aria_prethodna_slika: "Previous photo",
    aria_sljedeca_slika: "Next photo",
    aria_vrh: "Back to top",
    aria_whatsapp: "WhatsApp",

    title_pocetna: "Stara Kuća Apartment",
    title_galerija: "Photo Gallery - Stara Kuća Apartment",
    meta_desc_pocetna: "Stara Kuća Apartment – a cozy stay for your holiday. See photos, prices and guest reviews.",
    meta_desc_galerija: "Photo gallery of the Stara Kuća apartment - see the apartment and its surroundings.",

    hero_eyebrow: "Welcome to",
    hero_subtitle: "A stone-house story, modern comfort. Your peace and quiet in the heart of the old town.",
    hero_btn_cjenik: "View prices",
    hero_btn_slike: "View photos",

    about_eyebrow: "Welcome",
    about_title: "About the apartment",
    about_text_1: "The <strong>Stara Kuća</strong> apartment is set in a hundred-year-old stone house that we carefully renovated in 2023, when we began welcoming guests. Spread across 88 m², it offers three spacious bedrooms, each with a double bed and its own private bathroom, making it ideal for up to 6 guests - families, groups of friends, or two families travelling together. Relax on the balcony with a view, or in the garden right by the sea, in a quiet, family-friendly little village where everything is close at hand.",
    about_text_2: "We're located exactly halfway between Split and Dubrovnik - the perfect base for day trips by boat to the island of Korčula and other nearby islands, and the village also offers boat tours to beautiful hidden spots along the coast. The nearby beach is known for kitesurfing, and the surrounding small towns host a lively summer programme, including the traditional rowing-boat marathon (\"maraton lađa\").",
    amenity_wifi: "Free WiFi",
    amenity_klima: "Air conditioning",
    amenity_parking: "Parking",
    amenity_kuhinja: "Fully equipped kitchen",
    amenity_perilica: "Washing machine",
    amenity_posteljina: "Fresh linens and towels",
    amenity_kupaonice: "Private bathroom in every room",
    amenity_balkon: "Balcony and garden by the sea",
    amenity_ljubimci: "Pets not allowed",
    amenity_pusenje: "No smoking",
    amenity_grijanje: "Underfloor heating",
    amenity_rostilj: "Outdoor grill",

    gallery_eyebrow: "Take a look",
    gallery_title: "Gallery",
    gallery_btn_sve: "See the full gallery",

    cjenik_eyebrow: "Plan your stay",
    cjenik_title: "Prices & availability",
    cjenik_lead: "Prices per night are shown under each date. Select your arrival and departure date by clicking the calendar. Bookings are possible at least two days in advance.",
    dan_pon: "Mon", dan_uto: "Tue", dan_sri: "Wed", dan_cet: "Thu", dan_pet: "Fri", dan_sub: "Sat", dan_ned: "Sun",
    mjeseci: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    legend_slobodno: "Available",
    legend_zauzeto: "Booked",
    legend_odabrano: "Selected",
    cal_zauzeto: "Booked",
    booking_hint_pocetni: "Click your arrival date, then your departure date.",
    booking_hint_dolazak: "Arrival: {datum}. Now click your departure date.",
    booking_warning_zauzeto: "The selected period includes an already booked date. Please choose a different range.",
    booking_warning_min: "The minimum stay for this arrival date is {min} {minRijec} (you selected {noci} {nociRijec}). For a shorter stay, please contact us directly.",
    booking_ok_button: "Send an inquiry for these dates",

    reviews_eyebrow: "What guests say",
    reviews_title: "Reviews",
    reviews_lead: "See what our guests say about their stay.",
    review_prevedi: "Translate",
    review_izvornik: "Show original",
    review_procitaj_vise: "Read more",
    review_prikazi_manje: "Show less",

    policy_title: "Booking policy",
    policy_depozit: "A deposit of 30% of the total booking amount is required to confirm your reservation.",
    policy_otkazivanje: "Free cancellation is possible up to one month before your arrival date.",

    mob_poziv: "Call",

    kontakt_eyebrow: "Get in touch",
    kontakt_title: "Contact & bookings",
    kontakt_poziv_label: "Call us",
    kontakt_email_label: "Send an email",
    kontakt_whatsapp_label: "WhatsApp",
    kontakt_whatsapp_value: "Send a message",
    kontakt_lokacija_label: "Location",
    form_title: "Send an inquiry",
    form_ime_label: "Full name",
    form_email_label: "Email",
    form_datumi_label: "Arrival / departure date",
    form_datumi_placeholder: "e.g. 12 Jul – 19 Jul 2026",
    form_gosti_label: "Number of guests",
    form_gosti_placeholder: "Select number of guests",
    form_poruka_label: "Message (optional)",
    form_poruka_placeholder: "Any extra notes or questions...",
    form_submit_btn: "Send inquiry via WhatsApp",
    form_note: "WhatsApp will open with your message ready - just confirm and send it.",
    form_success_title: "Inquiry ready!",
    form_success_text: "It will be sent to the host once you confirm it in WhatsApp. We'll get back to you as soon as possible.",

    footer_rights: "© {godina} Stara Kuća Apartment. All rights reserved.",
    footer_credit_pocetna: "Editing the site: update the content in index.html, js/podaci.js and the images folder.",
    footer_credit_galerija: "Add photos in js/galerija-podaci.js and the images folder.",

    galerija_eyebrow: "Take a look",
    galerija_h1: "Photo Gallery",
    galerija_lead: "The Stara Kuća apartment and its surroundings - click a photo for a larger view.",
    filter_sve: "All",
    filter_soba1: "Room 1",
    filter_soba2: "Room 2",
    filter_soba3: "Room 3",
    filter_zajednicki: "Common areas",
    filter_vanjski: "Garden & surroundings",
    filter_ostalo: "Other",
  },

  de: {
    nav_o_apartmanu: "Über uns",
    nav_galerija: "Galerie",
    nav_cjenik: "Preise",
    nav_recenzije: "Bewertungen",
    nav_kontakt: "Kontakt",
    nav_rezervirajte: "Jetzt buchen",
    aria_izbornik: "Menü öffnen",
    aria_zatvori: "Schließen",
    aria_prethodna_slika: "Vorheriges Foto",
    aria_sljedeca_slika: "Nächstes Foto",
    aria_vrh: "Nach oben",
    aria_whatsapp: "WhatsApp",

    title_pocetna: "Apartment Stara Kuća",
    title_galerija: "Fotogalerie - Apartment Stara Kuća",
    meta_desc_pocetna: "Apartment Stara Kuća – ein gemütlicher Aufenthalt für Ihren Urlaub. Fotos, Preise und Gästebewertungen ansehen.",
    meta_desc_galerija: "Fotogalerie des Apartments Stara Kuća - Apartment und Umgebung ansehen.",

    hero_eyebrow: "Willkommen im",
    hero_subtitle: "Ein Steinhaus mit Geschichte, moderner Komfort. Ihre Ruhe mitten in der Altstadt.",
    hero_btn_cjenik: "Preise ansehen",
    hero_btn_slike: "Fotos ansehen",

    about_eyebrow: "Willkommen",
    about_title: "Über das Apartment",
    about_text_1: "Das Apartment <strong>Stara Kuća</strong> befindet sich in einem hundert Jahre alten Steinhaus, das wir 2023 sorgfältig renoviert haben - seitdem empfangen wir hier Gäste. Auf 88 m² bietet es drei geräumige Schlafzimmer, jedes mit Doppelbett und eigenem Bad, und ist damit ideal für bis zu 6 Gäste - Familien, Freundesgruppen oder zwei gemeinsam reisende Familien. Genießen Sie den Balkon mit Aussicht oder den Garten direkt am Meer, in einem ruhigen, familienfreundlichen kleinen Ort, in dem alles nah beieinander liegt.",
    about_text_2: "Wir liegen genau auf halbem Weg zwischen Split und Dubrovnik - der perfekte Ausgangspunkt für Tagesausflüge mit dem Boot zur Insel Korčula und zu anderen nahegelegenen Inseln. Im Ort werden zudem Bootstouren zu wunderschönen, versteckten Orten angeboten. Der nahe gelegene Strand ist für Kitesurfen bekannt, und die umliegenden kleinen Orte bieten ein reichhaltiges Sommerprogramm, darunter das traditionelle Ruderboot-Rennen (\"maraton lađa\").",
    amenity_wifi: "Kostenloses WLAN",
    amenity_klima: "Klimaanlage",
    amenity_parking: "Parkplatz",
    amenity_kuhinja: "Voll ausgestattete Küche",
    amenity_perilica: "Waschmaschine",
    amenity_posteljina: "Frische Bettwäsche und Handtücher",
    amenity_kupaonice: "Eigenes Bad in jedem Zimmer",
    amenity_balkon: "Balkon und Garten am Meer",
    amenity_ljubimci: "Haustiere nicht erlaubt",
    amenity_pusenje: "Rauchen verboten",
    amenity_grijanje: "Fußbodenheizung",
    amenity_rostilj: "Grill im Freien",

    gallery_eyebrow: "Ansehen",
    gallery_title: "Galerie",
    gallery_btn_sve: "Zur vollständigen Galerie",

    cjenik_eyebrow: "Planen Sie",
    cjenik_title: "Preise & Verfügbarkeit",
    cjenik_lead: "Die Preise pro Nacht werden unter jedem Datum angezeigt. Wählen Sie Ihr An- und Abreisedatum durch Klicken auf den Kalender. Buchungen sind frühestens zwei Tage im Voraus möglich.",
    dan_pon: "Mo", dan_uto: "Di", dan_sri: "Mi", dan_cet: "Do", dan_pet: "Fr", dan_sub: "Sa", dan_ned: "So",
    mjeseci: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    legend_slobodno: "Frei",
    legend_zauzeto: "Belegt",
    legend_odabrano: "Ausgewählt",
    cal_zauzeto: "Belegt",
    booking_hint_pocetni: "Klicken Sie zuerst auf das Anreisedatum, dann auf das Abreisedatum.",
    booking_hint_dolazak: "Anreise: {datum}. Klicken Sie nun auf das Abreisedatum.",
    booking_warning_zauzeto: "Der gewählte Zeitraum enthält bereits ein gebuchtes Datum. Bitte wählen Sie einen anderen Zeitraum.",
    booking_warning_min: "Der Mindestaufenthalt für dieses Anreisedatum beträgt {min} {minRijec} (Sie haben {noci} {nociRijec} gewählt). Für einen kürzeren Aufenthalt kontaktieren Sie uns bitte direkt.",
    booking_ok_button: "Anfrage für diese Termine senden",

    reviews_eyebrow: "Das sagen unsere Gäste",
    reviews_title: "Bewertungen",
    reviews_lead: "Lesen Sie, was unsere Gäste über ihren Aufenthalt sagen.",
    review_prevedi: "Übersetzen",
    review_izvornik: "Original anzeigen",
    review_procitaj_vise: "Mehr lesen",
    review_prikazi_manje: "Weniger anzeigen",

    policy_title: "Buchungsbedingungen",
    policy_depozit: "Zur Bestätigung der Reservierung ist eine Anzahlung von 30% des Gesamtbetrags erforderlich.",
    policy_otkazivanje: "Eine kostenlose Stornierung ist bis spätestens einen Monat vor dem Anreisedatum möglich.",

    mob_poziv: "Anrufen",

    kontakt_eyebrow: "Kontaktieren Sie uns",
    kontakt_title: "Kontakt & Buchung",
    kontakt_poziv_label: "Rufen Sie uns an",
    kontakt_email_label: "E-Mail senden",
    kontakt_whatsapp_label: "WhatsApp",
    kontakt_whatsapp_value: "Nachricht senden",
    kontakt_lokacija_label: "Lage",
    form_title: "Anfrage senden",
    form_ime_label: "Vor- und Nachname",
    form_email_label: "E-Mail",
    form_datumi_label: "An- / Abreisedatum",
    form_datumi_placeholder: "z. B. 12.7. – 19.7.2026",
    form_gosti_label: "Anzahl der Gäste",
    form_gosti_placeholder: "Anzahl der Gäste wählen",
    form_poruka_label: "Nachricht (optional)",
    form_poruka_placeholder: "Weitere Anmerkungen oder Fragen...",
    form_submit_btn: "Anfrage per WhatsApp senden",
    form_note: "WhatsApp öffnet sich mit Ihrer vorbereiteten Nachricht - bestätigen Sie einfach und senden Sie sie ab.",
    form_success_title: "Anfrage bereit!",
    form_success_text: "Sie wird an den Gastgeber gesendet, sobald Sie sie in WhatsApp bestätigen. Wir melden uns so schnell wie möglich bei Ihnen.",

    footer_rights: "© {godina} Apartment Stara Kuća. Alle Rechte vorbehalten.",
    footer_credit_pocetna: "Website bearbeiten: Inhalte in index.html, js/podaci.js und im Ordner images anpassen.",
    footer_credit_galerija: "Fotos hinzufügen in js/galerija-podaci.js und im Ordner images.",

    galerija_eyebrow: "Ansehen",
    galerija_h1: "Fotogalerie",
    galerija_lead: "Das Apartment Stara Kuća und seine Umgebung - klicken Sie auf ein Foto für eine größere Ansicht.",
    filter_sve: "Alle",
    filter_soba1: "Zimmer 1",
    filter_soba2: "Zimmer 2",
    filter_soba3: "Zimmer 3",
    filter_zajednicki: "Gemeinschaftsbereiche",
    filter_vanjski: "Garten & Umgebung",
    filter_ostalo: "Sonstiges",
  },
};

// Popis jezika za gumbe u izborniku - dodajte redak ovdje da dodate novi jezik
// (uz odgovarajući rječnik gore). Umjesto zastavica koriste se skraćenice (HR/EN/DE) jer se
// emoji zastavice ne prikazuju ispravno u svim preglednicima/sustavima (znaju se pojaviti kao slova).
const JEZICI = [
  { kod: "hr", oznaka: "HR", naziv: "Hrvatski" },
  { kod: "en", oznaka: "EN", naziv: "English" },
  { kod: "de", oznaka: "DE", naziv: "Deutsch" },
];

function trenutniJezik() {
  return localStorage.getItem("jezik") || "hr";
}

function postaviJezik(kod) {
  localStorage.setItem("jezik", kod);
  primijeniJezik();
}

function t(kljuc, parametri) {
  const rjecnik = PRIJEVODI[trenutniJezik()] || PRIJEVODI.hr;
  let tekst = rjecnik[kljuc] !== undefined ? rjecnik[kljuc] : (PRIJEVODI.hr[kljuc] || kljuc);
  if (parametri) {
    Object.keys(parametri).forEach((k) => {
      tekst = tekst.split(`{${k}}`).join(parametri[k]);
    });
  }
  return tekst;
}

// Pravilni oblici riječi ovisno o broju (jednina/množina), po jeziku.
function mnozina(broj, oblik) {
  const jezik = trenutniJezik();
  const pravila = {
    hr: {
      fotografija: (n) => {
        const zadnja = n % 10;
        const zadnjeDvije = n % 100;
        if (n === 1) return "fotografija";
        if (zadnja >= 2 && zadnja <= 4 && !(zadnjeDvije >= 12 && zadnjeDvije <= 14)) return "fotografije";
        return "fotografija";
      },
      nocenje: (n) => (n === 1 ? "noćenje" : "noćenja"),
    },
    en: {
      fotografija: (n) => (n === 1 ? "photo" : "photos"),
      nocenje: (n) => (n === 1 ? "night" : "nights"),
    },
    de: {
      fotografija: (n) => (n === 1 ? "Foto" : "Fotos"),
      nocenje: (n) => (n === 1 ? "Nacht" : "Nächte"),
    },
  };
  return (pravila[jezik] || pravila.hr)[oblik](broj);
}

function primijeniJezik() {
  const kod = trenutniJezik();
  document.documentElement.lang = kod;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    el.setAttribute("content", t(el.dataset.i18nContent));
  });

  azurirajZastaveGumbe();
  document.dispatchEvent(new CustomEvent("jezik-promijenjen"));
}

function izgradiPrekidacJezika() {
  document.querySelectorAll(".jezik-prekidac").forEach((wrap) => {
    wrap.innerHTML = "";
    JEZICI.forEach((jezik) => {
      const gumb = document.createElement("button");
      gumb.type = "button";
      gumb.className = "jezik-gumb";
      gumb.textContent = jezik.oznaka;
      gumb.title = jezik.naziv;
      gumb.setAttribute("aria-label", jezik.naziv);
      gumb.dataset.jezik = jezik.kod;
      gumb.addEventListener("click", () => postaviJezik(jezik.kod));
      wrap.appendChild(gumb);
    });
  });
  azurirajZastaveGumbe();
}

function azurirajZastaveGumbe() {
  const kod = trenutniJezik();
  document.querySelectorAll(".jezik-gumb").forEach((gumb) => {
    gumb.classList.toggle("aktivan", gumb.dataset.jezik === kod);
  });
}

izgradiPrekidacJezika();
primijeniJezik();
