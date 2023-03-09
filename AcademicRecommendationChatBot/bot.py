
from requests import get
from json import loads
from joblib import load

DB_URL = "https://systemci-b1d24-default-rtdb.firebaseio.com/"

map = {}
results_input = []
res_array = []
counter = 0
results = {"maths":0, "chemistry":0, "physics":0, "biology":0, "accounts":0, "commercials":0}
model = load('model.bin')

def get_help(args):
	try:
		res = loads(get("{}/options/help.json".format(DB_URL)).text)
		help_msg = ""

		for sentence in res:
			help_msg += "{}\n".format(sentence)

		return (0, help_msg)
	except:
		return (0, "Processing Failed")

def get_list(args):
	try:
		counter = 1
		res = loads(get("{}/options/list.json".format(DB_URL)).text)
		list_msg = ""

		for key in res:
			list_msg += "{}. {}: {}\n".format(counter, key, res[key])
			counter += 1

		return (1, list_msg)
	except:
		return (1, "Processing Failed")

def get_info(args):
	try:
		if (len(args) > 1):
			key = args[1].upper()
			data = get("{}/options/info/{}.json".format(DB_URL, key)).text
			return (2, data+"$"+key)
		else:
			return (2, "Invalid Command , try: 'Info BFA'")
	except:
		return (2,  "Processing Failed")

def upload_results(args):
	global res_array
	global counter

	try:
		if(len(args) > 2):

			points = int(int(args[2]))
			subject = args[1].lower()

			if(points >= 0 and points <= 5):
				results[subject] = int(points)
				counter += 1
				return (3, "Uploaded!")
			else:
				return (3, "Points should be above -1 and below 6")
		else:
			return (3, "Invalid Command , try: Upload Maths 3")
	except:
		return (3, "Invalid Value")


def recommend_programme(args):
	global counter
	global res_array

	if(counter == 2 or counter == 3):

		for key in results:
			res_array.append(results[key])

		key = model.predict([res_array])[0]
		data = get("{}/options/programs/{}.json".format(DB_URL, key)).text
		counter = 0
		res_array.clear()
		return (4, "*RECOMMENDED PROGRAMME*\n\n"+data)
	else:
		return (4, "Upload points from your A Level results")

def init_logic():
	map.update({'help':get_help})
	map.update({'list':get_list})
	map.update({'info':get_info})
	map.update({'upload':upload_results})
	map.update({'recommend':recommend_programme})

def process(args):
	try:
		return map[args[0]](args)
	except Exception as e:
		print(e)
		return (5, "Invalid command")

def parse(msg):
	cmd_args = []
	for arg in msg.split(' '):
		if cmd_args != '':
			cmd_args.append(arg.lower())

	return process(cmd_args)
