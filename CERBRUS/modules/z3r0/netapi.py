from codes import *
from socket import *

BUFFER_SIZE = 1024*1024

class NetAPI():
	__net_api = {}
	__net_socket_object_ref = None

	def __tcp_recv(self,ioctl):
		try:
			return self.__net_socket_object_ref[ioctl['id']].recv(BUFFER_SIZE)
		except:
			return b"[TCP]:[RECV EXCEPTION]"

	def __tcp_send(self,ioctl):
		try:
			return self.__net_socket_object_ref[ioctl['id']].send(ioctl['data'])
		except:
			return None

	def __tcp_connect(self,ioctl):
		try:
			self.__net_socket_object_ref[ioctl['id']].connect(ioctl['addr'])
		except:
			return None

	def __udp_recv(self,ioctl):
		try:
			return self.__net_socket_object_ref[ioctl['id']].recvfrom(BUFFER_SIZE)
		except:
			return b"[UDP]:[RECV EXCEPTION]"

	def __udp_send(self,ioctl):
		try:
			return self.__net_socket_object_ref[ioctl['id']].sendto(ioctl['data'],ioctl['addr'])
		except Exception:
			return None

	def __tcp_comm_mode(self,ioctl):
		try:
			sock = socket(2,SOCK_STREAM,0)
			self.__net_socket_object_ref.update({ioctl['id']:sock})
			self.__net_socket_object_ref[ioctl['id']].settimeout(1)
		except Exception as e:
			return None

	def __udp_comm_mode(self,ioctl):
		try:
			sock = socket(2,SOCK_DGRAM,0)
			self.__net_socket_object_ref.update({ioctl['id']:sock})
			self.__net_socket_object_ref[ioctl['id']].settimeout(1)
		except Exception:
			return None

	def __sctp_comm_mode(self,ioctl):
		try:
			sock = socket(2,1,IPPROTO_SCTP)
			self.__net_socket_object_ref.update({ioctl['id']:sock})
			self.__net_socket_object_ref[ioctl['id']].settimeout(1)
		except Exception:
			return None

	def __uudp_comm_mode(self,ioctl):
		try:
			sock = socket(ioctl['inet'],ioctl['socktype'],ioctl['proto'])
			self.__net_socket_object_ref.update({ioctl['id']:sock})
			self.__net_socket_object_ref[ioctl['id']].settimeout(1)
		except Exception:
			return None

	def __sock_close(self,ioctl):
		try:
			self.__net_socket_object_ref[ioctl['id']].close()
		except Exception:
			return None

	def __reset_net(self,ioctl):
		self.__net_socket_object_ref={}

	def __init__(self,net_sock_obj_ref):
		self.__net_socket_object_ref = net_sock_obj_ref

		self.__net_api.update({TCP_RECV:self.__tcp_recv})
		self.__net_api.update({TCP_SEND:self.__tcp_send})
		self.__net_api.update({TCP_CONN:self.__tcp_connect})
		self.__net_api.update({UDP_RECV:self.__udp_recv})
		self.__net_api.update({UDP_SEND:self.__udp_send})
		self.__net_api.update({UDP_COMM_MODE:self.__udp_comm_mode})
		self.__net_api.update({TCP_COMM_MODE:self.__tcp_comm_mode})
		self.__net_api.update({SCTP_COMM_MODE:self.__sctp_comm_mode})
		self.__net_api.update({UDDP_COMM_MODE:self.__uudp_comm_mode})
		self.__net_api.update({SOCK_CLOS:self.__sock_close})
		self.__net_api.update({RESET_NET:self.__reset_net})

	def ioctl(self,ioctl):
		try:
			if type(ioctl) == dict:
				return self.__net_api[ioctl['cmd']](ioctl)
			elif type(ioctl) == list:
				return self.__net_api[ioctl[0]['cmd']](ioctl[0])
		except:
			return None
