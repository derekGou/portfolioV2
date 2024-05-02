var layout = "d";
$('#projects').click(function(){
    clear()
});
$('#resume').click(function(){
    clear()
    setTimeout(function(){
        resume()
    }, 1000)
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
function projects(){

}
function resume(){
    if (layout=="d"){
        $('#page1').css({"display": "block"})
        $('#page1').animate({"opacity": "1"})
        $('#page3').css({"display": "block"})
        $('#page3').animate({"opacity": "1"})
    } else {
        $('#page2').css({"display": "block"})
        $('#page2').animate({"opacity": "1"})
    }
    $('#resumeHold').css({
        "display": "flex", 
        "height": "100vh", 
        "width": "100vw", 
        "top": "0", 
        "left": "0"
    })
}
function contact(){

}
items = ['#page1', '#page2', '#page3']
function clear(){
    update()
    $('background1').css("display", "block");
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
function unclear(){
    $('#canvas').css({
        "opacity": "0",
        "z-index": "-1"
    });
    $('#canvas').animate({
        "opacity": "1"
    }, "slow");
    setTimeout(function(){
        $('background1').animate({
            "opacity": "0"
        }, "slow");
    }, 1000);
    setTimeout(function(){
        $('background1').css("display", "none");
    }, 1500);
}