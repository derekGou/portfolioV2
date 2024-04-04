var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');
var stars = []; //[Distance from center, angle, speed]
var num = 0;

function resizeCanvas(){
    num = Math.sqrt(Math.pow(2*$(window).height(), 2)+Math.pow($(window).width()/2, 2));
    canvas.style.top = (2*$(window).height()-num)+'px';
    canvas.style.left = ($(window).width()/2-num)+'px';
    canvas.width = num*2;
    canvas.height = num;
}
resizeCanvas();

function colour(r, g, b){
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length==1){
        r='0'+r;
    }
    if (g.length==1){
        g='0'+g;
    }
    if (b.length==1){
        b='0'+b;
    }
    return '#'+r+g+b;
}

function calculate(lst){
    return [lst[0]*Math.cos(lst[1]/180*Math.PI)+num, -1*lst[0]*Math.sin(lst[1]/180*Math.PI)+num];
}

function generate(){
    if (Math.random()>0.92){
        speed = Math.random()*0.05+0.05
        dist = Math.pow(Math.random(), 0.75)*(num-$(window).height())+($(window).height());
        stars.push([dist, 0, speed]);
    }
}

function render(){
    c.beginPath();
    c.clearRect(0, 0, num*2, num);
    generate();
    stars1 = [];
    for (let i=0; i<stars.length; i++){
        c.fillStyle = "white";
        c.fillRect(calculate(stars[i])[0], calculate(stars[i])[1], 2, 2);
        stars[i][1]+=stars[i][2];
        if (stars[i][1]<=180){
            stars1.push(stars[i]);
        }
    }
    stars = stars1;
    requestAnimationFrame(render);
}

requestAnimationFrame(render);