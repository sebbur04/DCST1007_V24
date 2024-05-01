//Alternativ løsning med JSON data fra myjson.com
//Bruk av JS LF fra Blackboard

"use strict";

let outputDiv = document.getElementById("outputDiv");
let mapDiv = document.getElementById("mapDiv");
let mountainsPath = "https://api.myjson.com/bins/i3vk2";
let headers = ["name", "county", "height", "pf", "x", "y"];

(async () => {
  let rawMountains = await fetchMountains(mountainsPath);
  console.log(rawMountains);
  let sortedMountains = sortMountains(rawMountains);
  displayMountains(sortedMountains);
})();

// leave possibility of manipulating json string before returning
async function fetchMountains(url) {
  return await fetchJson(url);
}

function sortMountains(array) {
  return array.sort((a, b) => {
    return a.height < b.height ? 1 : -1;
  });
}

async function fetchJson(url) {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function displayMountains(mountainArr) {
  console.log(mountainArr);
  let table = document.createElement("table");
  // table header
  let header = table.createTHead();
  let headerRow = header.insertRow();
  headerRow.id = "tableHeader";
  for (let head of headers) {
    let headerCell = headerRow.insertCell();
    headerCell.innerText = head;
  }
  // table body
  let body = table.createTBody();
  for (let mountain of mountainArr) {
    let row = body.insertRow(-1);
    for (let key in mountain) {
      let cell = row.insertCell(-1);
      cell.innerText = mountain[key];
    }
  }

  outputDiv.appendChild(table);

  // goal: embed long url to map service with all coordinates
  let coordinates = "https://maps.google.com?q=";
  for (let mountain of mountainArr) {
    if (mountain.x && mountain.y) {
      coordinates += mountain.x + "," + mountain.y + ",";
    }
  }
  coordinates += "&output=embed";
  console.log(coordinates);
  // hack: one iframe per mountain
  for (let mountain of mountainArr) {
    coordinates += mountain.x + "," + mountain.y;
    let iframe = document.createElement("iframe");
    iframe.width = "425";
    iframe.height = "350";
    iframe.frameborder = "0";
    iframe.scrolling = "no";
    iframe.src = `https://maps.google.com?q=${mountain.x},${mountain.y}&output=embed`;
    // mapDiv.appendChild(iframe);
  }
}
