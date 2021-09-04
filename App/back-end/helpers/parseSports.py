import os
import csv
import json

mapAnsToField = {
    'Coletivo': 'team',
    'Individual': 'alone',
    'com contato com o adversário': 'contact',
    'sem contato com o adversário': 'noContact',
    'sem adversário': 'noOpponent',
    'baixo impacto': 'lowImpact',
    'melhora o sono': 'sleep',
    'tem contato com a natureza': 'nature',
    'é competitivo': 'competitiveness',
    'é feito na água': 'water',
    'reduz o colesterol': 'reduceCholesterol',
    'desenvolve o equilíbrio': 'balance',
    'melhora a imunidade': 'immunity',
    'melhora a postura': 'posture',
    'melhora a flacidez/celulite': 'reduceSagging',
    'melhora o condicionamento físico / parte aeróbica': 'physicalCondition',
    'faz emagrecer / queimar gordura': 'loseWeight',
    'aumenta a massa muscular / força': 'gainMass',
    'ajuda a relaxar / alivia o stress': 'relax',
    'promove a interação com os outros / socialização': 'socialize',
    'melhora a respiração': 'breath',
    'melhora a circulação sanguinea': 'bloodCirculation',
    'treinar para competir': "compete",
    'desenvolve a concentração': 'concentration',
    'melhora a coordenação motora': 'motorCoordination',
    'Membros superiores / costas': 'upper',
    'abdômen': 'abdomen',
    'membros inferiores / glúteos': 'lower',
    'corpo como um todo': ['upper', 'abdomen', 'lower'],
    '0 - 15min': 'halfAnHour',
    '15min - 30min': 'halfAndHour',
    '30min - 60min': ['halfAnHour', 'oneHour'],
    '1h - 2h': ['oneHour', 'twoHours'],
    '2h ou mais': 'moreThanTwoHours',
    'fechado': 'outdoors',
    'aberto': 'indoors',
    'qualquer': ['outdoors', 'indoors'],
    'somente o corpo': 'body',
    'utiliza equipamentos': 'equip',
    'diabetes': 'diabetes',
    'pressão alta': 'highBloodPressure',
    'pressão baixa': 'lowBloodPressure',
    'doenças cardíacas': 'heartDiseases',
    'osteoporose': 'osteoporosis',
    'tonturas': 'frequentDizziness',
    'problemas ósseos ou articulares': 'boneOrJointProblems',
    'desenvolve o alongamento': 'flexibility',
    'é desafiador/aventura': 'radical'
}

cleanObj = {
    "alone": False,
    "team": False,
    "noContact": False,
    "contact": False,
    "noOpponent": False,
    "physicalCondition": False,
    "loseWeight": False,
    "gainMass": False,
    "relax": False,
    "socialize": False,
    "compete": False,
    "reduceCholesterol": False,
    "balance": False,
    "concentration": False,
    "sleep": False,
    "immunity": False,
    "posture": False,
    "reduceSagging": False,
    "motorCoordination": False,
    "bloodCirculation": False,
    "flexibility": False,
    "breath": False,
    "upper": False,
    "abdomen": False,
    "lower": False,
    "lowImpact": False,
    "nature": False,
    "competitiveness": False,
    "water": False,
    "radical": False,
    "halfAnHour": False,
    "oneHour": False,
    "twoHours": False,
    "moreThanTwoHours": False,
    "outdoors": False,
    "indoors": False,
    "equip": False,
    "body": False,
    "diabetes": False,
    "highBloodPressure": False,
    "lowBloodPressure": False,
    "heartDiseases": False,
    "osteoporosis": False,
    "frequentDizziness": False,
    "boneOrJointProblems": False,
}

with open(os.path.join(os.getcwd(), "Mapeamento de esportes.CSV"), "r") as csvfile:
    reader = csv.reader(csvfile, "excel")
    ret = []
    miss = []
    skip = True
    for row in reader:
        if skip:
            skip = False
            continue
        sport = { "name": row[1] }
        obj = cleanObj.copy()
        for field in row[2:]: 
            vals = field.split(",")
            for val in vals:
                trimmed = val.strip()
                if not trimmed in mapAnsToField:
                    miss.append(trimmed)
                else:
                    objFields = mapAnsToField[trimmed]
                    if type(objFields) == list:
                        for of in objFields:
                            obj[of] = True
                    else: 
                        obj[objFields] = True
        sport["props"] = obj
        ret.append(sport)

print(miss)

with open(os.path.join(os.getcwd(), "genSports_temp.json"), "w") as jsonfile:
    jsonfile.write(json.dumps(ret, indent=4, sort_keys=True))