var pxs = $(window).width()/1500;
function pixelsize(){
    if ($(window).width()>$(window).height()){
        pxs = $(window).height()/1000;
    } else {
        pxs = $(window).width()/1000;
    }
}
pixelsize()