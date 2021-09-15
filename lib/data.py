import json

files=['../data/persons.json','../data/otherpersons.json']

def merge_JsonFiles(filename):
    result = list()
    for f1 in filename:
        with open(f1, 'r') as infile:
            result.extend(json.load(infile))

    with open('../data/final.json', 'w') as output_file:
        json.dump(result, output_file)

merge_JsonFiles(files)