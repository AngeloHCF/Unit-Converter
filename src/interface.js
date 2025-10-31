import {
  lengthConverter,
  weightConverter,
  temperatureConverter,
} from "./convertUnits.js";

$(window).on("load", () => {
  $("#length-content").addClass("active");
  $("#length-button").addClass("active");

  $("#weight-button").click(() => {
    $(".active").removeClass("active");
    $("#tab-content").removeClass("hide");

    $("#weight-button").addClass("active");
    $("#weight-content").addClass("active");
  });
  $("#length-button").click(() => {
    $(".active").removeClass("active");
    $("#tab-content").removeClass("hide");

    $("#length-button").addClass("active");
    $("#length-content").addClass("active");
  });
  $("#temperature-button").click(() => {
    $(".active").removeClass("active");
    $("#tab-content").removeClass("hide");
    $("#temperature-button").addClass("active");
    $("#temperature-content").addClass("active");
  });
  $("#convert-button").click(() => {
    const unit = $(".active").text().split(" ").splice(0, 1).join("").trim(" ");

    let number;
    let unit_convert_from;
    let unit_convert_to;

    switch (unit) {
      case "Length":
        number = Number($("#length-input").val().trim(" "));
        unit_convert_from = $("#length-content")
          .children("#convert-from")
          .val()
          .trim(" ");
        unit_convert_to = $("#length-content")
          .children("#convert-to")
          .val()
          .trim(" ");
        lengthConverter(number, unit_convert_from, unit_convert_to);
        break;
      case "Weight":
        number = Number($("#weight-input").val().trim(" "));
        unit_convert_from = $("#weight-content")
          .children("#convert-from")
          .val()
          .trim(" ");
        unit_convert_to = $("#weight-content")
          .children("#convert-to")
          .val()
          .trim(" ");
        weightConverter(number, unit_convert_from, unit_convert_to);
        break;

      case "Temperature":
        number = Number($("#temperature-input").val().trim(" "));
        unit_convert_from = $("#temperature-content")
          .children("#convert-from")
          .val()
          .trim(" ");
        unit_convert_to = $("#temperature-content")
          .children("#convert-to")
          .val()
          .trim(" ");
        temperatureConverter(number, unit_convert_from, unit_convert_to);
    }
  });
});
