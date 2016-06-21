/**
 * Created by TBtuo on 21/06/16.
 * Source: https://segmentfault.com/a/1190000002507303
 */
"use strict";
/*
var promise = new Promise(function (resolve, reject) {
    resolve(1);
});

promise.then(function(val){
    console.log(val);
    return val + 2;
}).then(function (val) {
    console.log(val);
});
*/

/*http://www.jianshu.com/p/d0551330615d
 [JavaScript] Promise用法总结
* */

// （1）new Promise(function(resolve,reject){})返回了一个Promise对象
/*let p = new Promise(function (resolve,reject) {});
console.log(p instanceof Promise);*/

// （2）new Promise的参数函数同步执行
/*var p = new Promise(function (resolve,reject) {
    console.log(1);
});
console.log(2);*/

//（3）Promise.prototype.then在resolve以后也能调用
/*var p = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve(1);
    },1000);
});
p.then(function (v) {
    console.log(v);
});

setTimeout(function (v) {
    p.then(function (v) {
        console.log(v);
    });
},2000);*/

// （4）Promise.prototype.then返回了一个新的Promise对象，
// 而不是原来的Promise对象
/*var p = new Promise(function (resolve,reject) {});
var q = p.then(function (v) {});
console.log(q === p);*/

// （5）Promise.prototype.then中的this指向window
/*
var p = new Promise(function (resolve,reject) {
    resolve(1);
});

p.then(function (v) {
    console.log(this ===window);
});
*/

// （6）Promise.prototype.then返回的新Promise对象，
// 以参数函数的返回值作为新Promise的终结值，
// 如果不是Promise对象，则相当于返回Promise.resolve(...)
/*var p = new Promise(function (resolve,reject) {
    resolve(1);
});

p.then(function (v) {
    console.log(v);
    return 2;
}).then(function (v) {
    console.log(v);
    return Promise.resolve(3);
}).then(function (v) {
    console.log(v);
    return Promise.reject(4);
}).catch(function (v) {
    console.log(4);
});*/

// （7）Promise.prototype.then(onFulfilled,onRejected)
// 与Promise.prototype.catch(onRejected)
/*var p = new Promise(function (resolve,reject) {
    reject(1);
});

p.then(function (m) {
    console.log(m);
},function (n) {
    console.log(n);
});

p.catch(function (v) {
    console.log(v);
});*/

// （8）throw也会导致Promise被reject
/*var p = new Promise(function (resolve,reject) {
    throw 1; //保存栈信息，可以throw new Error(1);即e.message/e.stack
});

p.catch(function (v) {
    console.log(v);
});*/

// （9）Promise.resolve(value/promise/thenable) 返回一个以参数为终结值的Promise对象
// Value:
/*
var p1 = Promise.resolve(1);
p1.then(function (v) {
    console.log(v);
});*/
/*

//Promise:

var p2= Promise.resolve(new Promise(function (resolve,reject) {
    resolve(1);
}));
p2.then(function (v) {
    console.log(v);
});

// thenable:
var p3 = Promise.resolve({
    then:function (resolve,reject) {
        resolve(2);
    }
});
p3.then(function (v) {
    console.log(v);
});
*/

// (10) Promise.reject(reason)

/*var p = Promise.reject(5);

p.then(function (m) {
    console.log(m); // 不执行
},function (n) {
    console.log(n);  // 5
});

p.catch(function (v) {
    console.log(v);
});*/

// （11）Promise.all(iterable)返回一个新的Promise，
// 它等所有的iterable中的Promise都Resolve后就Resolve，
// 只要有一个Reject就Reject。
//
// 如果iterable中某一个不是Promise，则使用Promise.resolve(...)转换为Promise
/*var p = Promise.resolve(1);
Promise.all([true,p]).then(function (v) {
    console.log(JSON.stringify(v));
});

var p1 = Promise.resolve(2);
var p2 = Promise.reject(3);
Promise.all([true,p1,p2]).then(function(m) {
    console.log('resolve: ' + JSON.stringify(m));
},function (n) {
    console.log('reject: ' +JSON.stringify(n));
});*/

// （12）Promise.race(iterable)返回一个新的Promise，
// 只要iterable中有一个Promise被Resolve/Reject了就Resolve/Reject。

var p1 = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve(7);
    }, 1000);
});
var  p2 = new Promise(function (resolve,reject) {
    setTimeout(function () {
        reject(8);
    }, 2000);
});

Promise.race([p1,p2]).then(function (m) {
    console.log('resolve: '+ m);
},function (n) {
    console.log('reject: '+ n);
});




















