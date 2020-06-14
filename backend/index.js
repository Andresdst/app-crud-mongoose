const express = require("express");

const app = express();

//settings
app.set("port", 3000);

//start server
app.listen(app.get("port"), () => {
  console.log("server on port: " + app.get("port"));
});
