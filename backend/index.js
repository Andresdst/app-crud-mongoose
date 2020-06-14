const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

const app = express();

//settings
app.set("port", 3000);

//middlewares
app.use(morgan("dev"));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  //inf de la peticion , inf del archivo , la funcion que se ejecutara
  filename(req, file, cb) {
    //error , nombre de archivo +  su extension
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
//en el front se declara el input de tipo file como image
app.use(multer({ storage }).single("image"));
//urlencoded para interpretar lo que venga desde formulario como JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//start server
app.listen(app.get("port"), () => {
  console.log("server on port: " + app.get("port"));
});
