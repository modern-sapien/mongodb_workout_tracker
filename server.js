const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose middleware
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/architecture",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

app.get("/api/config", (req,res)    =>  {   
    res.json({
        success: true,
    });
});

app.listen(PORT, () =>  {
    console.log(`App is running on http://localhost${PORT}`)
});