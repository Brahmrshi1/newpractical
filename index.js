const async = require('async');
const stack=[];
const funtionone = function(callback){
    
    console.log("hello wold") 
    // callback(null,'First Function Result');
    callback('error',null)
}
const funtiontwo = function(callback){
    console.log("Leave in peace ")
    callback(null,'second Function Result');
    
}
const funtionthree = function(callback){
    console.log("leve to gather")
    callback(null,'third Function Result');
    
}

stack.push(funtionone);
stack.push(funtiontwo);
stack.push(funtionthree);

async.parallel(stack,function(err,result){
console.log(result)
}); 