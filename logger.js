const event = require('events');


var url='http//google.com'

class Logger extends event{
    
     log(massage){
    console.log(massage);
    this.emit('messageloading',{id:1,url:'http//'});
};

}
module.exports = Logger ;