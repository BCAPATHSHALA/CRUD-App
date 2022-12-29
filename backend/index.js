const express = require("express");
const app = express();
app.use(express.json());

const dotEnv = require("dotenv");
dotEnv.config({ path: "./.env" });
const PORT = process.env.PORT;

const dbConnection = require("./dbConnection");
dbConnection();

const globalMW = require("./middleware/globalMW");
app.use(globalMW);

const mainRouter = require("./Routes/index");
app.use("/api", mainRouter);

app.listen(PORT, () => {
  console.log(`Server up and running on the port: ${PORT}`);
});
