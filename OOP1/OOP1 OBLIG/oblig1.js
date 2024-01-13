//OOP 1 Obligatorisk Innlevering JS Index 
//--------------------------------------------------------------
//Oppgave 1

class Caro {
    constructor(registreringsnr, merke, årsmodell, hastighet) {
        this.registreringsnr = registreringsnr;
        this.merke = merke;
        this.årsmodell = årsmodell;
        this.hastighet = hastighet;
    }
//Funksjon for å vise opp data i selve HTML som vi kan kalle opp
    visInfo() {
        const utdataopp1 = document.getElementById('utdataopp1');
        utdataopp1.innerHTML = `
            <p>Registreringsnummer: ${this.registreringsnr}</p>
            <p>Merke: ${this.merke}</p>
            <p>Årsmodell: ${this.årsmodell}</p>
            <p>Maksimal Hastighet: <span id="hastighetTall">${this.hastighet}</span> km/t</p>
        `;
    }
}
//Legg til biler ved å bruke Class Bil 
const nyBil = new Caro("BT71238", "Mitshubishi", 2018, 200);

// Viser informasjonen i HTML
nyBil.visInfo();


//--------------------------------------------------------------
//Oppgave 2

class Car {
    constructor(brand,model, year, maxhastighet, bilde) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.maxhastighet = maxhastighet;
        this.bilde = bilde;
    }

    visData(elementId) {
        const utdataopp2 = document.getElementById(elementId);
        utdataopp2.innerHTML = `
            <p>Merke: ${this.brand}</p>
            <p>Modell: ${this.model}</p>
            <p>Årsmodell: ${this.year}</p>
            <p>Hastighet: <span id="hastighetTall">${this.maxhastighet}</span> km/t</p>
            <img src="${this.bilde}" alt="${this.brand} bilde">                       
        `;//Sørger for at riktig bilde matcher med riktig bil 
    }
}

//Følger constructor klasse og legger til objektene
const volvo = new Car( "Volvo","XC90", 2022, 200, "https://images.dealer.com/ddc/vehicles/2023/Volvo/XC90/SUV/trim_B5_Plus_b12697/color/Crystal%20White%20Metallic-707-237%2C238%2C243-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520");
const ferrari = new Car( "Ferrari","Bugatonoeri", 2023, 300, "https://pngimg.com/d/ferrari_PNG10654.png");
const lada = new Car( "Lada","Eniva", 2021, 100, "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/7kfdQPDrTxuTSjxCIB9R");

// Viser informasjonen i HTML for hvert objekt
volvo.visData("volvo");
ferrari.visData("ferrari");
lada.visData("lada");

//--------------------------------------------------------------
//Oppgave 3

class Bil {
    constructor() {
      this.hastighet = 0; // Initialiser hastighet til 0 km/t
    }

    gass() {
      this.hastighet += 10; // Øk farten med 10 km/t
      this.oppdaterHastighet();
    }

    brems() {
      if (this.hastighet >= 10) {
        this.hastighet -= 10; // Reduser farten med 10 km/t, unntatt hvis farten er mindre enn 10 km/t
        this.oppdaterHastighet();
      } else {
        alert("Bilen står stille. Kan ikke bremse mer.");
      }
    }

    oppdaterHastighet() {
      document.getElementById("hastighet").innerHTML = "Hastighet: " + this.hastighet + " km/t";
    }
  }

  // Opprett en instans av Bil
  const minBil = new Bil();

  // Funksjon for gass-knappen
  function gassKlikk() {
    minBil.gass();
  }

  // Funksjon for brems-knappen
  function bremsKlikk() {
    minBil.brems();
  }

//--------------------------------------------------------------
//Oppgave 4



class Bilen {
    constructor(navn) {
      this.merke = navn;
      this.hastigheter = 0;
      this.visHastighet();
    }

    gassen() {
      this.hastigheter += 10;
      this.visHastighet();
    }

    bremsen() {
      if (this.hastigheter >= 10) {
        this.hastigheter -= 10;
        this.visHastighet();
      } else {
        console.log(`${this.merke} står stille. Kan ikke bremse mer.`);
      }
    }
  }

visHastighet() 
    document.getElementById(`${this.merke.toLowerCase()}Hastighet`).innerHTML = `${this.merke} Hastighet: ${this.hastigheter} km/t`;


// Opprett bilobjekter
const Hyundai = new Bilen('Hyundai');
const Tesla = new Bilen('Tesla');
const Mio = new Bilen('Mio');

// Funksjon for gass-knappen for en bestemt bil
function gassenKlikk(bilen) {
    bilen.gassen();
}

  // Funksjon for brems-knappen for en bestemt bil
  function bremsenKlikk(bilen) {
    bilen.bremsen();
  }

//--------------------------------------------------------------
//Oppgave 5










//--------------------------------------------------------------
//OOP 1 Slutt