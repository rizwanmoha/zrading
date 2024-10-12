const fs = require("fs");
const path = require("path");
const cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const usersRoutes = require("./routes/users-routes");
const copyRoutes = require("./routes/copy-routes");
const traderRoutes = require("./routes/traders-routes");
// const postDocRoutes = require('./routes/postDoc-routes');
const HttpError = require("./models/http-error");
require("dotenv").config();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Trading API",
      version: "1.0.0",
      description: "A Express Library API for all traders",
    },
    servers: [
      {
        url: "https://zrading-backend.onrender.com",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/apiDocs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(morgan("combined"));
app.use(cors());

app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use(express.static("public"));
app.use("/api/users", usersRoutes);
app.use("/api/copy", copyRoutes);
app.use("/api/trader", traderRoutes);
// app.use('/api/places', placesRoutes);
// app.use('/api/postDoc', postDocRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.image) {
    fs.unlink(req.image.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});
// const usersController = require('./controllers/users-controllers');
// const data1 = await usersController.getOrders()
// console.log(data1);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const mongoKey = process.env.REACT_APP_MONGODB_KEY;
mongoose
  .connect(mongoKey)
  .then(() => {
    console.log("connected");
    app.listen(8081);
  })
  .catch((err) => {
    console.log(err);
  });
