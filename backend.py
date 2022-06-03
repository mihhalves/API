
from flask import Flask, jsonify
from flask import render_template
from flask import send_from_directory

app = Flask(__name__)

@app.route('/static')
def host_files():
    return send_from_directory('static')

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route("/chart")
def busca_dados():  
    categories = ['pera','uva','abacaxi']
    series = []
    pessoa1 = {'name' : 'fabio', 'data' : [1,2,3]}
    pessoa2 = {'name' : 'michelle', 'data' : [1,2,3]}

    series.append[pessoa1]
    series.append[pessoa2]

    grafico = {
                "categories": categories,
                "series": series               
                }




    return jsonify(grafico)

