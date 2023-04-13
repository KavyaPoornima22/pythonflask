from flask import Flask, jsonify, json, request
import requests

app = Flask(__name__)


@app.route('/create' , methods = ['GET','POST'])
def create():
        request_data = json.loads(request.data)
        name = request_data['name']
        email = request_data['email']
        department = request_data['department']
        
        datastore = { 'name': name, 'email': email,'department': department }
        response = requests.post("https://64375c7e0c58d3b1456fdbe1.mockapi.io/flask-crud", data=datastore)
        return response.json()


@app.route("/edit/<int:item>", methods=['POST'])
def update(item):
    emp_url = f'{"https://64375c7e0c58d3b1456fdbe1.mockapi.io/flask-crud"}/{item}'
    request_data = json.loads(request.data)
    name = request_data['name']
    email = request_data['email']
    department = request_data['department']
        
    datastore = { 'name': name, 'email': email, 'department': department}
    response = requests.put(emp_url, data=datastore)
    return response.json()


@app.route('/employees')
def list():
    response = requests.get("https://64375c7e0c58d3b1456fdbe1.mockapi.io/flask-crud")
    return response.json()

@app.route("/delete/<int:item>", methods=['POST'])
def delete(item):
    data_url = f'{"https://64375c7e0c58d3b1456fdbe1.mockapi.io/flask-crud"}/{item}'
    response = requests.delete(data_url)
    return response.json()

if __name__ =="__main__":
    app.run(debug=True, port=9000)