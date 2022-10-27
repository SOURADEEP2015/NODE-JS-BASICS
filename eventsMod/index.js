const EventEmitter = require("events");

const event = new EventEmitter();

event.on('sayMyName', () => {
        console.log('My name is Souradip')
    })
    // event.on('sayMyName', () => {
    //     console.log('My name is Amit')
    // })
    // event.on('sayMyName', () => {
    //     console.log('My name is Bhuvan')
    // })
event.on("checkPage", (sc, msg) => {
    console.log(`staus code : ${sc},  event payload : ${msg}`)
})
event.emit("sayMyName");
event.emit("checkPage", 200, "event_data")