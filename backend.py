from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def hello_world():
    resposta = {"mensagem": "ola mundo"}
    return jsonify(resposta)
