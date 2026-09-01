/*
  POPIS SVIH SLIKA U GALERIJI.
  Za svaku sliku dodajte jedan redak s tri stvari:
    src        - putanja do datoteke slike (stavite sliku u mapu images/)
    kategorija - jedna od: "soba1", "soba2", "soba3", "zajednicki", "vanjski", "ostalo" (za filtriranje)
    alt        - kratak opis slike (za pristupačnost i tražilice)

  Da dodate novu sliku: kopirajte fotografiju u mapu images/, pa ovdje dodajte
  novi redak po uzoru na postojeće (ne zaboravite zarez na kraju prethodnog retka).
  Slika se odmah pojavljuje u galeriji - ne treba dirati ništa drugo. Radi i s .jpg, .jpeg,
  .png i .svg datotekama.

  Ako dodate četvrtu sobu ili novu kategoriju, dodajte novi filter i u galerija.html
  (kopirajte jedan <button class="filter-btn">) i prijevod u js/prijevodi.js (ključevi filter_...).
*/
const GALERIJA_SLIKE = [
  { src: "images/Soba1.jpg", kategorija: "soba1", alt: "Soba 1" },
  { src: "images/Soba11.jpg", kategorija: "soba1", alt: "Soba 1" },
  { src: "images/Soba111.jpg", kategorija: "soba1", alt: "Soba 1" },
  { src: "images/vc1.jpg", kategorija: "soba1", alt: "Kupaonica uz sobu 1" },
  { src: "images/vc11.jpg", kategorija: "soba1", alt: "Kupaonica uz sobu 1" },

  { src: "images/Soba2.jpg", kategorija: "soba2", alt: "Soba 2" },
  { src: "images/Soba22.jpg", kategorija: "soba2", alt: "Soba 2" },
  { src: "images/vc2.jpg", kategorija: "soba2", alt: "Kupaonica uz sobu 2" },

  { src: "images/soba3.jpg", kategorija: "soba3", alt: "Soba 3" },
  { src: "images/Soba33.jpg", kategorija: "soba3", alt: "Soba 3" },
  { src: "images/Soba333.jpg", kategorija: "soba3", alt: "Soba 3" },
  { src: "images/vc3.jpg", kategorija: "soba3", alt: "Kupaonica uz sobu 3" },
  { src: "images/vc33.jpg", kategorija: "soba3", alt: "Kupaonica uz sobu 3" },

  { src: "images/DnevniBoravak.jpg", kategorija: "zajednicki", alt: "Dnevni boravak" },
  { src: "images/Blagavaonica.jpg", kategorija: "zajednicki", alt: "Blagavaonica" },
  { src: "images/Kuhinja.jpg", kategorija: "zajednicki", alt: "Kuhinja" },
  { src: "images/Kuhinja2.jpg", kategorija: "zajednicki", alt: "Kuhinja" },

  { src: "images/NaslovnaSlika.jpg", kategorija: "vanjski", alt: "Apartman Stara Kuća izvana" },
  { src: "images/Vrt.jpg", kategorija: "vanjski", alt: "Vrt" },
  { src: "images/VrtNavecer.jpg", kategorija: "vanjski", alt: "Vrt navečer" },
  { src: "images/SlikaPogledVrt.jpeg", kategorija: "vanjski", alt: "Pogled na vrt" },
  { src: "images/VanjskiRostilj.jpg", kategorija: "vanjski", alt: "Vanjski roštilj" },
  { src: "images/Parking.jpg", kategorija: "vanjski", alt: "Parking" },

  { src: "images/Veseraj.jpg", kategorija: "ostalo", alt: "Vešeraj" },
  { src: "images/Ostalo1.jpg", kategorija: "ostalo", alt: "Apartman Stara Kuća" },
  { src: "images/Ostalo2.jpg", kategorija: "ostalo", alt: "Apartman Stara Kuća" },
];
