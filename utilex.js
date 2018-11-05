const events = require('events');
const util = require('util');
 
const person = function(name){
    this.name = name
};
util.inherits(person,events.EventEmitter);

const james = new person('james');
const jam = new person('jam');
const rayan = new person('rayan');

const  pepole=[james,jam,rayan];
pepole.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + "Said:" +msg);
    });  

});


james.emit('speak','hey dude');
rayan.emit('speak',"Fine what about you");
