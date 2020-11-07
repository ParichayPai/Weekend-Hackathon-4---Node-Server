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
    res.statusMessage = "200";
    res.write("Welcome to Dominos!");
    res.end();
    // return;
  } else if (req.url === "/contact") {
    res.statusMessage = "200";
    res.write(JSON.stringify(contacts));
    res.end();
    // return;
  } else {
    res.statusMessage = "400";
    console.log(res.statusMessage);
    res.end();
    // return;
  }
}

httpServer.listen(8081);
