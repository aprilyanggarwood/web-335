# Title: yang_usersp1.py
# Author: April Yang
# Date: 09 17 2022
# Description: Python with MongoDB, and queries

# import the MongoClient
from pymongo import MongoClient
import datetime

# import ssl
# ssl._create_default_https_context = ssl._create_unverified_context

# session.get("https://python.org", ssl=False)

import ssl
context = ssl._create_unverified_context()
urllib.request.urlopen(req,context=context)

import ssl
ssl._create_default_https_context = ssl._create_unverified_context
urllib2.urlopen("https://google.com").read()

requests.get(url, headers=Hostreferer,verify=False)

#import certifi

#ca = certifi.where()

#client = MongoClient('mongodb+srv://web335_user:s3cret@cluster0.vvn3y4f.mongodb.net/web335DBretryWrites=true&w=majority',tlsCAFile=ca)
# build a connection string to connect to 
client = MongoClient('mongodb+srv://web335_user:s3cret@cluster0.vvn3y4f.mongodb.net/web335DBretryWrites=true&w=majority')

# Configure a variable to access the web335DB
db = client['web335DB']
# Create a variable to access the user collection
collection = db['users']

# display all documents in the user’s collection.
users = collection.find()
for user in users:
    print(user)

# display a document where the employeeId is 1011.
print(db.users.find_one({"employeeId":"1011"}))
# display a document where the lastName is Mozart. 
print(db.users.find_one({"lastName":"Mozart"}))

# data = {
#     "firstName": "april",
#     "lastName": "Wong",
#     "employeeId": "2020",
#     "email": "aprily@me.com",
#     "dateCreated": datetime.datetime.utcnow()
# }

# print(collection.insert_one(data).inserted_id)

# u = collection.find_one({"firstName":"april"})
# print(u)




