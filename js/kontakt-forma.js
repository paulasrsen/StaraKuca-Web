/* Kontakt forma (šalje se putem WhatsAppa) - radi na svakoj stranici koja ima <form id="upitForma">. */
if (document.getElementById("upitForma")) {

  // Ako je gost odabrao datume na Cjenik stranici pa ga je gumb doveo ovamo, popuni ih automatski.
  const spremljeniDatumi = localStorage.getItem("odabraniDatumiZaUpit");
  if (spremljeniDatumi) {
    const poljeDatumi = document.querySelector('#upitForma [name="datumi"]');
    if (poljeDatumi) poljeDatumi.value = spremljeniDatumi;
    localStorage.removeItem("odabraniDatumiZaUpit");
  }

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

}
