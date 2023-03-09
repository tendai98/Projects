def PROBER_MONITOR(args,self):

	try:
		prober_ids = self.getenv("ACTV_PROBERS")
		print("\n\t[*] --------->>>>>>>>>> [ PROBERS ] <<<<<<<<<---------- [*]\n")

		for prober_id in prober_ids:
			index = prober_ids.index(prober_id)
			print("\tPROBER-ID: [{}] => {}".format(index,prober_id))

	except Exception as e:
		print("[MODULE_EXCEPTION] : {}".format(e))


extensions = self.getenv("THREADING_EXTENSIONS")
extensions.update({"prober-mon":PROBER_MONITOR})
self.setenv(["THREADING_EXTENSIONS",extensions])

print("\t[+] Module :-> (prober-mon) : [LOADED]")

