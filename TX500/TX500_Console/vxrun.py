#!/usr/bin/python

from socket import *
import sys

addrInfo=("192.168.4.1",2020)
s=socket(AF_INET,SOCK_DGRAM)

def readVX(filename=None):
    if (filename):
        fd = open(filename,"rb")
        data=fd.read()
        fd.close()
        return data

def sendVX(data=None,socket=None):
    try:
        if (data):
            socket.sendto(data,addrInfo)
    except Exception as e:
        print("[Error]: [OnSend] -> %s"%(str(e)))
        sys.exit(-1)

def main():
    try:
        data = readVX(sys.argv[1])
        sendVX(data,s)
    except Exception as e:
        print("[Error]: [In main] -> %s"%str(e))
        sys.exit(-1)

main()