setTimeout(function(){
    document.getElementsByTagName("loader")[0].style.display = "none";
}, 1000);
resizeCanvas();
scrolling();
pixelsize();
for (let i = 0; i<70; i++){
    stars.push([Math.pow(Math.random(), 0.75)*(num-$(window).height())+($(window).height()), Math.random()*180, Math.random()*0.05+0.075]);
}