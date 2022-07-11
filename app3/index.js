const express = require("express");
const mongoose = require("mongoose");
const path = require('path');


const app = express();
app.use(express.json());
app.listen(8181, () => {
    console.log("App start on port 8181"); 
});



mongoose
  .connect("mongodb://admin:password@mongodb:27017", { useNewUrlParser: true })
  .then(() => console.log("Mongo DB connected !!!"))
  .catch((err) => console.error(err.message));

const Item = require("./models/Item");


app.post("/items/add", (req, res) => {
  const newItem = new Item({ name: req.body.name });
  newItem.save()
  .then(() => res.redirect("/")
  .catch((err)=>{
    console.error(err.message); 
    res.send(err.message)
    })
  );
});
app.get("/", (req, res) => {
  Item.find()
    .then((items) => {
      const homePath = path.resolve(__dirname, "views", "index.ejs");
      res.render(homePath, { items });
    })
    .catch((err) => {
      console.error(err.message);
      res.status(404).json({ err: "Items not found !!!" });
    });
});


