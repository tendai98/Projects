def PROBE_SCANNER_MODULE(args,self):

	from cryptography import fernet
	from socket import socket

	key=""
	addr_str=""
	module_name=""
	aes=None
	bind_addr = None
	PROBER_ID=""
	probe_list=[]

	try:
		module_name = args[0]
		raw_addr = args[1].split(":")
		bind_addr = (raw_addr[0],int(raw_addr[1]))
		attack_module = args[2]

		fd = open("info/modules.json",'rb')
		keys = json.load(fd)
		fd.close()

		keys.pop('cerbrusExtensions')
		keys.pop('handler')
		key = keys['attack'][attack_module]['key']
		aes = fernet.Fernet(key)

		probe_sock = socket(AF_INET,SOCK_DGRAM)
		probe_sock.setsockopt(SOL_SOCKET,SO_REUSEADDR,1)
		probe_sock.bind(bind_addr)
		probe_sock.settimeout(2)
		print("\n[+] Probe server [ONLINE] @ {}".format(args[1]))
		PROBER_ID = "PROBER:{}".format(bind_addr)

		active_probers = self.getenv("ACTV_PROBERS")

		if PROBER_ID not in active_probers:

			recvd_probe_object = self.getenv("PROBES_RECVD")
			recvd_probe_object.update({PROBER_ID:[]})
			self.setenv(["PROBES_RECVD",recvd_probe_object])
			active_probers.append(PROBER_ID)
			self.setenv(["ACTV_PROBERS",active_probers])

			while True:
				########################## [ KILL CODE ] ###############################
				kill_list = self.getenv("KILL_LIST")

				if PROBER_ID in kill_list:
					print("[!] Prober:{} [SHUT_DOWN]".format(PROBER_ID))

					# Remove prober's probe store object
					recvd_probe_object = self.getenv("PROBES_RECVD")
					recvd_probe_object.pop(PROBER_ID)
					self.setenv(["PROBES_RECVD",recvd_probe_object])

					#Remove prober from kill list
					kill_list.remove(PROBER_ID)
					self.setenv(["KILL_LIST",kill_list])

					#Remove prober from active probes list
					active_probers = self.getenv("ACTV_PROBERS")
					active_probers.remove(PROBER_ID)
					self.setenv(["ACTV_PROBERS",active_probers])
					probe_sock.close()
					break
				########################## [ KILL CODE ] ###############################

				try:
					data,addr = probe_sock.recvfrom(1024)
					probe = aes.decrypt(data).decode()
					probe = "{}|{}".format(probe,addr)

					probe_lists = self.getenv("PROBES_RECVD")
					if probe not in probe_lists[PROBER_ID]:
						probe_lists[PROBER_ID].append(probe)
						self.setenv(["PROBES_RECVD",probe_lists])
				except:
					pass
		else:
			print("\n[!] MODULE:PROBER => Instance with ID:{} is running".format(PROBER_ID))

	except IndexError:
		print("Usage: run prober <addr> <attack-module-id>")

	except Exception as e:
		print("[!] MODULE:[PROBER] : Exception => {}".format(e))

extensions = self.getenv("THREADING_EXTENSIONS")
extensions.update({"prober":PROBE_SCANNER_MODULE})
self.setenv(["THREADING_EXTENSIONS",extensions])

print("\t[+] Module :-> (prober) : [LOADED]")
