const async =require('async');
const stack = [];

function functionone(callback){
    console.log('This is test one');
    callback('error',null);
    // callback(null,'This is function one');
};

function functiontwo(callback){
    console.log('This is test two');
   
     callback(null,'This is function two');
 };

 function functionthree(callback){
    console.log('This is test one');
    callback(null,'This is function three');
 };

stack.push(functionone);
stack.push(functiontwo);
stack.push(functionthree);


async.parallel(stack,function(err,result){
   console.log(result)  
});