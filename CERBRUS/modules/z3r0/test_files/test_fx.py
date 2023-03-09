def function1(pass_code):
	print("[+] Python Module Loader Test1 : [Pass] = {}".format(pass_code))

def function2(pass_code):
	print("[+] Python Module Loader Test2 : [Pass] = {}".format(pass_code))

self.ioctl(['INJECT',{0x3330:function1}])
self.ioctl(['INJECT',{0x3331:function2}])
