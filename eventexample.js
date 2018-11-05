const EventEmitter  = require('events');
class myevent  extends EventEmitter{}


const myEmitter=new myevent()


myEmitter.on('event', () => {
    console.log('an event occurred!');
  });
  myEmitter.emit('event');






  //   Passing arguments and `this` to listeners


  myEmitter.on('event', function(a, b) {
    console.log(a, b, this, this === myEmitter);
   
  });
  myEmitter.emit('event', 'a', 'b');


myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');






//  Asynchronous 
myEmitter.once('event', (a, b) => {
  setImmediate(() => {
    console.log('The EventEmitter calls all listeners synchronously in the order in which they were registered. This is important to ensure the proper sequencing of events and to avoid race conditions or logic errors. When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods:');
  });
});
myEmitter.emit('event', 'a', 'b');






// handaling event once
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');

myEmitter.emit('event');
// Prints: 1
// Prints: 2








// Error Events.

myEmitter.on('error', (err) => {
    console.error('whoops! there was an error');
  });
  myEmitter.emit('error', new Error('whoops!'));
  // Prints: whoops! there was an error





  
//   Event: 'newListener'
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
// Prints:
//   B
//   A






// emitter.eventNames()
const myEE = new myevent();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]






// emitter.rawListeners(eventName)
const emitter = new myevent();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// logs "log persistently" twice
newListeners[0]();
emitter.emit('log');

console.log('The myEmitter is using in this '+EventEmitter.listenerCount(  myEmitter, 'event') + '  times');