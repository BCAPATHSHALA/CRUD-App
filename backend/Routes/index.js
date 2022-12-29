const routes = require("express").Router();

const UserRoutes = require("./routes");
routes.use("/routes", UserRoutes);

module.exports = routes;
