
from flask import jsonify


class ExceptionHandler(Exception):
    status_code = 400

    def __init__(self, message, status_code):
        Exception.__init__(self)
        self.message = message
        self.status_code = status_code

    def to_dict(self):
        return {'message': self.message}
