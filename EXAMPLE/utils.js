function times(str, num){
    return num > 1 ? str += times(str, --num): str;
}


module.exports.times=times

//module.exports.[导出到外部的名称]=[本文件函数名]