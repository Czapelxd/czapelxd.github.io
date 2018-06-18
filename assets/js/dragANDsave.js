var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);
$.each(positions, function (id, pos) {
    $("#" + id).css(pos)
})
$("#draggable1").draggable({
    containment: "#el__content_skill",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});
$("#draggable2").draggable({
    containment: "#el__content_skill",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});
$("#draggable3").draggable({
    containment: "#el__content_skill",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});
$("#draggable4").draggable({
    containment: "#el__content_skill",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});
$("#draggable5").draggable({
    containment: "#el__content_skill",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});

$( ".el_reset" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(360deg)");
    } else {
        $(this).css("transform","" );
    }
});

function refreshPage(){
    window.location.reload();
}
