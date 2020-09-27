
const fs = require("fs");
const readLine = require("readline");

/**
 * 按行读取文件内容
 *
 * @param fReadName 文件名路径
 * @param config split, etc
 *
 * @return Promise 字符串数组
 */
exports.readFileToArr = function readFileToArr(fReadName, config) {
    const {split} = config;
    return new Promise((resolve, reject)=>{
        let columns;
        let arr = [];
        let readObj = readLine.createInterface({
            input: fs.createReadStream(fReadName)
        });
    
        readObj.on('line', function (line) {
            if(!columns){
                columns = line.split(split);
            } else {
                arr.push(splitFile({split, columns, line}))
            }
        });
        readObj.on('close', function () {
            resolve(arr);
        });
        readObj.on('error', function(err){
            reject(err);
        })
    });
    
}

function splitFile({split=',', columns, line}){
    let data = {};
    let items = line.split(split);
    columns.forEach((col, i)=>{
        if(i===columns.length-1 && line.length!=columns.length)
            items[i] = items[i]||"";
        data[col] = items[i];
    })
    return data;
}


