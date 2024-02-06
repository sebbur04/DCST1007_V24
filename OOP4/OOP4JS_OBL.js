//OOP4 Sebastian E Burmo - Promises - DCST1007

//-------------- Oppgave 1 ----------------
console.log("Oppgave 1");

function testTall(tall) {
    return new Promise((resolve, reject) => {
        if (typeof tall !== 'number') {
            reject(new Error('Input must be a number'));
        } else if (tall > 10) {
            resolve('Tallet'+"\xa0"+ tall + "\xa0"+ 'er større enn 10');
        } else if (tall < 10) {
            resolve('Tallet'+"\xa0"+ tall + "\xa0"+ 'er mindre enn 10');
        } else {
            resolve('Tallet'+"\xa0"+ tall + "\xa0"+ 'er lik 10');
        }
    });
}


//Lage noe tester på promise for å sjekke om det fungerer

testTall(15)
    .then(response => console.log(response))
    .catch(error => console.log(error.message));

testTall(5)
    .then(response => console.log(response))
    .catch(error => console.log(error.message));

testTall(10)
    .then(response => console.log(response))
    .catch(error => console.log(error.message));

testTall('Jeg er ikke et tall')
    .then(response => console.log(response))
    .catch(error => console.log(error.message));

    
//-------------- Oppgave 2 ----------------

function lagStoreBokstaver(array) {
    return new Promise((resolve, reject) => {
        if (array.every(item => typeof item === 'string')) {
            resolve(array.map(item => item.toUpperCase()));
        } else {
            reject(new Error('FEILKODE: Ugyldig array '+ "\xa0" + array + "\xa0" +'Det er elementer som ikke er en string!'));
        }
    });
}

function sorterOrd(array) {
    return new Promise((resolve, reject) => {
        if (array.every(item => typeof item === 'string')) {
            resolve(array.sort());
        } else {
            reject(new Error('FEILKODE: Ugyldig array'+ "\xa0" + array + "\xa0" +'Det er elementer som ikke er en string!'));
        }
    });
}

//Lage noe tester på promise for å sjekke om det fungerer
const ordArray = ['Airbus', 'Embraer', 'Boeing', 'DehavilandDash'];

lagStoreBokstaver(ordArray)
    .then(sorterOrd)
    .then(response => console.log(response))
    .catch(error => console.log(error.message));


const slemArray = ['NTNU', 'UiO', 15 , 'UiB'];

lagStoreBokstaver(slemArray)
    .then(sorterOrd)
    .then(response => console.log(response))
    .catch(error => console.log(error.message));

//-------------- Oppgave 3 Ekstra ----------------

let username = 'sebbur04'; //brukernavn til min egen github 
//Brukernavn: "Remy" er den som blir brukt i øvingen

fetch(`https://api.github.com/users/${username}`) //Legger til objektet username i URLen for å kunne fetche ikke bare en bestemt bruker
    .then(response => response.json()) //bruke JSON for å hente data fra APIen til Github
    .then(data => {
        let img = document.createElement('img'); // Opprett et nytt img element
        img.src = data.avatar_url; // Sett src attributtet til avatar URL
        document.getElementById('avatar').appendChild(img); // Legg img elementet til id og div i htmlen
    })
    .catch(error => console.error('Error:', error)); // Lager en failsafe i console.log for eksempel hvis det ikke er nett mens koden kjøres