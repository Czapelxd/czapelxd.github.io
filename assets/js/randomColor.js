var colours = [
    "#fcaf17",
    "#ed1651",
    "#0095da",
    "#60bb46",
    "yellowgreen",
    "#ded625",
    "darkseagreen"
];

// Retrieve the words
var text = $(".time_color").html().split(" ");

// Empty the elment
$(".time_color").empty();

// Iterate over the words
$.each(text, function(i, word) {

    // Get random color
    var colourIndex = Math.floor(Math.random() * colours.length);

    $("<span>")
        .html(word)
        .css("color", colours[colourIndex])
        .appendTo($(".time_color"));
});