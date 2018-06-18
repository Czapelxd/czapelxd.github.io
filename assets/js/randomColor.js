var colours = [
    "#fcaf17",
    "#ed1651",
    "#0095da",
    "#60bb46",
    "yellowgreen",
    "#ded625",
    "darkseagreen"
];

var text = $(".time_color1").html().split(" ");

    $(".time_color1").empty();

$.each(text, function(i, word) {

    var colourIndex = Math.floor(Math.random() * colours.length);

    $("<span>")
        .html(word)
        .css("color", colours[colourIndex])
        .appendTo($(".time_color1"));
});

var text = $(".time_color2").html().split(" ");

$(".time_color2").empty();

$.each(text, function(i, word) {

    var colourIndex = Math.floor(Math.random() * colours.length);

    $("<span>")
        .html(word)
        .css("color", colours[colourIndex])
        .appendTo($(".time_color2"));
});

var text = $(".time_color3").html().split(" ");

$(".time_color3").empty();

$.each(text, function(i, word) {

    var colourIndex = Math.floor(Math.random() * colours.length);

    $("<span>")
        .html(word)
        .css("color", colours[colourIndex])
        .appendTo($(".time_color3"));
});