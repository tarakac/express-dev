import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("✅ Successfully connected to MongoDB Atlas!");
} catch(err) {
  console.error("❌ Error connecting to MongoDB:", err);
}

const db = client.db("employees");

export default db;