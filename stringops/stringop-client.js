'use strict';

const 
    util=require('util'),
    net=require('net'),
    client=net.connect({port:5432});

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
    console.log("Text received");
    if(text==='quit\n') {
        done();
    }
    client.write(JSON.stringify({
        type: "reverse",
        string: text
    })+"\n");
    console.log("print: "+text);
});

client.on('data', function(data) {
    let message = JSON.parse(data);
    console.log(message.resp);
});

function done() {
    console.log("Exiting");
    process.exit();
}
