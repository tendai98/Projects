from flask import Flask, request, jsonify
from ultramsg import Ultrawebhook
import json

app = Flask(__name__)

@app.route('/', methods=['POST'])
def index():
	if request.method == 'POST':
		bot = Ultrawebhook(request.json)
		return bot.processing()
