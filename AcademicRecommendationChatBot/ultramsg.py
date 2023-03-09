import json
import requests
import chat as ce

class Ultrawebhook():

	def __init__(self, json):
		self.json = json
		self.dict_messages = json['data']

	def processing(self):
		if self.dict_messages != []:
			message = self.dict_messages
			ce.process(message)
			return ''
