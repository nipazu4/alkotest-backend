from flask import Flask
from flask_cors import CORS
from bson import json_util
from datetime import datetime
import json
import math
from scripts import AlkoToXlsxToJson

app = Flask(__name__)
CORS(app)

with open("./data/drinkdata.json", "r") as f:
    data = json.load(f)

def parse_json(data):
    return json.loads(json_util.dumps(data))

def check_data():
    global data
    dt_data = datetime.fromisoformat(data["date"][0])
    dt_now = datetime.now()
    dt_difference = dt_now - dt_data

    dt_hours = divmod(math.floor(dt_difference.total_seconds()/60),60)[0]
    dt_minutes = divmod(math.floor(dt_difference.total_seconds()/60),60)[1]

    if(dt_hours == 1 & dt_minutes == 1):
        print("data is 1 hour and 1 minute old")
    elif(dt_hours == 1):
        print("data is 1 hour and "+str(dt_minutes)+" minutes old")
    elif(dt_minutes == 1):
        print("data is "+str(dt_hours)+" hours and 1 minute old")
    else:
        print("data is "+str(dt_hours)+" hours and "+str(dt_minutes)+" minutes old")

    if(dt_hours > 5):
        print("data needs to be updated")
        AlkoToXlsxToJson.create_json()
        with open("./data/drinkdata.json", "r") as f:
            data = json.load(f)
    
    return None

@app.route("/date", methods=["GET"])
def get_date():
    check_data()
    return parse_json({ "date" : data["date"] })

@app.route("/drinks", methods=["GET"])
def get_drinks():
    return parse_json({ "drinks" : data["drinks"] })

@app.route("/nondrinks", methods=["GET"])
def get_non_drinks():
    return parse_json({ "nondrinks" : data["nondrinks"] })