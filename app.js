const event = require('events');

 const Logger=require('./logger')
  logger = new Logger();  

  logger.on('messageloading',(arg)=>{
    console.log('listner loading',arg);
});

  logger.log('massage')