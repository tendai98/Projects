from cryptography import fernet
from socket import socket
from json import dumps

key =  "SFOxEwE1dzrTsXGjASTnOLSRG8zaV25_B1GeGuC2r-8="
aes = fernet.Fernet(key)
s = socket(2,2)
s.setsockopt(1,2,1)
s.bind(("127.0.0.1",9001))
data,a = s.recvfrom(1024)

recv_data = aes.decrypt(data)
req_comm = {'cmd':104,'addr':['127.0.0.1',9500],'id':90}
req_str = dumps(req_comm)
e = aes.encrypt(req_str.encode())
s.sendto(e,a)
