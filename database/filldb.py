import csv
import pymongo

# connection settings
mongo_host = 'my-mongodb'
mongo_port = 27017
mongo_db = 'best-matched-restaurants'

# define which collection to insert
mongo_collection = 'restaurants'


# connect
client = pymongo.MongoClient(mongo_host, mongo_port)
db = client[mongo_db]
collection = db[mongo_collection]

# define which csv
csv_file = 'restaurants.csv'


with open(csv_file, 'r', newline='') as file:
    reader = csv.DictReader(file)
    
    # define the attributes that are read according with the csv    
    fieldnames = ['name', 'customer_rating', 'distance', 'price', 'cuisine_id']
    
    for row in reader:
        # create a document from each row
        document = {}
        for field in fieldnames:
            document[field] = row.get(field) if field == 'name' else int(row.get(field))

        # insert document into collection
        collection.insert_one(document)

print("data inserted")

# define which collection to insert
mongo_collection = 'cuisines'

# connect
client = pymongo.MongoClient(mongo_host, mongo_port)
db = client[mongo_db]
collection = db[mongo_collection]

# define which csv
csv_file = 'cuisines.csv'

with open(csv_file, 'r', newline='') as file:
    reader = csv.DictReader(file)
    
    # define the attributes that are read according with the csv    
    fieldnames = ['id', 'name']
    
    for row in reader:
        # create a document from each row
        document = {}
        for field in fieldnames:
            document[field] = row.get(field) if field == 'name' else int(row.get(field))

        # insert document into collection
        collection.insert_one(document)

print("data inserted")
