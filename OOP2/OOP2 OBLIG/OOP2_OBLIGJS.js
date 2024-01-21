//OOP2 Oblig 2 i DCST1007 - Sebastian E Burmo

class Konto {
  constructor(kundenummer, navn, saldo) {
    this.kundenummer = kundenummer;
    this.navn = navn;
    this.saldo = saldo;
  }

  innskudd(amount) {
    this.saldo += amount;
  }

  uttak(amount) {
    if (amount <= this.saldo) {
      this.saldo -= amount;
    } else {
      console.log("Ikke nok penger på kontoen.");
    }
  }

  kontoInformasjon() {
    console.log(
      `${this.navn} med kundenummer ${this.kundenummer} har ${this.saldo} kroner på konto.`
    );
  }
}

class Barnekonto extends Konto {
  constructor(kundenummer, navn) {
    super(kundenummer, navn, 200); //Subklasse fra konto som har 200 kroner i saldo fra starten
  }
}

// Opprett en vanlig konto ved klassenavn Konto
let kari = new Konto(93827100, "Kari Hansen", 429);
kari.innskudd(0);
kari.uttak(0); //Etter innskudd og uttak skal Kari ha 429 kroner på konto
kari.kontoInformasjon();


let sebastian = new Konto(93827102, "Sebastian Burmo", 895);
sebastian.innskudd(100+100);
sebastian.uttak(200); //
sebastian.kontoInformasjon(); 





// Opprett en barnekonto ved klassenavn Barnekonto
let ole = new Barnekonto(93827101, "Ole Olsen"); //Starter på 200 siden den arver super med 200kr fra Barnekonti
ole.innskudd(0);
ole.uttak(0);
ole.kontoInformasjon();

