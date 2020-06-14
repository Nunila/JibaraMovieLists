import requests
from flask import jsonify
import json
from src.configuration.Initialization import db


class UserHandler:

    def get_user_info(self, user_id, token):
        results = db.child("users").child(user_id).get(token)
        print("Result data: ", results.val())
        return {'success': True, 'data': jsonify(Data=results.val())}
