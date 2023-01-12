// Writeable streams

const { writeFileSync} = require('fs');
for (let i = 0; i<10; i++) {
    writeFileSync('./content/big.txt', `jastine ${i}\n`, { flag: 'a'})
}