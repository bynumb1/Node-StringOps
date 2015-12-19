'use strict';

const
    stringops= require('./stringops.js'),
    net=require('net'),
    server=net.createServer(function(connection) {
        console.log("Reverse Requester Connected");

        connection.on('data', function(data) {
            let message=JSON.parse(data);
            if(message.type="reverse") {
                let rev=stringops.reverse(message.string);
                connection.write(JSON.stringify({
                    resp: rev
                }));
            }
        });
    });

server.listen(5432, function() {
    console.log("Listening for subscribers");
});
