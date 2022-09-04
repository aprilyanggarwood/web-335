// Title: yang-Assignment4.2–MongoDB Shell.js
// Author: Professor Krasso
// Modified: April Yang
// Date: 09 04 2022
// Description: Using queries with MongoDB Shell.

// Connection string for connecting to MongoDB Shell
// mongosh "mongodb+srv://cluster0.vvn3y4f.mongodb.net/web335DB" --apiVersion 1 --username web335_user

//Load user.js script
Atlas atlas - y2fuvw - shard - 0[primary] web335DB > load("users.js")

// query to display all of the documents in the user’s collection.  
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.users.find()
[
  {
    _id: ObjectId("63145875b46a3f2c104def1e"),
    firstName: 'Johann',
    lastName: 'Bach',
    employeeId: '1007',
    email: 'jbach@me.com',
    dateCreated: ISODate("2022-09-04T07:49:09.722Z")
  },
  {
    _id: ObjectId("63145875b46a3f2c104def1f"),
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    employeeId: '1008',
    email: 'lbeethoven@me.com',
    dateCreated: ISODate("2022-09-04T07:49:09.722Z")
  },
  {
    _id: ObjectId("63145875b46a3f2c104def20"),
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    employeeId: '1009',
    email: 'wmozart@me.com',
    dateCreated: ISODate("2022-09-04T07:49:09.722Z")
  },
  {
    _id: ObjectId("63145875b46a3f2c104def21"),
    firstName: 'Johannes',
    lastName: 'Brahms',
    employeeId: '1010',
    email: 'jbrahms@me.com',
    dateCreated: ISODate("2022-09-04T07:49:09.722Z")
  },
  {
    _id: ObjectId("63145876b46a3f2c104def22"),
    firstName: 'Richard',
    lastName: 'Wagner',
    employeeId: '1011',
    email: 'rwagner@me.com',
    dateCreated: ISODate("2022-09-04T07:49:09.722Z")
  },
  {
    _id: ObjectId("63145876b46a3f2c104def23"),
    firstName: 'Claude',
    lastName: 'Debussy',
    employeeId: '1012',
    email: 'cdebussy@me.com',
    dateCreated: ISODate("2022-09-04T07:49:09.722Z")
  }
]
Atlas atlas - y2fuvw - shard - 0[primary] web335DB >

// query find the user with an email address of jbach@me.com
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.users.findOne({"email": "jbach@me.com"})
{
  _id: ObjectId("63145875b46a3f2c104def1e"),
  firstName: 'Johann',
  lastName: 'Bach',
  employeeId: '1007',
  email: 'jbach@me.com',
  dateCreated: ISODate("2022-09-04T07:49:09.722Z")
}
Atlas atlas-y2fuvw-shard-0 [primary] web335DB>

// query to find a user with the last name of Mozart.  
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.users.findOne({"lastName": "Mozart"})
{
  _id: ObjectId("63145875b46a3f2c104def20"),
  firstName: 'Wolfgang',
  lastName: 'Mozart',
  employeeId: '1009',
  email: 'wmozart@me.com',
  dateCreated: ISODate("2022-09-04T07:49:09.722Z")
}
Atlas atlas - y2fuvw - shard - 0[primary] web335DB >

// query to find a user with a first name of Richard.  
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.users.findOne({"firstName": "Richard"})
{
  _id: ObjectId("63145876b46a3f2c104def22"),
  firstName: 'Richard',
  lastName: 'Wagner',
  employeeId: '1011',
  email: 'rwagner@me.com',
  dateCreated: ISODate("2022-09-04T07:49:09.722Z")
}
Atlas atlas - y2fuvw - shard - 0[primary] web335DB >

// query to find a user with an employeeId of 1010.  
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.users.findOne({"employeeId": "1010"})
{
  _id: ObjectId("63145875b46a3f2c104def21"),
  firstName: 'Johannes',
  lastName: 'Brahms',
  employeeId: '1010',
  email: 'jbrahms@me.com',
  dateCreated: ISODate("2022-09-04T07:49:09.722Z")
}
Atlas atlas-y2fuvw-shard-0 [primary] web335DB>
    

