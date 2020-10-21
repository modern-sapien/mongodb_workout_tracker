const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

const ResistanceController = require("./controllers/resistanceController")

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose middleware
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/architecture",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

// mongoose connected successfully 
const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
  });

// Logs if there is an error on connection
connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
    });

app.get("/api/config", (req,res)    =>  {   
    res.json({
        success: true,
    });
});

app.use("/api/resistance", ResistanceController);

app.listen(PORT, () =>  {
    console.log(`App is running on http://localhost${PORT}`)
});