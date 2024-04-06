window.addEventListener("resize", function(){
    document.getElementsByTagName("loader")[0].style.display = "flex";
    resizeCanvas();
    resizeMyName2();
    pixelsize();
    setTimeout(function(){
        document.getElementsByTagName("loader")[0].style.display = "none";
    }, 1000);
});
window.addEventListener("scroll", function(){
    scrolling();
});