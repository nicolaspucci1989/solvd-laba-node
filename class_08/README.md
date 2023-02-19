### Reactor Pattern

### Tasks Queues
See [article](https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810)
See [video](https://www.youtube.com/watch?v=L18RHG2DwwA&list=PLC3y8-rFHvwj1_l8acs_lBi3a0HNb3bAN)
Javascript is a synchronous, blocking, single-threaded languaje.
To ake async programming possible, we need the help of libuv.
#### Event queues
There are 4 event queues that are part of **libuv**
* **Expired timers and intervals queue**, consists of callbacks of expired timers added using `set timeout` or interval functions added using `setInterval`
* **IO Events queue**, completed io events.
* **Immediates Queue**, callbacks added using the `setImmediate` function.
* **Close Handlers Queue**, any `close` event hadlers.

There are 2 queues that are not part of libuv but are part of Node.js
* **Next Tick Queue**, Callbacks added using `process.nexTick` function.
* **Other Microtasks Queue**, Other microtasks eg. resolved promise callback.
![node js event loop queues](./img/node_event_loop.webp)
```javascript
const fs = require('fs')

async function main() {
    console.log('START'); // A
    
    setTimeout(() => console.log('Set Timeout'), 0); // B
    setImmediate(() => console.log('Set Immediate')); // C
    
    Promise.resolve().then(() => {
        console.log('Promise'); // D
        process.nextTick(() => console.log('Promise next tick')); // E
    })
    
    fs.readFile('index.js', () => {
        console.log('Read file'); // F
        setTimeout(() => console.log('Read file SetTimeout'), 0); // G
        setImmediate(() => console.log('Read file SetImmediate')); // H
        process.nextTick(() => console.log('Read file next tick')); // I
    })
    
    const response = await Promise.resolve('Async/await');
    console.log(response); // J
    
    process.nextTick(() => console.log('Next Tick')); // K
    setTimeout(() => console.log('SetTimeout'), 0); // L
    
    console.log('END'); // M
}
```

### Node.js elemnts
* Node.js API (Buffer, File System, etc...)
* Node.js Bindings (HTTP, Sockets)
* C/C++ Addons (Math libraries, array operations, etc...)
* V8
* LibUV (Implementation of Reactor Pattern, Loop Event, Thread Pool, Async)
* DNS
* HTTP (parser, SSL)

### Event Loop in Node.js
Has many event queues (micro and macro tasks, and others)



