var sec=00
var min=00
var hr=00
var interval

function start(){
    watch()
    interval = setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00'
}

function twodigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=twodigits(hr)+':'+twodigits(min)+':'+twodigits(sec)
}