from flask import Flask, redirect ,url_for, request, jsonify
from flask_cors import CORS, cross_origin

from utils.dataController import displayAll, update, deleteById

app=Flask(__name__)

CORS(app, resources={r"/usersubmissions/*": {"origins": "*"}})

@app.route("/")
def index():
    return redirect(url_for("userSubmissions"))

@app.route("/usersubmissions", methods=['GET'])
def userSubmissions():
    return displayAll()

@app.route("/usersubmissions/add", methods=['POST'])
def add_and_update():
    user_submission = request.get_json()
    update(user_submission)
    return redirect(url_for("userSubmissions"))

@app.route("/usersubmissions/del/<int:id>", methods=['POST'])
def delete(id):
    deleteById(id)
    return redirect(url_for("userSubmissions"))

if __name__ == "__main__":
        app.run(debug=True)