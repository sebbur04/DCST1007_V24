//OOP5 JS OBL JSON Objects - BURMO

//---------------------------------Oppgave 1---------------------------------

//Laget JSON fil med navn: fjelltopper.json
//Oppgaven var å hardkode inn data i en JSON fil, og deretter hente ut dataen og skrive den ut i en tabell 
//som da blir brukt i oppgave 2.

//---------------------------------Oppgave 2---------------------------------

fetch('fjelltopper.json') //Henter dataen fra JSON filen fjelltopper.json
    .then(response => response.json())
    .then(data => {
        // Få referanse til tabellen
        let table = document.getElementById('fjelltopperTable');

        // Loop gjennom alle fjelltopper
        for (let i = 0; i < data.length; i++) {
            // Lag en ny rad
            let row = table.insertRow();

            // Legg til celler til raden
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();

            // Sett tekst i cellene
            cell1.innerHTML = data[i].fylke;
            cell2.innerHTML = data[i].topp;
            cell3.innerHTML = data[i].høyde;
        }
    });



//---------------------------------Oppgave 3---------------------------------

fetch('fjelltopper.json') //Henter dataen fra JSON filen fjelltopper.json
    .then(response => response.json())
    .then(data => {
        // Få referanse til tabellen
        let sortedTable = document.getElementById('sortedFjelltopperTable');

        // Konverter høydeverdiene til tall som da kan brukes for å sorter dataene
        data.forEach(item => {
            item.høyde = parseInt(item.høyde.replace(',', '').replace('m', ''));
        }); //Gjør om tallet som forekommer før m fra string til tall
        data.sort((a, b) => b.høyde - a.høyde); //Sorter dataene etter høyde (HØY til LAV)

        // Fyll tabellen med de sorterte dataene
        data.forEach(item => {
            let row = sortedTable.insertRow();
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            cell1.innerHTML = item.fylke;
            cell2.innerHTML = item.topp;
            cell3.innerHTML = item.høyde + 'm';
        });
    });


//---------------------------------Oppgave 4---------------------------------