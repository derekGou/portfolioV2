var spheres = [];
var pixels;
var firstTime = true;
var phase = 0;

const sunset = new Image();

myName = document.querySelector('#name');
var c1 = myName.getContext('2d', { willReadFrequently: true });
var left;
function pixelsize(){
    let coef = 0;
    if (phase==0){
        coef = 4;
    } else {
        coef = 12;
    }
    if ($(window).width()>$(window).height()){
        return parseInt(coef*$(window).height()/1000);
    } else {
        return parseInt(coef*$(window).width()/1000);
    }
}
introButton.onclick = function(){
    phase = 1;
    for (let i=0; i<spheres.length; i++){
        spheres[i].update();
    }
    $('#introButton').animate({
        opacity: '0'
    }, "slow");
    setTimeout(function(){
        $('#introButton').hide()
    }, 500);
    setTimeout(function(){
        $('background').animate({
            opacity: "1"
        }, "slow")
        $('#title').css("display", "flex");
        $('#title').animate({
            opacity: "1"
        }, "slow");
        $('#canvas').show();
        $('#canvas').animate({
            opacity: "1"
        }, "slow");
        let w = 0;
        if ($(window).height()<$(window).width()){
            w = "50vw";
        } else {
            w = "80vw";
        }
        $('#description').animate({
            width: w, 
            height: "50vh"
        }, "slow");
    }, 1000);
    setTimeout(function(){
        $('h2').css("display", "block");
        $('h2').animate({
            opacity: "1"
        }, "slow");
        $('h3').css("display", "block");
        $('h3').animate({
            opacity: "1"
        }, "slow");
        $('.moreButtons').css("display", "flex");
    }, 1500);
    setTimeout(function(){
        $('.moreButtons').slideDown();
        $('.moreButtons').animate({
            opacity: "1"
        }, "slow");
    }, 2000);
}
class star {
    constructor(){
        let r = myName.height/2 * Math.sqrt(Math.random());
        let theta = Math.random() * 2 * Math.PI;
        this.position = [myName.height/2+0.9*r*Math.cos(theta), myName.height/2+0.9*r*Math.sin(theta)];
        this.angle = 2*Math.PI*Math.random();
        this.currcolour = [0.0, 0.0, 0.0, 0.0];
        this.colour = [0.0, 0.0, 0.0, 0.0];
        this.speed = 0.05*pixelsize()*(Math.random()+1);
        this.size = pixelsize();
    }
    update(){
        this.size = pixelsize();
    }
    render(){
        let hi = myName.height/2;
        if ((this.position[0]-hi)**2 + (this.position[1]-hi)**2>=(0.9*hi)**2){
            this.angle=(this.angle-Math.PI)%(2*Math.PI);
        }
        this.position[0]+=this.speed*Math.cos(this.angle);
        this.position[1]+=this.speed*Math.sin(this.angle);
        let num = (parseInt(this.position[1])*pixels.width+parseInt(this.position[0]))*4;
        if (pixels.data[num+3]>=1){
            this.currcolour = [];
            for (let i=0; i<3; i++){
                this.currcolour.push(4/5*pixels.data[num+i]+51);
            }
            this.currcolour=[].slice.call(pixels.data.slice(num, num+4));
            this.currcolour[3]=0.75;
        } else {
            this.currcolour=[255, 255, 255, 0.25];
        }
        for (let i=0; i<4; i++){
            this.colour[i]+=((this.currcolour[i]-this.colour[i])/10);
        }
        c1.beginPath();
        c1.arc(this.position[0]-(this.size/2), this.position[1]-(this.size/2), this.size, 0, 2 * Math.PI);
        c1.fillStyle = `rgba(${this.colour[0]}, ${this.colour[1]}, ${this.colour[2]}, ${this.colour[3]})`;
        c1.fill();
    }
}
function resizeMyName(){
    if ($(window).width()>$(window).height()){
        myName.width = 0.50*$(window).height();
        myName.height = 0.50*$(window).height();
        $('#introButton').css({
            "width": 0.50*$(window).height()+"px", 
            "height": 0.50*$(window).height()+"px"
        })
        $('h3').css({
            "text-align": "left",
            "margin": "2vh 2.5vw"
        });
        $('h2').css({
            "text-align": "left",
            "margin": "0vh 2.5vw"
        });
        $('.horz').css({
            "flex-direction": "row",
            "width": ""
        })
        $('#description').css({
            "width": phase*50+"vw",
            "height": phase*50+"vh",
            "align-items": "flex-start"
        });
        $('.moreButton').css("margin", "0 3vh 0 0");
        $('.moreButtons').css("flex-direction", "row");
        $('.vert').css("justify-content", "center");
    } else {
        myName.width = 0.50*$(window).width();
        myName.height = 0.50*$(window).width();
        $('#introButton').css({
            "width": 0.50*$(window).width()+"px", 
            "height": 0.50*$(window).width()+"px"
        })
        $('h3').css({
            "text-align": "center",
            "margin": "2vh 0"
        });
        $('h2').css({
            "text-align": "center",
            "margin": "2vh 0"
        });
        $('.horz').css({
            "flex-direction": "column",
            "width": "80vw"
        })
        $('#description').css({
            "width": phase*80+"vw",
            "height": phase*50+"vh",
            "align-items": "center"
        });
        $('.moreButton').css("margin", "0 1.5vh 0 1.5vh");
        $('.moreButtons').css("flex-direction", "column");
        $('.vert').css("justify-content", "flex-start");
    }
    spheres = [];
    for (let i=0; i<1250; i++){
        const sphere = new star();
        spheres.push(sphere);
    }
    if (firstTime){
        requestAnimationFrame(nameRender);
        firstTime = false;
    }
}
resizeMyName();

function nameRender(){
    c1.clearRect(0, 0, myName.height, myName.height);
    if (phase==1){
        c1.drawImage(sunset, 0, 0, myName.height, myName.height);
    }
    pixels = c1.getImageData(0, 0, myName.height, myName.height);
    c1.clearRect(0, 0, myName.height, myName.height);
    for (let i=0; i<spheres.length; i++){
        spheres[i].render();
    }
    setTimeout(() => {
        requestAnimationFrame(nameRender);
    }, 15);
}