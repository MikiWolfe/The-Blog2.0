const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database/db");

// const routes = require("/routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

const { authMiddlewear } = require("./utils/auth");

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }
  
  app.get("*",(req,res) => { 
      res.sendFile(path.join(__dirname + "/client/build/index.html")) 
  })  
  
  // Listening 
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on http://localhost:${PORT}`));
  });
  
  // 404 Error
  app.use((req, res, next) => {
    res.status(404).send('Error 404!')
  });


