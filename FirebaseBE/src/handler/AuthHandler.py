import requests
from flask import jsonify
import json
from FirebaseBE.src.configuration.Initialization import auth
from .UserHandler import UserHandler


class AuthHandler:

    token = ''
    user_id = ''

    def login_user(self, user_info):

        email = user_info['email']
        password = user_info['password']
        # print("email ", email)
        # print('pass', password)

        # Log the user in
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            print(user)
        except requests.exceptions.HTTPError as e:
            print("There was an exception")
            e_json = json.loads(e.args[1])
            message = e_json['error']['message']
            code = e_json['error']['code']

            # print(message, code)
            return {'success': False, 'mess': message, 'code': code}
        else:
            self.user_id = user['localId']
            self.token = user['idToken']
            return UserHandler().get_user_info(self)

        # # Pass the user's idToken to the push method
        # # results = db.child("users").child(user['localId']).get(user['idToken'])
        # results = db.child("users").get(user['idToken'])
        # print("REsult data: ", results.val())

