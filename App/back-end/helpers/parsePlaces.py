import os
import csv
import json

header = [
    "url",
    "name", 
    "address",
    "lat",
    "long",
    "image",
    "description"
]

with open(os.path.join(os.getcwd(), "Locais São Carlos.csv"), "r", encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile, "excel")
    ret = []
    skip = True
    for row in reader:
        if skip:
            skip = False
            continue
        place = {}
        for value, key in zip(row, header): 
           place[key] = value
        print(place)
        ret.append(place)

with open(os.path.join(os.getcwd(), "genPlaces_temp.json"), "w") as jsonfile:
    jsonfile.write(json.dumps(ret, indent=4, sort_keys=True))