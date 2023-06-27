const http = require("http");

// the routes const is now requestHandler!!!
const routes = require("./routes");
console.log(routes.someText)  

const server = http.createServer(routes.handler);
server.listen(3000);
 