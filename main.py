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

    dt_hours = math.floor(dt_difference.total_seconds()/3600)
    dt_minutes = math.floor(dt_difference.total_seconds()/60)
    print("data is "+str(dt_hours)+" hours and "+str(dt_minutes)+" minutes old")

    if(dt_minutes > 60):
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