spheres = [] //[x, y, angle, size, colour, speed]

myName = document.querySelector('#name');
function resizeMyName(){
    if ($(window).width()>$(window).height()){
        myName.width = 0.9*$(window).height();
        myName.height = 0.18*$(window).height();
        myName.style.left = ($(window).width()-0.9*$(window).height())/2+'px';
        myName.style.top = 0.41*$(window).height()+'px';
    } else {
        myName.width = 0.9*$(window).width();
        myName.height = 0.18*$(window).width();
        myName.style.left = 0.05*$(window).width()+'px';
        myName.style.top = ($(window).height()-0.18*$(window).width())/2+'px';
    }

    var c1 = myName.getContext('2d');
    const nameImage = new Image();
    nameImage.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjI1MG1tIgogICBoZWlnaHQ9IjUwbW0iCiAgIHZpZXdCb3g9IjAgMCAyNTAgNTAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4xIChjNDk3YjAzYywgMjAyMC0wOS0xMCkiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im5hbWUuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMC4yNjk5MTE5OSIKICAgICBpbmtzY2FwZTpjeD0iLTMxMy4xOTU0NCIKICAgICBpbmtzY2FwZTpjeT0iNTYwIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI1MiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NDciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjE3NjEiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjE4MSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDIuMzMzMzAwMDAwMDAwMDAxMjZweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI2NDU4MzsiCiAgICAgICB4PSIxMC43ODc0MDEiCiAgICAgICB5PSI0MC40MDkzMjEiCiAgICAgICBpZD0idGV4dDEyIj48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuMTAiCiAgICAgICAgIHg9IjEwLjc4NzQwMSIKICAgICAgICAgeT0iNDAuNDA5MzIxIgogICAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NDIuMzMzMzAwMDAwMDAwMDAxMjZweDtmb250LWZhbWlseTonSUJNIFBsZXggTW9ubyc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonSUJNIFBsZXggTW9ubyc7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTsiPkRlcmVrIEdvdTwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg==';
    
    nameImage.addEventListener("load", function(){
        c1.drawImage(nameImage, 0, 0, myName.width, myName.height);
        const pixels = c1.getImageData(0, 0, myName.width, myName.height);
        for (let x = 0; x<50; x++){
            for (let y = 0; y<10; y++){

            }
        }
    })
}
resizeMyName();