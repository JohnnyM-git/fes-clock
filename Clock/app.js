// const millisecondHandle = document.querySelector(".handle__millisecond")
const secondHandle = document.querySelector(".handle__second")
const minuteHandle = document.querySelector(".handle__minute")
const hourHandle = document.querySelector(".handle__hour")

// requestAnimationFrame(setHandles)
setInterval(() => {
    setHandles()
}, 1000)

function setHandles () {
    const d = new Date()
    const hours = d.getHours()
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()
    // const milliseconds = d.getMilliseconds()
    const extraMinutesrotation =  seconds * 0.1
    const minutesRotation = minutes * 6 + extraMinutesrotation
    // const millisecondsRotation = (milliseconds)
    const secondsRotation = (seconds * 6)
    const extraHoursRotation = minutes * 0.5
    const hoursRotation = hours % 12 * 30 + extraHoursRotation 
    hourHandle.style.transform = `translateX(-50%) rotate(${hoursRotation}deg)`
    minuteHandle.style.transform = `translateX(-50%) rotate(${minutesRotation}deg)`
    secondHandle.style.transform = `translateX(-50%) rotate(${secondsRotation}deg)`
    // millisecondHandle.style.transform = `translateX(-50%) rotate(${millisecondsRotation}deg)`
    // requestAnimationFrame(setHandles)

}
