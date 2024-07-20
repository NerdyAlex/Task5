// select the startbtn, resetbtn, pasuedbtn display of time
//from the document

/*
declare starttime, currenttime, eslaspedtime, hrs, sec, min, interval, paused=true
 
add click event to startbtn
ckeck IF paused
    set paused = false
    calculate starttime as currenttime(date.now) - eslaspedtime
    start interval to update the display every 75ms

add click event to pausedbtn
ckeck IF not paused
    set paused = true
    calculate eslaspedtime as currenttime(date.now) - starttime
    clear interval that used to update

add click event to resetbtn
ckeck IF not paused
    set paused = true
    reset starttime, currenttime, eslaspedtime, hrs, sec, min to zero clear interval
    and display 00:00:00 to the window
    
create a update function
    calculate eslaspedtime as currenttime(date.now) - starttime
    

    calulate mins as eslaspedtime divided by 1000ms times 60 and mudoles 60(so when it reach 60 it start again from 1)
    calulate hurs as eslaspedtime divided by 1000ms times 60 times 60(cause there are 60 + 60 m=to make on hur) and mudoles 60(so when it reach 60 it start again from 1)
    calulate mins as eslaspedtime divided by 1000ms and mudoles 60(so when it reach 60 it start again from 1)
    round up mins, secs, hurs with floor method


    check if the length of the hrs, min, sec are less than 2 then
    add a 0 to the front of it else contuine
*/


let display = document.querySelector("#display")
let startbtn = document.querySelector("#startbtn")
let pausedbtn = document.querySelector("#pausebtn")
let resetbtn = document.querySelector("#resetbtn")

let starttime = 0
let paused = true
let eslaspedtime = 0
let currenttime = 0
let hurs = 0
let mins = 0
let secs = 0
let msinterval;


startbtn.addEventListener("click", function(){
    if(paused){
        paused = false
        starttime = Date.now() - eslaspedtime
        msinterval = setInterval(update, 80);
    }
})

pausedbtn.addEventListener("click", function () {
    if(!paused) {
        paused = true
        eslaspedtime = Date.now() - starttime 
        clearInterval(msinterval)
    }
})

resetbtn.addEventListener("click", function () {
    starttime = 0
    paused = true
    eslaspedtime = 0
    currenttime = 0
    hurs = 0
    mins = 0
    secs = 0
    clearInterval(msinterval);
    display.textContent = "00:00:00"
})

function update(){
    eslaspedtime = Date.now() - starttime
    
    secs = Math.round((eslaspedtime / 1000) % 60)
    mins = Math.round((eslaspedtime / (1000 * 60)) % 60)
    hurs = Math.round((eslaspedtime / (1000 * 60 * 60)) % 60)

    secs = zeros(secs)
    mins = zeros(mins)
    hurs = zeros(hurs)


    function zeros(unit) {
        unit = unit.toString()
        return unit.length < 2 ? "0" + unit : unit
    }

    display.textContent = `${hurs}:${mins}:${secs}`
}


