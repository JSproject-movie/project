const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const auth = require("json-server-auth");
const db = require("./db.json");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
//將 JSON-Server 和 Router 的數據同步
server.db = router.db;

//auth 和 router 執行順序需要對調，先執行 auth 再執行 router
server.use(auth);
server.use(router);

server.listen(port);
