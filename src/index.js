var http = require("http");

const httpServer = http.createServer(handleServer);

const contacts = [
  {
    phone: "18602100000",
    email: "guestcaredominos@jublfood.com"
  }
];

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.status(200).send("Welcome to Dominos!");
    return;
  } else if (req.url === "/contact") {
    res.status(200).send(contacts);
    return;
  } else {
    res.status(400);
  }
}

httpServer.listen(8081);
module.exports = httpServer;
