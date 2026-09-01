/*
  OVDJE UREĐUJETE CIJENE, ZAUZETE DATUME I RECENZIJE.
  Ne morate znati programirati - samo mijenjajte brojeve i tekst unutar navodnika.
*/

// 1) SEZONSKE CIJENE (ponavljaju se svake godine)
//    "od" i "do" su u formatu "MM-DD" (mjesec-dan), cijena je u eurima po noćenju.
//    Redoslijed je bitan ako se raspon preklapa - kasniji u popisu ima prednost.
const SEZONE = [
  { naziv: "Predsezona",  od: "01-01", do: "05-31", cijena: 120 },
  { naziv: "Ljeto - lipanj", od: "06-01", do: "06-30", cijena: 190 },
  { naziv: "Glavna sezona", od: "07-01", do: "08-31", cijena: 210 },
  { naziv: "Rujan",        od: "09-01", do: "09-30", cijena: 150 },
  { naziv: "Posezona",     od: "10-01", do: "12-31", cijena: 120 },
];

// 2) POSEBNE CIJENE ZA TOČNO ODREĐEN DATUM (npr. blagdani, Nova godina)
//    Format datuma: "GGGG-MM-DD". Ovo nadjačava sezonsku cijenu za taj dan.
const POSEBNE_CIJENE = {
  // "2026-12-31": 150,
  // "2026-01-01": 150,
};

// 3) ZAUZETI (REZERVIRANI) TERMINI
//    Najlakši način - upišite samo "od" i "do" za svaki već rezervirani boravak,
//    ne morate nabrajati svaki dan posebno. Format datuma je "GGGG-MM-DD", a "do" je
//    uključen (i taj dan će biti prikazan kao zauzet). Odvojite zapise zarezom.
const ZAUZETI_RASPONI = [
  { od: "2026-09-05", do: "2026-09-18" },
  { od: "2026-10-24", do: "2026-10-30" },
  { od: "2026-12-24", do: "2027-01-06" },
  { od: "2027-06-15", do: "2027-06-19" },
  { od: "2027-06-26", do: "2027-07-09" },
  { od: "2027-07-23", do: "2027-08-06" },
];

//    Ako trebate blokirati samo pojedinačni dan (izvan gornjih raspona), dodajte ga ovdje.
const ZAUZETI_DATUMI = [
  // "2026-07-14",
];

// 4) NAJAVA REZERVACIJE UNAPRIJED
//    Gost mora rezervirati barem ovoliko dana prije dolaska (npr. 2 = ne može doći danas ni sutra,
//    najraniji mogući dolazak je prekosutra).
const MIN_DANA_UNAPRIJED = 2;

// 5) MINIMALAN BROJ NOĆENJA
//    Gost ne može odabrati boravak kraći od ovoliko noćenja, osim ako datum dolaska
//    upada u neku od iznimki ispod.
const MIN_NOCI = 5;

// 6) IZNIMKE OD MINIMALNOG BORAVKA (VI ODOBRAVATE ZA ODREĐENE DATUME)
//    Dodajte raspon ako želite dopustiti kraći boravak za točno određene datume,
//    npr. da popunite "rupu" u kalendaru. "minNoci" je koliko je za taj raspon minimalno
//    dozvoljeno (može biti i 1). Vrijedi ako DAN DOLASKA gosta upada u raspon "od"-"do".
const IZNIMKE_MIN_BORAVKA = [
  // { od: "2026-10-01", do: "2026-10-31", minNoci: 2 },
];

