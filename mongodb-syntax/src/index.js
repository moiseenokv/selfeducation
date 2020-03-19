/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
// https://prnt.sc/rhqoks
// documentation https://prnt.sc/rhr7f1

// mongodb+srv://rocketman:<password>@cluster0-cdw5b.mongodb.net/test?retryWrites=true&w=majority

const { MongoClient } = require('mongodb');

const main = async () => {
  const url = 'mongodb://localhost:27017';
  // const url = 'mongodb+srv://rocketman:********@cluster0-cdw5b.mongodb.net/test?retryWrites=true&w=majority'
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

    /*  await findMultListings(client, {
      minNumberOfBedRooms: 4,
      minNumberOfBathRooms: 2,
      maxNumberOfResults: 5,
    }); */

    /* await findOneListingByName(client, 'Cozzy Cottage');
    await upsertOneListing(client, 'Cozzy Cottage', {
      name: 'Cozzy Cottage',
      bedrooms: 20,
      bathrooms: 30,
    });
    await findOneListingByName(client, 'Cozzy Cottage'); */

    await deleteManyListings(client, new Date('2019-02-15'));
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
const findMultListings = async (client, {
  minNumberOfBedRooms = 0,
  minNumberOfBathRooms = 0,
  maxNumberOfResults = Number.MAX_SAFE_INTEGER,
} = {}) => {
  const cursor = client.db('mongotest').collection('listingAndReviews').find({
    bedrooms: { $gte: minNumberOfBedRooms },
    bathrooms: { $gte: minNumberOfBathRooms },
  })
    .sort({ last_review: -1 })
    .limit(maxNumberOfResults);

  const results = await cursor.toArray();

  if (results.length > 0) {
    global.console.log(`Found listing(s) with at least ${minNumberOfBedRooms} bedrooms`);
    results.forEach((res, index) => {
      const date = new Date(res.last_review).toDateString();
      global.console.log();
      global.console.log(`${index + 1}. name ${res.name}`);
      // eslint-disable-next-line no-underscore-dangle
      global.console.log(`  _id ${res._id}`);
      global.console.log(`  bedrooms: ${res.bedrooms}`);
      global.console.log(`  bathrooms: ${res.bathrooms}`);
      global.console.log(`  most recent review date : ${date}`);
    });
  }
};

// update listing one
const updateOneListing = async (client, nameOfListing, updatedListing) => {
  const results = await client.db('mongotest').collection('listingAndReviews').updateOne(
    { name: nameOfListing },
    { $set: updatedListing },
  );

  global.console.log(`${results.matchedCount} document(s) matched the query criteria`);
  global.console.log(`${results.modifiedCount} document(s) was/were updated`);
};

// upsert listing
// if listing exists the rule wil update listing
// else will create new listing with current options

const upsertOneListing = async (client, nameOfListing, updatedListing) => {
  const results = await client.db('mongotest').collection('listingAndReviews').updateOne(
    { name: nameOfListing },
    { $set: updatedListing },
    { upsert: true },
  );

  global.console.log(`${results.matchedCount} docs mathed the query criteria`);

  if (results.upsertedCount > 0) {
    // eslint-disable-next-line no-underscore-dangle
    global.console.log(`One document was inserted with the id ${results.upsertedId._id}`);
  } else {
    global.console.log(`${results.modifiedCount} docs was/were updated`);
  }
};

// update many listings
const updateAllListingsToHavePropertyType = async (client) => {
  const result = await client.db('mongotest').collection('listingAndReviews')
    .updateMany({ propert_type: { $exists: false } },
      { $set: { propert_type: 'Unknown' } });
  global.console.log(`${result.matchedCount} docs matched the query criteria`);
  global.console.log(`${result.modifiedCount} docs was/were updated`);
};


// delete one listing
const deleteOneListing = async (client, nameOfListing) => {
  const result = await client.db('mongotest').collection('listingAndReviews')
    .deleteOne({ name: nameOfListing });
  global.console.log(`${result.deletedCount} docs was/were deleted`);
};

const deleteManyListings = async (client, date) => {
  const result = await client.db('mongotest').collection('listingAndReviews')
    .deleteMany({ last_scraped: { $lt: date } });
  global.console.log(`${result.deletedCount} docs was/were deleted`);
};
