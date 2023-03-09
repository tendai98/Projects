import sys
from socket import *
from time import *
from threading import Thread
from os import system ,chdir , getcwd
import json

INFO_FILE = "info/info.json"

class CerbrusCommandCore():
	__EnvironmentVariables={'HELP_LOADED':None,'HELP':None}
	__CoreInitialized=False
	__commands={}
	__COMMAND_INDEX=0

	def __load_module(self,args=None):
		try:
			fd = open("info/modules.json",'rb')
			modules = json.load(fd)
			modules.pop('cerbrusExtensions')
			fd.close()
			self.__EnvironmentVariables.update({"MODULES":modules})

			if args[0] == "handler":
				handler = modules["handler"][args[1]]['handler']
				self.__EnvironmentVariables.update({"CURRENT_HANDLER":handler})
				print("[**] Handler module => [{}]: [ Loaded ]".format(args[1]))

			elif args[0] == "attack":
				attack_mod = modules["attack"][args[1]]['build']
				self.__EnvironmentVariables.update({"CURRENT_MODULE":attack_mod})
				print("[**] Attack module::[{}]: [ Loaded ]".format(args[1]))

			else:
				print("[!] Invalid module selector")
		except Exception as e:
			print("[!] Failed to load module => {}".format(e))
			print("Usage: load-module [handler|attack] module_name")


	def __detach_module(self,args=None):
		try:
			if args[0] == "-e":
				self.__EnvironmentVariables["THREADING_EXTENSIONS"].pop(args[1])
				print("[+] Unloaded Extension Module :> {}".format(args[1]))
			elif args[0] == "-h":
				self.__EnvironmentVariables["HANDLER_MODULES"].pop(args[1])
				print("[+] Unplugged Handler Module :-> {}".format(args[1]))
			else:
				self.__commands.pop(args[0])
				print("[+] Unloaded Module :> {}".format(args[0]))
		except KeyError as e:
			print("[!] Module:[{}] not found".format(e))

		except IndexError:
			print("[!] Usage: detach-module <module-name>")

	def __active_agents(self,args=None):
		try:
			print(args)
		except:
			pass

	def __run_python(self,args=None):
		try:
			fd = open(args[0],"rb")
			code = fd.read()
			fd.close()
			exec(code)
		except:
			print("[!] Failed to execute")
			print("Usage:\trun-python code.py")

	def __handler_ctl(self,args=None):
		try:
			if args[0] == "-l":

				handlers =  self.getenv("ACTIVE_HANDLERS")
				print("\t --------->>>>>>> [HANLDERS] <<<<<<---------")
				for handler in handlers:
					handler_index = handlers.index(handler)
					print("HANDLER::[{}] ==>> {}".format(handler_index,handler))

			else:
				handler_id = args[0]
				path = self.__EnvironmentVariables["MODULES"]['handler'][handler_id]['dir']
				handler_file = self.__EnvironmentVariables["MODULES"]['handler'][handler_id]['handler']
				module_id = self.__EnvironmentVariables["MODULES"]["handler"][handler_id]["id"]

				fd = open("{}/{}".format(path,handler_file),"rb")
				handler_code = fd.read()
				fd.close()
				exec(handler_code)

				handler_function_ptr = self.__EnvironmentVariables["HANDLER_MODULES"][module_id]
				handler_process = Thread(target=handler_function_ptr,args=(self,args))
				handler_process.start()

		except IndexError:
			print("Usage: handler-ctl <handler-module-id> <args>")

		except Exception as e:
			print("[!] No such handler  module in system  : {}".format(e))
			print("Usage: handler-ctl <handler-module-id> <args>")

	def __deploy_extension_module(self,args=None):
		try:
			extension_function_ptr = self.__EnvironmentVariables["THREADING_EXTENSIONS"][args[0]]
			extension_thread = Thread(target= extension_function_ptr,args=(args,self))
			extension_thread.start()

		except IndexError:
			print("[!] Usage: run-extension <extension-name> <args>")

		except KeyError as e:
			print("[!] Module extension ID {} not found".format(e))

		except Exception as e:
			print("[!] Exception while deploying extension : {}".format(e))


	def __list_probes(self,args=None):
		try:
			if "-k" == args[0]:

				kills = self.getenv("KILL_LIST")
				index = int(args[1])
				kills.append(self.__EnvironmentVariables["ACTV_PROBERS"][index])
				self.setenv(["KILL_LIST",kills])

			elif "-p" == args[0]:

				id = int(args[1])
				print("\n\t---------->>>>>>>> [PROBES]   <<<<<<<<<----------\n")
				probe_data = self.__EnvironmentVariables["PROBES_RECVD"]
				probers = self.__EnvironmentVariables["ACTV_PROBERS"]
				prober_addr = probers[id]
				print("PROBER-ID\tRECVD-PROBE-STRING\t\tPROBE-SRC-ADDR\t\tPROBER-ADDRESS]\n")

				for probe_str in probe_data[prober_addr]:
					prober_id = probers.index(prober_addr)
					probe = probe_str.split("|")[0]
					probe_addr = probe_str.split("|")[1]
					print("{}\t\t{}\t{}\t{}".format(prober_id,probe,probe_addr,prober_addr))
				print()

		except IndexError:

			probe_data = self.__EnvironmentVariables["PROBES_RECVD"]
			probers = self.__EnvironmentVariables["ACTV_PROBERS"]
			print("\n\t---------->>>>>>>>> [PROBES]   <<<<<<<<<------------\n")
			print("PROBER-ID\tRECVD-PROBE-STRING\t\tPROBE-SRC-ADDR\t\tPROBER-ADDRESS\n")

			for prober_id in probe_data:
				for probe_str in probe_data[prober_id]:
					prober_index = probers.index(prober_id)
					probe = probe_str.split("|")[0]
					probe_src_addr = probe_str.split("|")[1]
					print("{}\t\t{}\t{}\t{}".format(prober_index,probe,probe_src_addr,prober_id))
			print()

		except Exception as e:
			print("[!] Exception : {}".format(e))
			print("Usage: list-probes , list-probes -p <prober-id> , list-probes -k <id>")

	def __shell(self,args=None):
		command_str=""
		try:
			for cmd_arg in args:
				command_str+=cmd_arg+" "
			system(command_str)
		except:
			print("[!] Exception on Command execution")

	def __list_sessions(self,args=None):
		try:
			print(args)
		except:
			pass

	def __cerbrus_help(self,args=None):
		try:
			if(self.__EnvironmentVariables['HELP_LOADED'] and args[0] != "usage"):
				print("\n\t{} : {}\n".format(args[0],self.__EnvironmentVariables['HELP'][args[0]]))

			if(self.__EnvironmentVariables['HELP_LOADED'] and args[0] == "usage"):
				print("\n\t{}\n".format(self.__EnvironmentVariables['HELP_SYNOPSIS'][args[1]]))

			else:
				print("[!] Loading Command Help Information....")
				fd = open(INFO_FILE,'rb')
				self.__EnvironmentVariables['HELP'] = json.load(fd)
				self.__EnvironmentVariables['HELP_SYNOPSIS'] = self.__EnvironmentVariables['HELP'].pop('synopsis')
				self.__EnvironmentVariables['HELP_LOADED'] = True
				print("\n\t{} : {}\n".format(args[0],self.__EnvironmentVariables['HELP'][args[0]]))
				fd.close()

		except KeyError:
			print("[!] Help info not found for {}".format(args[0]))

		except IndexError:
			print("\n")
			for helpKey in self.__EnvironmentVariables['HELP']:
				print("\t{} : {}".format(helpKey,self.__EnvironmentVariables['HELP'][helpKey]))
			print("\n")

		except Exception as e:
			print(e)
			print("[CERBRUS-COMMAND-MOD]: Help info load : [FAILED]")

	def __build_module(self,args=None):
		try:
				cwd = getcwd()
				attack_mod_id = args[0]
				build_args = str(args[1:]).replace("[",'').replace("]",'').replace("," , " ")

				builder = self.__EnvironmentVariables["MODULES"]['attack'][attack_mod_id]['build']
				chdir(self.__EnvironmentVariables["MODULES"]["attack"][attack_mod_id]['dir'])
				system("bash {} {}".format(builder,build_args))
				chdir(cwd)
		except IndexError:
			print("Usage: build <attack-module-name-id> <build-args>")

		except Exception as e:
			print("[!] Exception on building module")
			print("[!] Exception : {}".format(e))

	def setenv(self,args=None):
		try:
			self.__EnvironmentVariables.update({args[0]:args[1]})
		except:
			print("[!] Failed to set variable")
			print("Usage: setenv HOST 1.2.3.4")

	def getenv(self,args=None):
		try:
			return self.__EnvironmentVariables[args]
		except KeyError as e:
			print("[!] Failed to resole ENVVAR => {}".format(e))
		except Exception as e:
			print("[!] Exception on getting ENVVAR => {}".format(e))

	def __cleanup(self,args=None):
		try:
			print(args)
		except:
			pass

	def __printenv(self,args=None):
			try:
				print("\t{} => {}".format(evKey,self.__EnvironmentVariables[args[0]]))
			except:
				print("\n")
				for evKey in self.__EnvironmentVariables:
					print("\t{} => {}".format(evKey,self.__EnvironmentVariables[evKey]))
				print("\n")

	def unset(self,args=None):
		try:
			self.__EnvironmentVariables.pop(args[0])
		except:
			print("Usage: unset NUMBER1")

	def __load_extension(self,args=None):
		try:
			fd = open("info/modules.json","rb")
			module_index = json.load(fd)
			fd.close()

			module_file = open(module_index["cerbrusExtensions"][args[0]],"rb")
			module_data = module_file.read()
			exec(module_data)
			module_file.close()

		except KeyError:
			print("[CERBRUS-COMMAND-CORE]: [%s] -> Module not found " % args[0])

		except IndexError:
			print("[CERBRUS-COMMAND-CORE]: Invalid Argument\nUsage : load-extension <module>")

		except Exception as e:
			print(e)

	def bind_module(self,module_bind):
		try:
			self.__commands.update(module_bind)
			print("[!] Module : {} [ Loaded ]".format(module_bind['id']))
		except Exception:
			print("[!] Error on loading extension")


	def popenv(self,key):
		try:
			return self.__EnvironmentVariables.pop(key)
		except:
			return None

	def __init_commands(self):

		self.setenv(["ACTV_PROBERS",[]])
		self.setenv(["KILL_LIST",[]])
		self.setenv(["PROBES_RECVD",{}])
		self.setenv(["THREADING_EXTENSIONS",{}])
		self.setenv(["ACTIVE_HANDLERS",[]])
		print("[++] Initialized Environment Variables...")

		if (self.__CoreInitialized == False):
			self.__commands = {

				"detach-module":self.__detach_module,
				"active-agents":self.__active_agents,
				"run-python":self.__run_python,
				"handler-ctl":self.__handler_ctl,
				"probes":self.__list_probes,
				"shell":self.__shell,
				"list-sessions":self.__list_sessions,
				"help":self.__cerbrus_help,
				"build-module":self.__build_module,
				"cleanup":self.__cleanup,
				"setenv":self.setenv,
				"printenv":self.__printenv,
				"unset":self.unset,
				"load-module":self.__load_module,
				"load-extension":self.__load_extension,
				"run":self.__deploy_extension_module,
				"exit":exit
			}
			self.__CoreInitialized = True

	def __init__(self):
		print("[++] Initializing Core Command Modules ....")
		self.__init_commands()

	def run_command(self,cmd_args=None):
		if cmd_args is not None and isinstance(cmd_args,list):
			try:
				self.__commands[cmd_args[self.__COMMAND_INDEX]](cmd_args[1:])
			except KeyError:
				print("[CEBRUS-COMMAND-CORE]: Command Error [NO_COMMAND]")

			except Exception as e:
				print("[CEBRUS-COMMAND-CORE]: Runtime Exception [CORE_EXCEPTION]")
				print("[EXCEPTION] : {}".format(e))
