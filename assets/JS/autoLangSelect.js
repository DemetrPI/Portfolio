// to minimize code, data is imported from json file


import {language} from './output.js'


// Object for addeventlistener on all buttons changing language.
const countries = {
  "#eng": "england",
  "#esp": "spain",
  "#ukr": "ukraine",
};

const ukrainian = Object.entries(language.ukrainian);
const spanish = Object.entries(language.spanish);
var key, value, selector;

if (location.hash.substring(1) === "eng") {
} else if (location.hash.substring(1) === "ukr") {
  for ([key, value] of ukrainian) {
    selector = "." + key;
    document.querySelector(selector).textContent = value;

    
  }
} else if (location.hash.substring(1) === "esp") {
  for ([key, value] of spanish) {
    selector = "." + key;
    document.querySelector(selector).textContent = value;
  }
}

for (const [key, value] of Object.entries(countries)) {
  const currentCountry = document.getElementsByClassName(value);
  for (var country of currentCountry) {
    country.addEventListener("click", () => {
      window.location.hash = key;
      location.reload(true);
    });
  }
}

