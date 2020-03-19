/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
// https://prnt.sc/rhqoks rocketman Pigletus1314
// documentation https://prnt.sc/rhr7f1

// mongodb+srv://rocketman:<password>@cluster0-cdw5b.mongodb.net/test?retryWrites=true&w=majority

const { MongoClient } = require('mongodb');

const main = async () => {
  const url = 'mongodb://localhost:27017';
  // const url = 'mongodb+srv://rocketman:Pigletus1314@cluster0-cdw5b.mongodb.net/test?retryWrites=true&w=majority'
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    // await listDatabases(client);

    /* await createListing(client, {
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        }); */

    /* await createMultipleListings(client, [
            {
                name: "Infinite Views",
                summary: "Modern home ...",
                property_type: "House",
                bedrooms: 5,
                bathrooms:4.5,
                beds:5,
            },
            {
                name: "Private room in London",
                summary: "Modern home ...",
                property_type: "Apartments",
                bedrooms: 1,
                bathrooms:1,
                beds:2,
            },
        ]); */

    await findOneListingByName(client, 'Infinite Views');
  } catch (e) {
    global.console.error(e);
  } finally {
    await client.close();
  }
};

main().catch(global.console.err);

// list all databases
const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases();
  global.console.log('Databases:');
  databasesList.databases.forEach((db) => global.console.log(`- ${db.name}`));
};

// create new element
const createListing = async (client, newListing) => {
  const result = await client.db('mongotest').collection('listingAndReviews').insertOne(newListing);
  global.console.log(result, result.insertedId);
};

// create many new elements
const createMultipleListings = async (client, newListings) => {
  const result = await client.db('mongotest').collection('listingAndReviews').insertMany(newListings);
  global.console.log(result.insertedCount);
};

// find listing one
const findOneListingByName = async (client, nameOfListing) => {
  const results = await client.db('mongotest').collection('listingAndReviews').findOne({ name: nameOfListing });
  if (results) {
    global.console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
    global.console.log(results);
  } else {
    global.console.log(`No listings found with the name '${nameOfListing}'`);
  }
};

// find listing multiple

const findMultListings = async (client, namesOfListings) => {
  const results = await client.db('mongotest');
};
