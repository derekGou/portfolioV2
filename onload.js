pixelsize();
$('#name').hide();
setTimeout(function(){
    document.getElementsByTagName("loader")[0].style.display = "none";
}, 1000);
setTimeout(function(){
    $('#name').fadeIn(2000);
}, 1000);