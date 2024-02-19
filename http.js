const http= require('http')

const server = http.createServer(function(req,res){
    if(req == '/'){
        res.write('<h1> Hello Js. </h1>');
    }
    res.end();
})

server.listen(5002)

console.log('I am create a server port 5001');