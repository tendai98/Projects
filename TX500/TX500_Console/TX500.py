#!/usr/bin/python
PORT_SPEEDS=	"\n ===== [ TX500-DC UART Port Speeds ] =====\n"\
		" - 300 B/s\t - 1200 B/s\n"\
		" - 2400 B/s\t - 4800 B/s\n"\
		" - 9600 B/s\t - 19200 B/s\n"\
		" - 38400 B/s\t - 57600 B/s\n"\
		" - 74880 B/s\t - 115200 B/s\n"\
		" - 230400 B/s\t - 250000 B/s\n"\
		" - 500000 B/s\t - 1000000 B/s\n"\
		" - 2000000 B/s\n"\
		" ===== [ TX500-DC UART Port Speeds ] =====\n"

BUF_SIZE =1024
INET_ADDR = "192.168.4.1"
PORT=2020
FILTER_PROMPT="Dry>"
PROMPT="TX500> "
TIME_WAIT=2
IF_UP='ifconfig wlan0 up'
IF_TX_LOW='iwconfig wlan0 tx 1'
DELIM="\n"
SEND_DELAY=0.1

import signal
from socket import *
import sys
import struct
import os
from time import sleep
from multiprocessing import Process as Thread
from vxCE import *

s=socket(2,2,0)

def initVXOpcodeTree():
    try:
        fd = open('VX_Opcodes.json')
        VXJSONData = json.load(fd)
        fd.close()
        return VXJSONData 
    except Exception as e:
        print(str(e))
        sys.exit(-1)


def send(Buffer,SOCK_ADDR):
      try:
        s.sendto(Buffer,SOCK_ADDR)
      except:
        print("[!] Network Error: [SHUTTING DOWN]")
        os.kill(os.getpid(),signal.SIGKILL)

def recv(sock):
  while True:
	try:
    		data=sock.recv(10000)
    		sys.stdout.write(data.replace(FILTER_PROMPT,''))
	except KeyboardInterrupt:
		exit(0)

def readIn(SOCK_ADDR):
  useNewLine=True
  VXOpcodeTree={}
  VXOpcodeTree=initVXOpcodeTree()

  while True:

   try:

    data=raw_input(PROMPT)
    if (data!=""):
        if (data.split(" ")[0] in VXOpcodeTree.keys()):
          packedVX = packVXCode(data.split("VX_CODE"))
          encodedVX = encodeVXCode(packedVX,VXOpcodeTree)
          outputBinary = binaryEncodeVXCode(encodedVX)
          send(outputBinary,SOCK_ADDR)
          parsedSegment=[]

        elif (data=="port-speeds"):
	    	  print(PORT_SPEEDS)

        elif (data=="enable-delim"):
           useNewLine=True
           print("[*] Enabled Delimiter")

        elif  (data=="disable-delim"):
            print("[!] Disabled Delimiter")
            useNewLine=False

        elif (data=="help"):
          try:
            fd=open("help.txt")
            help_data = fd.read()
            fd.close()
            print(help_data)
          except Exception:
            print("Error in openning file")

        else:
          send(data,SOCK_ADDR)
          sleep(SEND_DELAY)
          if (useNewLine):
       	    send(DELIM,SOCK_ADDR)
          else:
            send("",SOCK_ADDR)

   except KeyboardInterrupt:
	print("\n[+] Shutting down TX500 Console...")
	sys.exit(0)

def main(SOCK_ADDR):
  RX=Thread(target=recv,args=(s,))
  RX.start()
  readIn(SOCK_ADDR)


def setup():
  try:
    if (sys.argv[1] == "-i"):
      os.system(IF_UP)
      os.system(IF_TX_LOW)
  except:
    IP=raw_input("Set Controller IP: ")
    if (IP != ""):
   
      try:
        PORT=int(raw_input("Set Controller Port: "))     
        SOCK_ADDR=(IP,PORT)
      except Exception,e:
        print("Error: -> "+str(e))
        exit(1)
    else:
      IP="192.168.4.1"
      PORT=2020
      SOCK_ADDR=(IP,PORT)

      print("[*] TX500 Console Ready...")
      main(SOCK_ADDR)

try:
  setup()
except Exception as e:
  print(e)
  exit(-1)