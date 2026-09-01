# Apartman Stara Kuća - web stranica

Jednostavna web stranica (HTML/CSS/JS) - ne treba nikakva instalacija, radi u svakom pregledniku.

## Kako otvoriti u Visual Studio Code

1. Otvorite VS Code → File → Open Folder... → odaberite mapu `StaraKuca-Web`.
2. Instalirajte ekstenziju **Live Server** (Ritwick Dey) iz Extensions panela (Ctrl+Shift+X).
3. Desni klik na `index.html` → **Open with Live Server**. Stranica će se otvoriti u pregledniku i
   automatski osvježavati dok uređujete.

(Ako nemate Live Server, može se i samo dvoklikom otvoriti `index.html` u pregledniku - sve radi,
osim što se neće samo osvježavati.)

## Struktura

```
StaraKuca-Web/
  index.html             - naslovna stranica
  galerija.html          - puna fotogalerija (Apartman / Okolica, neograničen broj slika)
  css/style.css           - izgled (boje, fontovi, raspored)
  js/podaci.js             - CIJENE, ZAUZETI DATUMI I RECENZIJE (ovo najčešće mijenjate)
  js/galerija-podaci.js     - POPIS SVIH SLIKA U GALERIJI (ovo mijenjate za dodavanje fotografija)
  js/prijevodi.js            - SVI TEKSTOVI NA HR/EN/DE (ovo mijenjate kad mijenjate tekst na stranici)
  js/zajednicko.js          - izbornik, gumb "na vrh" (zajedničko svim stranicama)
  js/main.js                - funkcionalnost naslovnice (kalendar, kontakt forma...)
  js/galerija.js             - funkcionalnost galerije (filtriranje, uvećani prikaz)
  images/                     - fotografije (trenutno placeholderi)
```

## Što prvo zamijeniti

### 1. Slike
U mapi `images/` su vaše prave fotografije (jpg/jpeg rade bez ikakvog problema, kao i png). Galerija je
kategorizirana ovako - svaka soba uključuje i fotografije svoje kupaonice:
- **Soba 1** - `Soba1.jpg`, `Soba11.jpg`, `Soba111.jpg` (soba) + `vc1.jpg`, `vc11.jpg` (kupaonica)
- **Soba 2** - `Soba2.jpg`, `Soba22.jpg` + `vc2.jpg`
- **Soba 3** - `soba3.jpg`, `Soba33.jpg`, `Soba333.jpg` + `vc3.jpg`, `vc33.jpg`
- **Zajednički prostori** - `DnevniBoravak.jpg`, `Blagavaonica.jpg`, `Kuhinja.jpg`, `Kuhinja2.jpg`
- **Vrt i okoliš** - `NaslovnaSlika.jpg`, `Vrt.jpg`, `VrtNavecer.jpg`, `SlikaPogledVrt.jpeg`,
  `VanjskiRostilj.jpg`, `Parking.jpg`
- **Ostalo** - `Veseraj.jpg`, `Ostalo1.jpg`, `Ostalo2.jpg`

Gost u galeriji klikne filter (npr. "Soba 2") i vidi samo fotografije te sobe - korisnije nego da
pregledava sve fotografije odjednom.

**Naslovna fotografija** (velika slika na vrhu naslovnice) je `images/NaslovnaSlika.jpg` - postavlja se u
`index.html`, tražite `class="hero-img"`.

**Fotogalerija (`galerija.html`) - dodavanje novih slika:**
1. Kopirajte fotografiju u mapu `images/` (npr. `Soba2Terasa.jpg`)
2. Otvorite `js/galerija-podaci.js` i dodajte novi redak, npr.:
   ```js
   { src: "images/Soba2Terasa.jpg", kategorija: "soba2", alt: "Terasa uz sobu 2" },
   ```
   `kategorija` mora biti jedna od: `"soba1"`, `"soba2"`, `"soba3"`, `"zajednicki"`, `"vanjski"`,
   `"ostalo"` - određuje pod koji filter slika spada. Slika se odmah pojavljuje na stranici. Nema
   ograničenja koliko slika možete dodati po kategoriji.
3. Ako ikad dodate četvrtu sobu ili posve novu kategoriju: dodajte novi filter-gumb u `galerija.html`
   (kopirajte jedan `<button class="filter-btn">` redak) i njegov naziv u `js/prijevodi.js` (ključevi
   `filter_...`, po jedan za hr/en/de).

Kratki pregled na naslovnici (`index.html`) prikazuje 6 odabranih fotografija (po jedna iz svake sobe,
dnevni boravak, vrt, roštilj) - to su zasebni retci u `index.html`, ne mijenjaju se automatski kad
uređujete `js/galerija-podaci.js`, pa ih po potrebi ručno zamijenite (Ctrl+F po nazivu datoteke, npr.
"Soba1.jpg").

### 2. Cijene i zauzeti datumi - datoteka `js/podaci.js`
- `SEZONE` - cijena po sezoni (ponavlja se svake godine, npr. "07-01" do "08-31" = 1.7. - 31.8.)
- `POSEBNE_CIJENE` - cijena za točno određen datum (npr. Nova godina), nadjačava sezonu
- `ZAUZETI_RASPONI` - **najlakši način za unos zauzetih termina.** Za svaki već rezervirani boravak upišite
  samo `od` i `do` (oba uključena), npr. `{ od: "2026-07-14", do: "2026-07-20" }` - ne treba nabrajati
  svaki dan posebno. Dodajte zarezom više takvih redaka za više rezervacija.
