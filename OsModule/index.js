const os = require('os')

console.log(os.arch())
const free_byte = os.freemem();
console.log(`Free GB : ${free_byte/1024/1024/1024}`)
const total_byte = os.totalmem();
console.log(`Total GB : ${total_byte/1024/1024/1024}`)
console.log(os.hostname())
console.log(os.platform())