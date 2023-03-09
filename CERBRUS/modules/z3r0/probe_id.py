from codes import ALL_SEND_PROBE
import time
import os
from socket import gethostbyaddr

def probe_id(counter):
	PROBE_ID = ""

	try:
		if (os.name == "nt"):
			host = gethostbyaddr("127.0.0.1")[0]
			probe_type = ALL_SEND_PROBE
			PROBE_ID = "{}:{}:{}".format(probe_type,host,counter)
			return PROBE_ID
		elif (os.name == "posix"):
			id = "POSIX:{}".format(os.getlogin())
			PROBE_ID = "{}:{}:{}".format(os.uname()[1],id,counter)
			return PROBE_ID
		else:
			PROBE_ID = "UNKNOWN-HOST:{}:{}".format(ALL_SEND_PROBE,counter)
			return PROBE_ID
	except Exception as e:
		PROBE_ID = "UNKNOWN-HOST:{}:{}".format(ALL_SEND_PROBE,counter)
		return PROBE_ID

