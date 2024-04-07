pixelsize();
spheres = []; //[[x, y], angle, size, currcolour, colour, speed]
var pixels;
const nameImage = new Image();
nameImage.src = 'data:image/png;base64,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Fe8DueJASq54HyQprfggkCueh1RT8T6QKw6k5Ir3QZLSig8CueJ5SDUV7wO54kBKrngfJCmt+CCQK56HVFPxPpArDqTkivdBktKKDwK54nlINRXvA7niQEqueB8kKa34IJArnodUU/E+kCsOpOSK90GS0ooPArnieUg1Fe8DueJASq54HyQprfggkCueh1RT8T6QKw6k5Ir3QZLSig8CueJ5SDUV7wO54kBKrngfJCmt+CCQK56HVFPxPpArDqTkivdBktKKDwK54nlINRXvA7niQEqueB8kKa34IJArnodUU/E+kCsOpOSK90GS0ooPArnieUg1Fe8DueJASq54HyQprfggkCueh1RT8T6QKw6k5Ir3QZLSig8CueJ5SDUV7wO54kBKrngfJCmt+CCQK56HVFPxPpArDqTkivdBktKKDwK54nlINRXvA7niQEqueB8kKa34IJArnodUU/E+kCsOpOSK90GS0ooPArnieUg1Fe8DueJASq54HyQprfggkCueh1RT8T6QKw6k5Ir3QZLSig8CueJ5SDUV7wO54kBKrngfJCmt+CCQK56HVFPxPpArDqTkivdBktKKDwK54nlINRXvA7niQEqueB8kKa34IJArnodUU/E+kCsOpOSK90GS0ooPArnieUg1Fe8DueJASq54HyQprfggkCueh1RT8T6QKw6k5Ir3QZLSig8CueJ5SDUV7wO54kBKrngfJCmt+CCQK56HVFPxPpArDqTkivdBktKKDwK54nlINRXvA7niQEqueB8kKa34IJArnodUU/E+kCsOpOSK90GS0ooPArnieUg1Fe8DueJASq54HyQprfggkCueh1RT8T6QKw6k5Ir3QZLSig8CueJ5SDUV7wO54kBKrngfJCmt+CCQK56HVFPxPpArDqTkivdBktKKDwK54nlINRXvA7niQEqueB8kKa34IJArnodUU/E+kCsOpOSK90GS0ooPArnieUg1Fe8DueJASq54HyQprfggkCueh1RT8T6QKw6k5Ir3QZLSig8CueJ5SDUV7wO54kBKrngfJCmt+CCQK56HVFPxPpArDqTkivdBktKKDwK54nlINRXvA7niQEqueB8kKa34IJArnodUU/E+kCsOpOSK90GS0ooPArnieUg1Fe8DueJASq54HyQprfggkCueh1RT8T6QKw6k5Ir3QZLSig8CueJ5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';

myName = document.querySelector('#name');
var c1 = myName.getContext('2d');

function resizeMyName(){
    if ($(window).width()>$(window).height()){
        myName.width = 0.50*$(window).height();
        myName.height = 0.50*$(window).height();
        myName.style.left = ($(window).width()-0.50*$(window).height())/2+'px';
        myName.style.top = 0.25*$(window).height()+'px';
    } else {
        myName.width = 0.50*$(window).width();
        myName.height = 0.50*$(window).width();
        myName.style.left = 0.25*$(window).width()+'px';
        myName.style.top = ($(window).height()-0.50*$(window).width())/2+'px';
    }
    nameImage.addEventListener("load", function(){
        c1.drawImage(nameImage, 0.2*myName.width, 0.2*myName.height, 0.6*myName.width, 0.6*myName.height);
        pixels = c1.getImageData(0, 0, myName.width, myName.height);
        spheres = [];
        for (let i=0; i<2000; i++){
            r = myName.height/2 * Math.sqrt(Math.random())
            theta = Math.random() * 2 * Math.PI
            spheres.push([[myName.height/2 + r * Math.cos(theta),myName.height/2 + r * Math.sin(theta)], 2*Math.PI*Math.random(), 2*Math.random()*pxs+1*pxs, [0, 0, 0, 0], [0, 0, 0, 0], 0.2*pxs*Math.random()+0.2*pxs]);
        }
        requestAnimationFrame(nameRender);
    })
}
resizeMyName();
function resizeMyName2(){
    if ($(window).width()>$(window).height()){
        myName.width = 0.50*$(window).height();
        myName.height = 0.50*$(window).height();
        myName.style.left = ($(window).width()-0.50*$(window).height())/2+'px';
        myName.style.top = 0.25*$(window).height()+'px';
    } else {
        myName.width = 0.50*$(window).width();
        myName.height = 0.50*$(window).width();
        myName.style.left = 0.25*$(window).width()+'px';
        myName.style.top = ($(window).height()-0.50*$(window).width())/2+'px';
    }
    c1.drawImage(nameImage, 0.2*myName.width, 0.2*myName.height, 0.6*myName.width, 0.6*myName.height);
    pixels = c1.getImageData(0, 0, myName.width, myName.height);
    spheres = [];
    for (let i=0; i<2000; i++){
        r = myName.height/2 * Math.sqrt(Math.random())
        theta = Math.random() * 2 * Math.PI
        spheres.push([[myName.height/2 + r * Math.cos(theta),myName.height/2 + r * Math.sin(theta)], 2*Math.PI*Math.random(), 2*Math.random()*pxs+1*pxs, [0, 0, 0, 0], [0, 0, 0, 0], 0.2*pxs*Math.random()+0.2*pxs]);
    }
}

function nameRender(){
    c1.clearRect(0, 0, myName.height, myName.height);
    for (let i=0; i<spheres.length; i++){
        sphere = spheres[i];
        if (Math.pow(sphere[0][0]-(myName.height/2), 2) + Math.pow(sphere[0][1]-(myName.height/2), 2)>=Math.pow(myName.height/2, 2)){
            sphere[1]=(sphere[1]-Math.PI)%(2*Math.PI)
        }
        sphere[0][0]+=sphere[5]*Math.cos(sphere[1]);
        sphere[0][1]+=sphere[5]*Math.sin(sphere[1]);
        if (pixels.data[(parseInt(sphere[0][1])*pixels.width+parseInt(sphere[0][0]))*4+3]>=1){
            sphere[3]=[pixels.data[(parseInt(sphere[0][1])*pixels.width+parseInt(sphere[0][0]))*4],pixels.data[(parseInt(sphere[0][1])*pixels.width+parseInt(sphere[0][0]))*4+1],pixels.data[(parseInt(sphere[0][1])*pixels.width+parseInt(sphere[0][0]))*4+2],(pixels.data[(parseInt(sphere[0][1])*pixels.width+parseInt(sphere[0][0]))*4+3])/250];
        } else {
            sphere[3]=[255, 255, 255, 0.15];
        }
        for (let i=0; i<4; i++){
            sphere[4][i]+=((sphere[3][i]-sphere[4][i])/15);
        }
        spheres[i] = sphere;
        c1.beginPath();
        c1.arc(sphere[0][0]-(sphere[2]/2), sphere[0][1]-(sphere[2]/2), sphere[2], 0, 2 * Math.PI);
        c1.fillStyle = `rgba(${sphere[4][0]}, ${sphere[4][1]}, ${sphere[4][2]}, ${sphere[4][3]})`;
        c1.fill();
    }
    requestAnimationFrame(nameRender);
}