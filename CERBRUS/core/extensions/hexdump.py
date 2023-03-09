def HXD_MODULE(args):
	from scapy.all import hexdump
	try:
		hexdump(args[0])
	except IndexError:
		print("Usage: hexdump <data>")

	except Exception as e:
		print("[MODULE_EXCEPTION] : {}".format(e))

self.bind_module({"hexdump":HXD_MODULE,'id':'hexdump'})
print("\t[+] Module :-> (hexdump) : [LOADED]")
