const { R_OK } = require("constants")
const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


function doAync()
{
    return new Promise(
        function(resolve,reject){
            rl.question("Input\n",(str)=>{
                console.log(str)
                resolve(str)
            })
        }
    )
}

doAync().then(()=>{
    console.log(123)
    return
})