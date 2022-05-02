var abc=require("./Q14greet.js");
var ht=require("http");

function requ(req,res){

        res.writeHead(200,{'Context-Type' : 'text/plain'});
        res.write(abc.greet());
        res.end();
}

var ser=ht.createServer(requ);
ser.listen(3000, "127.0.0.1");
console.log("Running server");