import { showResult } from "./cli.js";

let allowedUnits;

async function loadUnits() {
  try {
    const response = await fetch("src/allowedUnits.json");
    const data = await response.json();
    allowedUnits = data;
  } catch (error) {
    console.error(`Error fetching or parsing JSON: ${error}`);
  }
}

loadUnits();

export function lengthConverter(number, from, to) {
  let convertedNumber;

  if (
    allowedUnits.length.hasOwnProperty(from) &&
    allowedUnits.length.hasOwnProperty(to) &&
    number > 0
  ) {
    const fromFactor = Number(allowedUnits.length[from]);
    const toFactor = Number(allowedUnits.length[to]);

    convertedNumber = number * fromFactor / toFactor;
    showResult(number, from, convertedNumber, to);
  }
}

export function weightConverter(number, from, to) {
  let convertedNumber;

  if (
    allowedUnits.weight.hasOwnProperty(from) &&
    allowedUnits.weight.hasOwnProperty(to) &&
    number > 0
  ) {
    const fromFactor = Number(allowedUnits.weight[from]);
    const toFactor = Number(allowedUnits.weight[to]);

    convertedNumber = (number * fromFactor) / toFactor;

    showResult(number, from, convertedNumber, to);
  }
}

export function temperatureConverter(number, from, to) {
  let convertedNumber;
  console.log(from, to, number);

  if (
    allowedUnits.temperature.includes(from) &&
    allowedUnits.temperature.includes(to)
  ) {
    if (from === "fahrenheit") {
      if (to === "fahrenheit") convertedNumber = number;
      if (to === "celsius") convertedNumber = (number - 32) / 1.8;
      if (to === "kelvin") convertedNumber = (number - 32) / 1.8 + 273.15;
    } else if (from === "celsius") {
      if (to === "celsius") convertedNumber = number;
      if (to === "fahrenheit") convertedNumber = number * 2 + 30;
      if (to === "kelvin") convertedNumber = number + 273.15;
    } else if (from === "kelvin") {
      if (to === "kelvin") convertedNumber = number;
      if (to === "fahrenheit") convertedNumber = (number - 274.15) * 1.8 + 32;
      if (to === "celsius") convertedNumber = number - 273.15;
    }
  }
  showResult(number, from, convertedNumber, to);
}
