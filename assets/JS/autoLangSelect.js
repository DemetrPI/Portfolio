// to minimize code, data is imported from js file

import { language } from "./output.js";

// Object for addeventlistener on all buttons changing language.
const countries = {
  "#eng": "england",
  "#pl": "poland",
  "#ukr": "ukraine",
};

const ukr = Object.entries(language.ukr);
const pl = Object.entries(language.pl);
var key, value, selector;

if (location.hash.substring(1) === "eng") {
} else if (location.hash.substring(1) === "ukr") {
  for ([key, value] of ukr) {
    selector = "." + key;
    document.querySelector(selector).textContent = value;
  }
} else if (location.hash.substring(1) === "pl") {
  for ([key, value] of pl) {
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
