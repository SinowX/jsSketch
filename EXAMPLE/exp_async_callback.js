const { R_OK } = require("constants")
const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


function doAync()
{
    return new Promise(
        function(resolve){
            rl.question("Input\n",(str)=>{
                console.log(str)
                resolve(str)
            })
        }
    )
}

doAync().then(()=>{
    console.log(123)
}).finally(()=>{
    console.log("Finally")
    rl.close()
    return
})




// 如果doAjax()返回一个承诺，那么你可以这样做：

// var promises = [];
// for (var i = 0; i < 10; i++) {
//     promises.push(doAjax(...));
// }
// Promise.all(promises).then(function() {
//     // returned data is in arguments[0], arguments[1], ... arguments[n]
//     // you can process it here
// }, function(err) {
//     // error occurred
// });
// 如果您需要将非承诺异步操作变成一个返回承诺的操作，您可以像这样“承诺”它：

// function doAjax(...) {
//     return new Promise(function(resolve, reject) {
//         someAsyncOperation(..., function(err, result) {
//             if (err) return reject(err);
//             resolve(result);
//         });
//     });
// }
// 然后使用上面的模式：

// var promises = [];
// for (var i = 0; i < 10; i++) {
//     promises.push(doAjax(...));
// }
// Promise.all(promises).then(function() {
//     // returned data is in arguments[0], arguments[1], ... arguments[n]
//     // you can process it here
// }, function(err) {
//     // error occurred
// });