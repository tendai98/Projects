from sys import argv

try:
	addr = argv[1]
	temp_module = argv[2]
	output_module = argv[3]

	fd =  open(temp_module,'rb')
	payload_code = fd.read().decode()
	fd.close()

	addr_args = addr.split(":")
	address = [addr_args[0],int(addr_args[1])]
	REMOTE_ADDRESS = '{}'.format(address)

	modified_code = payload_code.replace("PROBE_REMOTE_ADDRESS",REMOTE_ADDRESS)

	fd = open(output_module,'wb')
	fd.write(modified_code.encode())
	fd.close()
	exit(0)

except IndexError:
	 print("PREBUILDER [EXCEPTION]::[ERROR_ARGS] : {}".format(e))

except Exception as e:
	print("PREBUILDER [EXCEPTION] : {}".format(e))
	exit(1)

