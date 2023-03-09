import ctypes

class SOLoader():
	__SO_MODULE_TABLE = None
	__CALL_API = {}

	def __inject(self,args):
		try:
			so_object = ctypes.CDLL(args[0]['path'])
			self.__SO_MODULE_TABLE.update({args[0]['id']:so_object})
			return True
		except:
			return False

	def __call(self,args):
		try:
			self.__SO_MODULE_TABLE[args[0]['id']][args[0]['fx']]()
		except:
			return None

	def __drop(self,args):
		try:
			self.__SO_MODULE_TABLE.pop(args[0]['id'])
		except Exception:
			return None

	def __reset(self,args):
		self.__SO_MODULE_TABLE = {}

	def ioctl(self,args):
		try:
			return self.__CALL_API[args[0]](args[1:])
		except:
			return None

	def __init__(self,so_module_table):

		self.__SO_MODULE_TABLE = so_module_table
		self.__CALL_API.update({'INJECT':self.__inject})
		self.__CALL_API.update({'CALL':self.__call})
		self.__CALL_API.update({'DROP':self.__drop})
		self.__CALL_API.update({'RESET':self.__reset})
