class SubShellAPI():
	__CALL_API = {}

	def add_module(self,args):
		self.__CALL_API.update({args['cmd']:args['module']})

	def ioctl(self,args):
		try:
			return self.__CALL_API[args[0]](args[1:])
		except:
			return "[!] [SUB-SHELL:CORE] [EXCEPTION]"
