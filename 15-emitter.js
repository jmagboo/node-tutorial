const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,age) => {
    console.log(`Name: ${name} and age of ${age}`)
})

customEmitter.on('response', () => {
    console.log(`dataaa received`)
})

customEmitter.emit('response','jastine', 23)



