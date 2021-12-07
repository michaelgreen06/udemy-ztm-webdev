var a=5;
var b=10;

let obj1={name: "yao", password:"123"};
let obj2=obj1;

var c=[1,2,3,4,5];
var d=c;
d.push(1234);

let obj={a:"a", b:"b",c:"c"}
//copy the object by cloning:
let clone=Object.assign({},obj);
//let obj2=obj doesn't work because it is passing by reference
let clone2={...obj};//cloning using the spread? operator
obj.c=5;
console.log(clone);

//object inside Object
let obj={a:"a", b:"b",c:{deep:"try and copy me"}}
let clone=Object.assign({},obj);
let clone2={...obj};//cloning using the spread? operator
obj.c.deep='hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
//the above is shallow cloniing. it only clones the first layer
//{deep} object has a different address that isn't affected by
//cloniing

//DEEP Cloning - this method can have performance issues
//espescially if it's a really deep object
let obj={a:"a", b:"b",c:{deep:"try and copy me"}}
let clone=Object.assign({},obj);
let clone2={...obj};//cloning using the spread? operator
let superClone=JSON.parse(JSON.stringify(obj));
obj.c.deep='hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
