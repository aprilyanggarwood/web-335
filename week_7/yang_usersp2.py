# Title: yang_usersp2.py
# Author: April Yang
# Date: 09 20 2022
# Description: Python with MongoDB, and queries

# import the MongoClient
from pymongo import MongoClient
from pprint import pp
import datetime

# solved SSL Certification problem 
import certifi
ca = certifi.where()

# build a connection string to connect to 
client = MongoClient('mongodb+srv://web335_user:s3cret@cluster0.vvn3y4f.mongodb.net/web335DBretryWrites=true&w=majority',tlsCAFile=ca)

# Configure a variable to access the web335DB
db = client['web335DB']
# Create a variable to access the user collection
collection = db['users']

# Create a new user document
data = {
    "firstName": "april",
    "lastName": "Wong",
    "employeeId": "2020",
    "email": "aprilw@me.com",
    "dateCreated": datetime.datetime.utcnow()
}

# A query to insert the new user document to the users collection
pp(collection.insert_one(data).inserted_id)

# A query to display the newly created document
newUser = collection.find_one({"firstName":"april"})
pp(newUser)

# A query to update the email address of the document that is newly created 
newUserEmail = {"email":"aprilw@me.com"}
newUserNewEmail = {"$set":{"email":"aprilwong@me.com"}}

collection.update_one(newUserEmail, newUserNewEmail)

# A query to display the updated document
newUser = collection.find_one({"email":"aprilwong@me.com"})
pp(newUser)

#A query to delete the document that is newly created 
newUserEmail = {"employeeId": "2020"}
collection.delete_one(newUserEmail)
# A query to prove the document was deleted.
newUser = collection.find_one({"employeeId": "2020"})
pp(newUser)
