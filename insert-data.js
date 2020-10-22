const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://modern-sapien:RotS1087@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "workout";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(workout);

         // Use the collection "people"
         const col = db.collection("workouts");

         // Construct a document                                                                                                                                                              
         let workoutSeed = [
            {
              day: new Date().setDate(new Date().getDate()-10),
              exercises: [
                {
                  type: "resistance",
                  name: "Bicep Curl",
                  duration: 20,
                  weight: 100,
                  reps: 10,
                  sets: 4
                }
              ]
            },
            {
              day: new Date().setDate(new Date().getDate()-9),
              exercises: [
                {
                  type: "resistance",
                  name: "Lateral Pull",
                  duration: 20,
                  weight: 300,
                  reps: 10,
                  sets: 4
                }
              ]
            },
            {
              day: new Date().setDate(new Date().getDate()-8),
              exercises: [
                {
                  type: "resistance",
                  name: "Push Press",
                  duration: 25,
                  weight: 185,
                  reps: 8,
                  sets: 4
                }
              ]
            },
            {
              day: new Date().setDate(new Date().getDate()-7),
              exercises: [
                {
                  type: "cardio",
                  name: "Running",
                  duration: 25,
                  distance: 4
                }
              ]
            },
            {
              day: new Date().setDate(new Date().getDate()-6),
              exercises: [
                {
                  type: "resistance",
                  name: "Bench Press",
                  duration: 20,
                  weight: 285,
                  reps: 10,
                  sets: 4
                }
              ]
            },
            {
              day: new Date().setDate(new Date().getDate()-5),
              exercises: [
                {
                  type: "resistance",
                  name: "Bench Press",
                  duration: 20,
                  weight: 300,
                  reps: 10,
                  sets: 4
                }
              ]
            },
            {
              day: new Date(new Date().setDate(new Date().getDate() - 4)),
              exercises: [
                {
                  type: "resistance",
                  name: "Quad Press",
                  duration: 30,
                  weight: 300,
                  reps: 10,
                  sets: 4
                }
              ]
            },
            {
              day: new Date(new Date().setDate(new Date().getDate() - 3)),
              exercises: [
                {
                  type: "resistance",
                  name: "Bench Press",
                  duration: 20,
                  weight: 300,
                  reps: 10,
                  sets: 4
                }
              ]
            },
            {
              day: new Date(new Date().setDate(new Date().getDate() - 2)),
              exercises: [
                {
                  type: "resistance",
                  name: "Military Press",
                  duration: 20,
                  weight: 300,
                  reps: 10,
                  sets: 4
                }
              ]
            }
          ];

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(workoutSeed);
         // Find one document
        //  const myDoc = await col.findOne();
        //  // Print to the console
        //  console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);