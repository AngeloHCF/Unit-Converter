export function showResult(old_number, from, new_number, to) {
  const abbreviationUnits = {
    millimeter: "mm",
    centimeter: "cm",
    meter: "m",
    kilometer: "km",
    inch: "in",
    foot: "ft",
    yard: "yd",
    mile: "mi",
    milligram: "mg",
    gram: "g",
    kilogram: "kg",
    ounce: "oz",
    celsius: "°C",
    fahrenheit: "°F",
    kelvin: "K",
  };

  $("#tab-content").addClass("hide");
  $("#result-tab").addClass("active");

  $("#unit-from").text(`${old_number}${abbreviationUnits[from]}`);
  $("#unit-to").text(`${new_number}${abbreviationUnits[to]}`);

  $("#reset-button").click(() => {
    $("#tab-content").removeClass("hide");
    $("#result-tab").removeClass("active");
  });
}
