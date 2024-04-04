window.addEventListener("resize", function(){
    document.getElementsByTagName("loader")[0].style.display = "flex";
    resizeCanvas();
    resizeMyName();
    setTimeout(function(){
        document.getElementsByTagName("loader")[0].style.display = "none";
    }, 1000);
    console.log('haha')
});
window.addEventListener("scroll", function(){
    scrolling();
});