

myclock = document.getElementById("myclock")

setInterval(update, 1000)

function update(date){

    date = new Date()

    myclock.textContent = formatdate(date)

    function formatdate(date) {
        let hour = formatZeros(date.getHours())
        let min = formatZeros(date.getMinutes()) 
        let sec = formatZeros(date.getSeconds()) 
        let amorpm = hour > 12 ? "pm": "am";
        return `${hour}:${min}:${sec} ${amorpm}`
    }
    function formatZeros(time){
        time = time.toString()
        return time.length < 2 ? "0" + time : time
    }
}
