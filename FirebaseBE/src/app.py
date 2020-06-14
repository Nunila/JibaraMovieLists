
from flask import Flask, request, jsonify

from .handler.ExceptionHandler import ExceptionHandler
from .handler.AuthHandler import AuthHandler
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)


@app.route('/')
def hello_world():
    return 'Welcome to JibaraMovieLists!'


@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    if request.method == 'POST':
        # print(request.form)
        print(request.get_json())
        result = AuthHandler().login_user(request.get_json())
        if not result['success']:
            raise ExceptionHandler(result['mess'], result['code'])
        else:
            return result['data'], 200

    else:
        jsonify(result="Request was not a POST request."), 405


@app.errorhandler(ExceptionHandler)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
