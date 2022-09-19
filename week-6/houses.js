/**
	Title: houses.js
    Author: Professor Krasso
    Date: 11 August 2022
    Description: MongoDB Shell Scripts for the houses and students collections.
 */

// Delete the houses and students collections.
db.houses.drop();
db.students.drop();

// Create the houses and students collections using Document Validation.
db.createCollection("houses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        mascot: {
          bsonType: "string",
        },
        founder: {
          bsonType: "string",
        },
        houseId: {
          bsonType: "string",
        },
      },
    },
  },
});

db.createCollection("students", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        studentId: {
          bsonType: "string",
        },
        houseId: {
          bsonType: "string",
        },
      },
    },
  },
});

// Houses.
gryffindor = {
  mascot: "Lion",
  founder: "Godric Gryffindor",
  houseId: "h1007",
};

hufflepuff = {
  mascot: "Badger",
  founder: "Helga Hufflepuff",
  houseId: "h1008",
};

ravenclaw = {
  mascot: "Eagle",
  founder: "Rowena Ravenclaw",
  houseId: "h1009",
};

slytherin = {
  mascot: "Snake",
  founder: "Salazar Slytherin",
  houseId: "h1010",
};

// Insert the documents.
db.houses.insertOne(gryffindor);
db.houses.insertOne(hufflepuff);
db.houses.insertOne(ravenclaw);
db.houses.insertOne(slytherin);

// Gryffindor students.
dumbledore = {
  firstName: "Albus",
  lastName: "Dumbledore",
  studentId: "s1007",
  houseId: "h1007",
};

minerva = {
  firstName: "Minerva",
  lastName: "McGonagall",
  studentId: "s1008",
  houseId: "h1007",
};

hagrid = {
  firstName: "Hagrid",
  lastName: "Rubeus",
  studentId: "s1009",
  houseId: "h1007",
};

// Insert the documents.
db.students.insertOne(dumbledore);
db.students.insertOne(minerva);
db.students.insertOne(hagrid);

// Hufflepuff students.
wenlock = {
  firstName: "Bridget",
  lastName: "Wenlock",
  studentId: "s1010",
  houseId: "h1008",
};

diggory = {
  firstName: "Cedric",
  lastName: "Diggory",
  studentId: "s1011",
  houseId: "h1008",
};

abbot = {
  firstName: "Hannah",
  lastName: "Abbott",
  studentId: "s1012",
  houseId: "h1008",
};

// Insert the documents.
db.students.insertOne(wenlock);
db.students.insertOne(diggory);
db.students.insertOne(abbot);

// Ravenclaw students.
lovegood = {
  firstName: "Luna",
  lastName: "Lovegood",
  studentId: "s1013",
  houseId: "h1009",
};

trelawney = {
  firstName: "Sybill",
  lastName: "Trelawney",
  studentId: "s1014",
  houseId: "h1009",
};

chang = {
  firstName: "Cho",
  lastName: "Chang",
  studentId: "s1015",
  houseId: "h1009",
};

// Insert the documents.
db.students.insertOne(lovegood);
db.students.insertOne(trelawney);
db.students.insertOne(chang);

// Slytherin students.
malfoy = {
  firstName: "Lucius",
  lastName: "Malfoy",
  studentId: "s1016",
  houseId: "h1010",
};

potter = {
  firstName: "Albus",
  lastName: "Potter",
  studentId: "s1017",
  houseId: "h1010",
};

lestrange = {
  firstName: "Bellatrix",
  lastName: "Lestrange",
  studentId: "s1018",
  houseId: "h1010",
};

// Insert the documents.
db.students.insertOne(malfoy);
db.students.insertOne(potter);
db.students.insertOne(lestrange);



/**
	Title: houses.js
    Author: Professor Krasso
    Modified: April Yang
    Date: 18 September 2022
    Description: Queries for the houses and students collections.
 */

mongosh "mongodb+srv://cluster0.vvn3y4f.mongodb.net/web335DB" --apiVersion 1 --username web335_user


Atlas atlas - y2fuvw - shard - 0[primary] web335DB > load("houses.js")
true

// query to show a list of documents in the houses collection
Atlas atlas - y2fuvw - shard - 0[primary] web335DB > db.houses.find()

// show a list of documents in the student’s collection
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.students.find()

// query to add a new student document to the student’s collection
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.students.insertOne({"firstName":"Suan","lastName":"Lee","studentId":"s1019","houseId":"h1007"})
{
  acknowledged: true,
  insertedId: ObjectId("63222e8f4668acefdbc2f7cd")
}

// query to show the new student document 
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.students.find({"studentId":"s1019"})
[
  {
    _id: ObjectId("63222e8f4668acefdbc2f7cd"),
    firstName: 'Suan',
    lastName: 'Lee',
    studentId: 's1019',
    houseId: 'h1007'
  }
]

// query to delete the new student document that just added to the student's collection
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.students.deleteOne({"studentId":"s1019"})
{ acknowledged: true, deletedCount: 1 }

// query to prove the new student document has been deleted
Atlas atlas-y2fuvw-shard-0 [primary] web335DB> db.students.find({"studentId":"s1019"})


// query to show a list of students by house 
Atlas atlas - y2fuvw - shard - 0[primary] web335DB >
db.students.aggregate([{
  $lookup: {
    from: "houses",
    localField: "houseId",
    foreignField: "houseId",
    as:"students_by_house"
      }
}])
   

// query to show a list of students for house Gryffindor 
Atlas atlas - y2fuvw - shard - 0[primary] web335DB >
db.houses.aggregate([
  { $match: { founder: "Godric Gryffindor"} },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "students_by_matching_Gryffindor",
    },
  },
]);

// query to show a list of students for the Eagle mascot  
Atlas atlas - y2fuvw - shard - 0[primary] web335DB >
db.houses.aggregate([
  { $match: { mascot: "Eagle"} },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "students_by_matching_Eagle",
    },
  },
]);