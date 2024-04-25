$('#name').hide();
$('#introButton').hide();
setTimeout(function(){
    document.getElementsByTagName("loader")[0].style.display = "none";
}, 1000);
setTimeout(function(){
    $('#name').fadeIn(2000);
    $('#introButton').fadeIn(2000);
    console.log('wtf')
}, 1000);