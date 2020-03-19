## CRUD Operations Using MongoDB & Node.js

### Video toutorial - https://www.youtube.com/watch?v=ayNI9Q84v8g

### Timeline
    Chapters: 
    - 00:00 Intro
    - 00:40 Set Up
    - 08:51 How MongoDB Stores Data
    - 11:01 Creating Documents
    - 20:04 Reading Documents
    - 30:58 Updating Documents
    - 45:52 Deleting Documents
    - 51:07 Summary


### Description
In this intro to using MongoDB with Node.js, Developer Advocate Lauren Schaefer walks through the basics of how to connect to a MongoDB database using Node.js.  Then she gives a high-level explanation of how MongoDB stores data in documents and collections.  Finally, she works through each of the CRUD (Create, Read, Update, and Delete operations).  She explains how to use insertOne(), insertMany(), findOne(), find(), updateOne() with and without upsert, updateMany(), deleteOne(), and deleteMany().    
    
### Usefull Links
    Text-based version of this tutorial: https://www.mongodb.com/blog/post/qui...
    MongoDB Atlas: https://bit.ly/MDB_Atlas
    How to create a free cluster on Atlas:  https://youtu.be/rPqRyYJmx2g
    MongoDB University's Data Modeling Course:  http://bit.ly/M320_DataModeling
    MongoDB University's Javascript Course:  https://bit.ly/M220JS

## Additional info

- Add eslint (air-bnb config) and prettier

- Some data samples: 

        {
            "_id": "5e7340ac020e8698e8a55ee1",
            "name": "Lovely Loft",
            "summary": "A charming loft in Paris",
            "bedrooms": 1,
            "bathrooms": 1,
            "propert_type": "Unknown"
        },{
            "_id": 5e7341d770386646206d743e,
            "name": "Infinite Views",
            "summary": "Modern home ...",
            "property_type": "House",
            "bedrooms": 4,
            "bathrooms": 5,
            "beds": 6,
            "propert_type": "Unknown"
        },{
            "_id": 5e7341d770386646206d743f,
            "name": "Private room in London",
            "summary": "Modern home ...",
            "property_type": "Apartments",
            "bedrooms": 1,
            "bathrooms": 4,
            "beds": 7,
            "propert_type": "Unknown"
        }