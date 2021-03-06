const http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if(req.url==="/welcome"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        //res.writeHead(200).write();
        res.end("Welcome to Dominos!");
    }
    else if(req.url==="/contact"){
        const obj={
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        };
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        //res.writeHead(200).write(JSON.stringify(obj));
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404).end("page not found");
    }
}

httpServer.listen(8081);
module.exports = httpServer;
