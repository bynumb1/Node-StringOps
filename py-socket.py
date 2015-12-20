#!/usr/bin/env python

# A simple program to interact with our string opserver

import socket, sys

host='127.0.0.1'
port=5432

try:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
except socket.errror, e:
    print "Error creating socket"
    sys.exit(1)


#Attempt to connect to the server

sock.connect((host, port))

while 1:
    userstring=raw_input("Enter String\n")
    json_compo='{"type":"reverse", "string":"'+ userstring+ '"}'
    try:
        sock.sendall(json_compo)
    except socket.error, e:
        print "Error sending info over socket"
        sys.exit(1)
    try:
        buf=sock.recv(2048)
    except socket.error, e:
        print "Error recieving info over socket"
        sys.exit(1)
    sys.stdout.write(buf)
