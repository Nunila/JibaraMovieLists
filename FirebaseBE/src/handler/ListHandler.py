import requests
from flask import jsonify
import json
from FirebaseBE.src.configuration.Initialization import db


class ListHandler:

    lists_with_movies = {}

    def create_lists_map(self, lists, user_token):
        lists = lists.keys()

        for l in lists:
            self.get_list_contents(l, user_token)

        return self.lists_with_movies

    def get_list_contents(self, list_name, token):
        results = db.child("lists").child(list_name).get(token)
        if results.val() is not None:
            movies = results.val().keys()
            self.lists_with_movies[list_name] = movies
