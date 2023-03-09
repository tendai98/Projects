import sys
from toolkit import *
startup()

try:
	plain_txt = "Zero Crypto Test"
	cipher_txt = sub_shell.ioctl(['CRYPTO',{'data':plain_txt,'mode':LOCK}])
	plain_txt = sub_shell.ioctl(['CRYPTO',{"data":cipher_txt,'mode':ULCK}])
	#print("Original Msg:{} -> {} -> {}".format(plain_txt,cipher_txt,plain_txt))
	print("[+] Crypto Module Test : [Passed]")

except:
	print("[X] Crypto Module Test : [Failed]")

try:
	cmd_str = "ls -l"
	output = sub_shell.ioctl(['SSHELL',{'cmd':cmd_str}])
	#sys.stdout.write(output)
	print("[+] Shell Module Test : [Passed]")
except:
	print("[X] Shell Module Test : [Failed]")

try:
	lib = "./test_lib.so"
	flag = sub_shell.ioctl(['LIBLDR',['INJECT',{'path':lib,'id':0x061}]])
	if(flag == True):
		sub_shell.ioctl(['LIBLDR',['CALL',{'id':0x061,'fx':'test_function'}]])
	else:
		print("[X] Shared Object Load failed")
except:
	print("[X] Shared Object Loader Module Test : [Failed]")

try:
	module = "test_fx.py"
	ret = sub_shell.ioctl(["PY3LDR",['RUNMOD',{'path':module}]])
	sub_shell.ioctl(["PY3LDR",['CALL',{'id':0x3330},1234]])
	sub_shell.ioctl(["PY3LDR",['CALL',{'id':0x3331},5678]])
except:
	print("[X] Python Module Load : [Failed]")

try:
	data = sub_shell.ioctl(['NPROBE',{'addr':["127.0.0.1",9001]}])
	print("[+] Network Probe: {}".format(data))
	print("[+] Network Probe Module Test : [Done]")
except:
	pass

try:

	sub_shell.ioctl(['NETCTL',{'cmd':TCP_COMM_MODE,'id':0xbebe}])
	sub_shell.ioctl(['NETCTL',{'cmd':TCP_CONN,'addr':("127.0.0.1",9400),'id':0xbebe}])
	sub_shell.ioctl(['NETCTL',{'cmd':TCP_SEND,'data':b'TCP Test Socket\n','id':0xbebe}])
	data = sub_shell.ioctl(['NETCTL',{'cmd':TCP_RECV,'id':0xbebe}])
	sub_shell.ioctl(['NETCTL',{'cmd':SOCK_CLOS,'id':0xbebe}])
	print("[+] Message: {}".format(data))

	sub_shell.ioctl(['NETCTL',{'cmd':SCTP_COMM_MODE,'id':0xbecc}])
	sub_shell.ioctl(['NETCTL',{'cmd':TCP_CONN,'addr':("127.0.0.1",9600),'id':0xbecc}])
	sub_shell.ioctl(['NETCTL',{'cmd':TCP_SEND,'data':b'SCTP Test Socket\n','id':0xbecc}])
	data = sub_shell.ioctl(['NETCTL',{'cmd':TCP_RECV,'id':0xbecc}])
	sub_shell.ioctl(['NETCTL',{'cmd':SOCK_CLOS,'id':0xbecc}])
	print("[+] Message: {}".format(data))

	sub_shell.ioctl(['NETCTL',{'cmd':UDP_COMM_MODE,'id':0xbebf}])
	sub_shell.ioctl(['NETCTL',{'cmd':UDP_SEND,'addr':("127.0.0.1",9500),'data':b'UDP Test Socket\n','id':0xbebf}])
	data = sub_shell.ioctl(['NETCTL',{'cmd':UDP_RECV,'id':0xbebf}])
	net(['NETCTL',{'cmd':SOCK_CLOS,'id':0xbebf}])
	print("[+] Message: {}".format(data))
	print("[+] Network API Module Test : [Passed]")

except:
	 print("[X] Network API Module Test : [Failed]")

try:
	print("[+] SubShellAPI Testing .....")
	data = sub_shell.ioctl(['CRYPTO','Hello',LOCK])
	msgd = sub_shell.ioctl(['CRYPTO',data,ULCK])

	sub_shell.ioctl(['NETCTL',{'cmd':TCP_COMM_MODE,'id':0xbeb0}])
	sub_shell.ioctl(['NETCTL',{'cmd':TCP_CONN,'addr':("127.0.0.1",9401),'id':0xbeb0}])
	sub_shell.ioctl(['NETCTL',{'cmd':TCP_SEND,'data':b'TCP Test Socket\n','id':0xbeb0}])
	data = sub_shell.ioctl(['NETCTL',{'cmd':TCP_RECV,'id':0xbeb0}])
	sub_shell.ioctl(['NETCTL',{'cmd':SOCK_CLOS,'id':0xbeb0}])
	print("[+] Message: {}".format(data))

	sub_shell.ioctl(['NETCTL',{'cmd':SCTP_COMM_MODE,'id':0xbeb1}])
	sub_shell.ioctl(['NETCTL',{'cmd':TCP_CONN,'addr':("127.0.0.1",9601),'id':0xbeb1}])
	sub_shell.ioctl(['NETCTL',{'cmd':TCP_SEND,'data':b'TCP Test Socket\n','id':0xbeb1}])
	data = sub_shell.ioctl(['NETCTL',{'cmd':TCP_RECV,'id':0xbeb1}])
	sub_shell.ioctl(['NETCTL',{'cmd':SOCK_CLOS,'id':0xbeb1}])
	print("[+] Message: {}".format(data))

	sub_shell.ioctl(['NETCTL',{'cmd':UDP_COMM_MODE,'id':0xbebf}])
	sub_shell.ioctl(['NETCTL',{'cmd':UDP_SEND,'addr':("127.0.0.1",9501),'data':b'UDP Test Socket\n','id':0xbebf}])
	data = sub_shell.ioctl(['NETCTL',{'cmd':UDP_RECV,'id':0xbebf}])
	sub_shell.ioctl(['NETCTL',{'cmd':SOCK_CLOS,'id':0xbebf}])
	print("[+] Message: {}".format(data))
	print("[+] Network API Module Test : [Passed]")

except:
	print("[X] SubShellAPI Test : [Failed]")
