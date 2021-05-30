var fs = require("fs");
var jsdom=require("jsdom")
var JSDOM=jsdom.JSDOM


// 同步读取
var data = fs.readFileSync('baidu.html');

var dom=new JSDOM(data.toString()).window.document



var text=dom.getElementsByClassName("video-meet-toast c-color-text")[0].innerHTML
console.log(text)