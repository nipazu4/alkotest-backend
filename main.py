from flask import Flask
from flask_cors import CORS
from bson import json_util
from datetime import datetime
import json
import math
from scripts import AlkoToXlsxToJson
from scripts.superalkolv_threading import Super_alko_lv_scraper

app = Flask(__name__, static_folder="./build", static_url_path="/")
CORS(app)

with open("./data/alkodata.json", "r") as f:
    alko_data = json.load(f)
with open("./data/superalkodata.json", "r") as f:
    super_alko_data = json.load(f)

def parse_json(data):
    return json.loads(json_util.dumps(data))

def check_data(store):
    global alko_data
    global super_alko_data

    if store == "alko":
        dt_data = datetime.fromisoformat(alko_data["date"][0])
    elif store == "superalko":
        dt_data = datetime.fromisoformat(super_alko_data["date"][0])

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

    if(dt_hours >= 24):
        print("data needs to be updated")
        if store == "alko":
            AlkoToXlsxToJson.create_json()
            with open("./data/alkodata.json", "r") as f:
                alko_data = json.load(f)
        elif store == "superalko":
            scraper = Super_alko_lv_scraper(
                thread_amount=50,
                start_id=17000,
                end_id=40000,
                base_url="https://www.superalko.lv/range-of-products/1/1/",
                filename="./data/superalkodata"
            )
            scraper.start()
    
    return None

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/api/alko/date", methods=["GET"])
def get_date():
    check_data("alko")
    return parse_json({ "date" : alko_data["date"] })

@app.route("/api/alko/drinks", methods=["GET"])
def get_drinks():
    return parse_json({ "drinks" : alko_data["drinks"] })

@app.route("/api/alko/nondrinks", methods=["GET"])
def get_non_drinks():
    return parse_json({ "nondrinks" : alko_data["nondrinks"] })

@app.route("/api/superalko/date", methods=["GET"])
def get_superalko_date():
    check_data("superalko")
    return parse_json({ "date" : super_alko_data["date"] })

@app.route("/api/superalko/drinks", methods=["GET"])
def get_superalko_drinks():
    return parse_json({ "drinks": super_alko_data["drinks"] })

@app.route("/api/superalko/nondrinks", methods=["GET"])
def get_superalko_non_drinks():
    return parse_json({ "nondrinks" : super_alko_data["nondrinks"] })

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file("index.html")