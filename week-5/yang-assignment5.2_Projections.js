// Title: Assignment 5.2 – Projections
// Author: Professor Krasso
// Modified: April Yang
// Date: 09 07 2022
// Description: Using queries with MongoDB Shell.

// Connection string for connecting to MongoDB Shell
 mongosh "mongodb+srv://cluster0.vvn3y4f.mongodb.net/web335DB" --apiVersion 1 --username web335_user

 //Load user.js script
Atlas atlas - y2fuvw - shard - 0[primary] web335DB > load("users.js")

// query to add a new user document to the user’s collection with the existing fields
Atlas atlas - y2fuvw - shard - 0[primary] web - 335DB > db.users.insertOne({firstName:'April',lastName:'Yang',employeeId:'1013',email:'aprilyang@me.com',dateCreated:new Date()})
// query to find the new user information
Atlas atlas - y2fuvw - shard - 0[primary] web - 335DB > db.users.find({'firstName':'April'})
// query to find lastName: Mozart and update Mozart’s email address to mozart@me.com
Atlas atlas - y2fuvw - shard - 0[primary] web - 335DB > db.users.findOneAndUpdate({ 'lastName': 'Mozart' }, { $set: { email: 'mozart@me.com' } })
// query to list all documents in the user’s collection.  Use projections to only display the firstName, lastName, and email fields.  
Atlas atlas-y2fuvw-shard-0 [primary] web-335DB> db.users.aggregate([{$project:{firstName:1,lastName:1,email:1}}])