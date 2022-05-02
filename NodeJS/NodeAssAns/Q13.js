var http = require("http");
var server=http.createServer(sayHello);
server.listen(3000,'127.0.0.1')
function sayHello(req,res){
    res.writeHead(200,{'Content-Length':'content_length','Context-Type' : 'text/plain'});
    res.write("Welcome to html")
    res.end();
}
