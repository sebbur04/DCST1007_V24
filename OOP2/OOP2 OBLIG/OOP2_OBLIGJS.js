//OOP2 Oblig 2 i DCST1007 - Sebastian E Burmo
console.log("Oppgave 1");
console.log("Se konsollen for å se resultatet av oppgave 1 med klasser");

//------------------------------------//
//Automatisere navn, saldo og type konti uten hardkoding - For oppgave  ekstra//

document.getElementById('kontoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let navn = document.getElementById('navn').value;
  let saldo = document.getElementById('saldo').value;
  let type = document.getElementById('type').value;
  let kundenummer = Math.floor(Math.random() * 10000000) + 1; //Random kundenummer mellom 1 og 10000000 som i systemet, autogenerert med Math.random

  let konto;
  if (type === 'voksen') {
    konto = new Konto(kundenummer,navn, saldo);
  } else {
    konto = new Barnekonto(kundenummer,navn, saldo);
  }

  // Print out account information
  konto.kontoInformasjon();
});



//--------------Definere klasser i banken-----------------------//

class Konto {
  constructor(kundenummer, navn, saldo) {
    this.kundenummer = kundenummer;
    this.navn = navn;
    this.saldo = saldo;
  }

  innskudd(amount) {
    this.saldo += amount;
  }

  //Failsafe for at en ikke kan ta ut mer enn det som er på kontoen
  uttak(amount) {
    if (amount <= this.saldo) {
      this.saldo -= amount;
    } else {
      console.log(
        `${this.navn} med kundenummer ${this.kundenummer} har ikke nok penger på kontoen for denne handlingen.`
        );
    }
  }

  kontoInformasjon() {
    console.log(
      `${this.navn} med kundenummer ${this.kundenummer} har ${this.saldo} kroner på konto.`
    );
  }
}

class Barnekonto extends Konto {
  constructor(kundenummer, navn, saldo) {
    super(kundenummer, navn, saldo + 200); //Subklasse fra konto som har 200 kroner i saldo fra starten + evt saldo de har bygd opp
  }
}

//--------BARNE KONTI--------//
console.log("Oppgave 2");
// Opprett en barnekonto ved klassenavn Barnekonto
let emil = new Barnekonto(93827101, "Emil Barn",0); //Starter på 200 siden den arver super med 200kr fra Barnekonti
emil.innskudd(0);
emil.uttak(0);
emil.kontoInformasjon();


//--------VOKSEN KONTI--------//


console.log("Oppgave 3");
let sebastian = new Konto(93827102, "Sebastian Burmo Voksen", 895);
sebastian.innskudd(0);
sebastian.uttak(200); //
sebastian.kontoInformasjon(); 



console.log("Oppgave 4");
let kari = new Konto(93827100, "Kari Hansen Voksen", 429);
kari.innskudd(0);
kari.uttak(0); //Etter innskudd og uttak skal Kari ha 429 kroner på konto
kari.kontoInformasjon();


//-------------- Oppgave 5-----------------------//

console.log("Oppgave 5");

let lise = new Barnekonto(93827103, "Lise Jensen", 0);
let eva = new Konto(93827104, "Eva Hansen", 895);
let petter = new Konto(93827105, "Petter Olsen", 0);

// Transaksjoner , simulert en dag med aktivitet i min fiktive bank

console.log("Klokka 10:30 – Eva tar ut 300 kroner.");
eva.uttak(300);
eva.kontoInformasjon();

console.log("Klokka 11:00 – Bestefaren til Lise er i det gavmilde hjørnet, og setter inn 4000 kroner.");
lise.innskudd(4000);
lise.kontoInformasjon();

console.log("Klokka 11:00 – Petter setter inn 3000 kroner.");
petter.innskudd(3000);
petter.kontoInformasjon();

console.log("Klokka 12:15 – Eva overfører 250 kroner i bursdagsgave til Petter.");
eva.uttak(250);
petter.innskudd(250);
eva.kontoInformasjon();
petter.kontoInformasjon();

console.log("Klokka 17:30 – Eva forsøker å ta ut 800 kroner for å kjøpe kjole til julebordet.");
eva.uttak(800);
eva.kontoInformasjon();


//--------------Oppgave 6 Ekstraoppgave-----------------------//
console.log("Oppgave 6");
console.log("Bruk Forms for å opprette nye konti som vises under her");