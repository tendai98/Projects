#!/usr/bin/python3

CONFIG_FILE = "configs/configs.json"
BANNER_FILE = ".banner.txt"

import json
import sys
from core.CERBRUS_CORE import *
import base64

CerbrusCommandEngine = CerbrusCommandCore()

def parse_commandline(args=None):
	parsed_args = []
	raw_args = []
	try:
		raw_args = args.split(' ')
		for arg in raw_args:
			if arg is not '':
				parsed_args.append(arg)
		return parsed_args
	except Exception as e:
		print("[X] Error: Parsing commandline data: {}".format(str(e)))

def main_shell(args=None):
	while True:
		if args is not None and isinstance(args,dict):
			try:

				stdin_data = input(args['shellPrompts']['mainShell'])
				if len(stdin_data) > 0:
					parsed_args = parse_commandline(stdin_data)
					if len(parsed_args) > 0:
						CerbrusCommandEngine.run_command(parsed_args)
				else:
					pass
			except KeyboardInterrupt:
				print("\n[!] Shutting down...")
				exit(0)

			except Exception as e:
				exit(0)
		else:
			print("[X] ERROR : Could not process argument object")
			sys.exit(-1)

def launch_banner(banner_file):
	try:
		fd = open(banner_file,"rb")
		data = fd.read()
		fd.close()
		sys.stdout.write(data.decode())
	except Exception as e:
		print("[X] Banner file not found\nGoing in QUIET MODE")
		print("[X] Exception : {}".format(e))

def init():
	try:

		fd = open(CONFIG_FILE,"r")
		configs =  json.load(fd)
		fd.close()
		launch_banner(BANNER_FILE)
		main_shell(configs)

	except Exception as e:
		print(str(e))
		sys.exit(-1)

init()
