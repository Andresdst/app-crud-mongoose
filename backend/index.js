console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") require("dotenv").config(); //solo para desarrollo
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

//inicializaciones
const app = express();
require("./database");
//settings
app.set("port", process.env.PORT || 3000);

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
app.use(cors());

//routes
app.use("/api/books", require("./routes/books"));

//static files
app.use(express.static(path.join(__dirname, "public"))); //leer carpeta public para archivos staticos

//start server
app.listen(app.get("port"), () => {
  console.log("server on port: " + app.get("port"));
});
