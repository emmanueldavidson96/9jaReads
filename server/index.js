const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

//middlewares
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world!")
})

//Mongo Connection

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://emmanueldavidson524:dunamis1996@9jareads.tp6ud3h.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const books_collection = client.db("BookInventory").collection("books");

    //insert a book into the db: post method
    app.post("/upload-book", async(req, res) => {
        const data = req.body;
        const result = await books_collection.insertOne(data)
        res.send(result)
    })
    //Get all books from the database
    app.get("/all-books", async(req, res) => {
        const books = books_collection.find();
        const result = await books.toArray()
        res.send(result) 
    })
    //Update a book data: patch or update methods
    app.patch("/book/:id", async(req, res) => {
        const id = req.params.id
        const update_book_data = req.body;
        const filter = {_id:new ObjectId(id)}
        const updateDoc = {
            $set: {
                ...update_book_data
            },
        }
        const options = {
            upsert:true
        }
        //update
        const result = await books_collection.updateOne(filter, updateDoc, options)
        res.send(result)
    })

    //Delete a book
    app.delete("/book/:id", async(req, res)=>{
        const id = req.params.id;
        const filter = {_id:new ObjectId(id)}
        const result = await books_collection.deleteOne(filter)
        res.send(result);
    })

    //Find by Category
    app.get("/all-book", async(req, res) => {
        let query = {};
        if(req.query?.category){
            query = {category:req.query.category}
        }
        const result = await books_collection.find(query).toArray();
        res.send(result)
    })

    //To get single book data
    app.get("/book/:id", async(req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        const result = await books_collection.findOne(filter);
        res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

 
app.listen(port, () => {
    console.log(`App runs at port ${port}`)
})