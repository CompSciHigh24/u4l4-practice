const express = require("express");
const app = express();

// Task 1: Create the public and views folders and move the correct files into place


// Task 2: Set up the static file middleware


// Task 3: Set the view engine to EJS. 


// Task 4: Set up a route handler for / that...

  // ...creates an object called post with the following properties
  // "username" (string)
  // "comment" (string)
  // "pfpURL" (string)
  // "postURL" (string)
  

  // ...and renders post.ejs with this data object

// Task 5: CONTINUED IN POST.EJS


app.listen(3000, ()=>{
  console.log("Server is running")
});
