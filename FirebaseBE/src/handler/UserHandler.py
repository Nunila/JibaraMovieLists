import requests
from flask import jsonify
from FirebaseBE.src.configuration.Initialization import db
from FirebaseBE.src.handler.ListHandler import ListHandler


class UserHandler:

    def get_user_info(self, auth_info):
        results = db.child("users").child(auth_info.user_id).get(auth_info.token)
        result_obj = results.val()

        if result_obj['Lists']:
            user_lists = ListHandler().create_lists_map(result_obj['Lists'], auth_info.token)

        return {'success': True, 'data': jsonify(name=result_obj['Name'], user_lists=user_lists)}
