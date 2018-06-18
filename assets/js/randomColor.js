var colours = [
    "#fcaf17",
    "#ed1651",
    "#0095da",
    "#60bb46",
    "yellowgreen",
    "#ded625",
    "darkseagreen"
];

var text = $(".time_color").html().split(" ");

$(".time_color").empty();

$.each(text, function(i, word) {

    var colourIndex = Math.floor(Math.random() * colours.length);

    $("<span>")
        .html(word)
        .css("color", colours[colourIndex])
        .appendTo($(".time_color"));
});