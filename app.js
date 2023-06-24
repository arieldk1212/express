const http = require("http");
const fs = require("fs");
const { parse } = require("path");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // quit proccess when create server func starts
  // process.exit();
  // res.setHeader("Content-Type", "text/html");
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write("<html><head>Enter Message</head</html>");
    res.write('<html><form action="/message" method="POST"><input type="text" name="message"></input></form></html>')
    // can't call 'res.write()' after res.end()
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
      console.log(chunk)
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody)
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end()
  }
});

server.listen(3000);
 