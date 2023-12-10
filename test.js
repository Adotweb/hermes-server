const { MongoClient } = require("mongodb");
require("dotenv").config()
// Replace the uri string with your connection string.
const uri = process.env.MURI;
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('hermes');
    const movies = database.collection('subscriptions');
    // Query for a movie that has the title 'Back to the Future'
    const movie = await movies.findOne();
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
