import bot
import requests
from time import sleep

INSTANCE_ID = "instance17275"
CHATBOT_URL = 'https://api.ultramsg.com/{}/messages/chat'.format(INSTANCE_ID)
CHATBOT_IMG = 'https://api.ultramsg.com/{}/messages/image'.format(INSTANCE_ID)
CHATBOT_TOKEN = "auffptd3fdh8wt4t"
IMG_URL = 'https://firebasestorage.googleapis.com/v0/b/systemci-b1d24.appspot.com/o/{}.jpg?alt=media&token=4015fe27-7676-403c-b916-e4c2b94428cd'
HEADERS = {'content-type': 'application/x-www-form-urlencoded'}
BLOCKED_IDS = ["263775362346@c.us"]
SEND_IMG_MSG_TYPE = [2]

bot.init_logic()

def send_img(destination_id, img_id):
	dest_id = destination_id.split("@")[0]
	img = IMG_URL.format(img_id)
	payload = "token={}&to=+{}&image={}".format(CHATBOT_TOKEN, dest_id, img)
	response = requests.request('POST', CHATBOT_IMG, data=payload, headers=HEADERS)


def send_msg(destination_id, msg):
	dest_id = destination_id.split("@")[0]
	payload = "token={}&to=+{}&body={}".format(CHATBOT_TOKEN, dest_id, msg)
	response = requests.request('POST', CHATBOT_URL, data=payload, headers=HEADERS)


def process(msg):
	try:

		src_id = msg['from'].split()[0]
		dst_id = msg['to'].split()[0]

		if(dst_id != src_id and src_id not in BLOCKED_IDS):
			print("[+] {} -> {}".format(src_id, dst_id))
			msg_type, response = bot.parse(msg['body'])

			if(msg_type in SEND_IMG_MSG_TYPE):
				send_img(src_id, response.split("$")[1].lower())
				sleep(1)

			send_msg(src_id, response.split("$")[0])
			print("[+] Message Sent")
			return ''
		else:
			msg_type, response = bot.parse(msg['body'])
			return ''

	except:
		return ''