- `ZAUZETI_DATUMI` - za blokiranje pojedinačnog dana izvan gornjih raspona
- `MIN_DANA_UNAPRIJED` - koliko dana unaprijed gost mora rezervirati (zadano 2 - ne može odabrati
  danas ni sutra kao dolazak, najraniji mogući dolazak je prekosutra)
- `MIN_NOCI` - minimalan broj noćenja za rezervaciju (zadano 5) - gost ne može odabrati kraći boravak
- `IZNIMKE_MIN_BORAVKA` - ako želite dopustiti kraći boravak za točno određene datume (npr. da popunite
  "rupu" u kalendaru), dodajte raspon s `minNoci` po vašem izboru - vrijedi kad dan dolaska upada u taj raspon

Gost bira boravak klikom na kalendar: prvi klik = dolazak, drugi klik = odlazak. Ispod kalendara se
prikazuje broj noćenja i ukupna cijena, ili upozorenje ako je boravak prekratak ili raspon sadrži već
zauzet datum. Klikom na naziv mjeseca ili godine u zaglavlju kalendara otvara se izbornik za brz odabir
bilo kojeg mjeseca/godine.

### 3. Kontakt - datoteka `index.html`, odjeljak `Kontakt i rezervacije`
Telefon, e-mail, WhatsApp i adresa su već postavljeni na vaše prave podatke. Kad ih ubuduće mijenjate,
pretražite (Ctrl+F) i zamijenite:
- broj telefona (dva mjesta - `tel:` link i `wa.me` linkovi za WhatsApp)
- e-mail adresu (`mailto:` link)
- adresu u odjeljku "Lokacija"
- linkove `href="#"` kod Facebook/Instagram/Booking.com/Airbnb pravim linkovima na svoje profile/oglase
- Google kartu: `src="https://www.google.com/maps?q=...&output=embed"` - upute za format su na kraju ovog
  README-a

**Kontakt forma šalje upit putem WhatsAppa** (ne e-mailom). Gost popuni formu, klikne "Pošaljite upit putem
WhatsAppa" i otvori mu se WhatsApp s već napisanom porukom (ime, e-mail, datumi, broj gostiju, poruka) -
gost samo treba kliknuti Pošalji u WhatsAppu da vama stigne poruka. Nakon klika na gumb, gostu se na
stranici prikaže potvrda da je upit pripremljen. Sva polja su obavezna OSIM poruke - forma se neće poslati
dok gost ne popuni ime, e-mail, datume i broj gostiju. WhatsApp broj se automatski uzima iz vašeg
postojećeg WhatsApp linka na stranici, pa ga ne morate posebno podešavati.

### 4. Recenzije - datoteka `js/podaci.js`, `RECENZIJE`
Trenutno su ubačene 6 pravih recenzija (3 s Booking.com-a, 3 s Airbnb-a) - točno onako kako ih je gost
napisao (ili kako ih je platforma prevela), pa ostaju na tom istom jeziku bez obzira koji jezik gost
odabere na stranici (to je normalno, tako izgleda i na pravim Booking/Airbnb stranicama).

Da dodate novu recenziju, kopirajte jedan blok `{ izvor, ocjena, tekst, autor }` i zalijepite tekst i ime
gosta - automatsko povlačenje recenzija nije moguće bez službenog partnerskog pristupa tim platformama,
pa ih morate ručno prekopirati kad ih poželite dodati.

### 5. Tekst o apartmanu
Opis apartmana i popis pogodnosti su već popunjeni pravim podacima. Tekst se uređuje u `js/prijevodi.js`
(ključevi `about_text_1`, `about_text_2` i `amenity_...`, po jedan za hr/en/de) - ne u `index.html`.

### 6. Jezici (hrvatski / engleski / njemački)
Cijela stranica je dostupna na tri jezika. U zaglavlju svake stranice nalaze se tri gumba sa zastavicama
(🇭🇷 🇬🇧 🇩🇪) - gost klikne na svoju zastavicu i cijela stranica (izbornik, tekstovi, kalendar, forma...)
odmah se prevede, bez ponovnog učitavanja stranice. Odabir jezika se pamti pa ostaje isti i kad gost ode
na drugu stranicu (npr. iz galerije natrag na naslovnicu).

**Svi prijevodi su u jednoj datoteci: `js/prijevodi.js`.** Za svaki komad teksta postoji jedan "ključ"
(npr. `hero_subtitle`) koji se ponavlja tri puta - jednom u `hr: {...}`, jednom u `en: {...}` i jednom u
`de: {...}`. Da promijenite neki tekst na stranici, pronađite taj isti ključ u sva tri rječnika i uredite
ga (Ctrl+F po ključu je najbrži način da nađete sve tri verzije odjednom).

Napomene:
- Recenzije gostiju (`js/podaci.js`) i opisi fotografija u galeriji ostaju samo na jeziku na kojem su
  napisane - stvarne recenzije gostiju i nazivi/alt tekstovi fotografija se ne prevode automatski.
- Poruka koja gostu ide u WhatsApp uvijek je na hrvatskom (bez obzira koji jezik gost odabere na
  stranici), jer je ona namijenjena vama.
- Da dodate četvrti jezik, u `js/prijevodi.js` dodajte novi rječnik (kopirajte cijeli `en: {...}` blok
  i prevedite vrijednosti) te dodajte redak u popis `JEZICI` na dnu datoteke.

## Objava stranice na internetu (kad bude spremna)

Najjednostavnija besplatna opcija je **Netlify** ili **GitHub Pages** - samo se povuče cijela mapa
na servis i stranica postane dostupna na javnom linku. Javite se kad dođe do tog koraka pa vam pomognem.