// 7) RECENZIJE GOSTIJU
//    "izvor" može biti "booking" ili "airbnb". "ocjena" je broj zvjezdica od 1 do 5
//    (Booking prikazuje ocjenu od 10, pa je npr. 10/10 pretvoreno u 5 zvjezdica).
//    "tekst" je IZVORNI tekst, točno kako ga je gost napisao (na svom jeziku) - "izvorniJezik" govori
//    koji je to jezik ("pl", "hu", "fr", "en", "hr"...). "prijevodi" su gotovi prijevodi na hrvatski,
//    engleski i njemački - koristi ih gumb "Prevedi" na stranici, ovisno o tome koji je jezik trenutno
//    odabran na stranici. Ako dodate novu recenziju na nekom drugom jeziku, prijevode na hr/en/de
//    možete zatražiti od mene (Claudea) ili napisati sami.
const RECENZIJE = [
  {
    izvor: "booking",
    ocjena: 5,
    izvorniJezik: "pl",
    tekst: "Apartament bardzo czysty, miał wszystko co potrzeba, na zewnątrz miejsce na grilla do poleżakowania nad wodą. Gospodarze bardzo życzliwi, sympatyczni i goscini obdarowali nas swoimi owocami, warzywami i przetworami z własnych upraw.",
    autor: "Jakubik, Poljska",
    prijevodi: {
      hr: "Apartman je bio vrlo čist i imao je sve što nam je trebalo, uključujući vanjski roštilj za opuštanje uz vodu. Domaćini su bili vrlo ljubazni, gostoljubivi i velikodušni, darivajući nas voćem, povrćem i pekmezom iz vlastitih vrtova.",
      en: "The apartment was very clean and had everything we needed, including an outdoor grill area for relaxing by the water. The hosts were very kind, hospitable and generous, treating us to fruit, vegetables and preserves from their own gardens.",
      de: "Das Apartment war sehr sauber und hatte alles, was wir brauchten, einschließlich eines Grillplatzes im Freien zum Entspannen am Wasser. Die Gastgeber waren sehr freundlich, gastfreundlich und großzügig und beschenkten uns mit Obst, Gemüse und selbstgemachten Marmeladen aus ihren eigenen Gärten.",
    },
  },
  {
    izvor: "booking",
    ocjena: 5,
    izvorniJezik: "en",
    tekst: "Apartament was Fresh and clean. Three bedrooms with separate bathrooms are an ideal solution for large solution. The kitchen is very we'll equipped, in the case of self cooked meals nothing was missing.",
    autor: "Dagmara, Belgija",
    prijevodi: {
      hr: "Apartman je bio svjež i čist. Tri spavaće sobe s odvojenim kupaonicama idealno su rješenje za veću grupu. Kuhinja je vrlo dobro opremljena, u slučaju samostalne pripreme obroka ništa nije nedostajalo.",
      en: "Apartament was Fresh and clean. Three bedrooms with separate bathrooms are an ideal solution for large solution. The kitchen is very we'll equipped, in the case of self cooked meals nothing was missing.",
      de: "Das Apartment war frisch und sauber. Drei Schlafzimmer mit eigenen Badezimmern sind eine ideale Lösung für eine größere Gruppe. Die Küche ist sehr gut ausgestattet, beim Selbstkochen fehlte nichts.",
    },
  },
  {
    izvor: "booking",
    ocjena: 5,
    izvorniJezik: "hu",
    tekst: "Nagyon szép jól felszerelt és kényelmes volt a szállás. A vendéglátóink 10/10. Olyan kedves vendégszeretők voltak már szinte családtagként kezeltek minket. Jó pár szálláson voltunk már Horvátországban, vendégszeretetben mindent vittek eddig. A táj gyönyörű, a település nyugodt aki pihenni szeretne annak csak ajánlani tudom. Az Internet stabil és gyors, ha valakinek ez fontos lenne. Klíma van kellemesen hideg. Minden szobának külön gyönyörű fürdőszobája van. Tényleg csak jó emlékeim vannak a nyaralásunkról. Ide mi biztos visszatérünk még. Ha jó szállást keresel, ne habozz ezt kerested eddig, foglald le most gyorsan. 😄",
    autor: "Zsolt, Mađarska",
    prijevodi: {
      hr: "Smještaj je bio jako lijep, dobro opremljen i udoban. Naši domaćini su bili 10/10. Bili su tako ljubazni i gostoljubivi, ponašali su se prema nama gotovo kao prema obitelji. Boravili smo u dosta smještaja u Hrvatskoj i do sada su sve donijeli u gostoprimstvu. Krajolik je prekrasan, grad je miran, mogu ga samo preporučiti svima koji se žele opustiti. Internet je stabilan i brz, ako je to nekome važno. Klima je ugodno hladna. Svaka soba ima svoju prekrasnu kupaonicu. Zaista imam samo lijepe uspomene na naš odmor. Svakako ćemo se ovdje vratiti. Ako tražite dobar smještaj, ne oklijevajte, ovo je ono što ste tražili, rezervirajte ga brzo odmah. 😄",
      en: "The accommodation was very nice, well equipped and comfortable. Our hosts were 10/10. They were so kind and hospitable, treating us almost like family. We've stayed in quite a few places in Croatia, and so far this place has brought the best hospitality. The scenery is beautiful, the town is quiet - I can only recommend it to anyone who wants to relax. The internet is stable and fast, if that matters to anyone. The air conditioning is pleasantly cool. Every room has its own beautiful bathroom. I really only have fond memories of our holiday. We will definitely come back here. If you're looking for good accommodation, don't hesitate - this is what you've been searching for, book it quickly. 😄",
      de: "Die Unterkunft war sehr schön, gut ausgestattet und komfortabel. Unsere Gastgeber waren 10/10. Sie waren so freundlich und gastfreundlich und haben uns fast wie Familie behandelt. Wir waren schon in vielen Unterkünften in Kroatien, aber hier war die Gastfreundschaft bisher am besten. Die Landschaft ist wunderschön, der Ort ist ruhig - ich kann es nur jedem empfehlen, der sich entspannen möchte. Das Internet ist stabil und schnell, falls das jemandem wichtig ist. Die Klimaanlage ist angenehm kühl. Jedes Zimmer hat sein eigenes wunderschönes Badezimmer. Ich habe wirklich nur schöne Erinnerungen an unseren Urlaub. Wir kommen bestimmt wieder hierher. Wenn Sie eine gute Unterkunft suchen, zögern Sie nicht - das ist es, wonach Sie gesucht haben, buchen Sie schnell. 😄",
    },
  },
  {
    izvor: "airbnb",
    ocjena: 5,
    izvorniJezik: "fr",
    tekst: "Nous avons passé un excellent séjour chez Paula dans le petit village familial de pêcheurs de blace. la plage, centre, restaurants, sont accessibles à pieds. la vue du logement est exceptionnelle sur la baie. le logement est très bien équipé et très confortable. notre hôte était très réactif et disponible. il nous a fait profité des fruits de la région délicieux. nous recommandons pour ceux qui veulent passer un moment de déconnexion et de tranquillité.",
    autor: "Isabelle",
    prijevodi: {
      hr: "Proveli smo izvrstan boravak kod Paule u malom obiteljskom ribarskom selu Blace. Plaža, centar i restorani dostupni su pješice. Pogled iz smještaja na uvalu je izniman. Smještaj je vrlo dobro opremljen i vrlo udoban. Naša domaćica bila je vrlo brza u odgovaranju i dostupna. Počastila nas je ukusnim voćem iz tog kraja. Preporučujemo ga svima koji žele provesti trenutke odmora od svega i mira.",
      en: "We had an excellent stay with Paula in the small family fishing village of Blace. The beach, centre and restaurants are all within walking distance. The view from the accommodation over the bay is exceptional. The place is very well equipped and very comfortable. Our host was very responsive and available. She treated us to delicious local fruit. We recommend it to anyone who wants to disconnect and enjoy some peace and quiet.",
      de: "Wir hatten einen ausgezeichneten Aufenthalt bei Paula in dem kleinen familiären Fischerdorf Blace. Strand, Zentrum und Restaurants sind zu Fuß erreichbar. Der Blick von der Unterkunft auf die Bucht ist außergewöhnlich. Die Unterkunft ist sehr gut ausgestattet und sehr komfortabel. Unsere Gastgeberin war sehr reaktionsschnell und erreichbar. Sie hat uns mit köstlichen Früchten aus der Region verwöhnt. Wir empfehlen es allen, die einen Moment der Abschaltung und Ruhe verbringen möchten.",
    },
  },
  {
    izvor: "airbnb",
    ocjena: 5,
    izvorniJezik: "fr",
    tekst: "Merci beaucoup pour votre accueil, les excellents produits offerts amicalement (jus de mandarine, kumquat et gâteaux), on espère revenir un jour, vraiment 😊 Philippe et sa famille",
    autor: "Philippe",
    prijevodi: {
      hr: "Puno hvala na gostoprimstvu i izvrsnim proizvodima koje ste nam ljubazno ponudili (sok od mandarine, kumkvat i kolači), stvarno se nadamo da ćemo se jednog dana vratiti 😊 Philippe i obitelj",
      en: "Thank you so much for your welcome and the excellent products kindly offered (mandarin juice, kumquat and cakes), we really hope to come back one day 😊 Philippe and family",
      de: "Vielen Dank für Ihren Empfang und die ausgezeichneten, freundlich angebotenen Produkte (Mandarinensaft, Kumquat und Kuchen), wir hoffen wirklich, eines Tages zurückzukommen 😊 Philippe und Familie",
    },
  },
  {
    izvor: "airbnb",
    ocjena: 5,
    izvorniJezik: "en",
    tekst: "We really enjoyed our stay. The apartment exceeded our expectations. Great hosts, beautiful views and a very peaceful location.",
    autor: "Dawn",
    prijevodi: {
      hr: "Jako smo uživali u boravku. Apartman je nadmašio naša očekivanja. Sjajni domaćini, prekrasni pogledi i vrlo mirna lokacija.",
      en: "We really enjoyed our stay. The apartment exceeded our expectations. Great hosts, beautiful views and a very peaceful location.",
      de: "Wir haben unseren Aufenthalt sehr genossen. Das Apartment hat unsere Erwartungen übertroffen. Großartige Gastgeber, wunderschöne Aussicht und eine sehr ruhige Lage.",
    },
  },
];
