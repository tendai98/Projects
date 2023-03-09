import ctypes

class PY3Loader():
	__PY3_MODULE_TABLE = None
	__CALL_API = {}

	def __run_module(self,args):
		try:
			fd = open(args[0]['path'],"rb")
			program_code = fd.read()
			fd.close()
			exec(program_code)
		except Exception:
			return None

	def __inject(self,args):
		self.__PY3_MODULE_TABLE.update(args[0])

	def __call(self,args):
		try:
			self.__PY3_MODULE_TABLE[args[0]['id']](args[1:])
		except:
			return None

	def __drop(self,args):
		try:
			self.__PY3_MODULE_TABLE.pop(args[0]['id'])
		except Exception:
			return None

	def __reset(self,args):
		self.__PY3_MODULE_TABLE = {}

	def ioctl(self,args):
		try:
			return self.__CALL_API[args[0]](args[1:])
		except:
			return None

	def __init__(self,so_module_table):
		self.__PY3_MODULE_TABLE = so_module_table
		self.__CALL_API.update({'INJECT':self.__inject})
		self.__CALL_API.update({'RUNMOD':self.__run_module})
		self.__CALL_API.update({'CALL':self.__call})
		self.__CALL_API.update({'DROP':self.__drop})
		self.__CALL_API.update({'RESET':self.__reset})
