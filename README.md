# Apartman Stara Kuća - web stranica

Jednostavna web stranica (HTML/CSS/JS) - ne treba nikakva instalacija, radi u svakom pregledniku.

## Kako otvoriti u Visual Studio Code

1. Otvorite VS Code → File → Open Folder... → odaberite mapu `StaraKuca-Web`.
2. Instalirajte ekstenziju **Live Server** (Ritwick Dey) iz Extensions panela (Ctrl+Shift+X).
3. Desni klik na `index.html` → **Open with Live Server**. Stranica će se otvoriti u pregledniku i
   automatski osvježavati dok uređujete.

(Ako nemate Live Server, može se i samo dvoklikom otvoriti `index.html` u pregledniku - sve radi,
osim što se neće samo osvježavati.)

Stranica je uživo na: **https://paulasrsen.github.io/StaraKuca-Web/**

## Struktura

Stranica ima 6 HTML stranica. Naslovnica (`index.html`) na **desktopu** prikazuje sve odjednom (skrola
se kroz O nama/Cjenik/Recenzije/Kontakt), dok na **mobitelu** prikazuje samo pločice koje vode na
zasebne stranice - vidi odjeljak "Mobilni prikaz" niže.

```
StaraKuca-Web/
  index.html               - naslovna stranica (na desktopu sadrži sve, na mobitelu samo pločice)
  galerija.html            - puna fotogalerija (filteri po sobama, neograničen broj slika)
  cjenik.html              - kalendar, cijene i uvjeti rezervacije (zasebna stranica za mobitel)
  o-nama.html              - opis apartmana i pogodnosti (zasebna stranica za mobitel)
  recenzije.html           - recenzije gostiju (zasebna stranica za mobitel)
  kontakt.html             - kontakt podaci, karta i forma za upit (zasebna stranica za mobitel)
  css/style.css             - izgled (boje, fontovi, raspored) - zajednički svim stranicama
  js/podaci.js               - CIJENE, ZAUZETI DATUMI I RECENZIJE (ovo najčešće mijenjate)
  js/galerija-podaci.js       - POPIS SVIH SLIKA U GALERIJI (ovo mijenjate za dodavanje fotografija)
  js/prijevodi.js              - SVI TEKSTOVI NA HR/EN/DE (ovo mijenjate kad mijenjate tekst na stranici)
  js/zajednicko.js            - izbornik, gumb "na vrh", mobilni prikaz (zajedničko svim stranicama)
  js/kalendar.js               - funkcionalnost kalendara/cjenika (koristi je index.html i cjenik.html)
  js/recenzije.js               - prikaz recenzija (koristi je index.html i recenzije.html)
  js/kontakt-forma.js            - slanje upita putem WhatsAppa (koristi je index.html i kontakt.html)
  js/main.js                      - uvećani prikaz galerije na naslovnici (samo index.html)
  js/galerija.js                   - funkcionalnost pune galerije (filtriranje, uvećani prikaz)
  images/                           - fotografije
```

**Bitno:** `js/kalendar.js`, `js/recenzije.js` i `js/kontakt-forma.js` su dijeljeni - iste funkcije
koriste i naslovnica i zasebne stranice, pa ako mijenjate kako kalendar/recenzije/forma rade, mijenjate
na jednom mjestu i to vrijedi svugdje. Sam **sadržaj** (cijene, tekst, recenzije) je uvijek u
`js/podaci.js` i `js/prijevodi.js`, bez obzira koliko se stranica njime koristi.

## Mobilni prikaz - zasebne stranice umjesto skrolanja

Na mobitelu (uskom ekranu) naslovnica ne prikazuje sav sadržaj odjednom - umjesto toga, odmah ispod
hero slike nalaze se 4 pločice (Galerija, Cjenik, O nama, Recenzije) i gumb "Kontaktirajte nas", koji
vode na zasebne stranice. Na desktopu je sve i dalje jedna duga stranica sa skrolanjem, kao prije.

Ovo znači da sadržaj sekcija (npr. tekst "O nama") postoji na **dva mjesta** - u `index.html` (za
desktop) i u `o-nama.html` (za mobitel). Ako mijenjate strukturu/izgled tih sekcija, promjenu treba
napraviti na oba mjesta. Sam **tekst** ne treba dvaput mijenjati jer dolazi iz `js/prijevodi.js`
(zajedničko za obje verzije).

Kad gost na `cjenik.html` odabere datume i klikne "Pošaljite upit za ove datume", odvede ga na
`kontakt.html` s već popunjenim datumima (to radi automatski, preko preglednikove lokalne memorije).

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

### 3. Kontakt - odjeljak "Kontakt i rezervacije" u `index.html` I u `kontakt.html`
Telefon, e-mail, WhatsApp i adresa su već postavljeni na vaše prave podatke. Ovaj odjeljak postoji na
**dva mjesta** (`index.html` za desktop i `kontakt.html` za mobitel) - kad ubuduće nešto mijenjate
(broj telefona, e-mail, adresu, Booking.com/Airbnb linkove, Google kartu), pretražite (Ctrl+F) i
zamijenite u OBJE datoteke.

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
Cijela stranica je dostupna na tri jezika. U zaglavlju svake stranice nalaze se tri gumba (HR / EN / DE)
- gost klikne svoj jezik i cijela stranica (izbornik, tekstovi, kalendar, forma...) odmah se prevede, bez
ponovnog učitavanja stranice. Odabir jezika se pamti pa ostaje isti i kad gost ode na drugu stranicu.

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

## Objava izmjena na internetu

Stranica je već objavljena preko **GitHub Pages** na https://paulasrsen.github.io/StaraKuca-Web/ i
povezana s **GitHub Desktop** aplikacijom. Kad uredite bilo koju datoteku (npr. cijene u `js/podaci.js`),
promjena se ne vidi uživo sama od sebe - potrebno je:
1. Otvoriti GitHub Desktop
2. Provjeriti da su promjene vidljive u popisu (lijevo)
3. Upisati kratak opis promjene dolje lijevo i kliknuti **"Commit to main"**
4. Kliknuti **"Push origin"** (gore desno)

Za par minuta GitHub Pages automatski preuzme promjenu i ona postaje vidljiva na javnoj adresi.

**Cloudflare Web Analytics** je uključen (vidi kod na dnu svake stranice) - broj posjeta i odakle
dolaze gosti možete pratiti na dash.cloudflare.com → Analytics & Logs → Web Analytics.
