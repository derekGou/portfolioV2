window.addEventListener("resize", function(){
    document.getElementsByTagName("loader")[0].style.display = "flex";
    pixelsize();
    resizeMyName2();
    setTimeout(function(){
        document.getElementsByTagName("loader")[0].style.display = "none";
    }, 1000);
});
// $(window).focus(function(e) {
//     document.getElementsByTagName("loader")[0].style.display = "flex";
//     resizeCanvas();
//     resizeMyName2();
//     pixelsize();
//     setTimeout(function(){
//         document.getElementsByTagName("loader")[0].style.display = "none";
//     }, 1000);
// });