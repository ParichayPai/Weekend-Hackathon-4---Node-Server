const http = require("http");

const httpServer = http.createServer(handleServer);

const contacts = [
  {
    phone: "18602100000",
    email: "guestcaredominos@jublfood.com"
  }
];

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.writeHead(200).write("Welcome to Dominos!");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200).write(JSON.stringify(contacts));
    res.end();
  } else {
    res.writeHead(400);
    res.end();
  }
}

httpServer.listen(8081);
module.exports = httpServer;
