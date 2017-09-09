/*
let total = 0;
for(let i = 1;i<=8;i++){
    total+=Math.pow(2,i-1)
;}
console.log(total)*/
//1) 通过长度
var buffer = new Buffer(100);
//buffer.fill(0);//手动将buffer清空
console.log(buffer);//通过长度构建的buffer内容是随机的
//2) 通过字符串 (字符串具有不变性)
var str = '我爱你';
var buffer = new Buffer('珠峰');
console.log(buffer);
//3) 通过数组创建 这种方式用的相对较少
var buffer = new Buffer([0,255]);
console.log(buffer);
//代表的是内存 引用
//数组的slice 深拷贝 浅拷贝
//深拷贝指的是对象中，里面存放的对象和以前的对象毫无关系，但是长的一样，浅拷贝里面存放的内容和以前的是同一个地址
let ary =[1,2,3];
let ary1 = [ary,100,200];
let newAry = ary1.slice();//slice是浅拷贝
ary[0] = 500;
console.log(newAry);
//Object.assign({},{a:{a:1}}) 浅拷贝
//深拷贝  JSON.parse(JSON.stringify({a:{a:1}}))，不支持函数的拷贝
//循环递归拷贝

var buffer = new Buffer([1,2,3,4]);
var newBuffer = buffer.slice(0,1);//buffer中存放的都是内存地址，所以slice不会返回一个新的buffer
newBuffer[0] = 100;
console.log(buffer);