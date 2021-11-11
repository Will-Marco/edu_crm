const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes");
const postgres = require("./modules/postgres");
const databaseMiddleware = require("./middlewares/databaseMiddleware");

async function server(mode) {
  try {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server ready at ${process.env.PORT || 3000}`);
    });

    const db = await postgres();
    await databaseMiddleware(db, app);

    app.use(express.json(mode));
    app.use(express.urlencoded({ extended: true }));

    if (mode == "dev") {
      app.use(morgan("dev"));
    }
  } catch (error) {
    console.log("SERVER ERROR:", error);
  } finally {
    routes(app);
  }
}

module.exports = server;
