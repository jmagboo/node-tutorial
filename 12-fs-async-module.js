// Fs Module (Async)

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf8',(err,result) =>{
if (err){
    console.log(err)
    return
}
    const first = result;
    readFile('./content/second.txt','utf8',(err,result) =>{
    if (err){
        console.log(err)
        return
    }
    const second = result;
    writeFile('./content/result-sync.txt',`The result: ${first}, ${second}`,'utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
        }
    })
})
})
