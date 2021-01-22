import requests
from bs4 import BeautifulSoup
import concurrent.futures
import numpy as np
from re import search
import json
import csv
from datetime import datetime

class Super_alko_lv_scraper:
    def __init__(self, thread_amount, start_id, end_id, base_url, filename):
        self.thread_amount = thread_amount
        self.end_id = end_id
        self.ids = np.array_split(range(start_id, end_id), thread_amount)
        self.base_url = base_url
        self.data = {}
        self.data["drinks"] = []
        self.data["nondrinks"] = []
        self.data["date"] = [datetime.isoformat(datetime.now())]
        self.drink_calc = 0

        with concurrent.futures.ThreadPoolExecutor() as executor:
            for i in range(thread_amount):
                executor.submit(self.thread_scraper_function, thread_id=i)

        #print(str(self.drink_calc)+" drinks found")
        with open(filename+".json", "w") as outfile:
            json.dump(self.data, outfile)

    def format_volume(self, volume):#input in cl, parse x and convert to l
        new_volume = volume.strip().strip("cl")
        if "x" in new_volume:
                values = new_volume.split("x")
                new_volume = float(values[0])*float(values[1])
        new_volume = float(new_volume)*0.01
        #print(new_volume)
        return new_volume

    def format_alcohol(self, alcohol):
        new_alcohol = float(alcohol.strip().strip("%").replace(",","."))
        #print(new_alcohol)
        return new_alcohol

    def thread_scraper_function(self, thread_id): #function to scrape assigned ids
        ids_to_check = self.ids[thread_id]
        alcohol_pattern = r" ([0-9.,]*) *%"
        volume_pattern = r" ([0-9.,x]*)cl"

        for id in ids_to_check:
            url = base_url+str(id)
            response = requests.get(url)
            html = response.content
            soup = BeautifulSoup(html, "html.parser")

            data = soup.find_all("td", class_="tootenimi")
            name = data[0].text

            volume_search = search(volume_pattern, name)
            alcohol_search = search(alcohol_pattern, name)

            if alcohol_search and volume_search:
                alcohol = self.format_alcohol(alcohol_search.group())
                volume = self.format_volume(volume_search.group())
                name = name.replace(alcohol_search.group(), "")
                name = name.replace(volume_search.group(), "")
                name = name.strip()
                price = data[1].text.replace("€", "").strip()
                img_url = soup.select_one(".highslide > img")["src"]
                #print(name, volume, alcohol, sep=" ", end="\r")

                drink = {
                    "id": str(id),
                    "name": name,
                    "price": float(price),
                    "size": volume,
                    "alcohol": alcohol,
                    "url": url,
                    "imgUrl": img_url
                }
                self.data["drinks"].append(drink)
                self.drink_calc += 1

thread_amount = 50
start_id = 21000
end_id = 21500
base_url = "https://www.superalko.lv/range-of-products/1/1/"
filename = "superalkodata"

test = Super_alko_lv_scraper(
    thread_amount=thread_amount,
    start_id=start_id,
    end_id=end_id,
    base_url=base_url,
    filename=filename
)