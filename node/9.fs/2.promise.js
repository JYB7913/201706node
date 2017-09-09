let fs = require('fs');

function read(url) {
    //new Promise需要传入一个executor 执行器
    //executor中需要传入两个函数 resolve,reject
    return new Promise((resole,reject)=>{
        fs.readFile(url,'utf8',function (err,data) {
            if(err)reject(err);
            resole(data);
        });
    });
}
read('name.txt').then(function (data) {
    console.log(data)
},function (err) {
    console.log(err);
});



/*
let obj = {};
fs.readFile('./name.txt','utf8',function (err,data) {
    if(err) return console.log(err);
    obj.name = data;
    out();
});
fs.readFile('./age.txt','utf8',function (err,data) {
    if(err) return console.log(err);
    obj.age = data;
    out();
});
*/



