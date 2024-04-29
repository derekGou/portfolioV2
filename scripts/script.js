var layout = "d";
var open = [false, false, false]
$('#projects').click(function(){
    clear()
});
$('#resume').click(function(){
    clear()
});
$('#contact').click(function(){
    clear()
});
function update(){
    if ($(window).height()<$(window).width()){
        layout = "d";
    } else {
        layout = "m";
    }
}
function clear(){
    $('background1').css("display", "inline");
    $('background1').animate({
        "opacity": "1"
    }, "slow");
    setTimeout(function(){
        $('#canvas').css({
            "opacity": "0",
            "z-index": "11"
        });
        $('#canvas').animate({
            "opacity": "1"
        }, "slow");
    }, 1000);
}