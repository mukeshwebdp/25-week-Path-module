const http = require('http')

const server= http.createServer(function(req,res){
    if(req.url == '/'){
        res.write('<h1> I am Happy to Learn full stack web Development from PW Skills! </h1>')
    }
    res.end()
});

server.listen(5000)
console.log('The HTTP server is running on prot 5000');