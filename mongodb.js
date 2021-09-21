//CRUD create read update delete
const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    db.collection("users")
      .deleteOne({
        name: "Jeffery",
      })
      .then((res) => {
        console.log("success msg: ", res);
      })
      .catch((err) => {
        console.log("error msg: ", err);
      });
  }
);
