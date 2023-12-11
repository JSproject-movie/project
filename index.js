const cors = require("cors");
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const auth = require("json-server-auth");
const db = require("./db.json");

const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080;
//  chose port from here like 8080, 3001

server.use(cors());
server.use(middlewares);

//將 JSON-Server 和 Router 的數據同步
server.db = router.db;

server.use(auth);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

// server.listen(port);

module.exports = server;
