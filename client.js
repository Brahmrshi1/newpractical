const Eventemitter = require('events')
const readline =require('readline');


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout

});
const client = new Eventemitter();
const server = require('./server')(client);
server.on('response',(resp)=>{
  process.stdout.write('\u001B[2J\u001B[0;0f');
  process.stdout.write(resp);
  process.stdout.write('\n\>');
});

var args
let command
rl.on('line',(input)=>{
    [command,...args]=input.split(' ');
  client.emit('command',command,args);
})
