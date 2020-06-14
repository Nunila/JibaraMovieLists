import pyrebase

config = {
      "apiKey": "AIzaSyBClGXLWl8AB0xBysSgsLl9n8mF4rmIsFc",
      "authDomain": "jibaramovielists.firebaseapp.com",
      "databaseURL": "https://jibaramovielists.firebaseio.com",
      # "projectId: "jibaramovielists",
      "storageBucket": "jibaramovielists.appspot.com",
      # "messagingSenderId: "687066518338",
      # "appId: "1:687066518338:web:7c09cadd2eb54131866edb"
    }

firebase = pyrebase.initialize_app(config)

db = firebase.database()
auth = firebase.auth()
