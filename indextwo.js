const async = require('async');
const stack={};


stack.getuserName=function(callback){
  const username='Rock';
  callback(null,username);
};
stack.getuserGender=function(callback){
   const usergender = 'male';
   callback(null,usergender);
};
stack.getuserAGe=function(callback){
    const userage =25;
    callback(null,this.getuserAGe);
};

async.parallel(stack,function(err,result){
    if(err){
        console.err(err);
    }

            console.log(result);
});
